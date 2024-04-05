import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';

import { infos } from './config';
import {
  byMunicipality,
  byProvince,
  byRegion,
  byYear,
  mapMarkers,
  totals,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Leaflet = dynamic(() => import('../../../components/Map/Leaflet'), {
  ssr: false,
});

const Page111 = () => {
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
            Number of Italian stations
          </p>
          <AnimatedNumber
            number={totals}
            className='font-mono w-full text-[#fe7f2d] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='map' className='mt-2'>
        <div
          style={{ height: 700 }}
          className='mb-[20px] flex  w-full justify-center'
        >
          <Leaflet
            markers={mapMarkers}
            center={[41.9107562, 12.5303507]}
            zoom={6}
          />
        </div>
      </section>

      <section id='by-region' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by Region
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byRegion}
            keys={['stations']}
            indexBy='region'
            colors={['#a1c181bf']}
            labelTextColor='#000'
            margin={{ left: 40, bottom: 100, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 100, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={45}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='by-province' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Top 20 province with more stations
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byProvince}
            keys={['stations']}
            indexBy='province'
            colors={['#619b8abf']}
            labelTextColor='#000'
            margin={{ left: 40, bottom: 100, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 100, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={45}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='by-municipality' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Top 20 municipality with more stations
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byMunicipality}
            keys={['stations']}
            indexBy='municipality'
            colors={['#FFC94Abf']}
            labelTextColor='#000'
            margin={{ left: 40, bottom: 100, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 100, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={45}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='by-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by enter year in open street map
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byYear}
            keys={['stations']}
            indexBy='year'
            colors={['#fe7f2dbf']}
            labelTextColor='#000'
            margin={{ left: 40, bottom: 40, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 80, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
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
          className='text-[#fe7f2d] font-bold'
          href='http://www.datiopen.it/it/opendata/Mappa_delle_stazioni_ferroviarie_in_Italia'
          rel='noopener noreferrer'
          target='_blank'
        >
          datiopen.it
        </a>
      </p>
    </>
  );
};

export default Page111;
