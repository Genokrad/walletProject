import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: relative;
  width: 280px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 410px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  outline: none;
  padding: 8px 0 8px 54px;
  border: none;
  border-bottom: solid 1px var(--light-gray-text-color);

  &::placeholder {
    font-family: 'Circe';
    font-size: 18px;
    line-height: 27px;
    color: var(--gray-text-color);
  }

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: var(--bcg-ultraMarine-color);
  }
`;
export const Svg = styled.svg`
  position: absolute;
  transform: translateY(10%);
  left: 10px;
  pointer-events: none;
`;

export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  margin-top: 7px;
  color: var(--red-text-color);
`;

export const Btn = styled.button`
  font-family: 'Circe';
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--white-text-color);

  width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--button-seaBlue-color);
  border: none;
  border-radius: 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  &:focus,
  &:hover {
    color: var(--blue-text-color);
    background: var(--bcg-white-color);
    border: 1px solid var(--blue-text-color);
  }
`;

export const Easy = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  margin-top: 2px;
  background-color: #e5f1ef;
  border-radius: 100px;

  ::after {
    content: '';
    display: inline-block;
    position: absolute;
    border-radius: 100px;
    /* width: 33.3%; */
    height: 4px;
    background-color: var(--button-seaBlue-color);
    box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5);
    animation: moveEasy alternate 2s ease-in-out forwards;
  }

  @keyframes moveEasy {
    0% {
      width: 0;
    }
    100% {
      width: 33.3%;
    }
  }
`;



export const Average = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  margin-top: 2px;
  background-color: #e5f1ef;
  border-radius: 100px;
  ::after {
    content: '';
    display: inline-block;
    position: absolute;
    border-radius: 100px;
    /* width: 66.6%; */
    height: 4px;
    background-color: var(--button-seaBlue-color);
    box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5);
    animation: moveAverage alternate 2s ease-in-out forwards;
  }
  @keyframes moveAverage {
    0% {
      width: 33.3%;
    }
    100% {
      width: 66.6%;
    }
  }
`;

export const Difficult = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  margin-top: 2px;
  background-color: #e5f1ef;
  border-radius: 100px;
  ::after {
    content: '';
    display: inline-block;
    position: absolute;
    border-radius: 100px;
    /* width: 100%; */
    height: 4px;
    background-color: var(--button-seaBlue-color);
    box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5);
    animation: moveDifficult alternate 2s ease-in-out forwards;
  }
  
  @keyframes moveDifficult {
    0% {
      width: 66.6%;
    }
    100% {
      width: 100%;
    }
  }
`;