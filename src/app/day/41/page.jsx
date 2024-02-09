import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import './utils/getParsedData';
import {
  best,
  byBestPosition,
  byFoot,
  byRating,
  shortest,
  tallest,
  totalByAge,
  totalByHeight,
  totalByNationality,
  totalPlayers,
  totalTeams,
  worst,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page41 = () => {
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
          <p className='text-center font-mono text-2xl'>Number of players</p>
          <AnimatedNumber
            number={totalPlayers}
            className='font-mono w-full text-[#2a6f97] justify-center'
            size={40}
          />
        </div>
        <div className='stats-radar basis-1/2 max-md:basis-full'>
          <p className='text-center font-mono text-2xl'>Number of Clubs</p>
          <AnimatedNumber
            number={totalTeams}
            className='font-mono w-full text-[#2a6f97] justify-center'
            size={40}
          />
        </div>
      </div>
      <section id='split-college-country' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Foot</p>
            <NivoPie
              data={byFoot}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#89c2d9bf', '#468fafbf']}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Best Position</p>
            <NivoPie
              data={byBestPosition}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#a9d6e5bf',
                '#89c2d9bf',
                '#61a5c2bf',
                '#468fafbf',
                '#2c7da0bf',
                '#2a6f97bf',
                '#014f86bf',
                '#01497cbf',
                '#013a63bf',
                '#012a4abf',
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
      <section id='total-by-rating' className='mt-10 pt-20'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Total Players by overall rating
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byRating}
            keys={['players']}
            indexBy='OVA'
            colors={['#2a6f97bf']}
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
            <p className='text-center font-bold mb-4'>
              Player with worst score
            </p>
            <p className='text-center font-bold text-4xl text-[#012a4a]'>
              {worst.Name}
            </p>
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full'>
            <p className='text-center font-bold mb-4'>Player with best score</p>
            <p className='text-center font-bold text-4xl text-[#468faf]'>
              {best.Name}
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
            colors={['#014f86bf']}
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
            colors={['#2a6f97bf']}
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
            <p className='text-center font-bold text-4xl text-[#012a4a]'>
              {shortest.Name}
            </p>
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full'>
            <p className='text-center font-bold mb-4'>Tallest player</p>
            <p className='text-center font-bold text-4xl text-[#468faf]'>
              {tallest.Name}
            </p>
          </div>
        </div>
      </section>
      <section id='total-by-nationality' className='mt-10'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center pt-10'>
          Top 15 nations per number of players
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={totalByNationality}
            keys={['players']}
            indexBy='age'
            colors={['#014f86bf']}
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
          className='text-[#014f86] font-bold'
          href='https://www.kaggle.com/datasets/ekrembayar/fifa-21-complete-player-dataset'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle
        </a>
      </p>
    </>
  );
};

export default Page41;
