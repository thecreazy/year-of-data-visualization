export const VerticalLabels = ({ bars, labelSkipWidth, labelSkipHeight }) => {
  return (
    <g>
      {bars.map(({ width, x, y, height, data: { formattedValue } }) => {
        if (width < labelSkipWidth) return null;
        if (height < labelSkipHeight) return null;
        const yPosition = y + height / 2;
        return (
          <text
            key={`${x}.${y}`}
            x={x + width / 2}
            y={yPosition < 460 ? yPosition : 460}
            textAnchor='middle'
            style={{
              fontSize: 12,
              writingMode: 'vertical-lr',
            }}
          >
            {formattedValue}
          </text>
        );
      })}
    </g>
  );
};
