import * as A from './About.style';
import Kakaomap from './Kakaomap';

export default function Map() {
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
              장소 | 서울특별시 도봉구 마들로 13길 84 서울 창업허브 창동
            </A.MapText>
            <A.MapText>일시 | 2024. 10. 29. 화 - 30. 수</A.MapText>
          </A.TextWrap>
          <A.MapHead>교통편</A.MapHead>
          <A.TextWrap>
            <A.MapText> • 지하철: 1, 4호선 - 창동역</A.MapText>
            <A.MapText>
              • 버스: 1119, 노원 15, 도봉 01, 도봉 08, 도봉 09 <br />
              &nbsp;&nbsp; 창동역동측 하차 <br />
              &nbsp;&nbsp; 환승 주차장 사거리에서 농협 반대 방향 직진 후 우측
              건물
            </A.MapText>
          </A.TextWrap>
          <A.MapHead>주차장</A.MapHead>
          <A.TextWrap>
            <A.MapText> • 전시장 내 지하 주차장 이용 가능</A.MapText>
            <A.MapText>
              • 만차 시, 창동 공영 주차장을 이용해 주시길 바랍니다.
            </A.MapText>
          </A.TextWrap>
        </A.InfoWrap>
      </A.MapWrap>
    </A.MapContainer>
  );
}
