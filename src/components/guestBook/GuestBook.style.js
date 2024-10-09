import styled from 'styled-components';

export const GuestBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width:100%;
  max-width: 100vw;  /* 부모 뷰포트 너비를 넘지 않도록 설정 */
  overflow-x: hidden; /* 가로 스크롤 방지 */
  

  @media (max-width:767px){
    padding:5px;
    width:100%;
    overflow-x :hidden;

  } 
`;
 
