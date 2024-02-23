'use client';

import { useState } from 'react';
import Select from 'react-select';

import './page.css';

import ChartJSLine from '@internal/components/Charts/ChartJS/Line';
import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoRadar from '@internal/components/Charts/Nivo/Radar';

import { infos } from './config';
import {
  dotaPlayersValue,
  dotaPrizesValue,
  dotaTournamentsValue,
  totalsValues,
  tournamentsData,
  years,
  yearsData,
} from './utils/getParsedData';

const Page8 = () => {
  const [year, setYear] = useState(0);
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title text-center'>
          {infos.title}
        </h1>
      </section>
      <section id='per-year-total' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          eSport total prizes per year
        </h3>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[180px] max-xl:h-[400px]'>
          <ChartJSLine
            data={totalsValues.data}
            labels={totalsValues.labels}
            animation
            legend
          />
        </div>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          eSport total Players and Tournaments per year
        </h3>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[180px] max-xl:h-[400px]'>
          <ChartJSLine
            data={tournamentsData.data}
            labels={tournamentsData.labels}
            animation
            legend
          />
        </div>
      </section>
      <section id='detail-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Year{' '}
          <Select
            className='text-left min-w-[140px]'
            classNamePrefix='select_transparent'
            defaultValue={years.find((val) => val.value === year)}
            onChange={(c) => setYear(c.value)}
            options={years}
            aria-label='select-year'
          />
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[500px]'>
          <NivoBar
            xAxis
            data={yearsData[year].data.sort((a, b) => a.prizes - b.prizes)}
            keys={['prizes']}
            indexBy='name'
            colors={['#084c61']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 40, top: 40, right: 10 }}
            mobileMargin={{ left: 80, bottom: 30, top: 30, right: 10 }}
            mobileLayout='horizontal'
            truncateTickAt={10}
            xFormat='m/'
          />
        </div>
      </section>
      <section id='detail-dota2' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Dota historical statistics
        </h3>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[180px] max-xl:h-[400px]'>
          <ChartJSLine
            data={dotaPrizesValue.data}
            labels={dotaPrizesValue.labels}
            animation
            legend
          />
        </div>
        <p className='text-center font-mono text-lg'>Main stats per year</p>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center'>Players</p>
            <NivoRadar
              data={dotaPlayersValue}
              keys={Object.keys(dotaPlayersValue[0]).slice(1)}
              colors={['#177e89']}
              indexBy='year'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]  max-md:mt-20'>
            <p className='text-center'>Tournaments</p>
            <NivoRadar
              data={dotaTournamentsValue}
              keys={Object.keys(dotaTournamentsValue[0]).slice(1)}
              colors={['#db3a34']}
              indexBy='year'
            />
          </div>
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#1b4332] font-bold'
          href='https://www.esportsearnings.com/history/2023/games'
          rel='noopener noreferrer'
          target='_blank'
        >
          eSports Earnings
        </a>
      </p>
    </>
  );
};

export default Page8;
