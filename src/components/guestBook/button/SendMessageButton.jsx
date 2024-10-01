// 메시지 전송하기 
import React from 'react';
import { SendButton } from './SendMessageButton'; // styled-components로 정의한 SendButton 가져오기

const SendMessageButton = ({ onClick, isActive }) => {
  return (
    <SendButton onClick={onClick} active={isActive}>
      메시지 전송하기
    </SendButton>
  );
};

export default SendMessageButton;
