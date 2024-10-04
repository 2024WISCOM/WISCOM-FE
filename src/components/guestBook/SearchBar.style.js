import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: flex-end; /* 수직 정렬을 밑줄 기준으로 맞춤 */
  margin: 20px 0;
  margin-left: 950px; /* 여기에 걍 .. text-lign: left 로 할까?*/

  @media (max-width:767px){
    width:100%;
    margin-top:20px;
    margin-left: 0;
    text-align:left;

    }
`;

export const SearchInput = styled.input`
  width: 250px; /* 너비 설정 */
  padding: 5px;
  border: none; /* 테두리 제거 */
  border-bottom: 2px solid white; /* 아래쪽 테두리만 */
  background: transparent;
  color: white; /* 텍스트 색상 */
  font-size: 18px; /* 글자 크기 */
  margin-right: 10px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5); /* placeholder 색상 설정 */
    font-size: 18px;
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
  padding: 0;
  position: relative;
  top: -5px; /* 이미지를 밑줄 위로 올림 */
  
  img {
    width: 25px;
    height: 25px;
    vertical-align: bottom; /* 이미지가 텍스트의 밑줄 위로 맞춰짐 */
  }

  &:focus {
    outline: none; /* 포커스 시 외곽선 제거 */

    @media (max-width:767px){
      width:100%;
  
    }
  }


`;
