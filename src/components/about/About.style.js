import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 160px;

  @media (max-width: 768px) {
    padding: 0 40px;
  }
`;

export const Inter = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

export const Wiscom = styled.div`
  color: #fff;
  text-align: center;
  font-family: 'Playfair Display SC';
  font-size: 105px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Pretendard = styled.div`
  color: #fff;
  text-align: justify;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 55px;
  margin-top: 70px;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 20px;
    margin-top: 20px;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  margin-top: 107px;
  margin-bottom: 117px;

  @media (max-width: 768px) {
    margin: 30px 0;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 9px;
`;

export const MenuText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: ${(props) => (props.isActive ? '700' : '400')};
  line-height: normal;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -9px;
    width: ${(props) => (props.isActive ? '100%' : '0')};
    height: 2px;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const MenuLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 50px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const Inter2 = styled(Inter)`
  font-size: 45px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Identity = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin-bottom: 128px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const Poster = styled.img`
  width: 30%;
  flex-shrink: 0;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Text = styled.div`
  color: #fff;
  text-align: justify;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 28px;
  }
`;

export const Inter3 = styled(Inter)`
  width: 100%;
  text-align: left;
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Part = styled.div`
  width: 22%;
  text-align: left;
  color: #fff;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    width: 30%;
    font-size: 12px;
  }
`;

export const PeopleWrap = styled.div`
  width: 100%;
  margin-top: 36px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const People = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const CongratWrapper = styled.div`
  width: 100%;
  padding: 0 50px;
  margin-bottom: 137px;
`;

export const MainProfWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 84px;
  margin-bottom: 90px;
`;

export const UnderProfWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > div:nth-child(2) {
    align-items: center;
  }
  & > div:nth-child(3) {
    align-items: flex-end;
    padding-right: 2%;
  }
  & > div:nth-child(4) {
    align-items: end;
  }
`;

export const ProfWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 22px;
`;

export const Prof = styled.img`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  margin: 0;
`;

export const ProfName = styled.div`
  width: 200px;
  color: #fff;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  text-align: center;
`;

export const ProfMsg = styled.div`
  color: #fff;
  text-align: justify;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
`;

export const DevWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  padding: 0 30px;
  margin-bottom: 100px;
`;

export const StudentWrap = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 65px;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 50%;
`;

export const Student = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
`;

export const MapWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MapTitle = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & div:nth-child(3) {
    width: 95px;
  }

  & div:nth-child(5) {
    width: 95px;
  }
`;

export const MapHead = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 160px;
  border-bottom: 1px solid #fff;
  padding-bottom: 8px;
  margin-left: 0;
  margin-bottom: 21px;
`;

export const MapText = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 0;
`;

export const TextWrap = styled.div`
  width: 100%;
  margin-bottom: 43px;
`;
