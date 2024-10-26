import * as H from './Home.style';
import cdCaseImage from '../../assets/img/cd_case.svg';
import mainCdImage from '../../assets/img/main_cd.svg';

export default function Home() {
  return (
    <H.Container>
      <H.TextContainer>
        <H.Title>
          2024 <H.DS>DSWU CE</H.DS>
        </H.Title>
        <H.Wiscom>WISCOM</H.Wiscom>
        <H.SubTitle>: Play your Graduation</H.SubTitle>
        <H.Description>
          덕성여자대학교 컴퓨터공학전공 제 34회 졸업전시회
        </H.Description>
      </H.TextContainer>
      <H.ImageContainer>
        <H.Case data={cdCaseImage} />
        <H.Cd data={mainCdImage} />
      </H.ImageContainer>
    </H.Container>
  );
}
