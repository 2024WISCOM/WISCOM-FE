import React, { useEffect, useState } from 'react';
import SendMessageButton from './button/SendMessageButton.jsx'; 
import ViewGuestBookButton from './button/ViewGuestBookButton.jsx';
import { Container, TextSection, Input, TextArea, ButtonContainer, Label,CDContainer2,CDImage2,SignText2,BarcodeImage2 ,HighlightedText } from './MessageInputSection.style.js';
import SearchBar from './SearchBar.jsx';
import cdImage2 from './img/CD1.png';
import signText2 from './img/sign text.png'; 
import barcodeImage2 from './img/barcode.png'; 

const MessageInputSection = ({ onSendMessage, onViewGuestBook }) => {
  const [newMessage, setNewMessage] = useState({ to: '', from: '', message: '' });

  const [isMobile,setIsMobile] = useState(window.innerWidth <= 767); // 모바일 여부를 확인
  
  useEffect(()=> {
    const handleResize =() => {
      setIsMobile(window.innerWidth <=767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSendClick = () => {
    if (!newMessage.to || !newMessage.from || !newMessage.message) {
      alert('모든 칸을 작성해주세요.'); //이 메시지 ㄱㅊ한거 맞나 ?흐음 
      return;
    }

    onSendMessage(newMessage);
    setNewMessage({ to: '', from: '', message: '' });
  };

  const handleViewGuestBook = () => {
    if(messageGridRef.current){ // messageGrid 존재 유무 확인
    messageGrid.scrollIntoView({ behavior: 'smooth' }); // 부드러운 스크롤
    }
  };

  return (
    <Container>
      <TextSection>
      {isMobile ? (
        <>
          새로운 여정을 시작하는 학생들에게<br />
          응원과 축하의 메시지를 남겨주세요
        </>
      ) : (
        <>
          새로운 여정을 시작하는<br />
          학생들에게<br />
          응원과 축하의 메시지를<br />
          남겨주세요
        </>
      )}
    </TextSection>
   
    <CDContainer2>
      <CDImage2 src={cdImage2} alt="CD" />

        <Label className='to-label'>
          <HighlightedText>To.</HighlightedText>
          <Input 
          type="text" 
          placeholder="받는 사람" 
          value={newMessage.to}
          onChange={(e) => setNewMessage({ ...newMessage, to: e.target.value })}
          maxLength={8}
        />
        </Label>
        
        <TextArea 
          placeholder="메시지를 입력해주세요" 
          value={newMessage.message}
          onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
         
        />
        <Label className='from-label'length={newMessage.from.length}>
          <HighlightedText>From.</HighlightedText>
          <Input className='from'
          type="text" 
          placeholder="보내는 사람" 
          value={newMessage.from}
          onChange={(e) => setNewMessage({ ...newMessage, from: e.target.value })}
          maxLength={8}
        />
        </Label>

        <BarcodeImage2 src={barcodeImage2} alt="Barcode" />
        <SignText2 src={signText2} alt="Sign" />

      </CDContainer2>

      <ButtonContainer>
          <ViewGuestBookButton onClick={onViewGuestBook} />
          <SendMessageButton onClick={handleSendClick} />
      </ButtonContainer>

      {isMobile && <SearchBar />}
    </Container>
  );
};

export default MessageInputSection;
