'use client';

import { useIntersectionObserver } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';

import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth/Choropleth';

const TimedNivoChoropleth = ({ data, time = 1500, ...otherProps }) => {
  const [actualData, setActualData] = useState(0);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0.5,
    root: null,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      const changeValues = setInterval(() => {
        const newData = actualData === data.length - 1 ? 0 : actualData + 1;
        setActualData(newData);
      }, time);
      return () => clearInterval(changeValues);
    }
  }, [actualData, data, time, entry]);

  return (
    <div className='w-full' ref={ref}>
      <p className='font-mono mb-[12px] text-3xl max-md:text-2xl text-center'>
        {data[actualData].year}
      </p>
      <NivoChoropleth data={data[actualData].data} {...otherProps} />
    </div>
  );
};

export default TimedNivoChoropleth;
