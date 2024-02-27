'use client';

import { ResponsiveChoropleth } from '@nivo/geo';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

import countries from '../../../../utils/geojson/italy.json';

const NivoItalyChoropleth = ({
  data,
  colors,
  valueFormat,
  domain,
  legendItemSize = 94,
}) => {
  const { isSmallScreen } = useScreenDetect();
  return (
    <ResponsiveChoropleth
      data={data}
      features={countries.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors={colors}
      domain={domain}
      unknownColor='#666666'
      label='id'
      valueFormat={valueFormat}
      projectionScale={1200}
      projectionTranslation={isSmallScreen ? [-0.3, 2.3] : [0.3, 2.9]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={false}
      borderWidth={0.5}
      borderColor='#152538'
      legends={[
        {
          anchor: isSmallScreen ? 'top' : 'bottom-left',
          direction: 'column',
          justify: true,
          translateX: isSmallScreen ? 0 : 20,
          translateY: isSmallScreen ? 0 : -100,
          itemsSpacing: 0,
          itemWidth: legendItemSize,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemTextColor: '#393939',
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#393939',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default NivoItalyChoropleth;
