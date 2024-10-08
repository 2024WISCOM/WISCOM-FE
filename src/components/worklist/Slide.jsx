import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';
import * as S from './Slide.style';
import WorkItem from './WorkItem';

import left from '../../assets/img/worklist/left_button.png';
import right from '../../assets/img/worklist/right_button.png';
import Nav from './Nav';

const Slide = () => {
  const ref = React.useRef(StackedCarousel);

  const [maxVisibleSlide, setMaxVisibleSlide] = useState(7);
  const [customScales, setCustomScales] = useState([1, 0.85, 0.7, 0.6, 0.5]);
  const [slideWidth, setSlideWidth] = useState(800);
  const [data, setData] = useState([]);
  const [type, setType] = useState('ALL');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://2024wiscom-backend.store/api/works/category?type=${type}`,
        );
        console.log(
          `https://2024wiscom-backend.store/api/works/category?type=${type}`,
        );
        const worksData = response.data.data.map((item) => ({
          id: item.id,
          image: item.imageUrl,
          title: item.title,
          team: item.teamName,
          type: type,
        }));
        setData(worksData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setMaxVisibleSlide(3);
        setCustomScales([1, 0.85, 0.7]);
        setSlideWidth(330);
      } else if (window.innerWidth <= 1280) {
        if (data.length >= 3) {
          setMaxVisibleSlide(5);
          setCustomScales([1, 0.85, 0.7, 0.6]);
        } else {
          setMaxVisibleSlide(3);
          setCustomScales([1, 0.85, 0.7]);
        }
      } else {
        if (data.length >= 5) {
          setMaxVisibleSlide(7);
          setCustomScales([1, 0.85, 0.7, 0.6, 0.5]);
          setSlideWidth(800);
        } else if (data.length >= 3) {
          setMaxVisibleSlide(5);
          setCustomScales([1, 0.85, 0.7, 0.6]);
        } else {
          setMaxVisibleSlide(3);
          setCustomScales([1, 0.85, 0.7]);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [type, data.length]);

  // 오른쪽 화살표 자동 클릭 기능
  useEffect(() => {
    const autoClickNext = () => {
      if (ref.current) {
        for (let i = 0; i < 10; i++) {
          setTimeout(() => {
            ref.current.goNext();
          }, i * 20);
        }
      }
    };

    autoClickNext();
  }, [data]); // data가 로드된 후에 자동으로 동작

  const minRequiredItems = Math.ceil((maxVisibleSlide + 1) / 2);

  return (
    <S.Page>
      <Nav onChangeType={setType} />
      <S.Container dataLength={data.length}>
        <S.Button src={left} onClick={() => ref.current?.goBack()} />
        {data.length >= minRequiredItems ? (
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              const calculatedWidth =
                window.innerWidth <= 767 ? width + 200 : width;

              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={WorkItem}
                  slideWidth={slideWidth}
                  carouselWidth={calculatedWidth}
                  data={data}
                  maxVisibleSlide={maxVisibleSlide}
                  customScales={customScales}
                  transitionTime={300}
                  initialSlideIndex={3}
                />
              );
            }}
          />
        ) : (
          // data가 부족할 때 하나의 WorkItem만 렌더링
          data.length > 0 && (
            <WorkItem
              data={data}
              dataIndex={0} // 첫 번째 항목을 사용
              isCenterSlide={true} // 단일 항목이므로 중앙 슬라이드로 취급
              swipeTo={() => {}} // 슬라이드 기능은 사용하지 않음
              slideIndex={0}
            />
          )
        )}
        <S.Button src={right} onClick={() => ref.current?.goNext()} />
      </S.Container>
    </S.Page>
  );
};

export default Slide;
