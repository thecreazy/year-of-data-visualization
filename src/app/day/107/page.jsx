import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import './utils/getParsedData';
import {
  byAtmosphericCondition,
  byFlooringType,
  byMonthOfAccident,
  byRoadFund,
  byStreetType,
  totalAccident,
  totalDamage,
  totalInjuries,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page107 = () => {
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
            Total Accident in 2023
          </p>
          <AnimatedNumber
            number={totalAccident}
            className='font-mono w-full text-[#2d6a4f] justify-center'
            size={80}
          />
        </div>
      </div>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-1/2 max-md:basis-full'>
          <p className='text-center font-mono text-2xl'>
            Number of accidents with injuries
          </p>
          <AnimatedNumber
            number={totalInjuries}
            className='font-mono w-full text-[#2d6a4f] justify-center'
            size={40}
          />
        </div>
        <div className='stats-radar basis-1/2 max-md:basis-full'>
          <p className='text-center font-mono text-2xl'>
            Number of accidents with damage to property
          </p>
          <AnimatedNumber
            number={totalDamage}
            className='font-mono w-full text-[#2d6a4f] justify-center'
            size={40}
          />
        </div>
      </div>
      <section id='by-month-of-accident' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by month of the incident
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[500px]'>
          <NivoBar
            data={byMonthOfAccident}
            keys={Object.keys(byMonthOfAccident[0]).slice(1)}
            indexBy='month'
            colors={['#2d6a4fbf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 80, bottom: 150, top: 20 }}
            mobileMargin={{ left: 60, bottom: 50 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
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
                '#b7e4c7bf',
                '#95d5b2bf',
                '#74c69dbf',
                '#52b788bf',
                '#40916cbf',
                '#2d6a4fbf',
                '#1b4332bf',
                '#081c15bf',
              ].reverse()}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'> Split street type</p>
            <NivoPie
              data={byStreetType}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#b7e4c7bf',
                '#95d5b2bf',
                '#74c69dbf',
                '#52b788bf',
                '#40916cbf',
                '#2d6a4fbf',
                '#1b4332bf',
                '#081c15bf',
              ].reverse()}
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
      <section id='by-lighting-and-atmosphering-condition' className='mt-10'>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Split by Flooring Type</p>
            <NivoPie
              data={byFlooringType}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#b7e4c7bf',
                '#95d5b2bf',
                '#74c69dbf',
                '#52b788bf',
                '#40916cbf',
                '#2d6a4fbf',
                '#1b4332bf',
                '#081c15bf',
              ].reverse()}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
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
                '#b7e4c7bf',
                '#95d5b2bf',
                '#74c69dbf',
                '#52b788bf',
                '#40916cbf',
                '#2d6a4fbf',
                '#1b4332bf',
                '#081c15bf',
              ].reverse()}
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
        All data are updated at 01/2024 and taken from{' '}
        <a
          className='text-[#d00000] font-bold'
          href='https://opendata.comune.bari.it/dataset/elenco-incidenti-stradali-anno-2023'
          rel='noopener noreferrer'
          target='_blank'
        >
          opendata.comune.bari.it
        </a>
      </p>
    </>
  );
};

export default Page107;
