import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statistSummary } from '../../redux/statistics/stat-operations';
import {
    selectStatSummury,
    selectExpenseSummary,
    selectIncomeSummary,
} from '../../redux/statistics/selectorStatistics';

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
    console.log("Date: ", date);
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);


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
            <div>
                <select name="month" id="month" onChange={handleChange}>
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
                </select>
                </div>

                <div>
                <select name="year" id="year" onChange={handleChange}>
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
                </select>
            </div>

            <table>
                <thead>
                <tr>
                    <td>Category</td>
                    <td>Sum</td>
                </tr>
                </thead>
                <ul>
                {statSummury.length > 0 ? (
                    statSummury.map(({ name, total }) => {
                    return (
                        <tr key={name}>
                        <td>{name}</td>
                        <td>{total}</td>
                        </tr>
                    );
                    })
                ) : (
                    <p>No information</p>
                )}
                </ul>
                <tbody>
                <tr>
                    <td>Expenses:</td>
                    <td>{expenseSummary}</td>
                </tr>
                <tr>
                    <td>Income:</td>
                    <td>{incomeSummary}</td>
                </tr>
                </tbody>
            </table>
        </>
    );
};
