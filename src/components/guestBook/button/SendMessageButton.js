import styled from 'styled-components';

export const SendButton = styled.button`
  width: 500px; 
  height: 60px; 
  background: #FFFFFF; 
  border-radius: 20px;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 20px; 
  color: #000000; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out; /* 부드러운 효과 */
  margin-right:180px;

  &:hover {
    font-size: 28px; /* 마우스 오버 시 글씨 크기 증가 */
  }

  &:active {
    animation:activeEffect 20s forwards;
    background: linear-gradient(90deg, #ACDEE8 3%, #848AFF 49.1%, #65BBCD 100%);
    color: #FFFFFF; /* 클릭 시 글자 색상 변경 */

  }

  &:focus {
    outline: none; /* 포커스 시 아웃라인 제거 */
  }

  @media (max-width: 767px) {
    width: 100%;
    font-size: 17px;
    height:40px;
    margin:20px; 
   
  }
`;
