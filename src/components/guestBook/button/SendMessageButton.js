import styled from 'styled-components';

export const SendButton = styled.button`
  width: 34vw; 
  height: 8vh; 
  background: #FFFFFF; 
  border-radius: 20px;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 1.4em; 
  color: #000000; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out; /* 부드러운 효과 */
  margin-right:12vw;


  &:hover {
    font-size: 1.6em; /* 마우스 오버 시 글씨 크기 증가 */
  }

  &:active {
    animation:activeEffect 20s forwards;
    background: linear-gradient(90deg, #ACDEE8 3%, #848AFF 49.1%, #65BBCD 100%);
    color: #FFFFFF; /* 클릭 시 글자 색상 변경 */

  }

  &:focus {
    outline: none; /* 포커스 시 아웃라인 제거 */
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.0em;
    height:7vh;
    margin:0 4%; 

    &:hover {
      font-size: 1.1em /* 마우스 오버 시 글씨 크기 증가 */
    }
   
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 45vw;  
    font-size: 1.2em; 
    height: 7.5vh;
    margin-right: 10vw;

    &:hover {
      font-size: 1.4em; /* 아이패드에서 마우스 오버 시 글씨 크기 증가 */
    }
  }

`;
