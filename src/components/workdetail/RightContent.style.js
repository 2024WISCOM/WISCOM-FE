import styled from 'styled-components';

export const RightContentContainer = styled.div`
  position: absolute;
  width: 47.25%;
  height: 92.8%;
  top: 3.9%;
  left: 52.75%;
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: left;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: transparent;
`;

export const WorkTitle = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin: 0px;
  font-family: 'PretendardBold';
`;

export const VisitSite = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0px;
  align-items: center;
  background: transparent;
  font-size: 30px;
`;

export const ViewSiteImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: white;
  padding-top: 4px;
`;

export const Discription = styled.div`
  font-size: 30px;
  margin: 0px;
`;

export const Line = styled.div`
  border: 0.5px solid #696969;
  margin: 0.1px 0;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  text-align: left;
  margin: 0px;
  background: transparent;
`;

export const TeamItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`;

export const TeamTitle = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin: 0px;
  font-family: 'PretendardBold';
`;

export const LinkTo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  background-color: transparent;
  margin: 0;

  img {
    background-color: transparent;
    width: 17%;
  }
`;
