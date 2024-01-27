'use client';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartJSBar = ({
  labels,
  data,
  scales,
  legend,
  noAspectRation = false,
}) => {
  const { isSmallScreen } = useScreenDetect();
  const dataSet = {
    labels,
    datasets: data,
  };
  const options = {
    responsive: true,
    plugins: {
      legend: legend
        ? legend
        : {
            position: 'top',
          },
      title: {
        display: false,
      },
    },
    scales: scales,
  };
  if (noAspectRation) {
    options.maintainAspectRatio = false;
    options.aspectRatio = 0;
  }
  return (
    <Bar
      height={isSmallScreen ? '500px' : undefined}
      options={options}
      data={dataSet}
    />
  );
};

export default ChartJSBar;
