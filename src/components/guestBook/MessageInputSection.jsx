import React, { useState } from 'react';
import SendMessageButton from './button/SendMessageButton.jsx'; 
import ViewGuestBookButton from './button/ViewGuestBookButton.jsx';
import { Container, TextSection, InputSection, Input, TextArea, ButtonContainer, Label, HighlightedText } from './MessageInputSection.style.js';

const MessageInputSection = ({ onSendMessage, onViewGuestBook }) => {
  const [newMessage, setNewMessage] = useState({ to: '', from: '', message: '' });

  const handleSendClick = () => {
    if (!newMessage.to || !newMessage.from || !newMessage.message) {
      alert('모든 필드를 채워주세요.');
      return;
    }

    onSendMessage(newMessage);
    setNewMessage({ to: '', from: '', message: '' });
  };

  const handleViewGuestBook = () => {
    const messageGrid = document.getElementById('messageGrid'); // messageGrid의 ID를 사용
    messageGrid.scrollIntoView({ behavior: 'smooth' }); // 부드러운 스크롤
  };

  return (
    <Container>
      <TextSection>
        새로운 여정을 시작하는<br /> 학생들에게<br />응원과 축하의 메시지를<br /> 남겨주세요
      </TextSection>

      <InputSection>
        <Label className='to-label'>
          <HighlightedText>To.</HighlightedText> 
          <Input 
          type="text" 
          placeholder="받는 사람" 
          value={newMessage.to}
          onChange={(e) => setNewMessage({ ...newMessage, to: e.target.value })}
          maxLength={10}
        />
        </Label>
        
        <TextArea 
          placeholder="메시지를 입력하세요" 
          value={newMessage.message}
          onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
          maxLength={300}
        />
        <Label className='from-label'>
          <HighlightedText>From.</HighlightedText> 
          <Input className='from'
          type="text" 
          placeholder="보내는 사람" 
          value={newMessage.from}
          onChange={(e) => setNewMessage({ ...newMessage, from: e.target.value })}
          maxLength={10}
        />
        </Label>

        <ButtonContainer>
          <ViewGuestBookButton onClick={handleViewGuestBook} />
          <SendMessageButton onClick={handleSendClick} />
        </ButtonContainer>
      </InputSection>
    </Container>
  );
};

export default MessageInputSection;
