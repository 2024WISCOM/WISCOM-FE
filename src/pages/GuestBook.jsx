import React, { useState, useEffect, useRef } from 'react';
import { GuestBookContainer } from '../components/guestBook/GuestBook.style';
import MessageInputSection from '../components/guestBook/MessageInputSection';
import MessageGrid from '../components/guestBook/MessageGrid';
import Pagination from '../components/guestBook/Pagination';
import SearchBar from '../components/guestBook/SearchBar';


const API_BASE_URL = 'https://2024wiscom-backend.store/api/guestbook';

const GuestBook = () => {
  const [messages, setMessages] = useState([]);
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
      setMesagesPerPage(window.innerWidth <= 767? 6:9);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  // 메시지 목록을 가져오는 함수
  const fetchMessages = async (page, size) => {
    setLoading(true); // 로딩 시작
    try {
      const response = await fetch(`${API_BASE_URL}?page=${page - 1}&size=${size}&search=${searchTerm}`);
      const data = await response.json();
      const sortedGuestBooks = data.data.guestBooks.sort((a, b) => b.id - a.id);

      setMessages(sortedGuestBooks); // 최신순으로 정렬된 데이터 설정
      setTotalPages(data.data.totalPages);
    } catch (error) {
      console.error('메시지 목록을 불러오는 중 오류 발생:', error);
    } finally {
      setLoading(false); // 로딩 끝
    }
  };

  useEffect(() => {
    fetchMessages(currentPage, messagesPerPage);
  }, [currentPage, searchTerm]);

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

      setMessages((prevMessages) => [savedMessage.data, ...prevMessages]);

      setCurrentPage(1); // 새로운 메시지를 1페이지에 추가 후 1페이지로 이동
    } catch (error) {
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

  // 검색 핸들러
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
  };

  return (
    <GuestBookContainer>
      {/* 상단 메시지 입력 섹션 */}
      <MessageInputSection onSendMessage={addMessage} onViewGuestBook={handleViewGuestBook} /> {/* 스크롤 핸들러 추가 */}

      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <>
          {/* 검색바 추가 */}
          <SearchBar onSearch={handleSearch}isMobile={isMobile} />

          {/* 메시지 목록 섹션 */}
          <div id="messageGrid" ref={messageGridRef} >
            <MessageGrid messages={messages.slice(0, messagesPerPage)} /> {/* 1페이지에 9개의 메시지 표시 */}
          </div>
          
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
      )}
    </GuestBookContainer>
  );
};

export default GuestBook;