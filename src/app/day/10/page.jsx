'use client';

import { useState } from 'react';
import Select from 'react-select';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth';
import ReactChartsLine from '@internal/components/Charts/ReactCharts/Line';

import { infos } from './config';
import { totalVelicleData, yearValues, years } from './utils/getParsedData';

const Page10 = () => {
  const [year, setYear] = useState(0);
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='per-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Veicles per year:
          <Select
            className='text-left min-w-[140px]'
            classNamePrefix='select_transparent'
            defaultValue={years.find((val) => val.value === year)}
            onChange={(c) => setYear(c.value)}
            options={years}
          />
        </h3>
        <div className='mb-[20px] flex h-[1000px] w-full justify-center max-md:h-[1500px] max-xl:h-[700px]'>
          <NivoBar
            data={yearValues[year].data}
            keys={['cars', 'commercial']}
            indexBy='country'
            colors={['#555b6e', '#89b0ae']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 0 }}
            mobileMargin={{ left: 100, bottom: 0 }}
            mobileLayout='horizontal'
            layout='horizontal'
            groupMode='stacked'
            yFormat='k/'
            xFormat='$'
            noX
            valueScale={{ type: 'band' }}
          />
        </div>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Cars</p>
            <NivoChoropleth
              data={yearValues[year].mapCar}
              colors={[
                '#555B6E',
                '#6A718A',
                '#7E86A3',
                '#919BBD',
                '#A5B0D6',
              ].reverse()}
              unknownColor='#faf9f9'
              valueFormat='.2s'
              domain={[0, 1000000]}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Commercial Veichles</p>
            <NivoChoropleth
              data={yearValues[year].mapCommercial}
              colors={[
                '#617D7C',
                '#759695',
                '#89B0AE',
                '#9DC9C7',
                '#B1E3E0',
              ].reverse()}
              unknownColor='#faf9f9'
              valueFormat='.2s'
              domain={[0, 1000000]}
            />
          </div>
        </div>
      </section>
      <section id='total' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total Veicles per year
        </h3>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <ReactChartsLine
            data={totalVelicleData}
            initialHeight={400}
            colors={['#555b6e', '#89b0ae']}
            width='100%'
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#555b6e] font-bold'
          href='https://www.oica.net/category/production-statistics/2020-statistics/'
          rel='noopener noreferrer'
          target='_blank'
        >
          OICA
        </a>
      </p>
    </>
  );
};

export default Page10;
