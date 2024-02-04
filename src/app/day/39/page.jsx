import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import {
  byCollege,
  byCountry,
  byDraftRound,
  byDraftYear,
  shortest,
  tallest,
  total2022,
  totalByAge,
  totalByHeight,
  totalByTeam,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page39 = () => {
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
            Number of NBA players in 2022 season
          </p>
          <AnimatedNumber
            number={total2022}
            className='font-mono w-full text-[#C8102E] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='total-per-team' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center pb-10'>
          Total Player per each team
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={totalByTeam}
            keys={['players']}
            indexBy='team'
            colors={['#1d428abf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 30 }}
            mobileMargin={{ left: 30, bottom: 80 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={45}
          />
        </div>
      </section>
      <section id='split-college-country' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By College</p>
            <NivoPie
              data={byCollege}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#552583bf',
                '#CE1141bf',
                '#E03A3Ebf',
                '#FEC524bf',
                '#1D1160bf',
                '#FDB927bf',
                '#860038bf',
                '#FDBB30bf',
                '#0C2340bf',
                '#C1D32Fbf',
                '#BEC0C2bf',
                '#C8102Ebf',
                '#963821bf',
                '#EF3B24bf',
                '#5D76A9bf',
                '#002B5Ebf',
              ]}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Country</p>
            <NivoPie
              data={byCountry}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#552583bf',
                '#CE1141bf',
                '#E03A3Ebf',
                '#FEC524bf',
                '#C1D32Fbf',
                '#BEC0C2bf',
                '#C8102Ebf',
                '#963821bf',
                '#1D1160bf',
                '#FDB927bf',
                '#860038bf',
                '#FDBB30bf',
                '#0C2340bf',
                '#EF3B24bf',
                '#5D76A9bf',
                '#002B5Ebf',
              ]}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
        </div>
      </section>
      <section id='split-draft' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[400px]'>
            <p className='text-center font-bold mb-4 mt-20'>By draft round</p>
            <NivoPie
              data={byDraftRound}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#552583bf', '#CE1141bf', '#5D76A9bf']}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
        </div>
      </section>
      <section id='total-by-draft-year' className='mt-10 pt-20'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Total Players by draft year
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byDraftYear}
            keys={['players']}
            indexBy='year'
            colors={['#C8102Ebf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 30 }}
            mobileMargin={{ left: 30, bottom: 80 }}
            mobileLayout='vertical'
            layout='vertical'
          />
        </div>
      </section>
      <section id='total-per-height' className='mt-10 pt-20'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Total Players by height
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={totalByHeight}
            keys={['players']}
            indexBy='height'
            colors={['#1d428abf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 30 }}
            mobileMargin={{ left: 30, bottom: 80 }}
            mobileLayout='vertical'
            layout='vertical'
          />
        </div>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full max-md:mb-10'>
            <p className='text-center font-bold mb-4'>Shortest player</p>
            <p className='text-center font-bold text-4xl text-[#1D428A]'>
              {shortest.player_name}
            </p>
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full'>
            <p className='text-center font-bold mb-4'>Tallest player</p>
            <p className='text-center font-bold text-4xl text-[#C8102E]'>
              {tallest.player_name}
            </p>
          </div>
        </div>
      </section>
      <section id='total-by-age' className='mt-10'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center pt-10'>
          Total Players by age
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={totalByAge}
            keys={['players']}
            indexBy='age'
            colors={['#C8102Ebf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 30 }}
            mobileMargin={{ left: 30, bottom: 80 }}
            mobileLayout='vertical'
            layout='vertical'
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#C8102E] font-bold'
          href='https://www.kaggle.com/datasets/justinas/nba-players-data/data'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle
        </a>
      </p>
    </>
  );
};

export default Page39;
