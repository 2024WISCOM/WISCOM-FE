import * as W from './WorkIntroduce.style';
import viewSiteImage from '../../../assets/img/viewsite_white.png';
import WorkTitle from '../worktitle/WorkTitle';
import Image from '../image/Image';
import Developer from '../developer/Developer';
import Instagram from '../../../assets/img/instagram.png';
import Github from '../../../assets/img/github_white.png';
import RightButton from '../button/RightButton';
import LeftButton from '../button/LeftButton';

export default function WorkIntroduce({ data }) {
  return (
    <W.WorkIntroduceContainer>
      <W.WorkTitleWrapper>
        <WorkTitle
          title={data.title}
          shortDescription={data.shortDescription}
          deployUrl={data.deployUrl}
          src={viewSiteImage}
        />
      </W.WorkTitleWrapper>
      <W.ImageWrapper>
        <LeftButton position="top" />
        <Image
          src={
            'https://github.com/user-attachments/assets/a1e6e94c-90a3-41a1-aacf-61ddd773facd'
          }
        />
        <RightButton position="top" />
      </W.ImageWrapper>
      <W.DeveloperWrapper>
        <W.TeamItem>
          <W.TeamTitle>{data.teamName}</W.TeamTitle>
          <W.LinkTo>
            <a href={data.instagramUrl}>
              <img src={Instagram} alt="instagram" />
            </a>
            <a href={data.githubUrl}>
              <img src={Github} alt="github" />
            </a>
          </W.LinkTo>
        </W.TeamItem>
        {data.developers.map((d) => (
          <Developer key={d.name} name={d.name} role={d.role} />
        ))}
        <W.DetailDescription>
          {data.description}
          <W.Spacer />
        </W.DetailDescription>
      </W.DeveloperWrapper>
    </W.WorkIntroduceContainer>
  );
}
