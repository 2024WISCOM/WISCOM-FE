import React, { useState } from 'react';
import * as S from './Slide.style'; // 스타일 파일 임포트
import WorkItem from './WorkItem';

import work1 from '../../assets/img/work_1.png';
import work2 from '../../assets/img/work_2.png';
import work3 from '../../assets/img/work_3.png';
import work4 from '../../assets/img/work_4.png';
import work5 from '../../assets/img/work_5.png';
import work6 from '../../assets/img/work_6.png';
import work7 from '../../assets/img/work_7.png';
import work8 from '../../assets/img/work_8.png';
import work9 from '../../assets/img/work_9.png';
import work10 from '../../assets/img/work_10.png';

const items = [
  { src: work1, title: '귀여운게다야' },
  { src: work2, title: '사랑한다' },
  { src: work3, title: '종강해요' },
  { src: work4, title: '운이최고' },
  { src: work5, title: '교수님절교해요' },
  { src: work6, title: '별로안감사합니다' },
  { src: work7, title: 'Iloveyou' },
  { src: work8, title: '님은짱이신것같아요' },
  { src: work9, title: '지금뭐하는건가' },
  { src: work10, title: '저도원숭이에요' },
];

export default function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getIndex = (offset) => {
    return (currentIndex + offset + items.length) % items.length;
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <S.CarouselContainer>
      <S.ArrowLeft onClick={prevSlide}>&#10094;</S.ArrowLeft>
      <S.SlideWrapper>
        <S.Slide>
          <WorkItem
            image={items[getIndex(-3)].src}
            title={items[getIndex(-3)].title}
            index={getIndex(-3) + 1}
          />
        </S.Slide>
        <S.Slide>
          <WorkItem
            image={items[getIndex(-2)].src}
            title={items[getIndex(-2)].title}
            index={getIndex(-2) + 1}
          />
        </S.Slide>
        <S.Slide>
          <WorkItem
            image={items[getIndex(-1)].src}
            title={items[getIndex(-1)].title}
            index={getIndex(-1) + 1}
          />
        </S.Slide>
        <S.Slide>
          <WorkItem
            image={items[currentIndex].src}
            title={items[currentIndex].title}
            index={currentIndex + 1}
          />
        </S.Slide>
        <S.Slide>
          <WorkItem
            image={items[getIndex(1)].src}
            title={items[getIndex(1)].title}
            index={getIndex(1) + 1}
          />
        </S.Slide>
        <S.Slide>
          <WorkItem
            image={items[getIndex(2)].src}
            title={items[getIndex(2)].title}
            index={getIndex(2) + 1}
          />
        </S.Slide>
        <S.Slide>
          <WorkItem
            image={items[getIndex(3)].src}
            title={items[getIndex(3)].title}
            index={getIndex(3) + 1}
          />
        </S.Slide>
      </S.SlideWrapper>
      <S.ArrowRight onClick={nextSlide}>&#10095;</S.ArrowRight>
    </S.CarouselContainer>
  );
}
