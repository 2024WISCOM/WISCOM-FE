import React from 'react';
import { CardContainer, CDContainer, ToText, MessageText,FromText, BarcodeImage, SignText, CDImage } from './MessageCard.style.js'; 
import cdImage from './img/CD1.png'; // CD 이미지 경로
import signText from './img/sign text.png';
import barcodeImage from './img/barcode.png';


const MessageCard = ({ to, from, message }) => {
  return (
    <CardContainer>
      <CDContainer>
        <CDImage src={cdImage} alt="CD" />
        <SignText src={signText} alt="서명" />
        <BarcodeImage src={barcodeImage} alt="바코드" />

        {/* 메시지 카드의 내용 */}
        <ToText><strong>To:</strong> {to}</ToText>
        <MessageText>{message}</MessageText>
        <FromText><strong>From:</strong> {from}</FromText>
      </CDContainer>
    </CardContainer>
  );
};


export default MessageCard;
