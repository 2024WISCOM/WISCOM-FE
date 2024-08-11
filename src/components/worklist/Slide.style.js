import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Slide = styled.div`
  box-sizing: border-box;
  text-align: center;

  &:nth-child(1) {
    transform: translateX(230%) scale(0.6);
  }

  &:nth-child(2) {
    transform: translateX(150%) scale(0.7);
  }

  &:nth-child(3) {
    transform: translateX(70%) scale(0.8);
  }

  &:nth-child(4) {
    transform: scale(1); /* 가운데 슬라이드를 약간 확대 */
  }

  &:nth-child(5) {
    transform: translateX(-70%) scale(0.8);
    z-index: -1;
  }

  &:nth-child(6) {
    transform: translateX(-150%) scale(0.7);
    z-index: -2;
  }

  &:nth-child(7) {
    transform: translateX(-230%) scale(0.6);
    z-index: -3;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  z-index: 1000;
  transform: translateY(-50%);
`;

export const ArrowLeft = styled(Arrow)`
  left: 10px;
`;

export const ArrowRight = styled(Arrow)`
  right: 10px;
`;
