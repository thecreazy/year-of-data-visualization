'use client';
import { ResponsiveRadialBar } from '@nivo/radial-bar';

const MyResponsiveRadialBar = ({ data, max, percentage = 0 }) => (
  <div className='relative h-full w-full'>
    <ResponsiveRadialBar
      data={[
        {
          id: 'Stats',
          data: [
            {
              x: 'Percentage',
              y: data,
            },
          ],
        },
      ]}
      maxValue={max}
      padding={0.6}
      startAngle={-180}
      endAngle={180}
      cornerRadius={11}
      colors={['#FFC72C']}
      tracksColor='#1D428A'
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

export default MyResponsiveRadialBar;
