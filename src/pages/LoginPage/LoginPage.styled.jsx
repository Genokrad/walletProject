import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerLog = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 107px 20px;
  /* background: #ffffff; */
`;
export const TitleLogCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`;

export const TitleLog = styled.h2`
  font-family: 'Poppins';
  font-weight: 700;
  margin-left: 15px;
  color: #000000;
`;
export const LogLink = styled(Link)`
  font-family: 'Circe';
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a56e2;

  width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;
`;