import styled from 'styled-components';

export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  text-align: left;
  margin: 0px;
  justify-content: center;

  @media (max-width: 1200px) {
    gap: 35px;
  }

  @media (max-width: 1024px) {
    /* Tablet */
    gap: 30px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    gap: 20px;
  }
`;

export const DeveloperName = styled.div`
  font-size: 25px;
  font-family: 'Pretendard-Medium';
  margin: 0px;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 22px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 17px;
  }
`;

export const DeveloperPosition = styled.div`
  font-size: 25px;
  font-family: 'Pretendard-Regular';
  color: #696969;
  margin: 0px;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 22px;
    color: #d9d9d9;
  }

  @media (max-width: 768px) {
    /* Mobile */
    color: #d9d9d9;
    font-size: 17px;
  }
`;
