import React, { useEffect, useRef, useState } from 'react';
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
  const titleRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  // overflow 여부 체크
  useEffect(() => {
    if (titleRef.current) {
      setIsOverflow(
        titleRef.current.scrollWidth > titleRef.current.clientWidth,
      );
    }
  }, [slideIndex]); // dataIndex가 변경될 때마다 확인

  // 슬라이드가 변경될 때마다 애니메이션을 재시작하기 위해 key를 변경
  const titleKey = `${dataIndex}-${isOverflow}`; // 고유 키 생성

  if (!data || !data[dataIndex]) {
    return null;
  }

  const { id, image, title, team, type } = data[dataIndex];

  const handleItemClick = () => {
    if (isCenterSlide) {
      navigate(`/${id}`, { state: { category: type } });
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
        <W.titleContainer>
          {isCenterSlide && (
            <W.Title key={titleKey} ref={titleRef} isOverflow={isOverflow}>
              {title}
            </W.Title>
          )}
        </W.titleContainer>
        {isCenterSlide && <W.Team>{team}</W.Team>}
      </W.Card>
    </W.Container>
  );
});

export default WorkItem;
