'use client';

import { ResponsivePie } from '@nivo/pie';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  let total = 0;
  dataWithArc.forEach((datum) => {
    total += datum.value;
  });

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor='middle'
      dominantBaseline='central'
      style={{
        fontSize: '100%',
        fontWeight: 600,
      }}
    >
      {total}
    </text>
  );
};

const NivoPie = ({
  data,
  margin,
  mobileMargin,
  showTotal = false,
  colors,
  arcLabelsTextColor,
  borderWidth = 1,
  borderColor = {
    from: 'color',
    modifiers: [['darker', 0.2]],
  },
}) => {
  const { isSmallScreen } = useScreenDetect();
  return (
    <ResponsivePie
      data={data}
      margin={isSmallScreen ? mobileMargin : margin}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeInnerRadiusOffset={3}
      activeOuterRadiusOffset={8}
      borderWidth={borderWidth}
      borderColor={borderColor}
      arcLinkLabelsSkipAngle={13}
      arcLinkLabelsTextColor='#333333'
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsRadiusOffset={0.55}
      arcLabelsSkipAngle={24}
      arcLabelsTextColor={
        arcLabelsTextColor
          ? arcLabelsTextColor
          : {
              from: 'color',
              modifiers: [['darker', 2]],
            }
      }
      legends={[]}
      layers={
        showTotal
          ? ['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric]
          : undefined
      }
      colors={colors}
    />
  );
};
export default NivoPie;
