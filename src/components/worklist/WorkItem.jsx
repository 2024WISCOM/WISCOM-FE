import React from 'react';
import * as W from './WorkItem.style';

const WorkItem = React.memo(function ({
  data,
  dataIndex,
  isCenterSlide,
  swipeTo,
  slideIndex,
}) {
  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;

  return (
    <W.Container>
      <div>
        <W.CardOverlay
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <W.Card>
        <img alt="j" src={coverImage} />
        {isCenterSlide && <p>{text}</p>}
      </W.Card>
    </W.Container>
  );
});

export default WorkItem; // 기본 내보내기 추가
