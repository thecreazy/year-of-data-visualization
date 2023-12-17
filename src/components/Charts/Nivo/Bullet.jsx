'use client';

import { ResponsiveBullet } from '@nivo/bullet';

const NivoBullet = ({ data }) => {
  return (
    <ResponsiveBullet
      data={data}
      margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
      layout='vertical'
      spacing={46}
      titleAlign='middle'
      titleOffsetX={0}
      measureSize={0.45}
    />
  );
};

export default NivoBullet;
