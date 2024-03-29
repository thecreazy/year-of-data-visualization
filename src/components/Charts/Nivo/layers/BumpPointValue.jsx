import { useScreenDetect } from '@internal/hooks/useScreenDetect';

export const BumpPointValue = ({ point }) => {
  const { isSmallScreen, isMediumScreen } = useScreenDetect();
  let fontSize = undefined;
  if (isSmallScreen) fontSize = 10;
  if (isMediumScreen) fontSize = 15;
  return (
    <g
      transform={`translate(${point.x}, ${point.y})`}
      style={{ pointerEvents: 'none' }}
    >
      <rect
        x={point.size * -0.5 - 4}
        y={point.size * -0.5 + 4}
        width={point.size + point.borderWidth}
        height={point.size + point.borderWidth}
        fill='rgba(0, 0, 0, 0)'
      />
      <rect
        x={point.size * -0.5}
        y={point.size * -0.5}
        width={point.size}
        height={point.size}
        fill={point.color}
        stroke={point.borderColor}
        strokeWidth={point.borderWidth}
      />
      {point.isActive && (
        <text
          textAnchor='middle'
          y={25}
          fontSize={fontSize}
          fill={point.borderColor}
        >
          {point.data.y}
        </text>
      )}
    </g>
  );
};
