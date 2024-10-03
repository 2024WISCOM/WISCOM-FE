import React from 'react';
import { CardContainer, CDContainer, CDImage, ToText, MessageText, FromText, BarcodeImage, SignText } from './MessageCard.style';
import cdImage from './img/CD1.png'; // CD 이미지 경로
import signText from './img/sign text.png'; // 사인 텍스트 이미지 경로
import barcodeImage from './img/barcode.png'; // 바코드 이미지 경로

const MessageCard = ({ to, from, message }) => {
  return (
    <CardContainer>
      <CDContainer>
        {/* CD 이미지 */}
        <CDImage src={cdImage} alt="CD" />

        {/* 메시지 카드의 내용 */}
        <ToText><strong>To:</strong> {to}</ToText>
        <MessageText>{message}</MessageText>
        <FromText><strong>From:</strong> {from}</FromText>

        {/* 바코드 및 서명 이미지 */}
        <BarcodeImage src={barcodeImage} alt="Barcode" />
        <SignText src={signText} alt="Sign" />
      </CDContainer>
    </CardContainer>
  );
};

export default MessageCard;
