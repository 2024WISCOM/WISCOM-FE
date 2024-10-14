import * as A from './About.style';
import Kakaomap from './Kakaomap';
import exhibition_map from '../../assets/img/exhibition_map.svg';

export default function Map() {
  const studio01 = [
    {
      team: '부모클래스 : 부모 자녀 관계 향상 서비스',
      member: '| 박윤서 박세연 이수아 조남윤',
    },
    {
      team: '팜트래커(PharmTracker) : 노인, 중장년층을 위한 의약품 정보 제공 서비스',
      member: '| 고윤아 김민희 권서희 조유진',
    },
    {
      team: '혈당히어로 : 객체 검출 모델 기반 당뇨병 환자 레시피 추천 서비스',
      member: '| 오윤지 이세이 조은서',
    },
    {
      team: 'PETECTIVE : 딥러닝 이미지 검색을 통한 실종 반려동물 찾기',
      member: '| 박지현 왕예진 정혜연',
    },
  ];

  const studio02 = [
    {
      team: '길고양이 급식소 관리 애플리케이션 MAMMA-MYA',
      member: '| 김은서 양지선 정해인 홍수연',
    },
    {
      team: '동고동락 : 대화형 AI 기반의 동화 체험 컨텐츠',
      member: '| 남서현 노하림 백소민 신하늘 한진경',
    },
  ];

  const studio03 = [
    {
      team: 'AI 기술을 이용한 스마트 전동킥보드 안전 시스템',
      member: '| 김정은 김현진 박효영 이민영',
    },
    {
      team: 'Plotter : NLP 기반 소설 IP 확장 솔루션',
      member: '| 김혜수 류영주 유수연 황성민',
    },
    {
      team: '현대인의 수면질 향상을 위한 생체 데이터 기반, 수면IoT',
      member: '| 김지연 정현조 최연 홍가영',
    },
  ];

  const studio04 = [
    {
      team: '더즐(Duzzle) : 블록체인 기반 덕성여대 캠퍼스 NFT 수집 웹게임',
      member: '| 박효원 윤서영 이서현 최혜림',
    },
    {
      team: '인공지능(AI) 기반의 포트홀 탐지 및 차량 손상 방지 시스템',
      member: '| 신민서 윤정원 이규민 장지은',
    },
    {
      team: 'AI 챗봇 기반의 복지 정보 제공 플랫폼',
      member: '| 고현정 박은진 양유진 유수현',
    },
    {
      team: 'Scentasy : 채팅 기반 AI 맞춤형 향수 조합 플랫폼',
      member: '| 김나령 박서진 선가연 정다교',
    },
  ];

  const studio05 = [
    {
      team: '톡파서블(TalkPossible) : 음성 분석과 동작 인식 기술을 결합한 생성형 AI 기반 대화 시뮬레이션 서비스',
      member: '| 김수연 신정윤 양희정 이유종 정은채',
    },
  ];

  const studio06 = [
    {
      team: 'VR을 이용한 역사 속 주인공 체험',
      member: '| 강수민 김지민 권희원 이우현',
    },
  ];

  const studio10 = [
    {
      team: 'SAFE-CID : 범죄 예방 디자인을 위한 gis 데이터 및 생성형 ai 활용',
      member: '| 박현수 박현지 유예원 정지영',
    },
  ];

  return (
    <A.MapContainer>
      <A.MapTitle>오시는 길</A.MapTitle>
      <A.MapWrap>
        <A.Kakaomap>
          <Kakaomap />
        </A.Kakaomap>
        <A.InfoWrap>
          <A.MapHead>전시장 안내</A.MapHead>
          <A.TextWrap>
            <A.MapText>
              장&nbsp;&nbsp;&nbsp;&nbsp;소 | 서울특별시 도봉구 마들로 13길 84
              서울 창업허브 창동
            </A.MapText>
            <A.MapText>
              일&nbsp;&nbsp;&nbsp;&nbsp;시 | 2024. 10. 29. 화 - 30. 수
            </A.MapText>
          </A.TextWrap>
          <A.MapHead>교통편</A.MapHead>
          <A.TextWrap>
            <A.MapTextWrap>
              <A.MapText>지하철&nbsp;</A.MapText>
              <A.Bar>|</A.Bar>
              <A.MapText style={{ flexGrow: 1 }}>
                &nbsp;1, 4호선 - 창동역
              </A.MapText>
            </A.MapTextWrap>
            <A.MapTextWrap>
              <A.MapText>버&nbsp;&nbsp;&nbsp;스&nbsp;</A.MapText>
              <A.Bar>|</A.Bar>
              <A.MapText style={{ flexGrow: 1 }}>
                &nbsp;1119, 노원 15, 도봉 01, 도봉 08, 도봉 09
              </A.MapText>
            </A.MapTextWrap>
          </A.TextWrap>
          <A.MapHead>주차장</A.MapHead>
          <A.TextWrap>
            <A.MapText>주차장 | 지하 주차장 이용 가능</A.MapText>
            <A.MapText>
              주차비 | 하루에 최대 만원 (30분 무료, 그 이후 10분당 500원)
            </A.MapText>
            <A.MapText style={{ width: '100%' }}>
              • 만차 시, 창동 공영 주차장을 이용해 주시길 바랍니다.
            </A.MapText>
          </A.TextWrap>
        </A.InfoWrap>
      </A.MapWrap>
      <A.MapTitle>전시회 지도</A.MapTitle>
      <A.MapWrap>
        <A.ExhibitionMap src={exhibition_map} />
        <A.StudioWrap>
          {studio01.map((data) => (
            <A.TeamWrap>
              <A.Studio01>01</A.Studio01>
              <A.SubTeamWrap>
                <A.Team>{data.team}</A.Team>
                <A.TeamMember>{data.member}</A.TeamMember>
              </A.SubTeamWrap>
            </A.TeamWrap>
          ))}
          {studio02.map((data) => (
            <A.TeamWrap>
              <A.Studio02>02</A.Studio02>
              <A.SubTeamWrap>
                <A.Team>{data.team}</A.Team>
                <A.TeamMember>{data.member}</A.TeamMember>
              </A.SubTeamWrap>
            </A.TeamWrap>
          ))}
          {studio03.map((data) => (
            <A.TeamWrap>
              <A.Studio03>03</A.Studio03>
              <A.SubTeamWrap>
                <A.Team>{data.team}</A.Team>
                <A.TeamMember>{data.member}</A.TeamMember>
              </A.SubTeamWrap>
            </A.TeamWrap>
          ))}
          {studio04.map((data) => (
            <A.TeamWrap>
              <A.Studio04>04</A.Studio04>
              <A.SubTeamWrap>
                <A.Team>{data.team}</A.Team>
                <A.TeamMember>{data.member}</A.TeamMember>
              </A.SubTeamWrap>
            </A.TeamWrap>
          ))}
          {studio05.map((data) => (
            <A.TeamWrap>
              <A.Studio05>05</A.Studio05>
              <A.SubTeamWrap>
                <A.Team>{data.team}</A.Team>
                <A.TeamMember>{data.member}</A.TeamMember>
              </A.SubTeamWrap>
            </A.TeamWrap>
          ))}
          {studio06.map((data) => (
            <A.TeamWrap>
              <A.Studio06>06</A.Studio06>
              <A.SubTeamWrap>
                <A.Team>{data.team}</A.Team>
                <A.TeamMember>{data.member}</A.TeamMember>
              </A.SubTeamWrap>
            </A.TeamWrap>
          ))}
          {studio10.map((data) => (
            <A.TeamWrap>
              <A.Studio10>10</A.Studio10>
              <A.SubTeamWrap>
                <A.Team>{data.team}</A.Team>
                <A.TeamMember>{data.member}</A.TeamMember>
              </A.SubTeamWrap>
            </A.TeamWrap>
          ))}
        </A.StudioWrap>
      </A.MapWrap>
    </A.MapContainer>
  );
}
