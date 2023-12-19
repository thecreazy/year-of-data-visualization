'use client';

import { ResponsiveStream } from '@nivo/stream';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

const NivoStream = ({
  data,
  keys,
  margin,
  mobileMargin,
  colors,
  legend = [],
  valueFormat,
  indexBy = 'id',
}) => {
  const { isSmallScreen } = useScreenDetect();
  let formatFunction = null;
  if (valueFormat === '%') formatFunction = (value) => `${Number(value)}%`;
  if (valueFormat === '.%m') formatFunction = (value) => `${Number(value)}MM`;
  if (valueFormat === '.%m$') formatFunction = (value) => `${Number(value)}MM$`;
  return (
    <ResponsiveStream
      data={data}
      keys={keys}
      margin={isSmallScreen ? mobileMargin : margin}
      valueFormat={formatFunction}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: isSmallScreen ? 1 : 5,
        tickPadding: 5,
        tickRotation: isSmallScreen ? 45 : 45,
        legend: '',
        legendOffset: 36,
        format: (val) => {
          return data[val][indexBy];
        },
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: -40,
        format: (val) => {
          if (valueFormat === '%') return `${val * 100}%`;
          if (valueFormat === '.%m') return `${val * 100}%`;
          if (valueFormat === '.%m$') return `${val * 100}%`;
          return val;
        },
      }}
      enableGridX={true}
      enableGridY={false}
      offsetType='expand'
      colors={colors}
      fillOpacity={0.85}
      borderColor={{ theme: 'background' }}
      legends={legend}
      theme={{
        axis: {
          ticks: {
            text: {
              fontSize: isSmallScreen ? 7 : null,
            },
          },
        },
      }}
    />
  );
};

export default NivoStream;
