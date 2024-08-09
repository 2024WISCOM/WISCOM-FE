import styled from 'styled-components';

export const WorkDetailContainer = styled.div`
  height: 85vh;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
`;

export const WorkDetaileRowContainer = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0 20px;
  overflow: hidden;
`;

export const MobileDetailContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 30px;
`;

export const CdCase = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 85vh;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
`;

export const ButtonColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export const ButtonRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 30px;
`;
