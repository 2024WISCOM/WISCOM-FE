import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  // 3열 그리드로 설정
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MessageCard = styled.div`
  width: 360px;
  height: 400px;
  background-image: url('./img/CD1.png');  // CD 이미지 경로
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p {
    color: #fff;
    margin: 5px 0;
  }
`;
