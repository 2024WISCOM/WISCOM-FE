import * as L from './LeftContent.style';
import Image from '../image/Image';
export default function LeftContent({ images }) {
  console.log(images);
  return (
    <L.LeftContentContainer>
      {images.map((item, index) => (
        <Image key={index} src={item.url} />
      ))}
    </L.LeftContentContainer>
  );
}
