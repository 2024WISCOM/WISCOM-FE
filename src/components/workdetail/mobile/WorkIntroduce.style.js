import styled from 'styled-components';

export const WorkIntroduceContainer = styled.div`
  color: white;
  font-family: 'Pretendard-Medium';
  margin: 0px;
  width: 100%;
`;

export const WorkTitleWrapper = styled.div`
  padding-bottom: 20px;
  width: 80%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 20px;

  img {
    width: 96%;
    height: auto;
  }
`;

export const DeveloperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin: 0px auto;
  width: 85%;
`;

export const TeamItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  width: 100%;
`;

export const TeamTitle = styled.div`
  font-size: 28px;
  margin: 0px;
  font-family: 'Pretendard-Bold';
  font-size: 20px;
`;

export const LinkTo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin: 0px;
  img {
    width: auto;
    height: 22px;
    cursor: pointer;
  }
`;

export const DetailDescription = styled.div`
  font-size: 15px;
  min-height: 100px;
  line-height: 1.6;
  word-wrap: break-word;
  font-family: 'Pretendard-Regular';
  padding-top: 10px;
`;

export const Spacer = styled.div`
  height: 20px;
  flex-shrink: 0;
`;
