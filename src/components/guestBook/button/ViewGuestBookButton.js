import styled from 'styled-components';

export const ViewButton = styled.button`
  background-color: ${(props) => (props.active ? '#5f7af7' : '#b3b3b3')};
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #4b62d1;
  }

  &:focus {
    outline: none;
  }
`;
