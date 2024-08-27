import { useState } from 'react';
import * as N from './Nav.style';
import NavButton from './NavButton';

export default function Nav({ onChangeType }) {
  const [type, setType] = useState('ALL');

  const handleChangeType = (type) => {
    setType(type);
    onChangeType(type);
  };

  return (
    <>
      <N.ButtonList>
        {['ALL', 'WEB & APP', 'GAME', 'AI', 'BIG DATA'].map((text) => (
          <NavButton
            key={text}
            text={text}
            onClick={() => handleChangeType(text)}
            isSelected={type === text}
          />
        ))}
      </N.ButtonList>
      <div>
        <N.Line>
          <N.Circle position={type} />
        </N.Line>
      </div>
    </>
  );
}
