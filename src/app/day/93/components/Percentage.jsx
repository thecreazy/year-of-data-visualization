'use client';
import { ResponsiveRadialBar } from '@nivo/radial-bar';
import { useEffect, useState } from 'react';
import useIsInViewport from 'use-is-in-viewport';

const MyResponsiveRadialBar = ({ data, max, percentage = 0 }) => {
  const [chartData, setChartData] = useState(0);
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  useEffect(() => {
    if (isInViewport) {
      let animation = setTimeout(() => setChartData(data), 300);
      return () => {
        clearTimeout(animation);
      };
    }
  }, [isInViewport, data]);

  return (
    <div className='relative h-full w-full' ref={targetRef}>
      <ResponsiveRadialBar
        data={[
          {
            id: 'Stats',
            data: [
              {
                x: 'Percentage',
                y: chartData,
              },
            ],
          },
        ]}
        maxValue={max}
        padding={0.6}
        startAngle={-180}
        endAngle={180}
        cornerRadius={11}
        colors={['#ED174C']}
        tracksColor='#006BB6'
        borderWidth={0}
        enableRadialGrid={false}
        enableCircularGrid={false}
        radialAxisStart={null}
        circularAxisOuter={null}
        isInteractive={false}
        motionConfig='wobbly'
        legends={[]}
      />
      <div className='percentage-number color-[#fff] absolute inset-y-2/4 w-full text-center text-lg text-xl'>
        {percentage}%
      </div>
    </div>
  );
};

export default MyResponsiveRadialBar;
