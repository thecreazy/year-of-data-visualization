'use client';

import { ResponsiveChoropleth } from '@nivo/geo';

import countries from '../../../../utils/geojson/countries.json';

const NivoChoropleth = ({
  data,
  colors,
  valueFormat,
  domain = [0, 100],
  unknownColor = '#666666',
}) => {
  return (
    <ResponsiveChoropleth
      data={data}
      features={countries.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors={colors}
      domain={domain}
      unknownColor={unknownColor}
      label='properties.name'
      valueFormat={valueFormat}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor='#dddddd'
      borderWidth={0.5}
      borderColor='#152538'
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          justify: true,
          translateX: 20,
          translateY: -100,
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

export default NivoChoropleth;
