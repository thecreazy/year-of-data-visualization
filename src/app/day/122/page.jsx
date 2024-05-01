import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import Legend from '@internal/components/Legend/Legend';

import { infos } from './config';
import {
  byHeightRestrictions,
  byPark,
  byType,
  mapMarkers,
  totalParks,
  totals,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Leaflet = dynamic(() => import('../../../components/Map/Leaflet'), {
  ssr: false,
});

const Page122 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-1/2 max-md:basis-full'>
          <p className='text-center font-mono text-3xl'>Total activities</p>
          <AnimatedNumber
            number={totals}
            className='font-mono w-full text-[#e63946] justify-center'
            size={40}
          />
        </div>
        <div className='stats-radar basis-1/2 max-md:basis-full'>
          <p className='text-center font-mono text-3xl'>Total parks</p>
          <AnimatedNumber
            number={totalParks}
            className='font-mono w-full text-[#e63946] justify-center'
            size={40}
          />
        </div>
      </div>
      <section id='map' className='mt-2'>
        <div className='mb-4'>
          <Legend
            options={[
              { color: '#e63946', label: 'Attraction' },
              { color: '#457b9d', label: 'Entertainment' },
            ]}
          />
        </div>
        <div
          style={{ height: 700 }}
          className='mb-[20px] flex  w-full justify-center'
        >
          <Leaflet
            markers={mapMarkers}
            center={[28.374904, -81.550852]}
            zoom={13}
          />
        </div>
      </section>
      <section id='by-park' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Activities per Park
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byPark}
            keys={['Attraction', 'Entertainment']}
            indexBy='Park'
            colors={['#e63946bf', '#457b9dbf']}
            labelTextColor='white'
            margin={{ left: 40, bottom: 200, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 80, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            groupMode='stacked'
            xtickRotation={45}
            borderWidth={3}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='split-type-height' className='mt-2 mb-20'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Activity Type</p>
            <NivoPie
              data={byType}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#457b9dbf', '#e63946bf']}
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
            <p className='text-center font-bold mb-4'>By Height Restrictions</p>
            <NivoPie
              data={byHeightRestrictions}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#457b9dbf',
                '#e63946bf',
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
        All data are updated at 04/2024 and taken from{' '}
        <a
          className='text-[#e63946] font-bold'
          href='https://www.kaggle.com/datasets/ksk385/disney-world-florida-parks-activities'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle
        </a>
      </p>
    </>
  );
};

export default Page122;