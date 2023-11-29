'use client';

import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';

const NivoHeatMapCanvas = ({ data, colors }) => {
  return (
    <ResponsiveHeatMapCanvas
      data={data}
      margin={{ top: 70, right: 60, bottom: 20, left: 80 }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: '',
        legendOffset: 46,
      }}
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: 40,
      }}
      axisLeft={null}
      emptyColor='#555555'
      borderWidth={1}
      borderColor='#000000'
      enableLabels={false}
      legends={[
        {
          anchor: 'left',
          translateX: -50,
          translateY: 0,
          length: 200,
          thickness: 10,
          direction: 'column',
          tickPosition: 'after',
          tickSize: 3,
          tickSpacing: 4,
          tickOverlap: false,
          title: 'Value →',
          titleAlign: 'start',
          titleOffset: 4,
        },
      ]}
      annotations={[]}
      colors={colors}
    />
  );
};

export default NivoHeatMapCanvas;
