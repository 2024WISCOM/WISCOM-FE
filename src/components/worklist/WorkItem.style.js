import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  transition: all 300ms ease;
  cursor: pointer;
  width: 100%;
  position: relative;
  user-select: none;

  @media (max-width: 1920px) {
    width: 640px;
    margin-bottom: 16px;
  }

  @media (max-width: 1280px) {
    width: 440px;
    margin-bottom: 11px;
  }

  @media (max-width: 767px) {
    width: 330px;
  }
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

    @media (max-width: 1920px) {
      width: 640px;
      margin-bottom: 18px;
    }

    @media (max-width: 1280px) {
      width: 440px;
      border-radius: 25px;
      margin-bottom: 15px;
    }

    @media (max-width: 767px) {
      width: 330px;
      border-radius: 20px;
      margin-bottom: 40px;
    }
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const animate = (widthScroll) => keyframes`
  100% {
    transform: translateX(-${widthScroll / 2}px);
  }
`;

export const Title = styled.p`
  width: 100%;
  color: white;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5px;
  white-space: nowrap;
  display: inline-block;

  animation: ${(props) =>
      props.isOverflow ? animate(props.widthScroll) : 'none'}
    ${(props) => props.widthScroll / 130}s 1s linear infinite;

  @media (max-width: 1920px) {
    font-size: 28px;
  }

  @media (max-width: 1280px) {
    font-size: 23px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Team = styled.p`
  color: white;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1920px) {
    font-size: 23px;
  }

  @media (max-width: 1280px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
