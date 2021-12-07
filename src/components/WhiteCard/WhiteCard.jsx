import React from 'react';
import * as S from './WhiteCard.styled';

const WhiteCard = function WhiteCard({ width, goBack, children }) {
  return (
    <S.Container width={width} title="whiteBackground">
      {goBack && (
        <>
          <S.GoBack onClick={() => goBack()} title="goBack">
            Back to search
          </S.GoBack>
          <S.Line />
        </>
      )}
      {children}
    </S.Container>
  );
};

export default WhiteCard;
