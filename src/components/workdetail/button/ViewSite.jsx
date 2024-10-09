import * as V from './ViewSite.style';

export default function WorkIntroduce({ src, deployUrl }) {
  return (
    <V.VisitSite>
      <V.Link href={deployUrl} target="_blank" rel="noopener noreferrer">
      <V.ViewSiteImage>
          <img src={src} alt="viewSite" />
        </V.ViewSiteImage>
        <V.Text>Visit Site</V.Text>
      </V.Link>
    </V.VisitSite>
  );
}
