import * as B from './Button.style';
import left from '../../assets/img/left.png';

export default function LeftButton({ text }) {
  return (
    <B.ButtonContainer>
      <B.ButtonImage>
        <img src={left} alt="left" />
      </B.ButtonImage>
      {text}
    </B.ButtonContainer>
  );
}
