'use client';

import { ResponsiveHeatMapCanvas } from '@nivo/heatmap';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

const NivoHeatMapCanvas = ({
  data,
  colors,
  legends = [
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
  ],
  margin = { top: 70, right: 60, bottom: 20, left: 80 },
  mobileMargin = { top: 70, right: 60, bottom: 20, left: 80 },
  axisRight = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legendPosition: 'middle',
    legendOffset: 40,
  },
  axisLeft = null,
  axisTop = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: -90,
    legend: '',
    legendOffset: 46,
  },
  axisTopMobileRotation,
  axisTopTabletRotation,
}) => {
  const { isSmallScreen, isMediumScreen } = useScreenDetect();
  const _axisTop = axisTop;
  if (isSmallScreen && axisTopMobileRotation !== null)
    _axisTop.tickRotation = axisTopMobileRotation;
  if (isMediumScreen && axisTopTabletRotation !== null)
    _axisTop.tickRotation = axisTopMobileRotation;
  return (
    <ResponsiveHeatMapCanvas
      data={data}
      axisTop={_axisTop}
      axisRight={axisRight}
      axisLeft={axisLeft}
      emptyColor='#555555'
      borderWidth={1}
      borderColor='#000000'
      enableLabels={false}
      legends={legends}
      annotations={[]}
      colors={colors}
      margin={isSmallScreen ? mobileMargin : margin}
    />
  );
};

export default NivoHeatMapCanvas;
