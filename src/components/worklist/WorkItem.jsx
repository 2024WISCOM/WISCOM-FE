import React from 'react';
import * as W from './WorkItem.style';
import { useNavigate } from 'react-router-dom';

const WorkItem = React.memo(function ({
  data,
  dataIndex,
  isCenterSlide,
  swipeTo,
  slideIndex,
}) {
  const navigate = useNavigate();

  if (!data || !data[dataIndex]) {
    return null;
  }

  const { id, image, title, team, type } = data[dataIndex];

  const handleItemClick = () => {
    if (isCenterSlide) {
      navigate(`/work-detail`, { state: { category: type, id } });
      console.log(`type: ${type}, id: ${id}`);
    }
  };

  return (
    <W.Container onClick={handleItemClick}>
      <div>
        <W.CardOverlay
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <W.Card>
        <img alt={title} src={image} />
        {isCenterSlide && <W.Title>{title}</W.Title>}
        {isCenterSlide && <W.Team>{team}</W.Team>}
      </W.Card>
    </W.Container>
  );
});

export default WorkItem;
