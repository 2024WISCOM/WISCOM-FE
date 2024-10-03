import React from 'react';
import MessageCard from './MessageCard';

const MessageGrid = ({ messages }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
      {messages.map((message, index) => (
        <MessageCard
          key={index}
          to={message.recipient}
          from={message.author}
          message={message.message}
        />
      ))}
    </div>
  );
};

export default MessageGrid;
