import styled from 'styled-components';

export const ViewButton = styled.button`
  width: 500px; /* 너비 조정 */
  height: 60px; /* 높이 조정 */
  background:rgba(61, 60, 62, 1);
  border-radius: 20px;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 25px; 
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out; /* 부드러운 효과 */
  margin-left :170px;

  &:hover {
    font-size: 32px; /* 마우스 오버 시 글씨 크기 증가 */
  }

  &:focus {
    outline: none; /* 포커스 시 아웃라인 제거 */
  }
`;
