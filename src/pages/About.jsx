import Top from '../components/about/Top';
import Content from '../components/about/Content';
import { Container } from '../components/about/About.style';

export default function About() {
  return (
    <>
      <Container>
        <Top />
        <Content />
      </Container>
    </>
  );
}
