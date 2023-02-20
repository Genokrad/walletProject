import styled from "styled-components";

export const ConteinerStat = styled.div`
    min-width: 280px;

    @media (min-width: 768px) {
        width: 768px;
        padding-left: 32px;
        padding-right: 32px;
    }
    @media (min-width: 1280px){
        width: 800px;
    }
    `

export const DivBox = styled.div`
    padding-left: 69px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 768px) {
        padding-left: 69px;
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    @media (min-width: 1280px){
        padding-left: 69px;
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    `

export const H2 = styled.h2`
    margin-left: 16px;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 1.5;
    `