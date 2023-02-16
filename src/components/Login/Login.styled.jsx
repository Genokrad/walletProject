import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Container = styled(Form)`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  max-width: 50%;
`;

export const Label = styled.label`
  position: relative;
  
`; 

export const Input = styled(Field)`
  /* width: 100%; 
   font-size: 12px; 
  padding: 12px 16px 12px 42px; 
   color: $modal-label-color; 
   border: 1px solid rgba(33, 33, 33, 0.2); 
   border-radius: 4px; 
  outline: none;
   transition-property: border-color; 
   transition-duration: 250ms; 
   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); 
  &:hover,
  &:focus { 
     border-color: 
   } */
`;

export const Svg = styled.svg`
  position: absolute;
  /* transform: translateY(50%); */
  /* left: 12px; */
  /* pointer-events: none; */
  /* transition-property: fill; */
  /* transition-duration: 250ms; */
  /* transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 7px;
  color: red;
`;

// export const Btn = styled.button`
//   :hover {
   
//   }
// `;
