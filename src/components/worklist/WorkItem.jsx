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
  const [widthScroll, setWidthScroll] = useState(0);

  // overflow 여부 체크
  useEffect(() => {
    if (titleRef.current) {
      const currentScrollWidth = titleRef.current.scrollWidth;
      setIsOverflow(currentScrollWidth > titleRef.current.clientWidth);
      setWidthScroll(currentScrollWidth);

      // widthScroll이 업데이트된 후에 콘솔 출력
      console.log(currentScrollWidth, widthScroll);
    }
  }, [dataIndex, slideIndex, widthScroll]); // dataIndex가 변경될 때마다 확인

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
        {isCenterSlide && (
          <W.TitleContainer>
            <W.Title
              key={`${titleKey}-1`}
              ref={titleRef}
              isOverflow={isOverflow}
              widthScroll={widthScroll}
            >
              {title}
              {isOverflow && (
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {title}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              )}
            </W.Title>
          </W.TitleContainer>
        )}
        {isCenterSlide && <W.Team>{team}</W.Team>}
      </W.Card>
    </W.Container>
  );
});

export default WorkItem;
