import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  color: white;
  margin: 0px;
  font-family: 'PlayfairDisplay';
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 1024px) {
    /* Tablet */
    font-size: 25px;
    padding-bottom: 20px;
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 18px;
    padding: 1px;
  }
`;

export const MobileButtonImage = styled.div`
  img {
      width: 40px;
  }
`

export const ButtonImage = styled.div`
  margin: 0px;
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    ${({ position }) =>
      position === 'top' &&
      css`
        padding: 0px 
        margin: 0px;
      `}
  }

  @media (max-width: 1024px) {
    /* Tablet */
    width: 23px;
    height: 22px;
    position: relative;

    top: ${({ right }) => (right === 'Y' ? '-3.9px' : '-3.4px')};
    
  }

  @media (max-width: 768px) {
    /* Mobile */
    width: 15px;
    height: 15px;
    position: relative;

    top: ${({ right }) => (right === 'Y' ? '-3.5px' : '-3.4px')};


    padding-right: ${({ right }) => (right === 'Y' ? '2px' : '0px')};
    padding-left: ${({ right }) => (right === 'Y' ? '0px' : '2px')};
    
  }
`;
