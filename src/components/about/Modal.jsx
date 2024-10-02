import * as A from './About.style';
import woochang from '../../assets/img/professor/woochang.svg';
import seunghoon from '../../assets/img/professor/seunghoon.svg';
import gyeongmi from '../../assets/img/professor/gyeongmi.svg';
import jooyeong from '../../assets/img/professor/jooyeong.svg';

export default function Modal({ person, onClose }) {
  return (
    <A.ModalContainer>
      <A.CloseBtn onClick={onClose}>CLOSE X</A.CloseBtn>
      <A.ModalWrap>
        <A.ProfWrap>
          <A.Prof src={person.image} />
          <A.ModalProfName>{person.name} 교수님</A.ModalProfName>
        </A.ProfWrap>
        <A.ModalText>
          덕성여자대학교 컴퓨터공학전공 제19대 학생회 PLUG는 해당 전공에 소속된
          학생 가운데 가장 성실하고 책임감 있는 10명의 인원이 모여 구성되었다.
          그 중에서도 회장단은 전공 내 크고 작은 행사를 주관하며 다양한
          실무능력을 축적해 온 유능한 복합형 인재로서, 이들의 적극적인 주도하에
          총 4명의 인원이 졸업전시위원회 기획/디자인팀으로 일하고 있다.
        </A.ModalText>
      </A.ModalWrap>
    </A.ModalContainer>
  );
}
