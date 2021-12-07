import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: ${(props) => props.width || ''};
  text-align: center;
  position: relative;
  animation: ${fadeIn} 0.1s linear;
  transition: visibility 0.1s linear;
`;

export const GoBack = styled.div`
  margin-bottom: 1px;
  float: left;
  text-decoration: underline;
  color: #3cbaf0;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const Line = styled.hr`
  height: 1px;
  width: 100%;
  position: absolute;
  border: 0;
  background-color: #c9c9c9;
  top: 66px;
  left: 0;
`;
