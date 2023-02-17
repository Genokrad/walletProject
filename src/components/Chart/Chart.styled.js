import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 280px;
  float: left;
  position: relative;
float: left;
`;

export const TextAbs = styled.div`
  position: absolute;
  width: 110px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: black;
  text-align: center;
  z-index: 99;
`;