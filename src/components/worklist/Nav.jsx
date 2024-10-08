import { useState } from 'react';
import * as N from './Nav.style';
import NavButton from './NavButton';

export default function Nav({ onChangeType }) {
  const [type, setType] = useState('ALL');

  const handleChangeType = (type) => {
    let apiType;
    switch (type) {
      case 'WEB & APP':
        apiType = 'WEB_APP';
        break;
      case 'IoT':
        apiType = 'IOT';
        break;
      default:
        apiType = type;
    }

    setType(type);
    onChangeType(apiType);
  };

  return (
    <>
      <N.ButtonList>
        {['ALL', 'WEB & APP', 'GAME', 'AI', 'IoT'].map((text) => (
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
