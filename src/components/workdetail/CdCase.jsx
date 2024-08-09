import * as C from './CdCase.style';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

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
