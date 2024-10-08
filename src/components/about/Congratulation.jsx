import { useState, useEffect } from 'react';
import * as A from './About.style';
import gyeona from '../../assets/img/professor/gyeona.svg';
import woochang from '../../assets/img/professor/woochang.svg';
import seunghoon from '../../assets/img/professor/seunghoon.svg';
import gyeongmi from '../../assets/img/professor/gyeongmi.svg';
import jooyeong from '../../assets/img/professor/jooyeong.svg';
import Modal from './Modal';

export default function Congratulation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({ name: '', image: '' });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = (person) => {
    let personData;
    if (person === '박우창') {
      personData = { name: '박우창', image: woochang };
    } else if (person === '최승훈') {
      personData = { name: '최승훈', image: seunghoon };
    } else if (person === '이경미') {
      personData = { name: '이경미', image: gyeongmi };
    } else if (person === '이주영') {
      personData = { name: '이주영', image: jooyeong };
    }

    setSelectedPerson(personData);

    if (windowWidth <= 480) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPerson({ name: '', image: '' });
  };

  return (
    <>
      <A.CongratWrapper>
        {isModalOpen && <Modal person={selectedPerson} onClose={closeModal} />}
        <A.MainProfWrap>
          <A.ProfWrap>
            <A.Prof src={gyeona} />
            <A.ProfName>유견아 교수님</A.ProfName>
          </A.ProfWrap>
          <A.ProfMsg>
            덕성여자대학교 컴퓨터공학전공 제19대 학생회 PLUG는 해당 전공에
            소속된 학생 가운데 가장 성실하고 책임감 있는 10명의 인원이 모여
            구성되었다. 그 중에서도 회장단은 전공 내 크고 작은 행사를 주관하며
            다양한 실무능력을 축적해 온 유능한 복합형 인재로서, 이들의 적극적인
            주도하에 총 4명의 인원이 졸업전시위원회 기획/디자인팀으로 일하고
            있다. 한편, 현재 메시지 영역은 가로 300px 세로 200px의 크기로
            이루어져 있다. 올바른 화면구현과 데이터 취급을 위해 입력받을 값의
            크기를 지정하고, 스크롤 처리 여부를 결정해야 할 것으로 판단된다.
          </A.ProfMsg>
        </A.MainProfWrap>
        {windowWidth <= 480 ? (
          <MobileProfMsg />
        ) : (
          <A.UnderProfWrap>
            <A.ProfWrap onClick={() => openModal('박우창')}>
              <A.Prof src={woochang} />
              <A.ProfName>박우창 교수님</A.ProfName>
            </A.ProfWrap>
            <A.ProfWrap onClick={() => openModal('이경미')}>
              <A.Prof src={gyeongmi} />
              <A.ProfName>이경미 교수님</A.ProfName>
            </A.ProfWrap>
            <A.ProfWrap onClick={() => openModal('이주영')}>
              <A.Prof src={jooyeong} />
              <A.ProfName>이주영 교수님</A.ProfName>
            </A.ProfWrap>
            <A.ProfWrap onClick={() => openModal('최승훈')}>
              <A.Prof src={seunghoon} />
              <A.ProfName>최승훈 교수님</A.ProfName>
            </A.ProfWrap>
          </A.UnderProfWrap>
        )}
      </A.CongratWrapper>
    </>
  );
}

function MobileProfMsg() {
  return (
    <>
      <A.MainProfWrap>
        <A.ProfWrap>
          <A.Prof src={woochang} />
          <A.ProfName>박우창 교수님</A.ProfName>
        </A.ProfWrap>
        <A.ProfMsg>
          덕성여자대학교 컴퓨터공학전공 제19대 학생회 PLUG는 해당 전공에 소속된
          학생 가운데 가장 성실하고 책임감 있는 10명의 인원이 모여 구성되었다.
          그 중에서도 회장단은 전공 내 크고 작은 행사를 주관하며 다양한
          실무능력을 축적해 온 유능한 복합형 인재로서, 이들의 적극적인 주도하에
          총 4명의 인원이 졸업전시위원회 기획/디자인팀으로 일하고 있다. 한편,
          현재 메시지 영역은 가로 300px 세로 200px의 크기로 이루어져 있다.
          올바른 화면구현과 데이터 취급을 위해 입력받을 값의 크기를 지정하고,
          스크롤 처리 여부를 결정해야 할 것으로 판단된다.
        </A.ProfMsg>
      </A.MainProfWrap>
      <A.MainProfWrap>
        <A.ProfWrap>
          <A.Prof src={gyeongmi} />
          <A.ProfName>이경미 교수님</A.ProfName>
        </A.ProfWrap>
        <A.ProfMsg>
          덕성여자대학교 컴퓨터공학전공 제19대 학생회 PLUG는 해당 전공에 소속된
          학생 가운데 가장 성실하고 책임감 있는 10명의 인원이 모여 구성되었다.
          그 중에서도 회장단은 전공 내 크고 작은 행사를 주관하며 다양한
          실무능력을 축적해 온 유능한 복합형 인재로서, 이들의 적극적인 주도하에
          총 4명의 인원이 졸업전시위원회 기획/디자인팀으로 일하고 있다. 한편,
          현재 메시지 영역은 가로 300px 세로 200px의 크기로 이루어져 있다.
          올바른 화면구현과 데이터 취급을 위해 입력받을 값의 크기를 지정하고,
          스크롤 처리 여부를 결정해야 할 것으로 판단된다.
        </A.ProfMsg>
      </A.MainProfWrap>
      <A.MainProfWrap>
        <A.ProfWrap>
          <A.Prof src={jooyeong} />
          <A.ProfName>이주영 교수님</A.ProfName>
        </A.ProfWrap>
        <A.ProfMsg>
          덕성여자대학교 컴퓨터공학전공 제19대 학생회 PLUG는 해당 전공에 소속된
          학생 가운데 가장 성실하고 책임감 있는 10명의 인원이 모여 구성되었다.
          그 중에서도 회장단은 전공 내 크고 작은 행사를 주관하며 다양한
          실무능력을 축적해 온 유능한 복합형 인재로서, 이들의 적극적인 주도하에
          총 4명의 인원이 졸업전시위원회 기획/디자인팀으로 일하고 있다. 한편,
          현재 메시지 영역은 가로 300px 세로 200px의 크기로 이루어져 있다.
          올바른 화면구현과 데이터 취급을 위해 입력받을 값의 크기를 지정하고,
          스크롤 처리 여부를 결정해야 할 것으로 판단된다.
        </A.ProfMsg>
      </A.MainProfWrap>
      <A.MainProfWrap>
        <A.ProfWrap>
          <A.Prof src={seunghoon} />
          <A.ProfName>최승훈 교수님</A.ProfName>
        </A.ProfWrap>
        <A.ProfMsg>
          덕성여자대학교 컴퓨터공학전공 제19대 학생회 PLUG는 해당 전공에 소속된
          학생 가운데 가장 성실하고 책임감 있는 10명의 인원이 모여 구성되었다.
          그 중에서도 회장단은 전공 내 크고 작은 행사를 주관하며 다양한
          실무능력을 축적해 온 유능한 복합형 인재로서, 이들의 적극적인 주도하에
          총 4명의 인원이 졸업전시위원회 기획/디자인팀으로 일하고 있다. 한편,
          현재 메시지 영역은 가로 300px 세로 200px의 크기로 이루어져 있다.
          올바른 화면구현과 데이터 취급을 위해 입력받을 값의 크기를 지정하고,
          스크롤 처리 여부를 결정해야 할 것으로 판단된다.
        </A.ProfMsg>
      </A.MainProfWrap>
    </>
  );
}
