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

  return <Line options={options} data={dataSet} redraw={updated} />;
};

export default ChartJSLine;
