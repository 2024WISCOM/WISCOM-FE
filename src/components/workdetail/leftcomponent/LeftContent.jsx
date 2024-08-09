import * as L from './LeftContent.style';
import Image from './Image';
export default function LeftContent() {
  return (
    <L.LeftContentContainer>
      <Image
        src={
          'https://github.com/user-attachments/assets/a1e6e94c-90a3-41a1-aacf-61ddd773facd'
        }
      />
      <Image
        src={
          'https://github.com/user-attachments/assets/24f3aa84-0a00-47b6-9668-fce0c9823984'
        }
      />
      <Image src="https://github.com/user-attachments/assets/2a3c1301-797b-4ffd-87d9-01084f6cca93" />
      <Image src="https://github.com/user-attachments/assets/90b7e777-898c-40cd-8d09-ea8f6f2e5227" />
      <Image
        src={
          'https://github.com/user-attachments/assets/94b51e7c-74fb-4b08-afd0-9ef913487073'
        }
      />
      <Image src="https://github.com/user-attachments/assets/b7621f0a-0199-4cbc-aecc-be8c25e3a100" />
    </L.LeftContentContainer>
  );
}
