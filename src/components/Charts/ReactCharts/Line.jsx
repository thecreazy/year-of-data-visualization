'use client';

import React from 'react';
import { Chart } from 'react-charts';

export default function ReactChartsLine({
  data,
  initialHeight,
  colors,
  width,
}) {
  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.value,
        elementType: 'line',
      },
    ],
    []
  );

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
        initialHeight,
        defaultColors: colors,
        initialWidth: width,
      }}
    />
  );
}
