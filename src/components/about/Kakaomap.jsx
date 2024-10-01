import { useEffect } from 'react';

const { kakao } = window;

export default function Kakaomap() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.655336291520875, 127.04801288120866),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(
      37.655336291520875,
      127.04801288120866,
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '100%',
        margin: '0',
      }}
    ></div>
  );
}
