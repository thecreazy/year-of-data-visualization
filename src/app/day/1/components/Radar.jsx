'use client';
import { ResponsiveRadar } from '@nivo/radar';

const MyResponsiveRadar = ({ data }) => {
  const showData = data.map((el) => {
    return {
      season: el.season,
      'Field Goal': Number(el.pointPercentage),
      '3 Point': Number(el['3pointPercentage']),
      'Free Throw': Number(el.freeThrowsPercentage),
    };
  });
  const keys = Object.keys(showData[0]);
  keys.shift();

  return (
    <ResponsiveRadar
      data={showData}
      keys={keys}
      indexBy='season'
      margin={{ top: 40, bottom: 20 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={16}
      dotSize={8}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={1}
      colors={['#E56BAA', '#EED2EE', '#FDB927']}
      theme={{
        text: {
          fill: '#393939',
          fontWeight: 600,
        },
        tooltip: {
          container: { color: '#393939' },
        },
      }}
      motionConfig='wobbly'
      legends={[]}
      maxValue={100}
    />
  );
};

export default MyResponsiveRadar;
