import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';

import { infos } from './config';
import { byFallYear, byMass, mapMarkers, totals } from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Leaflet = dynamic(() => import('../../../components/Map/Leaflet'), {
  ssr: false,
});

const Page108 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>
            Number of recorded meteorite landings
          </p>
          <AnimatedNumber
            number={totals}
            className='font-mono w-full text-[#453F78] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='map' className='mt-2'>
        <div
          style={{ height: 700 }}
          className='mb-[20px] flex  w-full justify-center'
        >
          <Leaflet markers={mapMarkers} />
        </div>
      </section>
      <section id='by-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by Landings year
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byFallYear}
            keys={['meteorite']}
            indexBy='year'
            colors={['#FFC94Abf']}
            labelTextColor='#000'
            margin={{ left: 40, bottom: 40, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 80, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={90}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='by-mass' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Meteorite by mass (&gt; 10000g)
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[1200px] max-xl:h-[700px]'>
          <NivoBar
            data={byMass}
            keys={['meteorite']}
            indexBy='mass'
            colors={['#795458bf']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 140, top: 20, right: 20 }}
            mobileMargin={{ left: 80, bottom: 80, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={90}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>

      <p className='text-center text-xs'>
        All data are updated at 04/2024 and taken from{' '}
        <a
          className='text-[#453F78] font-bold'
          href='https://meteoritical.org'
          rel='noopener noreferrer'
          target='_blank'
        >
          The Meteoritical Society
        </a>
      </p>
    </>
  );
};

export default Page108;
