'use client';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartJSLine = ({ labels, data, legend = false }) => {
  const dataSet = {
    labels,
    datasets: data,
  };
  const options = {
    responsive: true,
    plugins: {
      legend: legend
        ? {
            position: 'top',
          }
        : null,
      title: {
        display: false,
      },
    },
  };
  return <Line options={options} data={dataSet} />;
};

export default ChartJSLine;
