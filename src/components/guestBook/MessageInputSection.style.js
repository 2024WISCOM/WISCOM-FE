import styled from 'styled-components';
import cdImage from './img/CD1.png'; // CD 이미지 경로

export const Container = styled.div`
  display: flex;
  justify-content: space-between; /* 좌우로 배치 */
  align-items: flex-start; /* 위쪽 정렬 */
  width: 100%;
  max-width: 1200px; /* 최대 폭 설정 */
  padding: 50px 100px;
  color:white;
`;

export const TextSection = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 32px;
  line-height:1.5;
  color: #FFFFFF;
  text-align: left; /* 왼쪽 정렬 */
  width: 40%; /* 왼쪽 영역의 폭 */
  
`;

export const InputSection = styled.div`
  background-image: url(${cdImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 50%; /* CD 이미지 및 입력 폼의 가로 크기 */
  height: 400px; /* CD 이미지 높이 */
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color :black;
  
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  color: black;
  background: transparent;

  &::placeholder {
    color: black;
  }
`;

export const TextArea = styled.textarea`
  width: 80%;
  // padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  color: black;
  background: transparent;
  resize: none;
  font-size:25px;



  &::placeholder {
    color: black;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* 버튼을 가로로 정렬 */
  padding:0 50px;
  position:absolute;
  bottom: -100px;
  left :0;
  right:0;
  margin-top:50px;

`;

/* HighlightedText 추가 */
export const HighlightedText = styled.span`
  font-weight: bold;
  color: black;
  margin-right: 5px; /* 텍스트와 입력 필드 간의 여백 */
  font-size:30px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 80%; /* Input과 일치하는 너비 */
  margin-bottom: 10px;

   &.to-label {
   dis
    margin-bottom: 5px; 
    
  }
  
  &.from-label {
    margin-bottom: 30px; 
  }
  
`;
