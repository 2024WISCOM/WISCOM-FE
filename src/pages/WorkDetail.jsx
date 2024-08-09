import React, { useState, useEffect, useRef } from 'react';
import cdCaseImage from '../assets/img/detail_cd_case.svg';
import RightButton from '../components/workdetail/button/RightButton';
import CdCase from '../components/workdetail/cdcase/CdCase';
import LeftButton from '../components/workdetail/button/LeftButton';

import * as W from '../components/workdetail/WorkDetail.style';

export default function WorkDetail() {
  const [isEnoughSpace, setIsEnoughSpace] = useState(false);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (imageContainerRef.current) {
        const spaceBelow =
          window.innerHeight -
          imageContainerRef.current.getBoundingClientRect().bottom;
        setIsEnoughSpace(spaceBelow > 120);
      }
    };

    const image = new Image();
    image.onload = handleResize;
    image.src = cdCaseImage;

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isEnoughSpace ? (
        <W.CdCaseContainer>
          <W.CdCase ref={imageContainerRef}>
            <CdCase cdCaseImage={cdCaseImage} />
          </W.CdCase>
          <W.ButtonColumnContainer>
            <LeftButton text={'PREV'} />
            <RightButton text={'NEXT'} />
          </W.ButtonColumnContainer>
        </W.CdCaseContainer>
      ) : (
        <W.CdCaseRowContainer>
          <W.ButtonRowContainer>
            <LeftButton />
            <W.CdCase ref={imageContainerRef}>
              <CdCase cdCaseImage={cdCaseImage} />
            </W.CdCase>
            <RightButton />
          </W.ButtonRowContainer>
        </W.CdCaseRowContainer>
      )}
    </>
  );
}
