import React from 'react';
import * as W from './WorkItem.style';

export default function WorkItem({ image, title, index }) {
  return (
    <W.Container>
      <W.Image src={image} />
      <W.Title>{title}</W.Title>
    </W.Container>
  );
}
