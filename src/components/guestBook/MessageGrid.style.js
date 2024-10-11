import styled from 'styled-components';

export const MessageGridContainer = styled.div`
  display:grid;
  width:100%;
  grid-template-columns: repeat(3, 1fr); 
  gap: 5%;
  margin-top:2%;
  margin-bottom:20%;
  justify-content:center;


  @media (max-width:768px) {
    width:100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin:0;
    margin-top:10%;
    padding :0;
  }

   @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); 
    gap: 2%; 
    margin:0 auto;
    padding:0 5%;
    margin-top:-20%;
    margin-bottom:10%;

  }
`;

