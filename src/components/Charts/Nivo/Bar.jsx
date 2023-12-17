'use client';

import { ResponsiveBar } from '@nivo/bar';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

const NivoBar = ({
  data,
  keys,
  margin,
  colors,
  mobileMargin,
  labelTextColor,
  groupMode = 'grouped',
  layout = 'horizontal',
  mobileLayout = 'vertical',
  indexBy = 'id',
  xAxis = false,
  legend = [],
}) => {
  const { isSmallScreen } = useScreenDetect();
  const xAxisDetail = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: isSmallScreen ? 90 : 0,
    legendPosition: 'middle',
    legendOffset: 32,
    truncateTickAt: 0,
  };
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      margin={isSmallScreen ? mobileMargin : margin}
      padding={0.3}
      groupMode={groupMode}
      layout={isSmallScreen ? mobileLayout : layout}
      valueScale={{ type: 'linear' }}
      colors={colors}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={xAxis ? xAxisDetail : null}
      axisRight={null}
      axisBottom={xAxisDetail}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={
        labelTextColor
          ? labelTextColor
          : {
              from: 'color',
              modifiers: [['brighter', 1.6]],
            }
      }
      legends={legend}
      theme={{
        text: {
          fontWeight: 600,
          fontSize: isSmallScreen ? 8 : null,
        },
      }}
    />
  );
};

export default NivoBar;
