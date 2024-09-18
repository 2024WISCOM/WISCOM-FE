import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #2C2C2C;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  width: 100%;

  @media(max-width: 767px) {
    font-size: 0.5em;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media(max-width: 767px) {
    flex-direction: column;
  }
`;

export const FooterLeft = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  justify-content: flex-start;
  font-size: 0.9em;
  padding-left: 0;
  margin: 0;
  width: 100%;
  max-width: 600px;

  @media(max-width: 767px) {
    flex-direction: row;
    align-items: flex-start;
    font-size: 0.5em;
    justify-content: space-between;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;


  div {
    margin-bottom: 8px;
    width:100%;
    text-align:left;
  }

  div:nth-child(2) {
    font-weight: bold;
    font-size: 1.1em;
  }

  @media(max-width: 767px) {
    align-items: flex-start;
    text-align: left;


 
  }


`;

export const FooterRight = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  justify-content: flex-end;

  @media(max-width: 767px) {
    align-items: center;
    text-align: center;
  }
`;

export const FooterLogo = styled.img`
  height: 50px;
  margin-left: 440px;
  align-self: flex-end;


  @media(max-width: 767px) {
    height: 30px;
    width: 150px;
    margin: 10px 0;
    text-align: center;
    display:block;
    align-self: center;
    
  }
`;

export const FooterBottom = styled.div`
  font-size: 0.9em;
  color: #ccc;
  line-height: 1.5em;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  text-align: left;
  width: 100%; 

  .webAddress, .rights {
    display: block;
  }

  .phoneAddress1, .phoneAddress2 {
    display: none;
  }

  @media(max-width: 767px) {
    margin-top: 0;
    // display: flex;
    // flex-direction: column;
    // align-items: flex-start; 
    // text-align:left;

    .webAddress {
      display: none;
    }

    .phoneAddress1 {
      display: block;
      order: 1;
      margin-bottom: 10px; 
      width : 100%;
    }

    .phoneAddress2 {
      display: block;
      order: 2; 
      margin-bottom: 20px; 
      width : 100%;
      
    }

    .FooterLogo {
      display: block;
      order: 3;
      margin: 10px 0;
      width:100%;
      text-align:center;
    }

    .rights {
      display: block;
      order: 4; 
      width : 100%;
      text-align:center;
    }
  }
`;

export const UrlContainer = styled.div`
  display: flex;
  align-items: left;
  margin-top: 10px;

  a {
    margin-right: 10px;
  }

  img {
    height: 35px;
    width: 35px;
    margin: 0;
    display: inline-block;
  }

  @media(max-width: 767px) {
    display: flex;
    justify-content: flex-start;
    margin-top: 5px;
    margin-right:0;
  }
`;
