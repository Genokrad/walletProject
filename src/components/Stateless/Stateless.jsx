import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Select from 'react-select';
import { statistSummary } from '../../redux/statistics/stat-operations';
import { handleColor } from '../../redux/statistics/stat-color';
import {
    selectStatSummury,
    selectExpenseSummary,
    selectIncomeSummary,
} from '../../redux/statistics/selectorStatistics';
import {
    DivConteiner, DivSelect, Select, SelectWrapper,
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
    // const [selectedOption, setSelectedOption] = useState(null);

    const statSummury = useSelector(selectStatSummury);
    const expenseSummary = useSelector(selectExpenseSummary);
    const incomeSummary = useSelector(selectIncomeSummary);

    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'month') setMonth(value);
        else setYear(value);
    };

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
                    <SelectWrapper>
                        <Select name="month" id="month" onChange={handleChange}>
                            {objMonth.map(({ name, value }) => {
                                if (value === currentMonth) {
                                    return (
                                        <option value={value} selected>{name}</option>
                                )
                                } else {
                                    return (
                                        <option value={value} >{name}</option>
                                )
                                }
                            })
                            }
                    </Select>
                    </SelectWrapper>
                    
                    <SelectWrapper>
                        <Select name="year" id="year" onChange={handleChange}>
                        {objYear.map(({ name, value }) => {
                                if (value === currentYear) {
                                    return (
                                        <option value={value} selected>{name}</option>
                                )
                                } else {
                                    return (
                                        <option value={value} >{name}</option>
                                )
                                }
                            })
                            }
                    </Select>
                    </SelectWrapper>
                    
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




//---------------
// {/* <DivSelect>
//                     <Select name="month" id="month" onChange={handleChange}>
//                             {objMonth.map(({ name, value }) => {
//                                 if (value === currentMonth) {
//                                     return (
//                                         <Option value={value} selected>{name}</Option>
//                                 )
//                                 } else {
//                                     return (
//                                         <Option value={value} >{name}</Option>
//                                 )
//                                 }
//                             })
//                             }
//                     </Select>

//                     <Select name="year" id="year" onChange={handleChange}>
//                         {objYear.map(({ name, value }) => {
//                                 if (value === currentYear) {
//                                     return (
//                                         <Option value={value} selected>{name}</Option>
//                                 )
//                                 } else {
//                                     return (
//                                         <Option value={value} >{name}</Option>
//                                 )
//                                 }
//                             })
//                             }
//                     </Select>
//                 </DivSelect> */}



// <DivSelect>
//                     <Select   
//                         name="month" id="month" onChange={handleChange}
                        
//                         options={objMonth}
//                         theme={(theme) => ({
//                             ...theme,
//                             indicatorSeparator: false,
//                             borderRadius: 20,
//                             colors: {
//                                 ...theme.colors,
//                                 primery: 'black',
//                             }
//                         })}
//                     />

//                     <Select
//                         name="year" id="year" onChange={handleChange}
//                         options={objYear}
//                         theme={(theme) => ({
//                             ...theme,
//                             borderRadius: 20,
//                             colors: {
//                                 ...theme.colors,
//                                 primery: 'black',
//                             }
//                         })}
//                     />
//                 </DivSelect>