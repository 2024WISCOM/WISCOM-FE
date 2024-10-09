import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import cdCaseImage from '../assets/img/detail_cd_case.svg';
import RightButton from '../components/workdetail/button/RightButton';
import CdCase from '../components/workdetail/cdcase/CdCase';
import LeftButton from '../components/workdetail/button/LeftButton';
import WorkIntroduce from '../components/workdetail/mobile/WorkIntroduce';

import * as W from '../components/workdetail/WorkDetail.style';

export default function WorkDetail() {
  const [data, setData] = useState(null);
  const [isEnoughSpace, setIsEnoughSpace] = useState(false);
  const [isMobile, setIsMobile] = useState(false); 
  const [imageLoaded, setImageLoaded] = useState(false); 
  const imageContainerRef = useRef(null);
  const navigate = useNavigate();

  const location = useLocation();
  const { category, id } = location.state || { category: 'big_data', id: 2 };
  console.log(category);

  // API 데이터 fetch
  const fetchWorkDetail = async (category, id) => {
    try {
      const response = await axios.get(
        `https://2024wiscom-backend.store/api/works/category/${category}/${id}`,
      );
      setData(response.data.data);
    } catch (error) {
      console.error('데이터를 가져오는데 에러가 발생했습니다:', error);
    }
  };

  useEffect(() => {
    if (category && id) fetchWorkDetail(category, id);
  }, [category, id]);

  useEffect(() => {
    const handleResize = () => {
      if (imageContainerRef.current) {
        const spaceBelow =
          window.innerHeight - imageContainerRef.current.getBoundingClientRect().bottom;
  
        if (window.innerWidth > 1024) {
          // 데스크탑 모드에서는 충분한 공간 여부가 있는지 호가인 
          setIsEnoughSpace(spaceBelow > 120); 
        } else {
          // 모바일 모드에서는 false로 기본 설정 
          setIsEnoughSpace(false);
        }
      }
  
      setIsMobile(window.innerWidth <= 1024); // 모바일 여부 설정
    };
  
    const image = new Image();
    image.src = cdCaseImage;
  
    image.onload = () => {
      setImageLoaded(true); 
  
      // 이미지 렌더링을 위하여 100ms 지연 
      setTimeout(() => {
        handleResize(); // 이미지 로드 후 handleResize 호출
      }, 100);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 이미지가 로드되기 전에는 로딩 상태 표시
  if (!imageLoaded) {
    return <div>Loading...</div>;
  }

  // 이전 버튼 클릭 핸들러
  const handlePrevClick = (shouldScroll = true) => {
    if (data && data.prev) {
      if (shouldScroll) {
        window.scrollTo(0, 0); // 스크롤 동작
      }
      navigate(`/work-detail`, { state: { category, id: data.prev } }); // 페이지 이동
    } else {
      console.error('이전 항목을 찾을 수 없습니다.');
    }
  };

  // 다음 버튼 클릭 핸들러
  const handleNextClick = (shouldScroll = true) => {
    if (data && data.next) {
      if (shouldScroll) {
        window.scrollTo(0, 0); // 스크롤 동작
      }
      navigate(`/work-detail`, { state: { category, id: data.next } }); // 페이지 이동
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isMobile ? ( // 모바일 화면일 때
        <W.MobileDetailContainer>
          <WorkIntroduce data={data} />
          <W.ButtonColumnContainer>
            <LeftButton text={'PREV'} onClick={handlePrevClick} />
            <RightButton text={'NEXT'} onClick={handleNextClick} />
          </W.ButtonColumnContainer>
        </W.MobileDetailContainer>
      ) : (
        <>
          {isEnoughSpace ? ( // 충분한 공간이 있을 때
            <W.WorkDetailContainer>
              <W.CdCase ref={imageContainerRef}>
                <CdCase cdCaseImage={cdCaseImage} data={data} />
              </W.CdCase>
              <W.ButtonColumnContainer>
                <LeftButton text={'PREV'} onClick={handlePrevClick} />
                <RightButton text={'NEXT'} onClick={handleNextClick} />
              </W.ButtonColumnContainer>
            </W.WorkDetailContainer>
          ) : ( // 충분한 공간이 없을 때
            <W.WorkDetaileRowContainer>
              <W.ButtonRowContainer>
                <LeftButton onClick={() => handlePrevClick(false)} />
                <W.CdCase ref={imageContainerRef}>
                  <CdCase cdCaseImage={cdCaseImage} data={data} />
                </W.CdCase>
                <RightButton onClick={() => handleNextClick(false)} />
              </W.ButtonRowContainer>
            </W.WorkDetaileRowContainer>
          )}
        </>
      )}
    </>
  );
}
