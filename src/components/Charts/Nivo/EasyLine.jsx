'use client';

import { ResponsiveLine } from '@nivo/line';
import dayjs from 'dayjs';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

const NivoEasyLine = ({
  data,
  xScale,
  yScale,
  axisTop,
  axisRight,
  axisLeft,
  axisBottom,
  colors,
  lineWidth = 2,
  pointSize = 0,
  legend,
  yFormat,
  xFormat,
  margin,
  mobileMargin,
  markers,
  enableSlices = 'x',
  tooltipInfo,
}) => {
  const { isSmallScreen } = useScreenDetect();
  return (
    <ResponsiveLine
      enableSlices={enableSlices}
      sliceTooltip={({ slice }) => {
        return (
          <div
            style={{
              background: 'white',
              padding: '9px 12px',
              border: '1px solid #ccc',
            }}
          >
            {slice.points.map((point) => (
              <div
                key={point.id}
                style={{
                  color: point.serieColor,
                  padding: '3px 0',
                }}
              >
                <strong>{point.serieId}</strong>:{' '}
                <div>
                  {tooltipInfo.xName}:{' '}
                  <strong>
                    {tooltipInfo.xFormat === 'date' &&
                      dayjs(point.data.x).format('YYYY-MM-DD')}
                  </strong>
                </div>
                <strong>{point.data.yFormatted}</strong>
              </div>
            ))}
          </div>
        );
      }}
      data={data}
      xScale={xScale}
      yScale={yScale}
      yFormat={yFormat}
      xFormat={xFormat}
      axisTop={axisTop}
      axisRight={axisRight}
      axisBottom={axisBottom}
      axisLeft={axisLeft}
      enableGridX={false}
      colors={colors}
      lineWidth={lineWidth}
      enableTouchCrosshair={true}
      useMesh={true}
      pointSize={pointSize}
      legends={legend}
      margin={isSmallScreen ? mobileMargin : margin}
      markers={markers}
    />
  );
};

export default NivoEasyLine;
