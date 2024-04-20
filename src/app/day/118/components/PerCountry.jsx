'use client';

import { useState } from 'react';
import Select from 'react-select';

import NivoLine from '@internal/components/Charts/Nivo/Line';

const PerCountry = ({ countries, data }) => {
  const [country, setCountry] = useState('IT');

  if (!countries) return null;
  return (
    <>
      <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-xl:flex-col justify-center items-center'>
        Comparison between the European and{' '}
        <Select
          className='text-left min-w-[140px]'
          classNamePrefix='select_transparent'
          defaultValue={countries.find((val) => val.value === country)}
          onChange={(c) => setCountry(c.value)}
          options={countries}
          aria-label='select-country'
        />{' '}
        GDP growth rates
      </h3>
      <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[300px] max-xl:h-[500px]'>
        <NivoLine
          data={data[country]}
          xScale={{
            type: 'point',
          }}
          yScale={{
            type: 'linear',
            min: 'auto',
          }}
          axisBottom={{
            legendOffset: -12,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.0%',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          yFormat='.1%'
          colors={['#f9a01b', '#753bbd']}
          margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
          mobileMargin={{ top: 20, right: 20, bottom: 100, left: 40 }}
          enablePoints={false}
          legend={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 60,
              itemsSpacing: 2,
              itemDirection: 'right-to-left',
              itemWidth: 80,
              itemHeight: 12,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
            },
          ]}
        />
      </div>
    </>
  );
};

export default PerCountry;
