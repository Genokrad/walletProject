import { Chart } from 'components/Chart/Chart';
import { Stateless } from 'components/Stateless/Stateless';
import { useSelector } from 'react-redux';
const colorExpenses = [
  { name: 'Main expenses', color: '#FED057' },
  { name: 'Products', color: '#FFD8D0' },
  { name: 'Car', color: '#FD9498' },
  { name: 'Self care', color: '#C5BAFF' },
  { name: 'Child care', color: '#6E78E8' },
  { name: 'Household products', color: '#4A56E2' },
  { name: 'Education', color: '#81E1FF' },
  { name: 'Leisure', color: '#24CCA7' },
  { name: 'Other expenses', color: '#00AD84' },
];

export const Statistics = () => {
  return (
    <>
      <Chart colors={colorExpenses.color} />
      <Stateless />
    </>
  );
};
