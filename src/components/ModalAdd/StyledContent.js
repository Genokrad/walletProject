import styled from "styled-components";

export const Header = styled.div`
font-family: 'Poppins';
margin-top: 40px;
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 45px;
display: flex;
align-items: center;
justify-content: center;
` 
export const DivDataSum = styled.div`
margin-top: 42px;
gap: 32px;
    justify-content: center;
    display: flex;
` 

export const Sum = styled.input`
color:#BDBDBD;
border: none;
width: 181px;
padding: 8px;
text-align: center;
border-bottom: 1px solid #E0E0E0;
` 
export const Data = styled.input`
color:#BDBDBD;
border: none;
width: 181px;
padding: 8px;
text-align: center;
border-bottom: 1px solid #E0E0E0;
font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;

color: #000000;
` 

export const DivSetting = styled.div`
display: flex;
margin-top: 35px;
justify-content: center;
` 
export const Coment = styled.input`
color:#BDBDBD;
border: none;
padding: 8px;
margin-top: 42px;
width: 394px;

border-bottom: 1px solid #E0E0E0;
` 
export const DivBtn = styled.div`
display: grid;
margin-top: 40px;
padding: 0;
gap: 20px;
flex-direction: column;
justify-content: center;

font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
` 
export const BtnAdd = styled.button`
width: 300px;
height: 50px;
left: 490px;
top: 454px;
color: white;
border: none;
background: #24CCA7;
border-radius: 20px;
` 
export const BtnCancel = styled.button`
width: 300px;
height: 50px;
left: 490px;
top: 524px;
color: #4A56E2;
background: #FFFFFF;
border: 1px solid #4A56E2;
border-radius: 20px;
` 
// RadioBtn
export const DivChekbox = styled.div`
display: flex;
margin-top: 42px;
justify-content: center;
align-items: center;
gap: 32px;
  
` 
export const Switch = styled.label`
position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
  
` 
export const Checkbox = styled.input`
display:none;
:checked + .slider {
  background-color: #fff;
}
:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(35px);
}
` 
export const Span = styled.span`
position: absolute;
display: flex;
  align-items: center;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 32px;
  background-color: #fff;
  border: 1px solid #E0E0E0;
  -webkit-transition: .4s;
  transition: .4s;
  ::before{ position: absolute;
  content: "";
  height: 44px;
  width: 44px;
  
  
  background-color: var(--button-seaBlue-color);
  -webkit-transition: .4s;
  transition: .4s;}
  &.slider.round:before {
  border-radius: 50%;
}
` 

export const Forms = styled.div`
display: flex;
justify-content: center;
border: none;
border-bottom: 1px solid #E0E0E0;
` 
export const FormsInput = styled.input`
width: 190px;
height: 24px;
left: 451px;
top: 265px;

font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;

/* Gray 4 */

color: #BDBDBD;
border: none;
` 

export const FormsSelect = styled.select`
border: none;
text-decoration:none;

` 
export const Option = styled.option`
border: none;
text-decoration:none;
width: 382px;
height: 44px;
left: 463px;
top: 346px;

font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
display: flex;
align-items: center;
` 
