import { Chart } from 'components/Chart/Chart';
import { Stateless } from 'components/Stateless/Stateless';
import { useSelector } from 'react-redux';
import { selectStatSummury } from 'redux/statistics/selectorStatistics';
import { selectIsTotalBalance } from 'redux/finance/finance-selectors';
const colorExpenses = [
  { color: '#FED057' },
  { color: '#FFD8D0' },
  { color: '#FD9498' },
  { color: '#C5BAFF' },
  { color: '#6E78E8' },
  { color: '#4A56E2' },
  { color: '#81E1FF' },
  { color: '#24CCA7' },
  { color: '#00AD84' },
];
export const Statistics = () => {
  const totalSummary = useSelector(selectStatSummury);
  const balance = useSelector(selectIsTotalBalance);
  return (
    <>
      <Chart
        colors={colorExpenses.color}
        date={totalSummary}
        balance={balance}
      />
      <Stateless />
    </>
  );
};
