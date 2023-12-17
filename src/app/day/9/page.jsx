'use client';

import { useState } from 'react';
import Select from 'react-select';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';

import { infos } from './config';
import { countries, countryData, yearData, years } from './utils/getParsedData';

const Page9 = () => {
  const [country, setCountry] = useState('ITA');
  const [year, setYear] = useState(2020);
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
          Percentage per year:{' '}
          <Select
            className='text-left min-w-[140px]'
            classNamePrefix='select_transparent'
            defaultValue={years.find((val) => val.value === year)}
            onChange={(c) => setYear(c.value)}
            options={years}
          />
        </h3>
        <div className='mb-[20px] flex h-[1550px] w-full justify-center max-md:h-[1500px] max-xl:h-[1200px]'>
          <NivoBar
            xAxis
            data={yearData[year].sort((a, b) => a.value - b.value)}
            keys={['value']}
            indexBy='country'
            colors={['#a5a58d']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 40, top: 40, right: 10 }}
            mobileMargin={{ left: 80, bottom: 30, top: 30, right: 10 }}
            mobileLayout='horizontal'
          />
        </div>
      </section>
      <section id='per-country' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Percentage per country:
          <Select
            className='text-left min-w-[200px]'
            classNamePrefix='select_transparent'
            defaultValue={countries.find((val) => val.value === country)}
            onChange={(c) => setCountry(c.value)}
            options={countries}
          />
        </h3>
        <div className='mb-[20px] flex h-[500px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <NivoBar
            data={countryData[country].sort((a, b) => a.year - b.year)}
            keys={['value']}
            indexBy='year'
            colors={['#a5a58d']}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 50 }}
            mobileMargin={{ left: 30, bottom: 50 }}
            mobileLayout='vertical'
            layout='vertical'
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#a86a48] font-bold'
          href='https://gender-data-hub-2-undesa.hub.arcgis.com/datasets/faec1302cdd64111a4d6ba3f438477c1/explore'
          rel='noopener noreferrer'
          target='_blank'
        >
          The gender data hub
        </a>
      </p>
    </>
  );
};

export default Page9;
