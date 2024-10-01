import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

//cd 이미지 및 관련 내용 
export const CDContainer = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const FromText = styled.p`
  color: black; /* 검정색 글자 */
  font-size: 14px;
  text-align: center; /* 가운데 정렬 */
  position: absolute; /* 절대 위치 */
  bottom: 10px; /* 아래쪽에서 여유 공간 */
  left: 0;
  right: 0;
`;

export const MessageText = styled.p`
  color: black; /* 검정색 글자 */
  font-size: 16px;
  text-align: center; /* 가운데 정렬 */
  position: absolute;
  top: 40%; /* CD 이미지 안에서 더 위로 올려 배치 */
  left: 50%;
  transform: translate(-50%, -50%); /* 가운데 정렬을 위해 좌우로 이동 */
`;

export const ToText = styled.p`
  color: black; /* 검정색 글자 */
  font-size: 14px;
  text-align: center; /* 가운데 정렬 */
  position: absolute;
  top: 10px; /* 위쪽에 배치 */
  left: 0;
  right: 0;
`;



export const CDImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const SignText = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
`;

export const BarcodeImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
`;
