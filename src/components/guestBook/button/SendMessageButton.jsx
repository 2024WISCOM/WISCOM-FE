import React, { useState } from 'react';
import { SendButton } from './SendMessageButton'; // styled-components로 정의한 SendButton 가져오기

const SendMessageButton = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = async () => {
    if (isActive) return; // 버튼이 이미 활성화된 상태라면 무시
    setIsActive(true);

    // 비동기적으로 onClick 함수 실행
    await onClick();

    setTimeout(() => {
      setIsActive(false); // 3초 후 버튼 상태 초기화
    }, 3000);
  };

  return (
    <SendButton onClick={handleClick} $active={isActive}> {/* $active로 수정 */}
      메시지 전송하기
    </SendButton>
  );
};

export default SendMessageButton;
