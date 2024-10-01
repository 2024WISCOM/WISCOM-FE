import styled from 'styled-components';
import cdImage from './img/CD1.png'; // CD 케이스 배경 이미지 경로

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: white;
  background-color: black; /* 검정 배경 추가 */
`;

export const TextSection = styled.div`
position: absolute;
width: 654px;
height: 351px;
left: 226px;
top: 363px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 70px;
line-height: 84px;
display: flex;
align-items: center;

color: #FFFFFF;


`;

export const InputSection = styled.div`
  flex: 1;
  background-image: url(${cdImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 400px;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  background: transparent; /* 투명한 배경 */
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5); /* 밑줄만 약간 투명 */
  margin: 10px 0;
  padding: 5px;
  color: black; /* 입력 글자 색상을 검정으로 */
  font-size: 18px;
  text-align: center; /* 가운데 정렬 */

  &::placeholder {
    color: rgba(0, 0, 0, 0.5); /* 플레이스홀더도 검정 */
  }
`;

export const TextArea = styled.textarea`
  width: 80%;
  background: transparent; /* 투명한 배경 */
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin: 10px 0;
  padding: 5px;
  color: black;
  font-size: 18px;
  height: 80px;
  text-align: center; /* 가운데 정렬 */
  resize: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  background-color: black; /* 검정 배경 추가 */
  padding: 20px; /* 버튼을 구분할 수 있도록 약간의 패딩 추가 */
  width: 100%; /* 버튼 영역을 전체 너비로 확장 */

  button {
    background-color: transparent; /* 버튼 배경 투명 */
    color: white; /* 흰색 글씨 */
    border: 2px solid white; /* 흰색 테두리 */
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2); /* hover 시 약간의 배경색 */
    }
  }
`;
