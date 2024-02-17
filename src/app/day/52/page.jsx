'use client';

import { useState } from 'react';
import Select from 'react-select';

import './page.css';

import ChartJSBar from '@internal/components/Charts/ChartJS/Bar';
import NivoBoxPlot from '@internal/components/Charts/Nivo/BoxPlot';
import TimedNivoChoropleth from '@internal/components/TimeSeries/TimedNivoChoropleth';

import { infos } from './config';
import {
  byCountry,
  countries,
  globalAvg,
  mapData,
  years,
} from './utils/getParsedData';

const Page52 = () => {
  const [country, setCountry] = useState(0);
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='globalAvg' className='py-4'>
        <h4 className=' text-center font-mono text-2xl font-bold'>
          Avg global Inflation %
        </h4>
        <div className='flex h-[1200px] flex-row py-12  max-md:h-[1200px]'>
          <NivoBoxPlot
            data={globalAvg}
            colors={['#863A6F']}
            layout='horizontal'
            mobileMargin={{ top: 20, left: 50, bottom: 100 }}
          />
        </div>
      </section>
      <section id='map' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Average Inflation by country (time series)
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center'>
          <TimedNivoChoropleth
            data={mapData}
            colors={[
              '#219C90',
              '#59a66b',
              '#fac400',
              '#f5b509',
              '#f0a711',
              '#ec9a18',
              '#e78c20',
              '#e27f28',
              '#de7130',
              '#d96338',
              '#d55640',
              '#d04848',
            ]}
            valueFormat='.2s'
            domain={[-10, 50]}
            time={1000}
          />
        </div>
      </section>
      <section id='per-country' className='mt-20'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Inflation rate per country:
          <Select
            className='text-left min-w-[200px]'
            classNamePrefix='select_transparent'
            defaultValue={countries.find((val) => val.value === country)}
            onChange={(c) => setCountry(c.value)}
            options={countries}
            aria-label='Select country'
          />
        </h3>
        <div className='mb-[20px] flex h-[500px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <ChartJSBar
            labels={years}
            data={byCountry.dataset[country]}
            noAspectRation
          />
        </div>
      </section>
      <p className='text-center text-xs mt-20'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#219C90] font-bold'
          href='https://www.kaggle.com/datasets/sazidthe1/global-inflation-data'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle
        </a>
      </p>
    </>
  );
};

export default Page52;
