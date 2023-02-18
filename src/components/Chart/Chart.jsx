import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './Chart.styled.js';
import { Wrapper, TextAbs } from './Chart.styled.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ colors, date, balance }) => {
  
  const expenses = date.filter(item => item.type === 'EXPENSE');

  const labels = expenses.map(el => el.name);
  let amount = expenses.map(el => Math.abs(el.total));
  const colories = colors.map(el =>el.color)
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: labels,
    datasets: [
      {
        data: amount,
        backgroundColor: colories,
        borderWidth: 0,
      },
    ],
  };

  return (
    <Wrapper>
      <TextAbs>{balance}</TextAbs>
      <Doughnut
        className="relative"
        //    key={labels.name}
        data={data}
        options={options}
      />
    </Wrapper>
  );
};
