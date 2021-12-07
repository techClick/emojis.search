import React from 'react';
import * as S from './WhiteCard.styled';

const WhiteCard = function WhiteCard({
  width, goBack, fadeIn2, children,
}) {
  return (
    <S.Container width={width} fadeIn2={fadeIn2} title="whiteBackground">
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
