import * as R from './RightContent.style';
import viewSiteImage from '../../../assets/img/viewsite_black.png';
import WorkTitle from '../worktitle/WorkTitle';
import Instagram from '../../../assets/img/instagram.png';
import Github from '../../../assets/img/github.png';
import Developer from '../developer/Developer';
import ViewSite from '../button/ViewSite';


export default function RightContent({ data }) {
  console.log(data);
  return (
    <R.RightContentContainer>
      <WorkTitle
        title={data.title}
        shortDescription={data.shortDescription}
      />
      <R.Line />
      <R.TeamWrapper>
        <R.TeamItem>
          <R.TeamTitle>{data.teamName}</R.TeamTitle>
          <R.LinkTo>
            <a href={data.instagramUrl}>
              <img src={Instagram} alt="instagram" />
            </a>
            <a href={data.githubUrl}>
              <img src={Github} alt="github" />
            </a>
            <ViewSite deployUrl={data.deployUrl} src={viewSiteImage}/>
          </R.LinkTo>
        </R.TeamItem>
        <R.DeveloperWrapper>
          {data.developers.map((d) => (
            <Developer key={d.name} name={d.name} role={d.role} />
          ))}
        </R.DeveloperWrapper>
      </R.TeamWrapper>
      <R.DetailDescription>
      <div style={{ whiteSpace: 'pre-line' }}>
        {data.description}
      </div>
        
        <R.Spacer />
      </R.DetailDescription>
    </R.RightContentContainer>
  );
}
