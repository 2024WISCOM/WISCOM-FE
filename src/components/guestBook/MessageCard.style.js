import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  padding : 10px;

  @media (max-width:767px){
    width:100%;
    height:auto;
    padding:0;
    }
`;

//cd 이미지 및 관련 내용 
export const CDContainer = styled.div`
  width: 360px;
  height: 320px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:10px 30px ;

  @media (max-width:767px) {
    width:159px;
    height:147px;
    gap:10px;
    padding:0;
    margin:0;
    }
`;

export const ToText = styled.p`
  color: black; /* 검정색 글자 */
  font-size: 25px;
  text-align: left; /* 가운데 정렬 */
  position: absolute;
  top: 10px; /* 위쪽에 배치 */
  left: 60px;
  right: 0;
  white-space: pre-wrap; /* 공백 및 줄바꿈을 유지한 채로 텍스트 줄바꿈 */
  word-break: break-word;

  @media (max-width: 767px) {
    font-size: 10px; 
    left:25px;
  }

  

`;

export const FromText = styled.p`
  color: black; /* 검정색 글자 */
  font-size: 25px;
  text-align: right; /* 가운데 정렬 */
  position: absolute; /* 절대 위치 */
  bottom:10px; /* 아래쪽에서 여유 공간 */
  right:0;
  margin-right:20px;
  white-space: pre-wrap; /* 공백 및 줄바꿈을 유지한 채로 텍스트 줄바꿈 */
  word-break: break-word;

  @media (max-width: 767px) {
    font-size: 10px; 
    margin-right: 20px; 
    bottom: 10px;
  
`;

export const MessageText = styled.p`
  color: black; /* 검정색 글자 */
  font-size: 18px;
  text-align: left;
  position: absolute;
  top: 18%; /* CD 이미지 안에서 더 위로 올려 배치 */
  left:60px;
  max-height:200px;
  width:230px;
  overflow:auto; // 스크롤 
  z-index: 10; // 이미지 위에 텍스트 배치

  /* 스크롤바 스타일링 (Webkit 기반 브라우저용) */
    &::-webkit-scrollbar {
      width: 8px; /* 스크롤바 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.5); /* 스크롤바 색상 */
      border-radius: 10px; /* 스크롤바 모서리 둥글게 */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0.1); /* 스크롤 트랙(배경) 색상 */
    }

    @media (max-width: 767px) {
      font-size: 9px; /* 모바일에서 텍스트 크기 조정 */
      width: 109px; 
      height: 82px;
      top: 35px;
      left: 25px; /* 모바일에서 왼쪽 간격 조정 */
      z-index: 10; // 이미지 위에 텍스트 배치
  }
  
  
`;





export const CDImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%; /* 모바일에서도 100% 유지 */
    height: auto;
  }
`;

export const SignText = styled.img`
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 350px;

  @media (max-width: 767px) {
    width: 130px;
    bottom:30%;
    left:50%;
    
  }
  
  
`;

export const BarcodeImage = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;

  @media (max-width: 767px) {
    width: 13px; /* 모바일에서 크기 조정 */
    top:10px;
    right:10px;

  }
`;
