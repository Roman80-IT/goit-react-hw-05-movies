import React from 'react';
import { Arrow, BackBtn } from './Back.styled';

export const Back = ({ backLinkLocationRef }) => {
  return (
    <div className="mb-3">
      <BackBtn to={backLinkLocationRef}>
        <Arrow /> Go back
      </BackBtn>
    </div>
  );
};
