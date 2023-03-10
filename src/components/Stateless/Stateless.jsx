import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from '../Stateless/Stateless.module.css';
import { statistSummary } from '../../redux/statistics/stat-operations';
import { handleColor } from '../Statistics/stat-color';

import {
    selectStatSummury,
    selectExpenseSummary,
    selectIncomeSummary,
} from '../../redux/statistics/selectorStatistics';
import {
    DivConteiner, DivSelect, 
    Table, TableHead, LiList, Results, ResultsName, ResultsExpenses, ResultsIncome,
    Box, ItemTable
} from '../Stateless/Stateless.styled';
const objMonth = [
        { name: 'January', value: 1 },
        { name: 'February', value: 2 },
        { name: 'March', value: 3 },
        { name: 'April', value:4 },
        { name: 'May', value: 5 },
        { name: 'June', value: 6 },
        { name: 'July', value: 7 },
        { name: 'August', value: 8 },
        { name: 'September', value: 9 },
        { name: 'October', value: 10 },
        { name: 'November', value: 11 },
        { name: 'December', value: 12 },
]
    
const objYear = [
        { name: '2019', value: 2019 },
        { name: '2020', value: 2020 },
        { name: '2021', value: 2021 },
        { name: '2022', value: 2022 },
        { name: '2023', value: 2023 },
        { name: '2024', value: 2024 },
        { name: '2025', value: 2025 },
]
    
export const Stateless = () => {
    
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [isOpenSelectYear, setIsOpenSelectYear] = useState(false);
    const statSummury = useSelector(selectStatSummury);
    const expenseSummary = useSelector(selectExpenseSummary);
    const incomeSummary = useSelector(selectIncomeSummary);
    const dispatch = useDispatch();

    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);   
    const [nameMonth, setNameMonth] = useState('');

    const handleChangeMonth = ({ target }) => {        
        const { name, value } = target;
        console.log('target>>>>>>', name, value);
        setMonth(value);
        setIsOpenSelect(false);
    };

    const handleChangeYear = ({ target }) => {        
        const { value } = target;
        setYear(value);
        setIsOpenSelectYear(false);
    };

    useEffect(() => {
        const currentNameMonth = objMonth.find((item) => Number(month) === item.value )
        setNameMonth(currentNameMonth.name);
    },[month])

    const openSelect = (() => {
        setIsOpenSelect(true);
    })

    const openSelectYear = (() => {
        setIsOpenSelectYear(true);
    })

    useEffect(() => {
        dispatch(
        statistSummary({
            month: month,
            year: year,
        })
        );
    }, [dispatch, month, year]);

    
    return (
        <>
            <DivConteiner>
                <DivSelect>
                    <div className={css.Selected} onClick={openSelect}>
                        {nameMonth}
                        {isOpenSelect && (
                            <div className={css.SelectBox}>                          
                                <div className={css.OptionsContainer}>
                                    {objMonth.map(({ name, value }) => {
                                        return (
                                                <label key={name} className={css.Option}>{name}
                                                    <input
                                                        className={css.Radio}
                                                        type='radio'
                                                        checked={month === value}
                                                        defaultValue={value} name={name}
                                                        onChange={handleChangeMonth}
                                                    />
                                                </label>
                                        )
                                    })
                                    }     
                                </div>
                        </div>
                        )}                        
                    </div>

                    <div className={css.SelectedYear} onClick={openSelectYear}>
                        {year}
                        {isOpenSelectYear && (
                            <div className={css.SelectBoxYear}>                          
                                <div className={css.OptionsContainerYear}>
                                    {objYear.map(({ name, value }) => {
                                        return (                                        
                                                <label key={name} className={css.OptionYear}>{name}
                                                    <input
                                                        className={css.RadioYear}
                                                        type='radio'
                                                        checked={year === value}
                                                        value={value} name={name}
                                                        onChange={handleChangeYear}
                                                    />
                                                </label>                                      
                                        )
                                    })
                                    }     
                                </div>
                        </div>
                        )}                        
                    </div>
                    
                </DivSelect> 

                <Table>
                    <TableHead>
                        <p>Category</p>
                        <p>Sum</p>
                    </TableHead>
                    
                    <ul>
                        {statSummury.length > 0 ? (
                            statSummury.map(({ name, total, type }) => {
                                return (
                                    type === 'EXPENSE' && (
                                                <LiList key={name}>
                                                    <ItemTable><Box color={handleColor(name)}></Box>{name}</ItemTable>
                                                    <p>{Math.abs(total)}</p>
                                                </LiList>
                                    )                                    
                                );
                            })
                        ) : (
                            <p>No information</p>
                        )}
                    </ul>

                    <Results>
                        <ResultsName>Expenses:</ResultsName>
                        <ResultsExpenses>{Math.abs(expenseSummary)}</ResultsExpenses>
                    </Results>

                    <Results>
                        <ResultsName>Income:</ResultsName>
                        <ResultsIncome>{incomeSummary}</ResultsIncome>
                    </Results>

                </Table>
            </DivConteiner>
            
        </>
    );
}