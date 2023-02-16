import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statistSummary } from '../../redux/statistics/stat-operations';
import {
  selectStatSummury,
  selectExpenseSummary,
  selectIncomeSummary,
} from '../../redux/statistics/selectorStatistics';

export const Stateless = () => {
  const [month, setMonth] = useState('');
  const [years, setYears] = useState('');

  const statSummury = useSelector(selectStatSummury);
  const expenseSummary = useSelector(selectExpenseSummary);
  const incomeSummary = useSelector(selectIncomeSummary);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'month') setMonth(value);
    else setYears(value);
    // console.log('statSummury >>>>>', { month, years });
  };

  useEffect(() => {
    dispatch(
      statistSummary({
        month: month,
        years: years,
      })
    );
  }, [dispatch, month, years]);

  return (
    <>
      <div>
        <select name="month" id="month" onChange={handleChange}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="August">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <select name="years" id="years" onChange={handleChange}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
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

// expenseSummary
// incomeSummary