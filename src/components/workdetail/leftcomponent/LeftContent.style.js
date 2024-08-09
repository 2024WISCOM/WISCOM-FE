import styled from 'styled-components';

export const LeftContentContainer = styled.div`
  position: absolute;
  width: 46.2%;
  height: 93.4%;
  top: 3.5%;
  left: 1.3%;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  margin: 0px;
  overflow-y: auto;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #696969;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
