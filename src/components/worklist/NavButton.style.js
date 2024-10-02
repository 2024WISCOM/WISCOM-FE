import styled from 'styled-components';

export const Text = styled.div`
  color: var(--Schemes-On-Primary, #fff);
  text-align: center;
  font-family: 'Playfair Display SC';
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  user-select: none;

  span {
    font-family: Podkova;
  }

  @media (max-width: 1280px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
