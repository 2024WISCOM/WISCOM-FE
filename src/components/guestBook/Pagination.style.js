import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  color: #ffffff; 
  margin-bottom:4%;


    @media (max-width: 767px) {
      width :80vw;
      margin-top:6%;
  

  }
`;

export const PageButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active', // active 속성 필터링
})`
  background: none; 
  border: none;
  padding: 0 13px; 
  font-size: 1.6em; 
  color: ${({ active }) => (active ? '#ffffff' : '#ffffff')}; 
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')}; //선택된 페이지에만 밑줄 
  cursor: pointer;

  &:hover {
    text-decoration: underline; // 호버 시에도 밑줄 표시 
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.5); // 비활성화된 화살표는 반투명
    cursor: not-allowed;
  }

  img {

    width: 10px; /* 이미지 크기 */
    position:relative;
    top:4px;
    heigth: 30px; 
    margin: 0 25px; /* 이미지와 페이지 숫자 사이 간격 */
    
  }

   @media (max-width:767px){
      padding:3%;
      font-size:0.7em;
      

      img {
        bottom :10%;
        width :2vw;
        padding :0;
        margin :0% 20px;
    
      }
   }
`;
