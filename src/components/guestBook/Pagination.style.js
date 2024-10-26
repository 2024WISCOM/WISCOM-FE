import styled from 'styled-components';

export const PaginationContainer = styled.div`
  width:100%
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  color: #ffffff; 
  margin-bottom:4%;
  flex-wrap: nowrap; 


  @media (max-width: 768px) {
    width :100%;
    margin-top:6%;
    text-align:center;
    flex-wrap: nowrap; 

  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    margin:0 auto;
    text-align:center;
    justify-content:center;
    flex-wrap: nowrap; 
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

   @media (max-width:768px){
      padding:2%;
      font-size:0.7em;
   }

   @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 1%;
    font-size: 1.2em;
  }
`;
