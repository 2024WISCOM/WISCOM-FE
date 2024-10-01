import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5vw;
`;

export const Inter = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
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

  @media (max-width: 1024px) {
    font-size: 80px;
  }

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
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

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 30px;
    margin-top: 25px;
  }

  @media (max-width: 480px) {
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
    margin: 50px 0;
  }

  @media (max-width: 480px) {
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

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
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
  padding: 0 30px;
  margin-bottom: 10vh;
`;

export const Inter2 = styled(Inter)`
  font-size: 45px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 14px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Identity = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin-bottom: 128px;

  @media (max-width: 1024px) {
    margin-bottom: 80px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    gap: 40px;
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

  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 36px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

export const Inter3 = styled(Inter)`
  width: 100%;
  text-align: left;
  font-size: 25px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Part = styled.div`
  width: 100%;
  text-align: left;
  color: #fff;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
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
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 10px;
  justify-content: flex-start;

  @media (max-width: 1920px) {
    grid-template-columns: 1.5fr 7fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 2fr 8fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 2.5fr 7fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 3fr 7fr;
  }
`;

export const CongratWrapper = styled.div`
  width: 100%;
  padding: 0 5vw;
  margin-bottom: 137px;
`;

export const MainProfWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5vw;
  margin-bottom: 5vw;
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
  gap: 2vw;
  cursor: pointer;
`;

export const Prof = styled.img`
  width: 16vw;
  flex-shrink: 0;
  margin: 0;
`;

export const ProfName = styled.div`
  width: 16vw;
  color: #fff;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 23px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

export const ProfMsg = styled.div`
  color: #fff;
  text-align: justify;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 40px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 30px;
  }

  @media (max-width: 480px) {
    font-size: 9px;
    line-height: 15px;
  }
`;

export const DevWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 0 5vw;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const StudentWrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 1vw;
  align-items: center;
  margin-bottom: 3vw;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }

  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
`;

export const Student = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
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

export const ModalContainer = styled.div`
  width: 60vw;
  height: auto;
  background: #000000;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 30px 30px 30px;
  position: fixed;
  top: 0;
  z-index: 999;
  transform: translate(15%, 50%);
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding-top: 20px;
`;

export const CloseBtn = styled.button`
  width: 100%;
  color: #fff;
  text-align: end;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background: #000000;
  border: none;
  cursor: pointer;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ModalProfName = styled(ProfName)`
  font-size: 20px;
`;

export const ModalText = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  align-self: center;
  text-align: justify;
  padding: 10px 0;

  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 36px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 28px;
  }
`;
