import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1800px;
  position: relative;

  @media (max-width: 1920px) {
    width: 85%;
  }

  .react-stacked-center-carousel {
    height: 900px !important;

    @media (max-width: 1920px) {
      height: 700px !important;
    }

    @media (max-width: 1280px) {
      height: 500px !important;
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
`;
