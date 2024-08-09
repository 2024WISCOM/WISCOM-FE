import React from 'react';
import * as B from './Button.style';
import left from '../../../assets/img/left.png';

export default function LeftButton({ text, position }) {
  return (
    <B.ButtonContainer>
      <B.ButtonImage position={position}>
        <img className={`img ${position}`} src={left} alt="left" />
      </B.ButtonImage>
      {text}
    </B.ButtonContainer>
  );
}
