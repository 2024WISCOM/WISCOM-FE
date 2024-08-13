import styled from 'styled-components';

export const WorkIntroduceContainer = styled.div`
  color: white;
  font-family: 'Pretendard-Medium';
  margin: 0px;
  width: 100%;
`;

export const WorkTitleWrapper = styled.div`
  padding-bottom: 20px;
  width: 85%;

  @media (max-width: 768px) {
    /* mobile */
    width: 80%;
  }
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
  gap: 25px;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin: 0px auto;
  width: 85%;

  @media (max-width: 768px) {
    /* mobile */
    gap: 20px;
  }
`;

export const TeamItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  width: 100%;

  @media (max-width: 768px) {
    /* mobile */
    gap: 20px;
  }
`;

export const TeamTitle = styled.div`
  font-size: 25px;
  margin: 0px;
  font-family: 'Pretendard-Bold';

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 17px;
  }
`;

export const LinkTo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  align-items: center;
  margin: 0px;
  img {
    width: auto;
    height: 30px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    /* Mobile */
    gap: 10px;
    img {
      height: 22px;
    }
  
`;

export const DetailDescription = styled.div`
  font-size: 20px;
  min-height: 100px;
  line-height: 1.6;
  word-wrap: break-word;
  font-family: 'Pretendard-Regular';
  padding-top: 10px;

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 15px;
  }
`;

export const Spacer = styled.div`
  height: 20px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    /* Mobile */
    height: 20px;
  }
`;
