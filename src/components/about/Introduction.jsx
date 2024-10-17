import * as A from './About.style';
import poster from '../../assets/img/final_poster.svg';

export default function Introduction() {
  return (
    <A.Wrapper>
      <A.Inter2>아이덴티티</A.Inter2>
      <A.Identity>
        <A.Poster src={poster} />
        <A.Text>
          모든 이야기가 그렇듯, 시작이 있다면 끝이 다가오기 마련입니다. 다만,
          마지막은 항상 아쉬움을 남기기에 우리는 순간순간을 기록합니다. 꿈과
          미래를 그리며 웃고 울었던 시간, 동기들과 쌓아온 소중한 추억, 그리고
          성장과 배움이 가득했던 순간들까지.
          <br /> 이 모든 기억들을 영원히 간직하기 위해, 오랫동안 보관할 수
          있으며 언제든 다시 꺼내어 감상할 수 있는 CD에 우리의 작품을
          담았습니다. 우주의 어둠 속에서도 빛나는 별처럼, 우리의 작품들은 각자의
          개성과 이야기를 조명합니다. 끊임없는 노력과 열정이 담긴 CD를 재생할
          때, 그동안의 추억은 앞으로 나아갈 수 있는 발판이 될 것입니다.
          <br /> 이제 우리의 CD는 책장 한켠에 넣어두고, 새로운 이야기를 써
          내려가려 합니다. 그 시작의 첫걸음이 되어줄 '2024 WISCOM'이 여러분의
          마음 속에도 새겨지길 바랍니다. 이 작은 원반 속에 담긴 우리의 무한한
          가능성과 시작의 용기를 기억하며, Play Your Graduation!
        </A.Text>
      </A.Identity>
      <A.Inter2>졸업전시준비위원회</A.Inter2>
      <A.PeopleWrap>
        <A.People1>
          <A.Part>위&nbsp;&nbsp;원&nbsp;&nbsp;장</A.Part>
          <A.Inter3>황민지</A.Inter3>
        </A.People1>
        <A.People1>
          <A.Part>부위원장</A.Part>
          <A.Inter3>이채은</A.Inter3>
        </A.People1>
      </A.PeopleWrap>
      <A.PeopleWrap>
        <A.People>
          <A.Part>Plan&Design</A.Part>
          <A.Inter3>김희원 이채은 장은선 황민지</A.Inter3>
        </A.People>
        <A.People>
          <A.Part>Front-end&nbsp;&nbsp;&nbsp;&nbsp;</A.Part>
          <A.Inter3>김미주 김은서 남시윤 최유리</A.Inter3>
        </A.People>
        <A.People>
          <A.Part>Back-end&nbsp;&nbsp;&nbsp;&nbsp;</A.Part>
          <A.Inter3>김은서 김희원 박효진 조수민 황민지</A.Inter3>
        </A.People>
      </A.PeopleWrap>
    </A.Wrapper>
  );
}
