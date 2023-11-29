'use client';

import { ResponsiveBump } from '@nivo/bump';

const MyResponsiveAreaBump = ({ data }) => {
  const defaultStructure = [
    { id: 'Field Goal %', data: [] },
    { id: 'Free Throw %', data: [] },
    { id: '3-Point %', data: [] },
  ];
  const values = data.reduce((acc, current) => {
    acc[0].data.push({
      x: current.season,
      y: Number(current.pointPercentage),
    });
    acc[1].data.push({
      x: current.season,
      y: Number(current.freeThrowsPercentage),
    });
    acc[2].data.push({
      x: current.season,
      y: Number(current['3pointPercentage']),
    });
    return acc;
  }, defaultStructure);

  return (
    <ResponsiveBump
      data={values}
      colors={{ scheme: 'spectral' }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: 'background' }}
      theme={{
        grid: {
          line: { stroke: '#ababab' },
        },
      }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -36,
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'ranking',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisRight={null}
    />
  );
};

export default MyResponsiveAreaBump;
