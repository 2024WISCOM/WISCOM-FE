import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between; /* 좌우로 배치 */
  align-items: flex-start; /* 위쪽 정렬 */
  width: 100%;
  color: white;
  margin:0 auto;
  padding :0 10%;
  position:relative;
  height:100vh;

  @media (max-width:768px){
    width:100%;
    flex-direction:column;
    align-items:center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding:0 10%;
    
  }
  
`;

export const TextSection = styled.div`
  
  font-family: 'Pretendard', sans-serif;
  font-size: ${(props) => (props.isMobile ? '3vw' : '3vw')}; 
  line-height: 1.5;
  color: #FFFFFF;
  text-align: ${(props) => (props.isMobile ? 'center' : 'left')}; /* 모바일에서는 가운데 정렬, 웹에서는 왼쪽 정렬 */
  width: ${(props) => (props.isMobile ? '100%' : '50%')}; /* 모바일에서는 전체 너비, 웹에서는 50% */
  margin-top: ${(props) => (props.isMobile ? '-10px' : '15vh')}; /* 모바일에서는 20px, 웹에서는 90px */
  position:relative;

  @media (max-width: 768px) {
    font-size: 4.5vw;
    width: 100%;
    text-align: center;
    margin-top: 0%;
    margin-bottom:10%;

  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.0em; 
    width: 50%;
    text-align: left;
    margin-top: 10vh;
  }

`;

export const CDContainer2 = styled.div`
  display:flex;
  width:35vw;
  height:70%;
  position:relative;
  flex-direction: column;


  @media(max-width:768px){
    align-items:center;
    
  }

 @media (min-width: 769px) and (max-width: 1024px) {
    width: 50%;
    height: 65vh;
  }
`;

export const CDImage2 = styled.img`
  position:absolute;
  width: 100%;
  height: 100%;


  @media (max-width: 768px) {
  
    width: 70vw; 
    height: auto;
  
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

export const SignText2 = styled.img`
  position: absolute;
  top: 53%;
  left: 53%;
  transform: translate(-50%, -50%);
  width: 32vw;

  @media (max-width: 768px) {
    width:60vw;
    top:50%;
    
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 35vw; 
    top: 42%;
0
  }
  

`;

export const BarcodeImage2 = styled.img`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 7%;

  @media (max-width: 768px) {
    width: 5vw; 
    top:3%;
    right:-40%;

  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 6%; 
    top:5%;
    right:5%;
  }
`;




export const Label = styled.label`
  display:flex;
  flex-direction:row;
  height:1vh;
  align-items:center;
  position:absolute;
  font-weight: bold;
  color: black;
  width: 20vw;
  font-size: 1.1em;
 
  &.to-label {
    text-align: left;
    top:7%;
    left:15%;   
   

  }

  &.from-label {
    width:60%;
    bottom:7%;
    right:0%;
  
}

   @media (max-width: 768px) {
      width:35vw;
      font-size:1.3em;

      &.to-label {
        top:10%;
        left:-20%;
             
      } 

      &.from-label {
        bottom:20%;
        right:-20%;
      }
    }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 25vw; /* 태블릿 크기에서 width 조정 */
    font-size: 1em;

    &.to-label {
      top: 3%;
      auto:5%;
    }

    &.from-label {
      bottom: 50%;
      left:50%;
    }
  }
`;

export const Input = styled.input`

  height:5vh;
  width: 80%;
  border: none;
  color: black;
  background: transparent;
  font-size:1.5em;
  text-align: left; 
  z-index: 10;
  border:none;
  flex-grow: 1;
  padding:2%;


  &::placeholder {
    color: #D9D9D9;
    font-size:1.0em;

  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    width: auto;    
  }
  
 @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.1em; 
  
  }

`;

export const TextArea = styled.textarea`
  position: absolute;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;  
  width: 24vw;
  height: 42vh; 
  border: none;
  color: black;
  background: transparent;
  font-size: 1.4em;
  resize: none;
  text-align: left;
  z-index: 10;
  margin:0;
  left:15%;
  top:22%;
  
  &::placeholder {
    color: #D9D9D9;
    font-size: 1.0em;
    font-family:'Pretendard';
    font-weight:400;
    font-style: normal;

  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 122%;
    height:40%;
    top: 20%;
    left:-20%;
    margin-top:0;
    align-items:center;
    font-size:1.1em;

    &::placeholder {
      font-size:0.9em;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 27vw; 
    height: 31vh;
    top:14%;
  }
`;



export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; 
  top:calc(100% - 100px); /* CD 케이스 아래 위치에 맞춰서 */
  left: 0;
  right: 0;
  margin : -3% 1%;
  position:absolute;
  
  @media (max-width:768px){
    width:100%;
    top: calc(100% - 0px); /* 모바일 화면에서 더 아래로 배치 */
  }
  
  @media (min-width: 769px) and (max-width: 1024px){
    top:  calc(100% - 250px); /* 타블렛 크기에서 간격 더 확보 */
    gap:5%; 
  }
`;

export const HighlightedText = styled.span`
  font-weight: bold;
  color: black;
  font-size: 1.8em;
  
  @media (max-width:768px){
    font-size:1.1em;
  }

  @media (min-width: 769px) and (max-width: 1024px){
    font-size: 1.5em; /* 태블릿 크기에서 글자 크기 조정 */
  }
`;



