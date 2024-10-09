import React from 'react';
import MessageCard from './MessageCard';
import { MessageGridContainer } from './MessageGrid.style';

const MessageGrid = ({ messages }) => {
  return (
    <MessageGridContainer >
      {messages.map((message, index) => (
        <MessageCard
          key={index}
          to={message.recipient}
          from={message.author}
          message={message.message}
        />
      ))}
    </MessageGridContainer>
  );
};

export default MessageGrid;
