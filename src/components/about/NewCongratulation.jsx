import { useState, useEffect } from 'react';
import * as A from './About.style';
import seunghoon from '../../assets/img/professor/seunghoon.svg';

export default function NewCongratulation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <A.CongratWrapper>
        <A.MainChoiWrap>
          <A.ProfChoiWrap>
            <A.Prof data={seunghoon} />
            <A.ProfName>최승훈 교수님</A.ProfName>
          </A.ProfChoiWrap>
          {windowWidth > 480 ? (
            <A.ProfMsg>
              졸업생 여러분!
              <br /> 2024학년도 컴퓨터공학전공 졸업작품 전시회인 위즈컴 개최를
              진심으로 축하드립니다.
              <br />
              <br /> 4년 동안 갈고닦은 실력을 유감없이 발휘하여 끝까지 졸업 작품
              완성을 위해 노력한 여러분 모두가 자랑스럽습니다. 여러분들의 졸업
              작품은 단순한 결과물을 넘어, 끊임없이 변화하는 IT 시대를 이끌어갈
              젊은 여성 인재들의 꿈과 열정을 보여주는 증표입니다.
              <br />
              <br /> 이러한 경험은 여러분의 삶에 값진 자산이 될 것입니다. 앞으로
              사회에 나가서도 자신감을 가지고 컴퓨터공학 분야에서 멋진 활약을
              펼쳐나가기를 응원합니다.
              <br />
              <br /> 모두들 수고 많았습니다.
            </A.ProfMsg>
          ) : (
            <A.ProfMsg>
              졸업생 여러분!
              <br /> 2024학년도 컴퓨터공학전공 졸업작품 전시회인 위즈컴 개최를
              진심으로 축하드립니다.
              <br />
              <br /> 4년 동안 갈고닦은 실력을 유감없이 발휘하여 끝까지 졸업 작품
              완성을 위해 노력한 여러분 모두가 자랑스럽습니다.
              <br /> 여러분들의 졸업 작품은 단순한 결과물을 넘어,
              <br /> 끊임없이 변화하는 IT 시대를 이끌어갈 젊은 여성 인재들의
              꿈과 열정을 보여주는 증표입니다.
              <br />
              <br /> 이러한 경험은 여러분의 삶에 값진 자산이 될 것입니다.
              <br /> 앞으로 사회에 나가서도 자신감을 가지고 컴퓨터공학 분야에서
              멋진 활약을 펼쳐나가기를 응원합니다.
              <br />
              <br /> 모두들 수고 많았습니다.
            </A.ProfMsg>
          )}
        </A.MainChoiWrap>
      </A.CongratWrapper>
    </>
  );
}
