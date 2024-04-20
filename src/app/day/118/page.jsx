import dynamic from 'next/dynamic';

import './page.css';

import ChartJSBar from '@internal/components/Charts/ChartJS/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';

import { infos } from './config';
import {
  countries,
  countriesSelect,
  countryData,
  data2023,
  totalData,
} from './utils/getParsedData';

const PerCountry = dynamic(() => import('./components/PerCountry'), {
  ssr: false,
});

const Page118 = () => {
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
          Real GDP growth rate in European Union
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[300px] max-xl:h-[500px]'>
          <NivoLine
            data={totalData}
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
            colors={['#f9a01b']}
            margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 20, bottom: 100, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='per-2023' className='mt-20'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          GDP growth rate per european country in 2023
        </h3>
        <div className='mb-[20px] flex h-[500px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <ChartJSBar labels={countries} data={data2023} noAspectRation />
        </div>
      </section>
      <section id='per-country' className='mt-20'>
        <PerCountry countries={countriesSelect} data={countryData} />
      </section>
      <p className='text-center text-xs'>
        All data are updated at 04/2024 and taken from{' '}
        <a
          className='text-[#99627a] font-bold'
          href='https://ec.europa.eu/eurostat/databrowser/view/tec00115/default/line?lang=en'
          rel='noopener noreferrer'
          target='_blank'
        >
          ec.europa.eu
        </a>
      </p>
    </>
  );
};

export default Page118;
