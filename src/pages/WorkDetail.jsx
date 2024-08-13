import React, { useState, useEffect, useRef } from 'react';
import cdCaseImage from '../assets/img/detail_cd_case.svg';
import RightButton from '../components/workdetail/button/RightButton';
import CdCase from '../components/workdetail/cdcase/CdCase';
import LeftButton from '../components/workdetail/button/LeftButton';
import WorkIntroduce from '../components/workdetail/mobile/WorkIntroduce';

import * as W from '../components/workdetail/WorkDetail.style';

export default function WorkDetail() {
  const [isEnoughSpace, setIsEnoughSpace] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const imageContainerRef = useRef(null);

  const mokdata = {
    id: 1,
    title: '폭신폭신',
    shortDescription: '한줄 소개 글입니다.',
    deployUrl: 'http://example.com/deploy1',
    teamName: '팀 이름 1',
    instagramUrl: 'http://instagram.com/team1',
    githubUrl: 'http://github.com/team1',
    description:
      "최근에 유명 유튜버의 안타까운 데이트 폭력 소식이 있었습니다. 데이트 폭력은 최근 3년간 57% 증가했습니다. \n데이트 폭력 신고를 위해서는 증거를 남기는 것이 가장 중요합니다. 그러나 피해자는 복잡한 신고 절차, 보복에 대한 두려움, 또한, ‘연인 관계’라는 특수성을 반영한 법의 부재로 인해서 신고를 주저하고 있습니다.\n따라서 저희는 증거를 꾸준히 기록하여 신고 절차를 간소화할 수 있도록 '데이트 폭력 증거 기록 서비스' 폭신을 개발했습니다.\n폭신을 통해 교제 폭력에 많은 관심을 갖고, 교제폭력에 대한 법안이 마련되어서, 궁극적으로는 데이트 폭력이 더 감소하길 기대해볼 수 있을 것입니다.",
    developers: [
      {
        name: '김미주',
        role: 'Front-end',
      },
      {
        name: '김은서',
        role: 'Front-end, Back-end',
      },
      {
        name: '남시윤',
        role: 'Front-end',
      },
      {
        name: '최유리',
        role: 'Front-end',
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      if (imageContainerRef.current) {
        const spaceBelow =
          window.innerHeight -
          imageContainerRef.current.getBoundingClientRect().bottom;
        setIsEnoughSpace(spaceBelow > 120);
      }
      setIsMobile(window.innerWidth < 1024);
    };

    const image = new Image();
    image.onload = handleResize;
    image.src = cdCaseImage;

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <W.MobileDetailContainer>
          <WorkIntroduce data={mokdata} />
          <W.ButtonColumnContainer>
            <LeftButton text={'PREV'} />
            <RightButton text={'NEXT'} />
          </W.ButtonColumnContainer>
        </W.MobileDetailContainer>
      ) : (
        <>
          {isEnoughSpace ? (
            <W.WorkDetailContainer>
              <W.CdCase ref={imageContainerRef}>
                <CdCase cdCaseImage={cdCaseImage} data={mokdata} />
              </W.CdCase>
              <W.ButtonColumnContainer>
                <LeftButton text={'PREV'} />
                <RightButton text={'NEXT'} />
              </W.ButtonColumnContainer>
            </W.WorkDetailContainer>
          ) : (
            <W.WorkDetaileRowContainer>
              <W.ButtonRowContainer>
                <LeftButton />
                <W.CdCase ref={imageContainerRef}>
                  <CdCase cdCaseImage={cdCaseImage} data={mokdata} />
                </W.CdCase>
                <RightButton />
              </W.ButtonRowContainer>
            </W.WorkDetaileRowContainer>
          )}
        </>
      )}
    </>
  );
}
