import styled from 'styled-components';
import Datetime from 'react-datetime';
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
`;
export const DivDataSum = styled.div`
  margin-top: 42px;
  gap: 32px;
  justify-content: center;
  display: flex;
  @media screen and (max-width: 768px){
   flex-direction: column;
}
`;

export const Sum = styled.input`
  color: #bdbdbd;
  border: none;
  width: 181px;
  padding: 9px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  @media screen and (max-width: 768px){
    margin-left:auto;
    margin-right:auto;
    
  width:280px;
}
`;
export const Data = styled(Datetime)`
  color: #bdbdbd;
  border: none;
  width: 181px;
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  @media screen and (max-width: 768px){
    margin-left:auto;
    margin-right:auto;
  width:280px;
}
`;

export const DivSetting = styled.div`
  display: flex;
  margin-top: 35px;
  justify-content: center;
`;
export const Coment = styled.input`
  color: #bdbdbd;
  border: none;
  padding: 8px;
  margin-top: 42px;
  width: 394px;

  border-bottom: 1px solid #e0e0e0;
  @media screen and (max-width: 768px){
    margin-left:auto;
    margin-right:auto;
  width:280px;
}
`;
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
`;
export const BtnAdd = styled.button`
  width: 300px;
  height: 50px;
  left: 490px;
  top: 454px;
  color: white;
  border: none;
  background: #24cca7;
  border-radius: 20px;
`;
export const BtnCancel = styled.button`
  width: 300px;
  height: 50px;
  left: 490px;
  top: 524px;
  color: #4a56e2;
  background: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;
`;
// RadioBtn
export const DivChekbox = styled.div`
  display: flex;
  margin-top: 42px;
  justify-content: center;
  align-items: center;
  gap: 32px;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  text-align: right;

  color: #e0e0e0;
`;
export const SvgPlus = styled.svg`
 z-index:1;
 margin-left: 9px;
`;
export const SvgMinus = styled.svg`
 z-index:1;
 margin-left: 12px;
`
export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
`;
export const Checkbox = styled.input`
  display: none;
  :checked + .slider {
    background-color: #fff;
  }
  :focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  :checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(35px);
    background-color: var(--button-red-color);
    
  }
`;
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
  border: 1px solid #e0e0e0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
 
  ::before {
    position: absolute;
    content: '';
    height: 44px;
    width: 44px;
    background-color: var(--button-seaBlue-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
 
  &.slider.round:before {
    border-radius: 50%;
   
  }
`;

export const Forms = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  border-bottom: 1px solid #e0e0e0;
`;
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
  color: #bdbdbd;
  border: none;
  @media screen and (max-width: 768px){
   display: none;
}
`;

export const FormsSelect = styled.select`
  border: none;
  text-decoration: none;
  @media screen and (max-width: 768px){
    width: 280px;
height: 32px;
font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #BDBDBD;
}
`;
export const Option = styled.option`
  border: none;
  text-decoration: none;
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

`;
