'use client';

import { ResponsiveBump } from '@nivo/bump';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

import { BumpPointValue } from './layers/BumpPointValue';

const NivoBump = ({
  values,
  colors,
  lineWidth = 3,
  activeLineWidth = 6,
  inactiveLineWidth = 3,
  pointSize = 10,
  mobilePointSize = 10,
  activePointSize = 16,
  startLabel = false,
  axisLeft = null,
  axisTop = null,
  axisBottom = null,
  margin,
  theme = {
    grid: {
      line: { stroke: '#ababab' },
    },
  },
  xOuterPadding,
  yOuterPadding,
  showPointValue = false,
  mobileMargin,
  mobileLineWidth = 3,
}) => {
  const { isSmallScreen } = useScreenDetect();
  return (
    <ResponsiveBump
      pointComponent={showPointValue ? BumpPointValue : undefined}
      xOuterPadding={xOuterPadding}
      yOuterPadding={yOuterPadding}
      data={values}
      colors={colors}
      lineWidth={isSmallScreen ? mobileLineWidth : lineWidth}
      activeLineWidth={activeLineWidth}
      inactiveLineWidth={inactiveLineWidth}
      startLabel={startLabel}
      inactiveOpacity={0.15}
      pointSize={isSmallScreen ? mobilePointSize : pointSize}
      activePointSize={activePointSize}
      inactivePointSize={0}
      pointColor={{ theme: 'background' }}
      theme={theme}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      axisTop={axisTop}
      axisBottom={axisBottom}
      axisLeft={axisLeft}
      margin={isSmallScreen ? mobileMargin : margin}
      axisRight={null}
    />
  );
};

export default NivoBump;
