import { useEffect, useRef } from 'react';
import * as L from './LeftContent.style';
import Image from '../image/Image';

export default function LeftContent({ images }) {
  const containerRef = useRef(null); 

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0; 
    }
  }, [images]); 

  return (
    <L.LeftContentContainer ref={containerRef}>
      {images.map((item, index) => (
        <Image key={index} src={item.url} />
      ))}
    </L.LeftContentContainer>
  );
}
