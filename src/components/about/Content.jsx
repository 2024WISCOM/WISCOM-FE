import * as A from './About.style';
import Introduction from './Introduction';

export default function Content() {
  return (
    <>
      <A.MenuWrapper>
        <A.Menu>
          <A.MenuText>Introduction</A.MenuText>
          <A.MenuText>Congratulation</A.MenuText>
          <A.MenuText>Developer</A.MenuText>
          <A.MenuText>Map</A.MenuText>
        </A.Menu>
        <A.MenuLine />
      </A.MenuWrapper>
      <Introduction />
    </>
  );
}
