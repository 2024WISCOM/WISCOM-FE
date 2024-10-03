import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  background-color: ${({ isActive }) => (isActive ? '#4CAF50' : '#ddd')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};

  &:hover {
    background-color: #555;
    color: #fff;
  }
`;
