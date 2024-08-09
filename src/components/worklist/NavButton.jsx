import React from 'react';
import * as N from './NavButton.style';

export default function NavButton({ text }) {
  const styledText = text.split('&').map((part, index, array) =>
    index < array.length - 1 ? (
      <>
        {part}
        <span key={index}>&</span>
      </>
    ) : (
      <>{part}</>
    ),
  );

  return <N.Text>{styledText}</N.Text>;
}
