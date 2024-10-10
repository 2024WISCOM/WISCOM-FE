import * as W from './WorkTitle.style';
import ViewSite from '../button/ViewSite';

export default function WorkTitle({ src, title, shortDescription, deployUrl }) {
  return (
    <W.WorkTitleContainer>
      <W.TitleWrapper>
        <W.WorkTitle>
        <div style={{ whiteSpace: 'pre-line' }}>
        {title}
      </div></W.WorkTitle>
      </W.TitleWrapper>
      <W.Discription>{shortDescription}</W.Discription>
    </W.WorkTitleContainer>
  );
}
