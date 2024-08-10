import React from 'react';
import * as S from './Slide.style';
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
  return (
    <S.Container>
      {items.map((item, index) => (
        <WorkItem key={index} image={item.src} title={item.title} />
      ))}
    </S.Container>
  );
}
