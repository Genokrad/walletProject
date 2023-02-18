import styled from "styled-components";

export const DivConteiner = styled.div`
    width: 395px;
    margin-right: 20px;

    /* @media (min-width: 768px) {
        padding-left: 32px;
        padding-right: 32px;
    }
    @media (min-width: 1280px){
        padding-left: 69px;
        padding-right: 16px;
    } */
    `

export const DivSelect = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 16px;
    }
    @media (min-width: 1280px){
        flex-direction: row;
        gap: 32px;
    }
    `

// export const Select = styled.select`
//     /* width: 100%; */
//     height: 50px;
//     padding: 10px 20px;
//     border: 1px solid #000000;
//     border-radius: 30px;
//     font-family: 'Circe';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 1.5;
//     color: var(--black-text-color);
//     `

// export const Option = styled.option`
//     background: rgba(255, 255, 255, 0.7);
//     box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
//     backdrop-filter: blur(25px);
//     border-radius: 20px;
//     `

export const Table = styled.div`
    width: 395px;
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
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


