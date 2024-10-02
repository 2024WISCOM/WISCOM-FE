import styled from 'styled-components';
import cdImage from './img/CD1.png'; // CD 이미지 경로

export const GuestBookContainer = styled.div`
  background-color: #000; /* 배경색 검정 */
  color: white; /* 텍스트 색상 */
  min-height: 100vh; /* 전체 페이지 최소 높이 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 12px 30px; /* 버튼 크기 조정 */
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 16px; /* 버튼 텍스트 크기 조정 */
  background-color: #4CAF50; /* 기본 배경색 */
  color: #fff; /* 텍스트 색상 */

  &:hover {
    background-color: #555; /* 호버 시 배경색 */
    color: #fff; /* 호버 시 텍스트 색상 */
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%; /* 전체 폭 */
  max-width: 800px; /* 최대 폭 설정 */
  margin: 0 auto; /* 가운데 정렬 */
  background-color: black;
  padding: 20px;
`;

export const TextSection = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px; /* 폰트 크기 조정 */
  color: #FFFFFF; /* 텍스트 색상 */
  text-align: center; /* 가운데 정렬 */
  margin-bottom: 20px;
`;

export const InputSection = styled.div`
  background-image: url(${cdImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%; /* 폭 비율 조정 */
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  color: black; /* 텍스트 색상 변경 */
  background: transparent;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5); /* Placeholder 색상 */
  }
`;

export const TextArea = styled.textarea`
  width: 80%; /* 폭 비율 조정 */
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  color: black; /* 텍스트 색상 변경 */
  background: transparent;
  resize: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5); /* Placeholder 색상 */
  }
`;

export const ButtonContainer = styled.div`
  display: flex; /* Flexbox로 버튼 정렬 */
  justify-content: space-between; /* 버튼 간의 공간 설정 */
  width: 80%; /* 전체 폭 설정 */
  margin-top: 20px; /* 버튼 간격 */
`;
