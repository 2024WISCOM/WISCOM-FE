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
  padding: 0 5vw;
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
  gap: 3vw;
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
  width: 25vw;
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
    font-size: 11px;
  }
`;

export const Part = styled.div`
  width: 100%;
  text-align: left;
  color: #fff;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
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
    grid-template-columns: 2.2fr 7fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 2.2fr 7fr;
  }
`;

export const People1 = styled.div`
  display: grid;

  @media (max-width: 1920px) {
    grid-template-columns: 1.2fr 8fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1.2fr 8fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1.5fr 7fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1.6fr 7fr;
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

export const MainChoiWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5vw;
  margin-bottom: 5vw;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ProfChoiWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2vw;
  cursor: pointer;
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
  font-size: 24px;
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
    font-size: 10px;
    line-height: 18px;
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

export const MapContainer = styled.div`
  width: 100%;
  padding: 0 6vw;
  margin-bottom: 10vh;

  @media (max-width: 480px) {
    padding: 0 2vw;
  }
`;

export const MapWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Kakaomap = styled.div`
  width: 35vw;
  height: 37vw;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vw;
  }
`;

export const MapTitle = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;

  & div:nth-child(3) {
    width: 95px;
    @media (max-width: 1024px) {
      width: 60px;
    }

    @media (max-width: 768px) {
      width: 50px;
    }

    @media (max-width: 480px) {
      width: 35px;
    }
  }

  & div:nth-child(5) {
    width: 95px;
    @media (max-width: 1024px) {
      width: 60px;
    }

    @media (max-width: 768px) {
      width: 50px;
    }

    @media (max-width: 480px) {
      width: 35px;
    }
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

  @media (max-width: 1024px) {
    font-size: 22px;
    width: 110px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    width: 90px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    width: 65px;
    margin-bottom: 9px;
  }
`;

export const MapText = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 0;
  letter-spacing: 0.57px;
  margin: 0;
  padding-bottom: 8px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const MapTextWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  flex-wrap: nowrap;
`;

export const TextWrap = styled.div`
  width: 100%;
  margin: 0 0 4vw 7px;
`;

export const Bar = styled(MapText)`
  padding: 0 2px;
  margin: 0;
  color: #fff;
`;

export const ExhibitionMap = styled.img`
  width: 35vw;
  height: 15vw;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 30vw;
  }
`;

export const StudioWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0;
`;

export const TeamWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 0;
`;

export const SubTeamWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  gap: 10px;
`;

export const Studio01 = styled.div`
  width: 34px;
  height: 26px;
  background: #ffc164;
  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  box-sizing: content-box;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  @media (max-width: 768px) {
    font-weight: 500;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    width: 25px;
    height: 22px;
  }
`;

export const Studio02 = styled(Studio01)`
  background: #ff7f7f;
`;

export const Studio03 = styled(Studio01)`
  background: #89c7ad;
`;

export const Studio04 = styled(Studio01)`
  background: #295f98;
`;

export const Studio05 = styled(Studio01)`
  background: #efbc9b;
`;

export const Studio06 = styled(Studio01)`
  background: #a7727d;
`;

export const Studio10 = styled(Studio01)`
  background: #0097b2;
`;

export const Team = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  padding: 3px 0;
  word-break: keep-all;
  margin: 0;

  @media (max-width: 768px) {
    font-weight: 500;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const TeamMember = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 11px;
  }
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
