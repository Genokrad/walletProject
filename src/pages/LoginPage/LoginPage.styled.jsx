import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    height: 100vh;
  }
`;

export const Imglog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 50px;

  @media screen and (max-width: 1279px) {
    flex-wrap: wrap;
    gap: 40px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    width: 600px;
    margin-right: 38px;
    margin-left: 75px;
  }
`;

export const TitleImg = styled.h2`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;

  color: var(--black-text-color);
  @media screen and (min-width: 1280px) {
    margin-top: 30px;
  }
`;

export const Backdrop = styled.div`
  @media screen and (min-width: 1280px) {
    width: 100%;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
`;

export const ContainerLog = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  padding: 107px 20px;
  background: var(--bcg-white-color);

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 468px;
    padding: 40px 65px;
    border-radius: 20px;
  }
  @media screen and (min-width: 1280px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
  color: var(--black-text-color);
`;

export const LogLink = styled(Link)`
  font-family: 'Circe';
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--blue-text-color);

  width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bcg-white-color);
  border: 1px solid var(--bcg-ultraMarine-color);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  &:focus,
  &:hover {
    color: var(--white-text-color);
    background: var(--button-seaBlue-color);
    border: none;
  }
`;
