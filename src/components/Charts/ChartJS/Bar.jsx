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

const ChartJSBar = ({ labels, data }) => {
  const { isSmallScreen } = useScreenDetect();
  const dataSet = {
    labels,
    datasets: data,
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };
  return (
    <Bar
      height={isSmallScreen ? '500px' : undefined}
      options={options}
      data={dataSet}
    />
  );
};

export default ChartJSBar;
