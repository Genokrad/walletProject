import styled from "styled-components";

 export const Box = styled('div')`

display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 30px;
`
 

export const Modal = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: fixed;
height: 100vh;
width:100vw;
background-color: rgba(0,0,0,0.1);
top: 0;
left: 0;
`
export const Content = styled.div`
padding: 20px;
text-align: center;
border-radius: 12px;
background-color: white;
width: 400px;
height: 200px;

`
export const Title = styled.h2`
  margin-bottom: 25px;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.15;
`;

const Button = styled.button`
  min-width: 150px;
  height: 40px;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition:  regularScale 'scale 250ms linear',;
  cursor: pointer;
  :hover,
  :focus {
    scale: 1.1;
  }
  :active {
    scale:0.9;
  }
`;

export const CancelButton = styled(Button)`
  background: var(--leisure);
  border-color: transparent;
  color: #fff;
`;

export const LogoutButton = styled(Button)`
  background: var(--leisure);
  border: transparent;
  color:#4A56E2;
`;