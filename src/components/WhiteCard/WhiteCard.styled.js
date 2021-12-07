import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: ${(props) => props.width || ''};
  text-align: center;
  position: relative;
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
