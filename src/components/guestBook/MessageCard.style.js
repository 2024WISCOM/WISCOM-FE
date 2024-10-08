import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;


  @media (max-width:768px){
    width:100%;
    height:auto;
    padding:0;
  }


`;

//cd 이미지 및 관련 내용 
export const CDContainer = styled.div`
  width: 24vw;
  height: 50vh;
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
    height:40vh;
    margin:2%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 30vw; /* 아이패드에서 이미지 크기 조정 */
    height: 40vh;
    margin:0 auto ;
  }
`;

export const ToText = styled.p`
  color: black;
  font-size: 1.5em;
  text-align: left;
  position: absolute;
  top: 5%;
  left: 15%;
  white-space: pre-wrap; /* 공백 및 줄바꿈을 유지한 채로 텍스트 줄바꿈 */
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 0.7em; 
    left:35px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.2em; 
    left: 15%;
  }

`;

export const FromText = styled.p`
  color: black;
  font-size: 1.5em;
  text-align: right; 
  position: absolute; 
  bottom: 5%;
  right:5%;
  white-space: pre-wrap; /* 공백 및 줄바꿈을 유지한 채로 텍스트 줄바꿈 */
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 0.7em; 
    margin-right: 2%; 
    bottom: 15%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.2em;
    right: 8%;
    bottom:15%;
  }

`;

export const MessageText = styled.p`
  color: black; 
  font-size: 1.1em;
  text-align: left;
  position: absolute;
  top: 18%; 
  left:15%;
  max-height:33vh;
  width:16vw;
  overflow:auto; 
  z-index: 10;

  /* 스크롤바 스타일링 (Webkit 기반 브라우저용) */
    &::-webkit-scrollbar {
      width: 0.7vw; /* 스크롤바 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.5); /* 스크롤바 색상 */
      border-radius: 10px; /* 스크롤바 모서리 둥글게 */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0.1); /* 스크롤 트랙(배경) 색상 */
    }

    @media (max-width: 768px) {
      font-size: 9px; /* 모바일에서 텍스트 크기 조정 */
      width: 109px; 
      height: 82px;
      top: 35px;
      left: 35px; /* 모바일에서 왼쪽 간격 조정 */
      z-index: 10; // 이미지 위에 텍스트 배치

      &::-webkit-scrollbar {
        width: 1.5vw; /* 스크롤바 너비 */
      }
    }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1em;
    width: 20vw;
    height:23vh;
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
    bottom:30%;
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
    width: 13px; /* 모바일에서 크기 조정 */
    top:10px;
    right:10px;
  }

   @media (min-width: 769px) and (max-width: 1024px) {
    width: 2.5vw;
    top: 4%;
    right: 4%;
  }
`;
