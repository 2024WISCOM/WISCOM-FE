import styled from 'styled-components';

export const Container = styled.div`
  transition: all 300ms ease;
  cursor: pointer;
  width: 100%;
  position: relative;
  user-select: none;
`;

export const CardOverlay = styled.div`
  user-select: none;
  position: absolute;
  transition: all 300ms ease;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 800px;
    border-radius: 30px;
    margin-bottom: 20px;
    user-select: none; /* 이미지 선택 방지 */
    -webkit-user-drag: none; /* 드래그 방지 (웹킷 브라우저) */
  }

  p {
    color: white;
    text-align: center;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
