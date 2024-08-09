import styled from 'styled-components';

export const RightContentContainer = styled.div`
  position: absolute;
  width: 46%;
  height: 94%;
  top: 3%;
  left: 52.75%;
  background-color: #ffffff;
  padding: 20px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: left;
  overflow-y: auto;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  font-family: 'Pretendard-Medium';

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #696969;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const WorkTitle = styled.div`
  font-weight: bold;
  font-size: 35px;
  margin: 0px;
  font-family: 'Pretendard-ExtraBold';
`;

export const VisitSite = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0px;
  align-items: center;
  font-size: 25px;
`;

export const ViewSiteImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  padding-top: 4px;
  font-family: 'Pretendard-Medium';
  cursor: pointer;
`;

export const Discription = styled.div`
  font-size: 25px;
  margin: 0px;
  font-family: 'Pretendard-Medium';
`;

export const Line = styled.div`
  border: 1px solid #999999;
  margin: 0.1px 0;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  text-align: left;
  margin: 0px;
`;

export const TeamItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  width: 100%;
`;

export const TeamTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
  margin: 0px;
  font-family: 'Pretendard-Bold';
`;

export const LinkTo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  margin: 0px;
  img {
    width: auto;
    height: 40px;
    cursor: pointer;
  }
`;

export const DeveloperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin: 0px;
`;

export const DetailDescription = styled.div`
  font-size: 23px;
  min-height: 100px;
  line-height: 1.6;
  word-wrap: break-word;
  font-family: 'Pretendard-Regular';
`;

export const Spacer = styled.div`
  height: 20px;
  flex-shrink: 0;
`;
