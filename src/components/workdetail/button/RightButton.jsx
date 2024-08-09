import * as B from './Button.style';
import right from '../../../assets/img/right.png';

export default function RightButton({ text }) {
  return (
    <B.ButtonContainer>
      {text}
      <B.ButtonImage>
        <img src={right} alt="right" />
      </B.ButtonImage>
    </B.ButtonContainer>
  );
}
