import React, { useState } from 'react';
import SendMessageButton from './button/SendMessageButton.jsx';
import ViewGuestBookButton from './button/ViewGuestBookButton.jsx';
import { Container, TextSection, InputSection, Input, TextArea, ButtonContainer } from './MessageInputSection.style.js';

const MessageInputSection = ({ onSendMessage, onViewGuestBook }) => {
  const [newMessage, setNewMessage] = useState({ to: '', from: '', message: '' });

  const handleSendClick = () => {
    if (!newMessage.to || !newMessage.from || !newMessage.message) {
      alert('모든 필드를 채워주세요.');
      return;
    }

    onSendMessage(newMessage);

    // 입력 필드 초기화
    setNewMessage({ to: '', from: '', message: '' });
  };

  return (
    <Container>
      <TextSection>
        새로운 여정을 시작하는<br /> 학생들에게<br />응원과 축하의 메시지를<br /> 남겨주세요
      </TextSection>

      <InputSection>
        <Input 
          type="text" 
          placeholder="To. 받는 사람" 
          value={newMessage.to}
          onChange={(e) => setNewMessage({ ...newMessage, to: e.target.value })}
        />
        <TextArea 
          placeholder="메시지를 입력하세요" 
          value={newMessage.message}
          onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
        />
        <Input 
          type="text" 
          placeholder="From. 보내는 사람" 
          value={newMessage.from}
          onChange={(e) => setNewMessage({ ...newMessage, from: e.target.value })}
        />

        <ButtonContainer>
          <ViewGuestBookButton onClick={onViewGuestBook} />
          <SendMessageButton onClick={handleSendClick} />
        </ButtonContainer>
      </InputSection>
    </Container>
  );
};

export default MessageInputSection;
