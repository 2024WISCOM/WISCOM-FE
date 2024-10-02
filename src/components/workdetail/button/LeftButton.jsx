import React from 'react';
import * as B from './Button.style';
import left from '../../../assets/img/left.png';

export default function LeftButton({ text, position, onClick }) {
  return (
    <B.ButtonContainer onClick={onClick}>
      <B.ButtonImage right={"Y"} position={position}>
        <img className={`img ${position}`} src={left} alt="left" />
      </B.ButtonImage>
      {text}
    </B.ButtonContainer>
  );
}
