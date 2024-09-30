import React from 'react';
import * as W from './WorkItem.style';

const WorkItem = React.memo(function ({
  data,
  dataIndex,
  isCenterSlide,
  swipeTo,
  slideIndex,
}) {
  if (!data || !data[dataIndex]) {
    return null;
  }

  const id = data[dataIndex].id;
  const coverImage = data[dataIndex].image;
  const title = data[dataIndex].title;
  const team = data[dataIndex].team;

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
        <img alt={title} src={coverImage} />
        {isCenterSlide && <W.Title>{title}</W.Title>}
        {isCenterSlide && <W.Team>{team}</W.Team>}
      </W.Card>
    </W.Container>
  );
});

export default WorkItem;
