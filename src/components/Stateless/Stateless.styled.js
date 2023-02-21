import styled from "styled-components";

export const DivConteiner = styled.div`
    width: 280px;

    @media (min-width: 768px) {
        width: 336px;
    }
    @media (min-width: 1280px){
        width: 395px;
    }
    `

export const DivSelect = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 16px;
    }
    @media (min-width: 1280px){
        flex-direction: row;
        gap: 32px;
    }
    `

export const Table = styled.div`
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media (min-width: 768px) {
        width: 336px;
    }
    @media (min-width: 1280px){
        width: 395px;
    }
    `

export const TableHead = styled.div`
    width: 100%;
    height: 58px;
    background: var(--white-text-color);
    border-radius: 30px;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    color: var(--black-text-color);
    `

export const LiList = styled.li`
    width: 100%;
    padding: 12px 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: var(--black-text-color);

    border-bottom: 1px solid #DCDCDF;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
    `

export const ItemTable = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `

export const Results = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    `

export const ResultsName = styled.p`
    font-family: 'Circe';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: var(--black-text-color);
    `

export const ResultsExpenses = styled.p`
    font-family: 'Circe';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: var(--red-text-color);
    `

export const ResultsIncome = styled.p`
    font-family: 'Circe';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: var(--seaBlue-text-color);
    `

export const Box = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-right: 16px;
    background-color: ${props => props.color};
    `


