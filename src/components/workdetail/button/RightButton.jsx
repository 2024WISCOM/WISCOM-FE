import React from 'react';
import * as B from './Button.style';
import right from '../../../assets/img/right.png';

export default function RightButton({ text, position, onClick }) {
  return (
    <B.ButtonContainer onClick={onClick}>
      {text}
      <B.ButtonImage right={"N"}>
        <img className={`img ${position}`} src={right} alt="right" />
      </B.ButtonImage>
    </B.ButtonContainer>
  );
}
