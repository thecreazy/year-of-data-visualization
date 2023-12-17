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
}) => {
  const { isSmallScreen } = useScreenDetect();
  const axisBottomFormatedd = {
    ...axisBottom,
    tickRotation: isSmallScreen ? 90 : axisBottom.tickRotation || 0,
  };
  return (
    <ResponsiveLine
      data={data}
      margin={isSmallScreen ? mobileMargin : margin}
      xScale={xScale}
      xFormat={xFormat}
      yScale={{ type: 'linear' }}
      yFormat=' >-.2f'
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
    />
  );
};

export default NivoLine;
