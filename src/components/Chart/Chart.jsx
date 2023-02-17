import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './Chart.styled.js';
import { Wrapper,TextAbs } from './Chart.styled.js';


ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = () =>
  // { colors, date, balance }

  {
    //   const { categoriesSummary } = date;
    //   console.log('categoriesSummary :>> ', categoriesSummary);
    //   const expenses = categoriesSummary.filter(item => item.type === 'EXPENSE');

    //   const labels = expenses.map(el => el.name);
    //   let amount = expenses.map(el => el.total);
    const balance = 1000;
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
    const data = {
      labels: ['He', 'Hehehe'],

      // labels,
      datasets: [
        {
          data: [500, 500],

          // amount,
          backgroundColor: ['yellow', 'blue'],
          //  colors
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
