import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  color: #f5f5f5;
  display: flex;
  align-items: center;
  position: relative;
  padding: 50px 120px 140px 120px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 80px;
`;

export const Title = styled.h2`
  color: var(--Schemes-On-Primary, #fff);
  text-shadow: 0px 10px 15px rgba(219, 0, 255, 0.27);
  font-family: 'Playfair Display SC';
  font-size: 110px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: -50px;
`;

export const DS = styled.span`
  color: var(--Schemes-On-Primary, #fff);
  font-family: 'Playfair Display SC';
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
`;

export const SubTitle = styled.h3`
  color: var(--Schemes-On-Primary, #fff);
  font-family: 'Playfair Display SC';
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 34px;
`;

export const Description = styled.p`
  color: var(--Schemes-On-Primary, #fff);
  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-left: 0;
`;

export const Case = styled.img`
  width: 831px;
  height: 752px;
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
`;
