import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Wrapper, TextAbs } from './Chart.styled.js';
import { Loader } from 'components/Loader/Loader.jsx';
import {handleColor } from 'components/Statistics/stat-color.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ date, balance }) => {
  const expenses = date.filter(item => item.type === 'EXPENSE');


  const labels = expenses.length !== 0 ? expenses.map(el => el.name) : ['Nothing']
  let amount = expenses.length !== 0 ? expenses.map(el => Math.abs(el.total)) : [1];
  const color = labels.map(item => handleColor(item));
  
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
      {amount.length >= 0 ? (
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
