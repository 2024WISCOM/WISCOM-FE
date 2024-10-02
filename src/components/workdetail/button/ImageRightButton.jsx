import React from 'react';
import * as B from './Button.style';
import right from '../../../assets/img/right.png';

export default function ImageRightButton({ text, position, onClick }) {
  return (
    <B.ButtonContainer onClick={onClick}>
      {text}
      <B.MobileButtonImage>
        <img className={`img ${position}`} src={right} alt="right" />
      </B.MobileButtonImage>
    </B.ButtonContainer>
  );
}
