import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoUSAChoropleth from '@internal/components/Charts/Nivo/Choropleth/USAChrorepleth';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import {
  byFuelType,
  byOpenYear,
  total,
  totalByOwnerType,
  totalByState,
} from './utils/getFormattedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page45 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold max-md:text-4xl'>
          {infos.title}
        </h1>
        <h3 className='max-md:text-md py-2 text-center font-mono text-xl font-bold'>
          {infos.description}
        </h3>
      </section>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total number of Fueling Stations
          </p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#457b9d] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='total-by-state' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          Fueling Stations splitted by state
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center max-md:h-[600px]'>
          <NivoUSAChoropleth
            data={totalByState}
            colors={[
              '#023e8a',
              '#0077b6',
              '#0096c7',
              '#00b4d8',
              '#48cae4',
              '#90e0ef',
            ]}
            domain={[0, 2700]}
          />
        </div>
      </section>
      <section id='split-type-owner' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Fuel Type</p>
            <NivoPie
              data={byFuelType}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#023e8abf',
                '#0077b6bf',
                '#0096c7bf',
                '#00b4d8bf',
                '#48cae4bf',
                '#90e0efbf',
              ]}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Owner type</p>
            <NivoPie
              data={totalByOwnerType}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#023e8abf',
                '#0077b6bf',
                '#0096c7bf',
                '#00b4d8bf',
                '#48cae4bf',
                '#90e0efbf',
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
      <section id='total-by-open-year' className='mt-10 pt-20'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Total Fueling Stations per year of opening
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byOpenYear}
            keys={['stations']}
            indexBy='year'
            colors={['#e63946bf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 150, top: 30 }}
            mobileMargin={{ left: 40, bottom: 150, top: 20 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={45}
            minValue={0}
            valueScale={{ type: 'symlog' }}
          />
        </div>
      </section>

      <p className='pt-[30px] text-center text-xs '>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='font-bold text-[#457b9d]'
          href='https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/all/'
          rel='noopener noreferrer'
          target='_blank'
        >
          NREL
        </a>
      </p>
    </>
  );
};

export default Page45;
