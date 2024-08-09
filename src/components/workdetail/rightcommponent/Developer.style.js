import styled from 'styled-components';

export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  text-align: left;
  margin: 0px;

  @media (max-width: 1024px) {
    /* Tablet */
    gap: 20px;
  }

  @media (max-width: 768px) {
    /* Mobile */
  }
`;

export const DeveloperName = styled.div`
  font-size: 25px;
  font-family: 'Pretendard-Medium';
  margin: 0px;

  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 17px;
  }

  @media (max-width: 768px) {
    /* Mobile */
  }
`;

export const DeveloperPosition = styled.div`
  font-size: 25px;
  font-family: 'Pretendard-Medium';
  color: #696969;
  margin: 0px;

  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 17px;
  }

  @media (max-width: 768px) {
    /* Mobile */
  }
`;
