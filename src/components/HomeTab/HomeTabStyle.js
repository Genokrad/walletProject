import styled from "styled-components";
export const Table = styled.table`
width :715px;`
export const TopTable = styled.tr`

width: 38px;
height: 27px;
left: 569px;
top: 142px;

font-family: 'Circe';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
background-color: grey;
color: black;
height: 58px;
width: 100%;
display: table;

border-radius: 30px;
`
export const TableBody = styled.tr`
width: 55px;
height: 24px;
left: 569px;
top: 200px;

font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
height: 50px;
color: black;
display: flex;
align-items:center;
width: 100%;


border-bottom: 1px solid #DCDCDF;
box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

`
export const Data = styled.th`
width: 120px;
justify-content: center;

`
export const Type = styled.th`
width: 70px;
justify-content: center;

`
export const Category = styled.th`
width: 130px;
justify-content: center;

`
export const Comment = styled.th`
width: 150px;
justify-content: center;

`
export const Sum = styled.th`
width: 100px;
justify-content: center;

`
export const Action = styled.td`
border-radius:18px;
display: flex;

justify-content: flex-end;

`
export const Btn = styled.td`
border-radius:18px;
width: 70px;
color: white;
align-items: center;
font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
background-color: var(--seaBlue-text-color);
justify-content: center;

`