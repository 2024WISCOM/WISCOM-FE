import React from "react";
import { FooterContainer,FooterTop, FooterLeft,FooterInfo, FooterRight, FooterBottom,FooterLogo,FooterLogoMobile,UrlContainer } from './Footer.style.js';
import Logo from './img/logo.png' // 로고 이미지를 불러오는 부분
import Home from './img/home.png'
import Insta from './img/insta.png'


export const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
      <FooterLeft>
        <FooterInfo>
        <div>2024 덕성여자대학교 컴퓨터공학전공 졸업전시회</div>
        <div>WISCOM: Play Your Graduation</div>
        </FooterInfo>
        <UrlContainer>
        <a href="https://www.duksung.ac.kr/computer/main.do"><img src ={Home} alt ="Home"/></a>
        <a href ="https://www.instagram.com/2024_wiscom?igsh=MWxtMHRibzJlMzczeg=="><img src = {Insta} alt="Insta"/></a>
        </UrlContainer>
      </FooterLeft>
      
      <FooterRight>
        <FooterLogo src={Logo} alt="덕성여자대학교 로고" />
        <FooterBottom>
        <div className="webAddress">01369 | 서울특별시 도봉구 삼양로 144길 33 덕성여자대학교 컴퓨터공학전공(Tel. 02-901-8341)</div>
        <div className="phoneAddress1">Tel.02-901-8341</div>
        <div className="phoneAddress2">01369 | 서울특별시 도봉구 삼양로 144길 33 덕성여자대학교 컴퓨터공학전공</div>
        <FooterLogoMobile src ={Logo} alt = "덕성여자대학교 로고"/>
        <div className="rights">© Computer Engineering 2024. All rights reserved.</div>
      </FooterBottom>
      </FooterRight>
      </FooterTop>
    </FooterContainer>
  );
};

export default Footer;
