import * as C from './CdCase.style';
import RightContent from './RightContent';
import LeftContent from './LeftContent';

export default function CdCase({ cdCaseImage }) {
  return (
    <C.CdCaseContainer>
      <C.ImageContainer>
        <img src={cdCaseImage} alt="CD Case" />
        <LeftContent />
        <RightContent />
      </C.ImageContainer>
    </C.CdCaseContainer>
  );
}
