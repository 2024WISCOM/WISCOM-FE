import styled from 'styled-components';

export const CdCaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px; // Adjust this to match the width of your actual CD case
  height: 400px; // Adjust this to match the height of your actual CD case
  background: #fff; // Base background color
  border: 5px solid #000; // Thick black border as seen in the image
  margin: 20px auto;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5); // Add shadow for 3D effect
`;

export const Panel = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.color};
  border-right: ${(props) => (props.last ? 'none' : '5px solid #000')};
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); // Inner shadow for depth
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff; // Text color for visibility
`;
