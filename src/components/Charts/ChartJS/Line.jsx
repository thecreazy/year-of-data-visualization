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
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { getRaceAnimation } from './utils/raceAnimation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartJSLine = ({
  labels,
  data,
  legend = false,
  noAspectRation = false,
  animation,
  animationDuration = 300,
}) => {
  const [updated, setUpdate] = useState(false);

  useEffect(() => {
    setUpdate(true);
  }, []);

  const dataSet = {
    labels,
    datasets: data,
  };
  const options = {
    responsive: true,
    plugins: {
      legend: legend
        ? {
            position: typeof legend === 'string' ? legend : 'top',
          }
        : null,
      title: {
        display: false,
      },
    },
  };
  if (noAspectRation) {
    options.maintainAspectRatio = false;
    options.aspectRatio = 0;
  }

  if (animation === 'race') {
    options.animation = getRaceAnimation(animationDuration, data.length);
  }

  return <Line options={options} data={dataSet} redraw={updated} />;
};

export default ChartJSLine;
