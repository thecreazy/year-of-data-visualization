'use client';

import './page.css';

import ChartJSBar from '@internal/components/Charts/ChartJS/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';

import { infos } from './config';
import { splitByRegionAndPrison, totalByYear } from './utils/getParsedData';

const Page25 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='total-per-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Prisoner total per year
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[300px] max-xl:h-[500px]'>
          <NivoLine
            data={totalByYear}
            xScale={{
              type: 'point',
            }}
            axisBottom={{
              legendOffset: -12,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: '.2s',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            xFormat='time:%Y-%m-%d'
            colors={['#FF9633']}
            margin={{ top: 20, right: 40, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 40, bottom: 50, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='by-prison-and-prisoner-birth' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by prison and prisoner region of birth
        </h3>
        <div className='mb-[20px] flex h-[640px] w-full justify-center max-md:h-[500px] max-xl:h-[640px]'>
          <ChartJSBar
            noAspectRation
            labels={splitByRegionAndPrison.labels}
            data={splitByRegionAndPrison.dataset}
            scales={{
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            }}
            legend={{
              display: false,
              position: 'top',
            }}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 01/2024 and taken from{' '}
        <a
          className='text-[#FF9633] font-bold'
          href='https://dati.comune.milano.it/dataset/1e3554c8-2884-417c-952e-6f61830d0a6f/resource/a9c05070-cd8f-40d6-8fc2-9a554fd0a013/download/ds579_detenuti_regione_nascita_2010-20.json'
          rel='noopener noreferrer'
          target='_blank'
        >
          dati.comune.milano.it
        </a>
      </p>
    </>
  );
};

export default Page25;
