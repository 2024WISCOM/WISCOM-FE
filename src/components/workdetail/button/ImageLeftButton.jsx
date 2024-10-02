import React from 'react';
import * as B from './Button.style';
import left from '../../../assets/img/left.png';

export default function ImageLeftButton({ text, position, onClick }) {
  return (
    <B.ButtonContainer onClick={onClick}>
      <B.MobileButtonImage position={position}>
        <img className={`img ${position}`} src={left} alt="left" />
      </B.MobileButtonImage>
      {text}
    </B.ButtonContainer>
  );
}
