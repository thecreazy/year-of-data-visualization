'use client';

import { ResponsiveLine } from '@nivo/line';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

const NivoLine = ({
  data,
  xScale,
  xFormat,
  axisBottom,
  axisLeft,
  colors,
  margin,
  mobileMargin,
  enablePoints = true,
  yScale = { type: 'linear' },
  markers,
  yFormat = '>-.2f',
  enableSlices = 'x',
}) => {
  const { isSmallScreen } = useScreenDetect();
  const axisBottomFormatedd = {
    ...axisBottom,
    tickRotation: isSmallScreen ? 90 : axisBottom.tickRotation || 0,
  };
  let formatY = yFormat;
  if (yFormat === 'b') axisLeft.format = (value) => `${value}B$`;
  if (yFormat === 'b') formatY = (value) => `${value}B$`;

  return (
    <ResponsiveLine
      data={data}
      margin={isSmallScreen ? mobileMargin : margin}
      xScale={xScale}
      xFormat={xFormat}
      yScale={yScale}
      yFormat={formatY}
      curve='monotoneX'
      axisTop={null}
      axisRight={null}
      axisBottom={axisBottomFormatedd}
      axisLeft={axisLeft}
      enableGridX={true}
      colors={colors}
      lineWidth={2}
      useMesh={true}
      legends={[]}
      enablePoints={enablePoints}
      markers={markers}
      enableSlices={enableSlices}
    />
  );
};

export default NivoLine;
