import Top from '../components/about/Top';
import HiddenContent from '../components/about/HiddenContent';
import { Container } from '../components/about/About.style';

export default function About() {
  return (
    <>
      <Container>
        <Top />
        <HiddenContent />
      </Container>
    </>
  );
}
