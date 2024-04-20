import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import Legend from '@internal/components/Legend/Legend';

import { infos } from './config';
import {
  byProvince,
  byRegion,
  byStatus,
  byTypology,
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

const Page124 = () => {
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
            Abandoned railway lines
          </p>
          <AnimatedNumber
            number={totals}
            className='font-mono w-full text-[#f72585] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='map' className='mt-2'>
        <div className='mb-4'>
          <Legend
            options={[
              { color: '#f72585', label: 'Closed to traffic' },
              { color: '#4cc9f0', label: 'Unfinished' },
              { color: '#3a0ca3', label: 'Route variant' },
            ]}
          />
        </div>
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
      <section id='split-state-typology' className='mt-2 mb-20'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Current State</p>
            <NivoPie
              data={byStatus}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#f72585bf', '#4cc9f0bf', '#3a0ca3bf', '#4361eebf']}
              borderWidth={3}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextCol
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Typology</p>
            <NivoPie
              data={byTypology}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#f72585bf', '#4cc9f0bf', '#3a0ca3bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
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
            colors={['#3a0ca3bf']}
            labelTextColor='white'
            margin={{ left: 40, bottom: 100, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 100, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={45}
            borderWidth={3}
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
            colors={['#7209b7bf']}
            labelTextColor='white'
            margin={{ left: 40, bottom: 100, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 100, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={45}
            borderWidth={3}
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
          className='text-[#f72585] font-bold'
          href='http://hetor.it/dataset/linee-ferroviarie-abbandonate-in-italia'
          rel='noopener noreferrer'
          target='_blank'
        >
          hetor.it
        </a>
      </p>
    </>
  );
};

export default Page124;
