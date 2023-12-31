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
  yFormat,
  xFormat,
  noX = false,
  truncateTickAt = 0,
  valueScale = { type: 'linear' },
  theme = {
    text: {
      fontWeight: 600,
    },
  },
}) => {
  const { isSmallScreen } = useScreenDetect();
  theme.text.fontSize = isSmallScreen ? 8 : theme.text.fontSize;
  const xAxisDetail = noX
    ? null
    : {
        tickSize: 5,
        tickPadding: 5,
        tickRotation: isSmallScreen ? 90 : 0,
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0,
      };

  const yAxisDetail = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legendPosition: 'middle',
    legendOffset: -40,
    truncateTickAt: truncateTickAt,
  };

  let formatY = undefined;
  if (yFormat === 'b') {
    formatY = (value) => `${value}B$`;
    yAxisDetail.format = (value) => `${value}B$`;
  }
  if (yFormat === 'm') {
    formatY = (value) => `${value}MM`;
    yAxisDetail.format = (value) => `${value}MM`;
  }
  if (yFormat === 'k/') {
    formatY = (value) => `${Number(value / 1000).toFixed(1)}K`;
  }
  if (yFormat === '$') {
    formatY = (value) => `${value}$`;
    yAxisDetail.format = (value) => `${value}$`;
  }

  if (xFormat === 'm/') {
    xAxisDetail.format = (value) => `${value / 1000000}M$`;
    formatY = (value) => `${(value / 1000000).toFixed(1)}M$`;
  }
  if (xFormat === '$') {
    formatY = (value) => `${value}$`;
  }

  return (
    <ResponsiveBar
      data={data}
      valueFormat={formatY}
      keys={keys}
      indexBy={indexBy}
      margin={isSmallScreen ? mobileMargin : margin}
      padding={0.3}
      groupMode={groupMode}
      layout={isSmallScreen ? mobileLayout : layout}
      valueScale={valueScale}
      colors={colors}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={xAxis ? xAxisDetail : null}
      axisRight={null}
      axisBottom={xAxisDetail}
      axisLeft={yAxisDetail}
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
      theme={theme}
    />
  );
};

export default NivoBar;
