import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
