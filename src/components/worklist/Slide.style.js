import styled from 'styled-components';

export const Page = styled.div`
  overflow-x: hidden; /* 이 페이지에서만 가로 스크롤 방지 */
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1800px;
  position: relative;

  @media (max-width: 1920px) {
    width: 85%;
  }

  @media (max-width: 767px) {
    width: 100%;
    transform: translateX(-100px);
  }

  .react-stacked-center-carousel {
    height: 900px !important;

    @media (max-width: 1920px) {
      height: 730px !important;
    }

    @media (max-width: 1280px) {
      height: 530px !important;
    }
  }
`;

export const Button = styled.img`
  width: 50px;

  @media (max-width: 1920px) {
    width: 40px;
  }

  @media (max-width: 1280px) {
    width: 35px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
