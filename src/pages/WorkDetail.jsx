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
  const imageContainerRef = useRef(null);
  const navigate = useNavigate();

  const location = useLocation();
  const { category, id } = location.state;
  console.log(category);

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
    fetchWorkDetail(category, id);
  }, [category, id]);

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

  const handlePrevClick = () => {
    if (data && data.prev) {
      console.log('prev');
      navigate(`/work-detail`, { state: { category, id: data.prev } });
    } else {
      console.log('prev err');
    }
  };

  const handleNextClick = () => {
    if (data && data.next) {
      navigate(`/work-detail`, { state: { category, id: data.next } });
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isMobile ? (
        <W.MobileDetailContainer>
          <WorkIntroduce data={data} />
          <W.ButtonColumnContainer>
            <LeftButton text={'PREV'} onClick={handlePrevClick} />
            <RightButton text={'NEXT'} onClick={handleNextClick} />
          </W.ButtonColumnContainer>
        </W.MobileDetailContainer>
      ) : (
        <>
          {isEnoughSpace ? (
            <W.WorkDetailContainer>
              <W.CdCase ref={imageContainerRef}>
                <CdCase cdCaseImage={cdCaseImage} data={data} />
              </W.CdCase>
              <W.ButtonColumnContainer>
                <LeftButton text={'PREV'} onClick={handlePrevClick} />
                <RightButton text={'NEXT'} onClick={handleNextClick} />
              </W.ButtonColumnContainer>
            </W.WorkDetailContainer>
          ) : (
            <W.WorkDetaileRowContainer>
              <W.ButtonRowContainer>
                <LeftButton onClick={handlePrevClick} />
                <W.CdCase ref={imageContainerRef}>
                  <CdCase cdCaseImage={cdCaseImage} data={data} />
                </W.CdCase>
                <RightButton onClick={handleNextClick} />
              </W.ButtonRowContainer>
            </W.WorkDetaileRowContainer>
          )}
        </>
      )}
    </>
  );
}
