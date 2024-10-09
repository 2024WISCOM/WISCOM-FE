import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items:right;
  justify-content:right;
  flex-direction:row;
  margin: 5% 0% 1% -18%;
  position:relative;
  flex-direction:row;


  @media (max-width:768px){
    width:40%;
    padding: 0 0%;
    text-align:right;
    justify-content:right;
    align-items:right;
    margin:5%;
    margin-left:55vw;
    display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')}; /* 모바일에서만 보여주기 */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 60%;
    justify-content: right;
    margin:0;
    padding:0;
    top:-30vh;
    right:-190%;
    margin-bottom:-2%;
  }

`;

export const SearchInput = styled.input`
  width: 18vw;
  border: none; /* 테두리 제거 */
  border-bottom: 2px solid white; /* 아래쪽 테두리만 */
  background: transparent;
  color: white; 
  font-size: 1.3em; 
  z-index: 1; /* 입력창을 위로 올리기 */
  margin:0;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5); /* placeholder 색상 설정 */
    font-size: 1.2em;
  }

  &:focus {
    outline: none; /* 포커스 시 외곽선 제거 */
  }

  @media (max-width:768px){
    font-size:1.1em;
    margin:0 0;
    width:100%;
    color: white; 
    outline: none;  
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 20vw;
    font-size: 1.2em;
  }
    
`;

export const SearchButton = styled.button`
  background: none; /* 배경 없음 */
  border: none; /* 테두리 없음 */
  cursor: pointer;
  margin:0;


  img {
    width:50%;
    padding:3%;
    margin:0;
    // margin-bottom:2vh;
    // margin-left:1vw;
  }

  &:focus {
    outline: none; /* 포커스 시 외곽선 제거 */

  /* 버튼 눌렀을 때도 약간 강조 되는 것 필요할 듯 ?"


    }

    @media (max-width:768px){

    img{
      width:auto;
      margin:0 0;
      padding:0;
}
  

      /* 버튼 눌렸을 때도 이상함 수정 */
    
  }
    @media (min-width: 769px) and (max-width: 1024px) {
    img {
      width: 80%;
    }
  }


`;
