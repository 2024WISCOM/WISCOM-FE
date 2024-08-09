import * as W from './WorkTitle.style';
import ViewSite from '../button/ViewSite';

export default function WorkTitle({ src }) {
  return (
    <W.WorkTitleContainer>
      <W.TitleWrapper>
        <W.WorkTitle>폭신폭신</W.WorkTitle>
        <ViewSite src={src} />
      </W.TitleWrapper>
      <W.Discription>
        당신의 안전을 지키는 건강한 연애의 시작이제목이지만 아주 긴 제목을
        만들어봐요
      </W.Discription>
    </W.WorkTitleContainer>
  );
}
