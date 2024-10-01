import styled from 'styled-components';

export const SendButton = styled.button`
  background-color: ${(props) => (props.active ? '#5f7af7' : '#b3b3b3')}; /* 기본 버튼 색상 */
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 20px; /* 둥글게 */
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #4b62d1; /* 호버 시 더 어두운 파란색 */
  }

  &:focus {
    outline: none;
  }
`;
