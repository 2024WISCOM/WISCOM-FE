import React from 'react';
import * as N from './NavButton.style';

export default function NavButton({ text }) {
  const styledText = text.split('&').map((part, index, array) =>
    index < array.length - 1 ? (
      <React.Fragment key={index}>
        {part}
        <span>&</span>
      </React.Fragment>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    ),
  );

  return <N.Text>{styledText}</N.Text>;
}
