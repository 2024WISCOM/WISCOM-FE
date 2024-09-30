import { useState } from 'react';
import * as A from './About.style';
import Introduction from './Introduction';
import Congratulation from './Congratulation';
import Developer from './Developer';
import Map from './Map';

export default function Content() {
  const [activeComponent, setActiveComponent] = useState('Introduction');

  return (
    <>
      <A.MenuWrapper>
        <A.Menu>
          <A.MenuText
            onClick={() => setActiveComponent('Introduction')}
            isActive={activeComponent === 'Introduction'}
          >
            Introduction
          </A.MenuText>
          <A.MenuText
            onClick={() => setActiveComponent('Congratulation')}
            isActive={activeComponent === 'Congratulation'}
          >
            Congratulation
          </A.MenuText>
          <A.MenuText
            onClick={() => setActiveComponent('Developer')}
            isActive={activeComponent === 'Developer'}
          >
            Developer
          </A.MenuText>
          <A.MenuText
            onClick={() => setActiveComponent('Map')}
            isActive={activeComponent === 'Map'}
          >
            Map
          </A.MenuText>
        </A.Menu>
        <A.MenuLine />
      </A.MenuWrapper>
      {activeComponent === 'Introduction' && <Introduction />}
      {activeComponent === 'Congratulation' && <Congratulation />}
      {activeComponent === 'Developer' && <Developer />}
      {activeComponent === 'Map' && <Map />}
    </>
  );
}
