import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? '#4caf50' : '#f1f1f1')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;