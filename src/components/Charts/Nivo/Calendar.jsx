'use client';

import { ResponsiveCalendarCanvas } from '@nivo/calendar';
import { useEffect, useState } from 'react';

const NivoCalendar = ({ data, from, to, colors, dayBorderColor, after }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let animation = setTimeout(() => setChartData(data), after);
    return () => {
      clearTimeout(animation);
    };
  }, [after]);

  return (
    <ResponsiveCalendarCanvas
      data={chartData}
      from={from}
      to={to}
      emptyColor='#eeeeee'
      colors={colors}
      margin={{ top: 0 }}
      yearSpacing={40}
      dayBorderWidth={2}
      yearLegendPosition='before'
      dayBorderColor={dayBorderColor}
      legends={[]}
    />
  );
};

export default NivoCalendar;
