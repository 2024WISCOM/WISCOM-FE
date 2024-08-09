import * as R from './RightContent.style';
import viewSiteImage from '../../../assets/img/viewsite_black.png';
import WorkTitle from '../worktitle/WorkTitle';
import Instagram from '../../../assets/img/instagram.png';
import Github from '../../../assets/img/github.png';
import Developer from '../developer/Developer';

export default function RightComponent() {
  return (
    <R.RightContentContainer>
      <WorkTitle src={viewSiteImage} />
      <R.Line />
      <R.TeamWrapper>
        <R.TeamItem>
          <R.TeamTitle>팀명은... 더보기</R.TeamTitle>
          <R.LinkTo>
            <img src={Instagram} alt="instagram" />
            <img src={Github} alt="github" />
          </R.LinkTo>
        </R.TeamItem>
        <R.DeveloperWrapper>
          <Developer />
          <Developer />
          <Developer />
          <Developer />
        </R.DeveloperWrapper>
      </R.TeamWrapper>
      <R.DetailDescription>
        데이트 폭력 증거 기록 서비스, 폭신(poksin) 최근에 유명 유튜버의 안타까운
        데이트 폭력 소식이 있었습니다. 데이트 폭력은 최근 3년간 57%
        증가했습니다. 데이트 폭력 신고를 위해서는 증거를 남기는 것이 가장
        중요합니다. 그러나 피해자는 복잡한 신고 절차, 보복에 대한 두려움, 또한,
        ‘연인 관계’라는 특수성을 반영한 법의 부재로 인해서 신고를 주저하고
        있습니다. 따라서 저희는 증거를 꾸준히 기록하고, 영상 분석을 진행하여
        신고 절차를 간소화할 수 있도록 '데이트 폭력 증거 기록 서비스' 폭신을
        개발했습니다. 폭신을 통해 교제 폭력에 많은 관심을 갖고, 교제폭력에 대한
        법안이 마련되어서, 궁극적으로는 데이트 폭력이 더 감소하길 기대해볼 수
        있을 것입니다.
        <R.Spacer />
      </R.DetailDescription>
    </R.RightContentContainer>
  );
}
