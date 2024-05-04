import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import {
  byArea,
  byCrime,
  bySex,
  byWeapon,
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

const Page126 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full max-md:basis-full'>
          <p className='text-center font-mono text-3xl'>Total crimes</p>
          <AnimatedNumber
            number={totals}
            className='font-mono w-full text-[#640D6B] justify-center'
            size={60}
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
            center={[34.0981, -118.3092]}
            zoom={10}
          />
        </div>
      </section>
      <section id='by-area' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Crimes per Los Angeles neighborhood
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byArea}
            keys={['Female', 'Male', 'Other']}
            indexBy='Area'
            colors={['#2C4E80bf', '#FFC55Abf', '#FC4100bf', '#00215Ebf']}
            labelTextColor='white'
            margin={{ left: 40, bottom: 200, top: 60, right: 20 }}
            mobileMargin={{ left: 40, bottom: 80, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            groupMode='stacked'
            xtickRotation={45}
            borderWidth={3}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            legend={[
              {
                dataFrom: 'keys',
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: -50,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                symbolSize: 20,
              },
            ]}
          />
        </div>
      </section>
      <section id='by-crime' className='mt-4'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Top 20 Crimes
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byCrime}
            keys={['Female', 'Male', 'Other']}
            indexBy='Crime'
            colors={['#2C4E80bf', '#FFC55Abf', '#FC4100bf', '#00215Ebf']}
            labelTextColor='white'
            margin={{ left: 40, bottom: 200, top: 60, right: 20 }}
            mobileMargin={{ left: 40, bottom: 80, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            groupMode='stacked'
            xtickRotation={45}
            borderWidth={3}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            legend={[
              {
                dataFrom: 'keys',
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: -50,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                symbolSize: 20,
              },
            ]}
          />
        </div>
      </section>
      <section id='split-sex-weapon' className='mt-2 mb-20'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Victim Sex</p>
            <NivoPie
              data={bySex}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#2C4E80bf', '#FFC55Abf', '#FC4100bf', '#00215Ebf']}
              borderWidth={3}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 3.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Used Weapon</p>
            <NivoPie
              data={byWeapon}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#2C4E80bf',
                '#FFC55Abf',
                '#1d3557bf',
                '#a8dadcbf',
                '#f1faeebf',
                '#2a9d8fbf',
                '#e9c46abf',
                '#f4a261bf',
                '#e76f51bf',
                '#0096c7bf',
              ]}
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

      <p className='text-center text-xs'>
        All data are updated at 05/2024 and taken from{' '}
        <a
          className='text-[#e63946] font-bold'
          href='https://catalog.data.gov/dataset/crime-data-from-2020-to-present'
          rel='noopener noreferrer'
          target='_blank'
        >
          Data.gov
        </a>
      </p>
    </>
  );
};

export default Page126;
