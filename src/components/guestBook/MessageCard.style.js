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
  font-size: 30px;
  text-align: right; /* 가운데 정렬 */
  position: absolute; /* 절대 위치 */
  bottom: 20px; /* 아래쪽에서 여유 공간 */
  right:0;
  margin-right:25px;
  white-space: pre-wrap; /* 공백 및 줄바꿈을 유지한 채로 텍스트 줄바꿈 */
  word-break: break-word;
  
`;

export const MessageText = styled.p`
  color: black; /* 검정색 글자 */
  font-size: 25px;
  text-align: left;
  position: absolute;
  top: 25%; /* CD 이미지 안에서 더 위로 올려 배치 */
  left: 16%;
  max-height:300px;
  overflow:auto;
  
`;

export const ToText = styled.p`
  color: black; /* 검정색 글자 */
  font-size: 30px;
  text-align: left; /* 가운데 정렬 */
  position: absolute;
  top: 30px; /* 위쪽에 배치 */
  left: 60px;
  right: 0;
  white-space: pre-wrap; /* 공백 및 줄바꿈을 유지한 채로 텍스트 줄바꿈 */
  word-break: break-word;

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
  left: 55%;
  transform: translate(-50%, -50%);
  width: 350px;
  
  
`;

export const BarcodeImage = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
`;
