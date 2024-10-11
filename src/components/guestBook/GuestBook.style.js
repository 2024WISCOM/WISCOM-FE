import styled from 'styled-components';

export const GuestBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  width:100%;
  overflow-x: hidden; /* 가로 스크롤 방지 */
  box-sizing: border-box; /* 너비 계산에 padding과 border 포함 */
  

  @media (max-width:768px){
    padding:2% 5%;
    width:100%;
    overflow-x :hidden;
  

  } 

  @media (min-width: 769px) and (max-width: 1024px) { 
    width: 100%;
  }

`;
 
