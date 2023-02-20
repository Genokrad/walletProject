import { Chart } from 'components/Chart/Chart';
import { Stateless } from 'components/Stateless/Stateless';
import { useSelector } from 'react-redux';
import { selectStatSummury } from 'redux/statistics/selectorStatistics';
import { selectIsTotalBalance } from 'redux/finance/finance-selectors';
import { ConteinerStat, DivBox, H2 } from './Statistics.styled';

export const Statistics = () => {
  const totalSummary = useSelector(selectStatSummury);
  const balance = useSelector(selectIsTotalBalance);
  return (
    <>
      <ConteinerStat>
        <H2>Statistics</H2>
        <DivBox>
          <Chart date={totalSummary} balance={balance} />
          <Stateless />
        </DivBox>
      </ConteinerStat>
    </>
  );
};
