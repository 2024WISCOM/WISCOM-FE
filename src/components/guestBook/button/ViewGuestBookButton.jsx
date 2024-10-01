//방명록 보러가기 버튼 
import React from 'react';

const ViewGuestBookButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      방명록 보러가기
    </button>
  );
};

export default ViewGuestBookButton;
