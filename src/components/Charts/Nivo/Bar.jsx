'use client';
import { useScreenDetect } from '@internal/hooks/useScreenDetect';
import { ResponsiveBar } from '@nivo/bar';

const NivoBar = ({ data, keys, margin, colors, mobileMargin }) => {
  const { isSmallScreen } = useScreenDetect();
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy='id'
      margin={isSmallScreen ? mobileMargin : margin}
      padding={0.3}
      groupMode='grouped'
      layout={isSmallScreen ? 'vertical' : 'horizontal'}
      valueScale={{ type: 'linear' }}
      colors={colors}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: isSmallScreen ? 90 : 0,
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0,
      }}
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
      labelTextColor={{
        from: 'color',
        modifiers: [['brighter', 1.6]],
      }}
      legends={[]}
    />
  );
};

export default NivoBar;
