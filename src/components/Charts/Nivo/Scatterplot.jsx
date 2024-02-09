'use client';

import { ResponsiveScatterPlotCanvas } from '@nivo/scatterplot';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

const NivoScatterPlot = ({
  data,
  xScale,
  yScale,
  axisBottom,
  axisLeft,
  mobileMargin,
  margin,
  legends,
  colors,
  showSerieId = false,
}) => {
  const { isSmallScreen } = useScreenDetect();
  return (
    <ResponsiveScatterPlotCanvas
      data={data}
      colors={colors}
      margin={isSmallScreen ? mobileMargin : margin}
      xScale={xScale}
      yScale={yScale}
      blendMode='multiply'
      axisBottom={axisBottom}
      axisLeft={axisLeft}
      legends={legends}
      tooltip={({ node }) => (
        <div
          style={{
            color: node.color,
            background: 'white',
            padding: '4px 16px',
            boxShadow: '2px 2px 5px #958e8e',
          }}
        >
          <strong>{showSerieId ? `${node.serieId}:` : node.id}</strong>
          {` ${axisBottom.legend}:`} <strong>{node.formattedX}</strong>
          {` ${axisLeft.legend}:`} <strong>{node.formattedY}</strong>
        </div>
      )}
    />
  );
};

export default NivoScatterPlot;
