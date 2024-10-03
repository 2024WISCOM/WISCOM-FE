import styled from 'styled-components';
import cdImage from './img/CD1.png'; 
import barcode from './img/barcode.png';
import signText from './img/sign text.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between; /* 좌우로 배치 */
  align-items: flex-start; /* 위쪽 정렬 */
  width: 100%;
  max-width: 1200px; /* 최대 폭 설정 */
  // padding: 30px 10px;
  color: white;
  margin-bottom: 100px;
`;

export const TextSection = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 45px;
  line-height: 1.5;
  color: #FFFFFF;
  text-align: left; /* 왼쪽 정렬 */
  width: 50%; /* 왼쪽 영역의 폭 */
  margin-top:90px;

`;

export const InputSection = styled.div`
position: relative;
background-image: url(${barcode}), url(${signText}), url(${cdImage});
background-size: 40px 130px, 420px, contain; 
background-position: right 35px top 50px, left 40px top 130px , center; 
background-repeat: no-repeat;
width: 500px;
height: 500px;
padding: 10px;

`;

export const Label = styled.label`
  position: absolute;
  font-weight: bold;
  color: black;
  font-size: 20px;
  width:100%;
  

  &.to-label {
    top: 50px; 
    left: 80px; 
    text-align:left;
  }

  &.from-label {
    bottom: 50px; 
    right: -210px;
    text-lign:right;
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 170px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  color: black;
  background: transparent;
  font-size: 30px;
  

  &::placeholder {
    text-align:left;

  }
`;

export const TextArea = styled.textarea`
  position: absolute;
  width: 390px;
  height: 280px;
  border: none;
  color: black;
  top:100px;
  left:80px;
  background: transparent;
  resize: none;
  margin-top:20px;

  &::placeholder {
    color: rgba(217, 217, 217, 1);
    font-size: 25px;
    font-family:'Pretendard';
    font-weight:400;
    font-style: normal;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* 버튼을 가로로 정렬 */
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  margin-top: 0;
`;

export const HighlightedText = styled.span`
  font-weight: bold;
  color: black;
  margin-right: 5px; /* 텍스트와 입력 필드 간의 여백 */
  font-size: 30px;
`;
