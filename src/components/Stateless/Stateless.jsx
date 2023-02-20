import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from '../Stateless/Stateless.module.css';
import { statistSummary } from '../../redux/statistics/stat-operations';
import { handleColor } from '../../redux/statistics/stat-color';

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

export const Stateless = () => {
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

    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);
    
    const [isOpenSelect, setIsOpenSelect] = useState(false);

    const statSummury = useSelector(selectStatSummury);
    const expenseSummary = useSelector(selectExpenseSummary);
    const incomeSummary = useSelector(selectIncomeSummary);

    const dispatch = useDispatch();

    const handleMonth = () => {
        for (const item of objMonth) {
            if (month === item.value) return item.name;
        }
    }

    const handleChangeMonth = ({ target }) => {        
        const { name, value } = target;
        console.log('target>>>>>>', name, value);
        setMonth(value);
        setIsOpenSelect(false);
    };

        const handleChangeYear = ({ target }) => {        
        const { name, value } = target;
        console.log('target>>>>>>', name, value);
        setYear(value);
        setIsOpenSelect(false);
    };

    const openSelect = (() => {
        setIsOpenSelect(true);
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
                        {handleMonth()}
                        {isOpenSelect && (
                            <div className={css.SelectBox}>                          
                                <div className={css.OptionsContainer}>
                                    {objMonth.map(({ name, value }) => {
                                        return (
                                            <div key={name} className={css.Option} >                                            
                                                <label>{name}
                                                    <input
                                                        className={css.Radio}
                                                        type='radio'
                                                        checked={month === value}
                                                        value={value} name={name}
                                                        onChange={handleChangeMonth}
                                                    />
                                                </label>
                                            </div>                                        
                                        )
                                    })
                                    }     
                                </div>
                        </div>
                        )}                        
                    </div>

                    <div className={css.Selected} onClick={openSelect}>
                        {year}
                        {isOpenSelect && (
                            <div className={css.SelectBox}>                          
                                <div className={css.OptionsContainer}>
                                    {objYear.map(({ name, value }) => {
                                        return (
                                            <div key={name} className={css.Option} >                                            
                                                <label>{name}
                                                    <input
                                                        className={css.Radio}
                                                        type='radio'
                                                        checked={year === value}
                                                        value={value} name={name}
                                                        onChange={handleChangeYear}
                                                    />
                                                </label>
                                            </div>                                        
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
};



//---------------предыдущий код селекта---------------
// {/* <DivSelect>
//                     <SelectWrapper>
//                         <Select name="month" id="month" onChange={handleChange}>
//                             {objMonth.map(({ name, value }) => {
//                                 if (value === currentMonth) {
//                                     return (
//                                         <option value={value} selected>{name}</option>
//                                 )
//                                 } else {
//                                     return (
//                                         <option value={value} >{name}</option>
//                                 )
//                                 }
//                             })
//                             }
//                     </Select>
//                     </SelectWrapper>
                    
//                     <SelectWrapper>
//                         <Select name="year" id="year" onChange={handleChange}>
//                         {objYear.map(({ name, value }) => {
//                                 if (value === currentYear) {
//                                     return (
//                                         <option value={value} selected>{name}</option>
//                                 )
//                                 } else {
//                                     return (
//                                         <option value={value} >{name}</option>
//                                 )
//                                 }
//                             })
//                             }
//                     </Select>
//                     </SelectWrapper>
                    
//                 </DivSelect>  */}