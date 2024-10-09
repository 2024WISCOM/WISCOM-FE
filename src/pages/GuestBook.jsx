import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GuestBookContainer } from '../components/guestBook/GuestBook.style';
import MessageInputSection from '../components/guestBook/MessageInputSection';
import MessageGrid from '../components/guestBook/MessageGrid';
import Pagination from '../components/guestBook/Pagination';
import SearchBar from '../components/guestBook/SearchBar';


const API_BASE_URL = 'https://2024wiscom-backend.store/api/guestbook';

const GuestBook = () => {
  const [messages, setMessages] = useState([]); //모든 메시지
  const [filteredMessages, setFilteredMessages] = useState([]);  // 검색된 메시지
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [messagesPerPage , setMessagesPerPage] = useState(window.innerWidth<= 767 ? 6 : 9);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const messageGridRef = useRef(null); // Ref to scroll to
  const [isMobile, setIsMobile ]=useState(window.innerWidth <= 767 );
  
   // 윈도우 리사이즈 이벤트를 감지해 모바일 상태 업데이트
   useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setMessagesPerPage(window.innerWidth <= 767? 6:9);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  
  // 메시지 목록을 가져오는 함수
  const fetchMessages = async () => {
    setLoading(true); //로딩시작 
    try {
      const response = await fetch(`${API_BASE_URL}?page=0&size=100`);  // 최대 100개의 메시지를 불러옴
      if (!response.ok) throw new Error('Failed to fetch messages');
      const data = await response.json();
      
      console.log('Fetched Messages:', data.data.guestBooks);  // 디버깅용 API 응답 로그

      setMessages(data.data.guestBooks);  // 전체 메시지 저장
      setFilteredMessages(data.data.guestBooks);  // 필터된 메시지도 전체로 초기화

      const calculatedTotalPAges = Math.ceil(data.data.guestBooks.length/messagesPerPage);
      setTotalPages(calculatedTotalPAges);
    } catch (error) {
      console.error('메시지 목록을 불러오는 중 오류 발생:', error);
    }finally{
      setLoading(false); //로딩 끝
    }
  };


  useEffect(() => {
    fetchMessages(); //컴포넌트가 처음 렌더링될때 전체 메세지르ㄹ  가져옴 
  }, [messagesPerPage]);

  // 검색어에 따라 메시지를 필터링하는 함수
  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log('Search term:', term);  // 디버깅용 검색어 출력

    if (term === '') {
      setFilteredMessages(messages);  // 검색어가 없으면 전체 메시지 표시
      const calculatedTotalPages = Math.ceil(messages.length / messagesPerPage);
      setTotalPages(calculatedTotalPages); // 전체 메시지로 돌아갈 때 페이지 수 계산
      setCurrentPage(1); // 전체 메시지를 보여줄 때도 첫 페이지로 이동
    } else {
      const filtered = messages.filter((msg) => {
        // 각 필드에 있는 값을 로그로 출력하여 확인
        console.log('msg.to:', msg.to, 'msg.from:', msg.from, 'msg.message:', msg.message);
  
        return (
          (msg.recipient || '').toString().includes(term) ||  // to 필드에서 검색
          (msg.message || '').toString().includes(term) ||  // message 필드에서 검색
          (msg.author|| '').toString().includes(term)  // from 필드에서 검색
        );
      });
      console.log('Filtered Messages:', filtered);  // 디버깅용 필터링된 메시지 출력
      setFilteredMessages(filtered);  // 필터링된 메시지 설정

      //필터링된 메세지로 페이지 수 재계산 
      const calculatedTotalPAges = Math.ceil(filtered.length/messagesPerPage);
      setTotalPages(calculatedTotalPAges);
      setCurrentPage(1); //필터링할 때 첫 페이지로 이동 
    }
  };

  // 현재 페이지에 맞는 메시지를 보여줌
  const currentMessages = filteredMessages.slice(
    (currentPage - 1) * messagesPerPage,
    currentPage * messagesPerPage
  );


  // 메시지 전송 함수
  const addMessage = async (newMessage) => {
    try {
      const response = await fetch(`${API_BASE_URL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient: newMessage.to,
          author: newMessage.from,
          message: newMessage.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`서버 응답 오류: ${response.statusText}`);
      }

      const savedMessage = await response.json();
      
      //새로운 메시지 방명록에 바로 추가
      const updatedMessages = [savedMessage.data, ...messages];
      setMessages(updatedMessages);

      //페이지 수 재계산 (새로운 메시지 퐇함해서)
      const newTotalPages = Math.ceil(updatedMessages.length/messagesPerPage);
      setTotalPages(newTotalPages);

      // 필터된 메시지 배열도 업데이트
      setFilteredMessages([savedMessage.data, ...filteredMessages]);
      setCurrentPage(1);  // 새로운 메시지를 추가한 후 1페이지로 이동
      
    }catch (error) {
      console.error('메시지 전송 중 오류 발생:', error);
      alert(`메시지 전송에 실패했습니다: ${error.message}`);
    }
  };

  // 방명록 보러가기 버튼 클릭 시 스크롤 처리
  const handleViewGuestBook = () => {
    if (messageGridRef.current) {
      messageGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  


  return (
    <GuestBookContainer>
      {/* 상단 메시지 입력 섹션 */}
      <MessageInputSection onSendMessage={addMessage} onViewGuestBook={handleViewGuestBook} /> 스크롤 핸들러 추가
      

      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <>
          {/* 검색바 추가 */}
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
            isMobile={isMobile} 
            />

          {/* 메시지 목록 섹션 */}
          <div id="messageGrid" ref={messageGridRef} >
            <MessageGrid messages={currentMessages} /> 1페이지에 9개의 메시지 표시
          </div>
           
           {/* 페이지네이션 표시 */}
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
            />
        </>
      )}
    </GuestBookContainer>
  );
};

export default GuestBook;