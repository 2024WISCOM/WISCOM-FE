import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #2C2C2C;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  font-family: 'Noto Sans KR', sans-serif;
  width : 100%;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%; 
  max-width: 1200px; 
  margin : 0 auto; 

`;

export const FooterLeft = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  justify-content:flex-start;
  font-size: 0.9em;
  padding-left:0;
  margin:0;
  width:100%;

  
  div {
    margin-bottom: 8px;
    width: 100%
  }

  div:nth-child(2) {
    font-weight: bold;
    font-size: 1.1em; 
  }

`;

export const FooterRight = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align:right;
  justify-content :flex-start;

`;


export const FooterLogo = styled.img`

 height:50px;
 margin-left: 440px;
 align-self: flex-end;

`;


export const FooterBottom = styled.div`
  font-size: 0.9em;
  color: #ccc;
  line-height: 1.5em;
  margin-top:20px;
`;

export const UrlContainer = styled.div`

  margin-top: 10px;

  a {
    margin-right:10px;
    }
  
  img { 
    height : 35px;
    width : 35px;
    margin: 0;
    display:inline-block;
  }
  
  `;
