import styled from 'styled-components';
import cdImage from './img/CD1.png';
import barCode from './img/barcode.png';
import sineText from './img/sign text.png';

export const GuestBookContainer = styled.div`
  background-color: #000; /* 배경색 검정 */
  color: white; /* 텍스트 흰색 */
  min-height: 100vh; /* 전체 페이지 최소 높이 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const HeaderSection = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
  background-image: url(${cdImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  padding: 50px;

  h2 {
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 1.5;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  background-color: ${({ isActive }) => (isActive ? '#4CAF50' : '#ddd')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};

  &:hover {
    background-color: #555;
    color: #fff;
  }
`;
