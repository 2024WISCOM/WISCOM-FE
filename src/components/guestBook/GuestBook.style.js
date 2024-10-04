import styled from 'styled-components';

export const GuestBookContainer = styled.div`
  min-height: 100vh;
  max-width:1200wh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width:100%;
  

  @media (max-width:767px){
    padding:5px;
    width:100%;
    overflow-x :hidden;

  } 
`;
 
