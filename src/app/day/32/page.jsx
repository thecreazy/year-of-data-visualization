'use client';

import { useState } from 'react';
import Select from 'react-select';

import './page.css';

import ChartJSBar from '@internal/components/Charts/ChartJS/Bar';
import ReactChartsLine from '@internal/components/Charts/ReactCharts/Line';

import { infos } from './config';
import { byCountry, countries, totalData, vs2014 } from './utils/getParsedData';

const Page32 = () => {
  const [country, setCountry] = useState(11);

  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='total' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total European population
        </h3>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <ReactChartsLine
            data={totalData}
            initialHeight={400}
            colors={['#5F8670']}
            width='100%'
          />
        </div>
      </section>
      <section id='barcellona-vs-madrid' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Percentage of population increase compared to 2014 by country
        </h3>
        <div className='mb-[20px] flex h-[640px] w-full justify-center max-md:h-[500px] max-xl:h-[640px]'>
          <ChartJSBar
            labels={vs2014.labels}
            data={vs2014.dataset}
            noAspectRation
          />
        </div>
      </section>
      <section id='per-country' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Population per country:
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
          className='text-[#747264] font-bold'
          href='https://ec.europa.eu/eurostat/databrowser/view/demo_gind/default/table?lang=en&category=demo.demo_ind'
          rel='noopener noreferrer'
          target='_blank'
        >
          Eurostat
        </a>
      </p>
    </>
  );
};

export default Page32;
