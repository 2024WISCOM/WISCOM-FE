import * as I from './Image.style';

export default function WorkIntroduceImage({ src }) {
  return (
    <I.ImageContainer>
      <img src={src} alt="ppt image" />
    </I.ImageContainer>
  );
}
