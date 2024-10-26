import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;


  @media (max-width:768px){
    width:100%;
    height:50%;
    padding:0;
  }


`;

//cd 이미지 및 관련 내용 
export const CDContainer = styled.div`
  width: 24vw;
  height: 24vw;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:2% 5%;

  @media (max-width:768px) {
    width:40vw;
    height:40vw;
    margin:2%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 30vw; /* 아이패드에서 이미지 크기 조정 */
    height: 30vw;
    margin:0 auto ;
  }
`;

export const ToText = styled.p`
  color: black;
  font-size: 1.2em;
  text-align: left;
  position: absolute;
  top: 5%;
  left: 15%;
  white-space: pre-wrap; /* 공백 및 줄바꿈을 유지한 채로 텍스트 줄바꿈 */
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 0.7em; 
    left:18%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.2em; 
    left: 15%;
  }

`;

export const FromText = styled.p`
  color: black;
  font-size: 1.2em;
  text-align: right; 
  position: absolute; 
  bottom: 5%;
  right:5%;
  white-space: pre-wrap; /* 공백 및 줄바꿈을 유지한 채로 텍스트 줄바꿈 */
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 0.7em; 
    margin-right: 2%; 
    bottom: -55%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.1em;
    right: 8%;
    bottom:12%;
  }

`;

export const MessageText = styled.p`
  color: black; 
  font-size: 1.1em;
  text-align: left;
  position: absolute;
  top: 18%; 
  left:15%;
  max-height:95%;
  width:70%;
  height:60%;
  overflow:auto; 
  z-index: 10;

  /* 스크롤바 스타일링 (Webkit 기반 브라우저용) */
    &::-webkit-scrollbar {
      width: 0.6vw; /* 스크롤바 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.5); /* 스크롤바 색상 */
      border-radius: 10px; /* 스크롤바 모서리 둥글게 */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0.1); /* 스크롤 트랙(배경) 색상 */
    }

    @media (max-width: 768px) {
      font-size: 0.6em; /* 모바일에서 텍스트 크기 조정 */
      width: 65%; 
      height: 108%;
      top: 40%;
      left: 18%; /* 모바일에서 왼쪽 간격 조정 */
      z-index: 10; // 이미지 위에 텍스트 배치

      &::-webkit-scrollbar {
        width: 1.5vw; /* 스크롤바 너비 */
      
    }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1em;
    width: 40%;
    height:50%;  
    top: 18%;
  }
  
  
`;

export const CDImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

export const SignText = styled.img`
  position: absolute;
  top: 55%;
  left: 52%;
  transform: translate(-50%, -50%);
  width: 21vw;

  @media (max-width: 768px) {
    width: 90%;
    top:110%;
    left:55%;  
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 27vw;
    top: 52%;
    left:55%;
  }
`;

export const BarcodeImage = styled.img`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 2vw;

  @media (max-width: 768px) {
    width: 8%; /* 모바일에서 크기 조정 */
    top:12%;
    right:5%;
  }

   @media (min-width: 769px) and (max-width: 1024px) {
    width: 2.5vw;
    top: 4%;
    right: 4%;
  }
`;
