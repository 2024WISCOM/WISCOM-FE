import * as N from './Nav.style';
import NavButton from './NavButton';

export default function Nav() {
  return (
    <>
      <N.ButtonList>
        <NavButton text={'ALL'} />
        <NavButton text={'WEB & APP'} />
        <NavButton text={'GAME'} />
        <NavButton text={'AI'} />
        <NavButton text={'BIG DATA'} />
      </N.ButtonList>
      <div>
        <N.Line>
          <N.Circle></N.Circle>
        </N.Line>
      </div>
    </>
  );
}
