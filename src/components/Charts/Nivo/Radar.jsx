'use client';

import { ResponsiveRadar } from '@nivo/radar';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

const NivoRadar = ({ data, keys, indexBy, colors, maxValue, theme }) => {
  const { isSmallScreen } = useScreenDetect();
  return (
    <ResponsiveRadar
      data={data}
      keys={keys}
      indexBy={indexBy}
      margin={
        isSmallScreen
          ? { top: 40, bottom: 20, left: 40, right: 40 }
          : { top: 40, bottom: 20 }
      }
      borderColor={{ from: 'color' }}
      gridLabelOffset={16}
      dotSize={8}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={1}
      colors={colors}
      theme={
        theme
          ? theme
          : {
              text: {
                fill: '#393939',
                fontWeight: 600,
              },
              tooltip: {
                container: { color: '#393939' },
              },
            }
      }
      motionConfig='wobbly'
      legends={[]}
      maxValue={maxValue}
    />
  );
};

export default NivoRadar;
