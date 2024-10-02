import styled, {css} from 'styled-components';

export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  text-align: left;
  margin: 0px;
  justify-content: center;

  @media (max-width: 1024px) {
    /* Tablet */
    gap: 30px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    gap: 15px;
  }
`;

export const DeveloperName = styled.div`
  width: 70px;
  font-size: 22px;
  font-family: 'Pretendard-Medium';
  margin: 0px;

  ${({ isTwoCharacters }) =>
    isTwoCharacters &&
    css`
    width: 70px;
      letter-spacing: 5.7px; 
    `}

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 22px;
    width: 60px;

      ${({ isTwoCharacters }) =>
    isTwoCharacters &&
    css`
      letter-spacing: 6.5px; 
    `}
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 15px;
    
    width: 50px;

      ${({ isTwoCharacters }) =>
    isTwoCharacters &&
    css`
      letter-spacing: 3.8px; 
    `}
  }
`;


export const DeveloperPosition = styled.div`
  font-size: 22px;
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
    font-size: 15px;
  }
`;
