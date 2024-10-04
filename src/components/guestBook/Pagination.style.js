import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #ffffff; 

    @media (max-width: 767px) {
    font-size: 14px; 
  }
`;

export const PageButton = styled.button`
  background: none; 
  border: none;
  padding: 0 10px; /* 버튼 간격 */
  font-size: 20px; 
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
`;
