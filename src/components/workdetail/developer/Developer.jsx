import * as D from './Developer.style';

export default function Developer({ name, role }) {
  const nameFormat = (name) => {
    // 이름이 외자인 경우
    if (name.length === 2) {
      return name[0] + '\u00A0' + name[1]; 
    }
    return name;
  };
  

  return (
    <D.DeveloperContainer>
      <D.DeveloperName isTwoCharacters={name.length === 2}>
        {nameFormat(name)}
      </D.DeveloperName>      <D.DeveloperPosition>{role}</D.DeveloperPosition>
    </D.DeveloperContainer>
  );
}
