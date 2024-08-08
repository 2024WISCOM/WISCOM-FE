import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  color: white;
  margin: 0px;
  font-family: 'PlayfiarDisplay';
  font-size: 25px;
  margin-top: 10px;

  @media (max-width: 768px) {
    /* Mobile */
  }
`;

export const ButtonImage = styled.div`
  margin: 0px;
  width: 30px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    /* Tablet */
    width: 25px;
    height: 25px;
  }

  @media (max-width: 768px) {
    /* Mobile */
  }
`;
