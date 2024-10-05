import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:flex-end;
  margin-top: 12vh;
  margin-left:36vw;
  margin-bottom:-8vh; 

  @media (max-width:767px){
    width:100%;
    margin-top:20px;
    margin-left: 0;
    text-align:left;
    display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')}; /* 모바일에서만 보여주기 */

    }
`;

export const SearchInput = styled.input`
  width: 18vw;
  border: none; /* 테두리 제거 */
  border-bottom: 2px solid white; /* 아래쪽 테두리만 */
  background: transparent;
  color: white; /* 텍스트 색상 */
  font-size: 1.3em; /* 글자 크기 */
  margin-right:-600px;
  z-index: 1; /* 입력창을 위로 올리기 */

  &::placeholder {
    color: rgba(255, 255, 255, 0.5); /* placeholder 색상 설정 */
    font-size: 1.2em;
  }

  &:focus {
    outline: none; /* 포커스 시 외곽선 제거 */

    @media (max-width:767px){
      width:10px;
      font-size:10px;
      color:white;

      /*글쓸 때 줄 사라지고 안 보이는 것 해결하기 */
      }
}
    
`;

export const SearchButton = styled.button`
  background: none; /* 배경 없음 */
  border: none; /* 테두리 없음 */
  cursor: pointer;

  img {
    width:50%;
    padding:3%;
    margin-bottom:2vh;
    margin-left:1vw;
  }

  &:focus {
    outline: none; /* 포커스 시 외곽선 제거 */

  /* 버튼 눌렀을 때도 약간 강조 되는 것 필요할 듯 ?"


  

    @media (max-width:767px){
      width:100%;

      /* 버튼 눌렸을 때도 이상함 수정 */
    }
  }


`;
