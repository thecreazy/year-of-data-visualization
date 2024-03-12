import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import './utils/getParsedData';
import {
  byAtmosphericCondition,
  byLighting,
  byRoadFund,
  byStreetType,
  byTypeOfAccident,
  totalAccident,
  totalDeaths,
  totalInjured,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page74 = () => {
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
            Total Accident in 2022
          </p>
          <AnimatedNumber
            number={totalAccident}
            className='font-mono w-full text-[#5a189a] justify-center'
            size={80}
          />
        </div>
      </div>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-1/2 max-md:basis-full'>
          <p className='text-center font-mono text-2xl'>Number of Injured</p>
          <AnimatedNumber
            number={totalInjured}
            className='font-mono w-full text-[#5a189a] justify-center'
            size={40}
          />
        </div>
        <div className='stats-radar basis-1/2 max-md:basis-full'>
          <p className='text-center font-mono text-2xl'>Number of Deaths</p>
          <AnimatedNumber
            number={totalDeaths}
            className='font-mono w-full text-[#5a189a] justify-center'
            size={40}
          />
        </div>
      </div>
      <section id='by-type-of-accident' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          By type of accident
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[500px]'>
          <NivoBar
            data={byTypeOfAccident}
            keys={Object.keys(byTypeOfAccident[0]).slice(1)}
            indexBy='type'
            colors={['#7b2cbfbf']}
            labelTextColor='#fff'
            margin={{ left: 80, bottom: 150, top: 20 }}
            mobileMargin={{ left: 60, bottom: 50 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={90}
            borderWidth={3}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='by-road-fund-and-street-type' className='mt-10'>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Split by road fund</p>
            <NivoPie
              data={byRoadFund}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#9b5de5bf',
                '#3c096cbf',
                '#7b2cbfbf',
                '#9d4eddbf',
                '#5a189abf',
                '#240046bf',
                '#e0aaffbf',
                '#10002bbf',
              ]}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'> Split street type</p>
            <NivoPie
              data={byStreetType}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#9b5de5bf',
                '#3c096cbf',
                '#7b2cbfbf',
                '#9d4eddbf',
                '#5a189abf',
                '#240046bf',
                '#e0aaffbf',
                '#10002bbf',
              ]}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
        </div>
      </section>
      <section id='by-lighting-and-atmosphering-condition' className='mt-10'>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Split by Lighting type</p>
            <NivoPie
              data={byLighting}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#9b5de5bf',
                '#3c096cbf',
                '#7b2cbfbf',
                '#240046bf',
                '#e0aaffbf',
                '#10002bbf',
              ]}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>
              Split by Atmospheric Condition
            </p>
            <NivoPie
              data={byAtmosphericCondition}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#9b5de5bf',
                '#3c096cbf',
                '#7b2cbfbf',
                '#240046bf',
                '#e0aaffbf',
                '#10002bbf',
              ]}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#d00000] font-bold'
          href='https://www.kaggle.com/datasets/bambrozim/brazils-traffic-crashes-information-2018-2023'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle.com
        </a>
      </p>
    </>
  );
};

export default Page74;