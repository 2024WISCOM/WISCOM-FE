import styled from 'styled-components';

export const SendButton = styled.button`
  width: 660px; /* 너비 조정 */
  height: 70px; /* 높이 조정 */
  background: #FFFFFF; /* 기본 배경색 */
  border-radius: 20px;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 30px; 
  color: #000000; /* 기본 글자색 */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out; /* 부드러운 효과 */

  &:hover {
    font-size: 32px; /* 마우스 오버 시 글씨 크기 증가 */
  }

  &:active {
    background: linear-gradient(90deg, #ACDEE8 3%, #848AFF 49.1%, #65BBCD 100%);
    color: #FFFFFF; /* 클릭 시 글자 색상 변경 */
  }

  &:focus {
    outline: none; /* 포커스 시 아웃라인 제거 */
  }
`;
