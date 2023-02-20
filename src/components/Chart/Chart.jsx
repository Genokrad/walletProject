import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Wrapper, TextAbs } from './Chart.styled.js';
import { Loader } from 'components/Loader/Loader.jsx';
import {handleColor } from 'components/Statistics/stat-color.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ date, balance }) => {
  const expenses = date.filter(item => item.type === 'EXPENSE');

  const labels = expenses.map(el => el.name);
  let amount = expenses.map(el => Math.abs(el.total));

  const color = labels.map(item => handleColor(item));

  // const color = labels.length !== 0 ? labels.map(item => handleColor(item)) : ['#ffffff']
  // console.log('color>>>', color)

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
        backgroundColor: color,
        borderWidth: 0,
      },
    ],
  };

  return (
    <Wrapper>
      {amount.length > 0 ? (
        <TextAbs>
          &#8372;
          <br />
          {balance}
        </TextAbs>
      ) : (
        <TextAbs>
          &#8372;
          {balance}
          <Loader />
        </TextAbs>
      )}
      <Doughnut data={data} options={options} />
    </Wrapper>
  );
};
