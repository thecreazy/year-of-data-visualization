'use client';

import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';
import NivoTreeMap from '@internal/components/Charts/Nivo/TreeMap';

import { infos } from './config';
import {
  madridVsBarcellona,
  spanishVistiros,
  totalPernoctacionesPerYearPerCity,
  totalViajerosByYear,
} from './utils/getParsedData';

const ChartJSBar = dynamic(
  () => import('../../../components/Charts/ChartJS/Bar'),
  { ssr: false }
);

const Page20 = () => {
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
          Total Viajeros per year splitted by Residence
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoBar
            data={totalViajerosByYear}
            keys={Object.keys(totalViajerosByYear[0]).slice(1)}
            indexBy='year'
            colors={['#177e89', '#084c61']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 50, top: 20 }}
            mobileMargin={{ left: 40, bottom: 50 }}
            mobileLayout='vertical'
            layout='vertical'
            legend={[]}
            groupMode='stacked'
            xFormat='m'
          />
        </div>
      </section>
      <section id='top-cities-by-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Top cities by year
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[300px] max-xl:h-[500px]'>
          <NivoLine
            data={totalPernoctacionesPerYearPerCity}
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
            colors={[
              '#177e89',
              '#084c61',
              '#db3a34',
              '#ffc857',
              '#323031',
              '#004e89',
            ]}
            margin={{ top: 20, right: 40, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 40, bottom: 50, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='barcellona-vs-madrid' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Barcellona vs Madrid
        </h3>
        <div className='mb-[20px] flex h-[640px] w-full justify-center max-md:h-[500px] max-xl:h-[640px]'>
          <ChartJSBar
            labels={madridVsBarcellona.labels}
            data={madridVsBarcellona.dataset}
            scales={{
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            }}
          />
        </div>
      </section>
      <section id='total-visitors' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Recap visitors by city
        </h3>
        <div className='mb-[20px] flex h-[1550px] w-full justify-center max-md:h-[1550px] max-xl:h-[1500px]'>
          <NivoTreeMap data={spanishVistiros} />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 01/2024 and taken from{' '}
        <a
          className='text-[#db3a34] font-bold'
          href='https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/2078?tip%3DAM'
          rel='noopener noreferrer'
          target='_blank'
        >
          datos.gob.es
        </a>
      </p>
    </>
  );
};

export default Page20;
