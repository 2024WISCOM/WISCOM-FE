import styled from 'styled-components';
import cdImage from './img/CD1.png'; 
import barcode from './img/barcode.png';
import signText from './img/sign text.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between; /* 좌우로 배치 */
  align-items: flex-start; /* 위쪽 정렬 */
  width: 100%;
  max-width: 1200px; /* 최대 폭 설정 */
  color: white;
  margin-bottom: 100px;

  @media (max-width:767px){
    width:100%;
    flex-direction:column;
    align-items:center;
  }
  
`;

export const TextSection = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: ${(props) => (props.isMobile ? '17px' : '45px')}; 
  line-height: 1.5;
  color: #FFFFFF;
  text-align: ${(props) => (props.isMobile ? 'center' : 'left')}; /* 모바일에서는 가운데 정렬, 웹에서는 왼쪽 정렬 */
  width: ${(props) => (props.isMobile ? '100%' : '50%')}; /* 모바일에서는 전체 너비, 웹에서는 50% */
  margin-top: ${(props) => (props.isMobile ? '-10px' : '90px')}; /* 모바일에서는 20px, 웹에서는 90px */

  @media (max-width: 767px) {
    font-size: 1.2em;
    width: 100%;
    text-align: center;
    margin-top: 0%;
    margin-bottom:10%;

  }

`;

export const InputSection = styled.div`
  position: relative;
  background-image: url(${barcode}), url(${signText}), url(${cdImage});
  background-size: 8% 27%, 85%, contain; 
  background-position: right 7% top 14%,left 60% top 70% , center ; 
  background-repeat: no-repeat;
  width: 500;
  height: 500px;
  padding: 10px;

  @media (max-width: 767px) {
      width: 100%;
      height: 50vh; 
      background-size: 7vw 15vh, 75vw, contain;
      background-position: right 11% top 9% , left 55% top 70%, center;
      padding: 5%; 
      
    }

`;

export const Label = styled.label`
  position: absolute;
  font-weight: bold;
  color: black;
  font-size: 20px;
  width:100%;

  &:focus {
    outline :none;
    }
  

  &.to-label {
    top: 10%; 
    left: 80px; 
    text-align:left;
  }

  &.from-label {
    bottom: 50px; 
    right: -210px;
    text-lign:right;

  
  }
    @media (max-width: 767px) {
      

      &.to-label {
        top:5%;
        left:18%;

        
      } 

      &.from-label {
        bottom:4%;
        right:-44%;
      }


    }
`;

export const Input = styled.input`
  position: absolute;
  width: 170px;
  padding: 5px;
  border: none;
  color: black;
  background: transparent;
  font-size: 30px;
  
  &::placeholder {
    text-align:left;
    color: #D9D9D9;

  }

   &:focus {
    outline :none;
  }
  
  @media (max-width:767px){
    width:30vw;
    top:13%;
    font-size:1.0em;
    padding:0;
    
    }
`;

export const TextArea = styled.textarea`
  position: absolute;
  width: 340px;
  height: 280px;
  border: none;
  color: black;
  top:100px;
  left:80px;
  background: transparent;
  resize: none;
  margin-top:20px;
  font-size: 25px;

   &:focus {
    outline :none;
    }

  &::placeholder {
    color: #D9D9D9;
    font-size: 25px;
    font-family:'Pretendard';
    font-weight:400;
    font-style: normal;
  }

  @media (max-width:767px){
    width:60vw;
    height:30vh;
    top: 20%;
    left :18%;
    margin-top:0;
    align-items:center;
    font-size:1.3em;

    &::placeholder {
      font-size:0.9em;

    }
   
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* 버튼을 가로로 정렬 */
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  margin-top: 0;

  @media (max-width:767px){
      width:100%;
      top: 82%;
    
      }
`;

export const HighlightedText = styled.span`
  font-weight: bold;
  color: black;
  margin-right: 5px; /* 텍스트와 입력 필드 간의 여백 */
  font-size: 30px;

  @media (max-width:767px){
    font-size:1.1em;
    }
`;
