'use client';

import { useState } from 'react';
import Select from 'react-select';

import './page.css';

import ChartJSBar from '@internal/components/Charts/ChartJS/Bar';
import ChartJSLine from '@internal/components/Charts/ChartJS/Line';

import { infos } from './config';
import {
  byCountry,
  countries,
  totalData,
  totalDataPerCountry,
} from './utils/getParsedData';

const Page40 = () => {
  const [country, setCountry] = useState(3);

  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='total' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-end'>
          Total Unemployment in G7 Nations{' '}
          <span className='text-sm'>(in Millions) </span>
        </h3>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[400px] max-xl:h-[400px]'>
          <ChartJSLine
            data={totalData.data}
            labels={totalData.labels}
            legend='bottom'
            noAspectRation
            animation='race'
            animationDuration={200}
          />
        </div>
      </section>
      <section id='total' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-end'>
          Unemployment rate trend per Nation{' '}
          <span className='text-sm'>(as % of the population) </span>
        </h3>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[400px] max-xl:h-[400px]'>
          <ChartJSLine
            data={totalDataPerCountry.data}
            labels={totalDataPerCountry.labels}
            legend='bottom'
            noAspectRation
            animation='race'
            animationDuration={2000}
          />
        </div>
      </section>
      <section id='per-country' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Unemployment rate per country:
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
            labels={byCountry.labels}
            data={byCountry.dataset[country]}
            noAspectRation
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 01/2024 and taken from{' '}
        <a
          className='text-[#008C45] font-bold'
          href='https://www.imf.org/en/Publications/WEO/weo-database/2023/October/weo-report?c=156,132,134,136,158,112,111&s=LUR,LE,LP,&sy=2010&ey=2023&ssm=0&scsm=1&scc=0&ssd=1&ssc=0&sic=0&sort=country&ds=.&br=1'
          rel='noopener noreferrer'
          target='_blank'
        >
          International Monetary Fund
        </a>
      </p>
    </>
  );
};

export default Page40;
