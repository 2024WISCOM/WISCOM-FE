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
        setMaxVisibleSlide(5);
        setCustomScales([1, 0.85, 0.7, 0.6]);
      } else {
        setMaxVisibleSlide(7);
        setCustomScales([1, 0.85, 0.7, 0.6, 0.5]);
        setSlideWidth(800);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [type]);

  const minRequiredItems = Math.ceil((maxVisibleSlide + 1) / 2);

  return (
    <S.Page>
      <Nav onChangeType={setType} />
      <S.Container>
        {data.length >= minRequiredItems ? (
          <>
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
          </>
        ) : (
          <p>데이터 부족</p>
        )}
      </S.Container>
    </S.Page>
  );
};

export default Slide;
