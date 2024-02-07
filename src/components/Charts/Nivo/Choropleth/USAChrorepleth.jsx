'use client';

import { ResponsiveChoropleth } from '@nivo/geo';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

import countries from '../../../../utils/geojson/usa.json';

const NivoUSAChoropleth = ({ data, colors, valueFormat, domain }) => {
  const { isSmallScreen, isMediumScreen } = useScreenDetect();
  const getProjectionTranslation = () => {
    if (isSmallScreen) return [1.7, 1];
    if (isMediumScreen) return [1.1, 1];
    return [0.95, 1.2];
  };

  const getProjectionScale = () => {
    if (isSmallScreen) return 170;
    if (isMediumScreen) return 200;
    return 300;
  };

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
      projectionScale={getProjectionScale()}
      projectionTranslation={getProjectionTranslation()}
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
          itemWidth: 94,
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

export default NivoUSAChoropleth;
