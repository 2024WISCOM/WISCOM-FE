import styled from 'styled-components';

export const MessageGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 50px auto;
  width:100%;

  @media (max-width:767px) {
    width:100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin:0;
    padding :0;
  }
`;

export const MessageCard = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
  
  p {
    color: black;
    margin: 5px 0;
  }

  // @media (max-width: 767px) {
  //   width:100%;
  //   height: 200px; 
  //   padding: 10px;
  // }
`;

export const ToText = styled.p`
  font-size: 18px; 
  color: #333;
  text-align: center;
`;

export const MessageText = styled.p`
  font-size: 16px;
  text-align: center;

`;

export const FromText = styled.p`
  font-size: 14px;
  text-align: center;
`;
