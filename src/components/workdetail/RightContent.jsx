import * as R from './RightContent.style';
import viewSiteImage from '../../assets/img/view_site.png';
import Instagram from '../../assets/img/instragram.png';
import Github from '../../assets/img/github.png';

export default function RightComponent() {
  return (
    <R.RightContentContainer>
      <R.TitleWrapper>
        <R.WorkTitle>폭신폭신</R.WorkTitle>
        <R.VisitSite>
          Visit Site
          <R.ViewSiteImage>
            <img src={viewSiteImage} alt="viewSite" />
          </R.ViewSiteImage>
        </R.VisitSite>
      </R.TitleWrapper>
      <R.Discription>당신의 안전을 지키는 건강한 연애의 시작</R.Discription>
      <R.Line />
      <R.TeamWrapper>
        <R.TeamItem>
          <R.TeamTitle>팀명은... 더보기</R.TeamTitle>
          <R.LinkTo>
            <img src={Instagram} alt="instagram" />
            <img src={Github} alt="github" />
          </R.LinkTo>
        </R.TeamItem>
      </R.TeamWrapper>
    </R.RightContentContainer>
  );
}
