import React from 'react';
import * as B from './Button.style';
import right from '../../../assets/img/right.png';

export default function RightButton({ text, position }) {
  return (
    <B.ButtonContainer>
      {text}
      <B.ButtonImage position={position}>
        <img className={`img ${position}`} src={right} alt="right" />
      </B.ButtonImage>
    </B.ButtonContainer>
  );
}
