import styled from 'styled-components';

export const MessageGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3열 그리드
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 50px auto;
`;

export const MessageCard = styled.div`
  width: 360px;
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
`;

export const ToText = styled.p`
  font-size: 18px; /* 수정된 font-size */
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
