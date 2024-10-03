//방명록 보러가기 버튼 
import React from 'react';
import { ViewButton } from './ViewGuestBookButton';

const ViewGuestBookButton = ({ onClick }) => {
  return (
    <ViewButton onClick={onClick}>
      방명록 보러가기
    </ViewButton>
  );
};

export default ViewGuestBookButton;
