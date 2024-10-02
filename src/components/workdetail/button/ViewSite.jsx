import * as V from './ViewSite.style';

export default function WorkIntroduce({ src, deployUrl }) {
  return (
    <V.VisitSite>
      <V.Link href={deployUrl} target="_blank" rel="noopener noreferrer">
        Visit Site
        <V.ViewSiteImage>
          <img src={src} alt="viewSite" />
        </V.ViewSiteImage>
      </V.Link>
    </V.VisitSite>
  );
}
