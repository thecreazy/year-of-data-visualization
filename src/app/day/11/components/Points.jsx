'use client';
import { ResponsiveBar } from '@nivo/bar';

const MyResponsiveBar = ({ data }) => {
  const showData = data
    .map((el) => {
      return {
        season: el.season,
        Points: Number(el.points),
      };
    })
    .reverse();
  const keys = Object.keys(showData[0]);
  keys.shift();

  return (
    <ResponsiveBar
      data={showData}
      keys={keys}
      indexBy='season'
      margin={{ top: 30, bottom: 50, left: 60 }}
      padding={0.3}
      layout='horizontal'
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={['#FDB927']}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 1,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 12]],
      }}
      legends={[]}
      theme={{
        text: {
          fill: '#393939',
          fontWeight: 600,
        },
      }}
      role='application'
      barAriaLabel={(e) => e.id + ': ' + e.formattedValue + ': ' + e.indexValue}
    />
  );
};
export default MyResponsiveBar;
