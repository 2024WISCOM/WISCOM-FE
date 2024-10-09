import styled from 'styled-components';

export const ViewButton = styled.button`
  width: 34vw; 
  height: 8vh; 
  background:rgba(61, 60, 62, 1);
  border-radius: 20px;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 1.4em; 
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out; /* 부드러운 효과 */
  margin-left: 10vw;
 

  &:hover {
    font-size: 1.6em; /* 마우스 오버 시 글씨 크기 증가 */
  }

  &:focus {
    outline: none; /* 포커스 시 아웃라인 제거 */
  }

   @media (max-width: 768px) {
    display:none;
  }

  @media (min-width: 769px) and (max-width: 1024px){
    width: 45vw;  /* 아이패드 화면에서 버튼 너비 조정 */
    font-size: 1.2em; /* 아이패드에서 글씨 크기 조정 */
    height: 7.5vh;
    margin-left: 7vw;

    &:hover {
      font-size: 1.4em; /* 아이패드에서 마우스 오버 시 글씨 크기 증가 */
    }
  }
`;
