import React, { useState, useEffect } from 'react';
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';
import * as S from './Slide.style';
import WorkItem from './WorkItem';

import left from '../../assets/img/worklist/left_button.png';
import right from '../../assets/img/worklist/right_button.png';

import work1 from '../../assets/img/works/work_1.png';
import work2 from '../../assets/img/works/work_2.png';
import work3 from '../../assets/img/works/work_3.png';
import work4 from '../../assets/img/works/work_4.png';
import work5 from '../../assets/img/works/work_5.png';
import work6 from '../../assets/img/works/work_6.png';
import work7 from '../../assets/img/works/work_7.png';
import work8 from '../../assets/img/works/work_8.png';
import work9 from '../../assets/img/works/work_9.png';
import work10 from '../../assets/img/works/work_10.png';

const data = [
  { image: work1, text: '귀여운게다야' },
  { image: work2, text: '사랑한다' },
  { image: work3, text: '종강해요' },
  { image: work4, text: '운이최고' },
  { image: work5, text: '교수님절교해요' },
  { image: work6, text: '별로안감사합니다' },
  { image: work7, text: 'Iloveyou' },
  { image: work8, text: '님은짱이신것같아요' },
  { image: work9, text: '지금뭐하는건가' },
  { image: work10, text: '저도원숭이에요' },
];

const Slide = () => {
  const ref = React.useRef(StackedCarousel);

  const [maxVisibleSlide, setMaxVisibleSlide] = useState(7);
  const [customScales, setCustomScales] = useState([1, 0.85, 0.7, 0.6, 0.5]);
  const [slideWidth, setSlideWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setMaxVisibleSlide(3);
        setCustomScales([1, 0.85, 0.7]);
        setSlideWidth(330);
      } else if (window.innerWidth <= 1280) {
        setMaxVisibleSlide(5);
        setCustomScales([1, 0.85, 0.7, 0.6]);
      } else {
        setMaxVisibleSlide(7);
        setCustomScales([1, 0.85, 0.7, 0.6, 0.5]);
        setSlideWidth(800);
      }
    };

    handleResize(); // 초기 로드 시 한 번 호출
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Page>
      <S.Container>
        <S.Button src={left} onClick={() => ref.current?.goBack()} />
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
              />
            );
          }}
        />
        <S.Button src={right} onClick={() => ref.current?.goNext()} />
      </S.Container>
    </S.Page>
  );
};

export default Slide;
