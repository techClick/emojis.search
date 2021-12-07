import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  position: absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  top:50%;
  left:50%;
  min-width: 800px;
  transform: translate(-50%,-50%);
`;

export const SearchBox = styled.input`
  width: 97%;
  height: 30px;
`;

export const Submit = styled.button`
  margin-top: 10px;
  background-color: #15d47b;
  border: none;
  border-radius: 5px;
  height: 35px;
  width: 40%;
  min-width: 60px;
  max-width: 85px;
  color: white;
  font-weight: bold;
  font-size: 13px;
  &:hover {
    cursor: pointer;
    background-color: #a7d6c0;
  }
`;
