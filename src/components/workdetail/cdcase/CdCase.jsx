import * as C from './CdCase.style';
import LeftContent from '../leftcomponent/LeftContent';
import RightContent from '../rightcomponent/RightContent';

export default function CdCase({ cdCaseImage, data }) {
  return (
    <C.CdCaseContainer>
      <C.ImageContainer>
        <img src={cdCaseImage} alt="CD Case" />
        <LeftContent />
        <RightContent data={data} />
      </C.ImageContainer>
    </C.CdCaseContainer>
  );
}
