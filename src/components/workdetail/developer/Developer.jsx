import * as D from './Developer.style';

export default function Developer({ name, role }) {
  return (
    <D.DeveloperContainer>
      <D.DeveloperName>{name}</D.DeveloperName>
      <D.DeveloperPosition>{role}</D.DeveloperPosition>
    </D.DeveloperContainer>
  );
}
