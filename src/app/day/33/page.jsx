import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import {
  byAffiliation,
  byAge,
  byCategory,
  byCountry,
  byGender,
  byYear,
  senior,
  totals,
  younger,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page33 = () => {
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
            Number of Nobel Prizes Assigned
          </p>
          <AnimatedNumber
            number={totals}
            className='font-mono w-full text-[#AE445A] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Category</p>
            <NivoPie
              data={byCategory}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#451952',
                '#662549',
                '#AE445A',
                '#F39F5A',
                '#102C57',
                '#606C5D',
              ]}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Gender</p>
            <NivoPie
              data={byGender}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#451952', '#662549', '#AE445A']}
              arcLabelsTextColor='white'
            />
          </div>
        </div>
      </section>
      <section id='per-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-10 pt-20'>
          Nobels by year of award
        </h3>
        <div className='mb-[20px] flex h-[1300px] w-full justify-center max-md:h-[1300px] max-xl:h-[1300px]'>
          <NivoBar
            xAxis
            data={byYear}
            keys={['value']}
            indexBy='id'
            colors={['#AE445A']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 40, top: 40, right: 10 }}
            mobileMargin={{ left: 40, bottom: 30, top: 30, right: 10 }}
            mobileLayout='horizontal'
          />
        </div>
      </section>
      <section id='by-country' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by citizenship
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[600px] max-xl:h-[600px]'>
          <NivoBar
            data={byCountry}
            keys={Object.keys(byCountry[0]).slice(1)}
            indexBy='id'
            colors={['#AE445A']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 80, top: 20 }}
            mobileMargin={{ left: 120, bottom: 80 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            groupMode='stacked'
            xtickRotation='45'
          />
        </div>
      </section>
      <section id='by-age' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Nobel by age of the assignee
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[600px] max-xl:h-[600px] max-md:md-5'>
          <NivoBar
            data={byAge}
            keys={Object.keys(byAge[0]).slice(1)}
            indexBy='id'
            colors={['#AE445A']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 80, top: 20 }}
            mobileMargin={{ left: 30, bottom: 80 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            groupMode='stacked'
            xtickRotation='45'
          />
        </div>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full max-md:mb-10'>
            <p className='text-center font-bold mb-4'>Youngest winner</p>
            <p className='text-center font-bold text-4xl'>
              {younger.name} {younger.surname}
            </p>
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full'>
            <p className='text-center font-bold mb-4'>Oldest winner</p>
            <p className='text-center font-bold text-4xl'>
              {senior.name} {senior.surname}
            </p>
          </div>
        </div>
      </section>
      <section id='by-affilitation' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Affiliation universities with more than one Nobel
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byAffiliation}
            keys={Object.keys(byAffiliation[0]).slice(1)}
            indexBy='id'
            colors={['#AE445A']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 150, top: 20 }}
            mobileMargin={{ left: 120, bottom: 80 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            groupMode='stacked'
            xtickRotation='45'
          />
        </div>
      </section>
      <p className='text-center text-xs pt-20'>
        All data are updated at 01/2024 and taken from{' '}
        <a
          className='text-[#AE445A] font-bold'
          href='https://www.nobelprize.org/prizes/lists/all-nobel-prizes-in-chemistry/'
          rel='noopener noreferrer'
          target='_blank'
        >
          Nobelprize
        </a>
      </p>
    </>
  );
};

export default Page33;
