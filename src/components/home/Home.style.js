import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  color: #f5f5f5;
  display: flex;
  align-items: center;
  position: relative;
  padding: 50px 120px 140px 120px;

  @media screen and (max-width: 767px) {
    padding: 0 0 30px 0;
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 80px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  background-color: transparent;
  color: var(--Schemes-On-Primary, #fff);
  text-shadow: 0px 10px 15px rgba(219, 0, 255, 0.27);
  font-family: 'Playfair Display SC';
  font-size: 110px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: -50px;

  @media screen and (max-width: 767px) {
    text-shadow: 3px 3px 5px rgba(11, 196, 254, 0.27);
    font-size: 40px;
    margin-bottom: -10px;
  }
`;

export const DS = styled.span`
  background-color: transparent;
  color: var(--Schemes-On-Primary, #fff);
  font-family: 'Playfair Display SC';
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`;

export const Wiscom = styled.div`
  background-color: transparent;
  color: var(--Schemes-On-Primary, #fff);
  text-shadow: 0px 10px 15px rgba(219, 0, 255, 0.27);
  font-family: 'Playfair Display SC';
  font-size: 180px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: -30px;

  @media screen and (max-width: 767px) {
    text-shadow: 3px 3px 5px rgba(11, 196, 254, 0.36);
    font-size: 64px;
    margin-bottom: -5px;
  }
`;

export const SubTitle = styled.h3`
  background-color: transparent;
  color: var(--Schemes-On-Primary, #fff);
  font-family: 'Playfair Display SC';
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 34px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    margin-bottom: 26px;
  }
`;

export const Description = styled.p`
  background-color: transparent;
  color: var(--Schemes-On-Primary, #fff);
  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  @media screen and (max-width: 767px) {
  }
`;

export const Case = styled.img`
  width: 831px;
  height: 752px;

  @media screen and (max-width: 767px) {
    width: 319.767px;
    height: 292px;
  }
`;

const rotateImage = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Cd = styled.img`
  background-color: transparent;
  width: 814px;
  height: 742px;
  position: absolute;
  left: 28px;
  animation: ${rotateImage} 30s linear infinite;
  transform-origin: 50.65% 50.73%;

  @media screen and (max-width: 767px) {
    width: 313.225px;
    height: 288.117px;
    left: 11px;
  }
`;
