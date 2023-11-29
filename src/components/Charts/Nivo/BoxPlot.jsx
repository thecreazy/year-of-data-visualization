'use client';

import { ResponsiveBoxPlot } from '@nivo/boxplot';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

const NivoBoxPlot = ({ data, colors }) => {
  const [chartData, setChartData] = useState([]);
  const { isSmallScreen } = useScreenDetect();

  const [ref, entry] = useIntersectionObserver({
    threshold: 0.5,
    root: null,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      let animation = setTimeout(() => setChartData(data), 300);
      return () => {
        clearTimeout(animation);
      };
    }
  }, [entry, data]);

  return (
    <div className='relative h-full w-full' ref={ref}>
      <ResponsiveBoxPlot
        data={chartData}
        minValue='auto'
        maxValue='auto'
        margin={
          !isSmallScreen
            ? { left: 50, top: 50, bottom: 100, right: 50 }
            : {
                top: 20,
                left: 30,
                bottom: 100,
              }
        }
        subGroupBy='subgroup'
        padding={0.12}
        enableGridX={true}
        axisTop={
          !isSmallScreen
            ? {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36,
              }
            : null
        }
        axisRight={
          !isSmallScreen
            ? {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 0,
              }
            : null
        }
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: isSmallScreen ? 90 : 0,
          legendPosition: 'bottom',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        colors={colors}
        borderRadius={2}
        borderWidth={2}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.3]],
        }}
        medianWidth={2}
        medianColor={{
          from: 'color',
          modifiers: [['darker', 0.3]],
        }}
        whiskerEndSize={0.6}
        whiskerColor={{
          from: 'color',
          modifiers: [['darker', 0.3]],
        }}
        motionConfig='stiff'
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 100,
            itemWidth: 60,
            itemHeight: 20,
            itemsSpacing: 20,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            symbolSize: 20,
            symbolShape: 'square',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default NivoBoxPlot;
