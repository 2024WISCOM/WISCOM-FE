import styled from 'styled-components';

export const WorkTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    /* Mobile */
    gap: 15px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const WorkTitle = styled.div`
  font-weight: bold;
  font-size: 35px;
  margin: 0px;
  font-family: 'Pretendard-ExtraBold';
  text-align: left;

  @media (max-width: 1200px) {
    /* Desktop */
    font-size: 30px;
  }

  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 28px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 23px;
  }
`;

export const Discription = styled.div`
  font-size: 25px;
  line-height: 1.5;
  margin: 0;
  font-family: 'Pretendard-Medium';
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 16px;
    font-family: 'Pretendard-Regular';
  }
`;
