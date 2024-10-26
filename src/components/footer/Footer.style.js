import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #2C2C2C;
  color: #fff;
  padding: 1%;
  display: flex;
  margin:0 auto;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Noto Sans KR', sans-serif;
  width: 100%;
  white-space: nowrap;

  @media(max-width: 768px) {
    width:100%;
    font-size: 0.6em;
    margin : 0 auto;

  }

   @media (min-width: 769px) and (max-width: 1114px) {
     width:100%;
     font-size: 0.7em;
     
  }

`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 85vw;
  margin: 0 auto;
  padding: 0% 2%;

  @media(max-width: 768px) {
    flex-direction: column;
    margin-top:5%;
    padding:0;
  }

     @media (min-width: 769px) and (max-width: 1114px) {
     margin-top:1%;
     
  }


`;

export const FooterLeft = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  justify-content: flex-start;
  font-size: 0.8em;
  margin: 0;
  width: 100%;

  @media(max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    font-size: 0.7em;
    justify-content: space-between;
  }

`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1%;
  margin-left : 9%;


  div {
    margin-bottom: 1.5%;
    width:100%;
    text-align:left;
  }

  div:nth-child(2) {
    font-weight: bold;
    font-size: 1.1em;

  }

  @media(max-width: 768px) {
    align-items: flex-start;
    margin-left : 0;
    margin-bottom:5%;
}

`;

export const FooterRight = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  justify-content: flex-end;
  margin-left :0;
  width:100%;

  @media(max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const FooterLogo = styled.img`
  height: 60px;
  margin : 0;
  align-self: flex-end;


  @media (max-width : 768px){
    display : none;
  
  }
  @media (min-width: 769px) and (max-width: 1114px) {
    height:40px;
  }


`;

export const FooterLogoMobile = styled.img `
  display: none;

  @media(max-width: 768px) {
    height: 35px;
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
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  text-align: right;
  width: 100%; 

  .webAddress, .rights {
    display: block;
    text-align :right;
    width: 100%;
  }

  .phoneAddress1, .phoneAddress2 {
    display: none;
  }

  @media(max-width: 768px) {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    text-align:left;

    .webAddress {
      display: none;
    }

    .phoneAddress1 {
      display: block;
      margin-bottom: 0%; 
      width : 100%;
    }

    .phoneAddress2 {
      display: block;
      margin-bottom: 5%; 
      width : 100%;
      
    }

    .FooterLogoMobile  {
      display: block;
      width:100%;
      text-align:center;
    }

    .rights {
      display: block;
      width : 100%;
      text-align:center;
      margin-bottom:5%;
    }
  }

`;

export const UrlContainer = styled.div`
  display : flex;
  flex-direction: row;
  align-items:flex-start;
  margin-top: 1.5%;
  text-align : left ;
  margin-left :9%;
   display : inline-block;


  a {
    margin-right: 10px;
    width:100%;
    text-align:left;
  }

  img {
    height: 35px;
    width: 35px;
    margin: 0;
  }

  @media(max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    margin-top: 0%;
    margin-right:0;

    img{
      height : 30%;
      }
  }



`;
