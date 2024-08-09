import * as V from './ViewSite.style';

export default function WorkIntroduce({ src }) {
  return (
    <V.VisitSite>
      Visit Site
      <V.ViewSiteImage>
        <img src={src} alt="viewSite" />
      </V.ViewSiteImage>
    </V.VisitSite>
  );
}
