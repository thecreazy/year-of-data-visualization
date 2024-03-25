import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth/Choropleth';

import { infos } from './config';
import {
  byFoundationYear,
  mapData,
  topInternational,
  topRanking,
  topStudents,
  total,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page91 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>
            Number of universities
          </p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#669bbc] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='universities-maps' className='mt-10'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[400px] max-md:h-[500px]'>
            <p className='text-center font-bold mb-4'>
              Wordwide universities distrubution
            </p>
            <NivoChoropleth
              data={mapData}
              colors={[
                '#E4E8EC',
                '#afbcc5',
                '#7c92a0',
                '#647d8e',
                '#4c697c',
                '#1d425a',
                '#003049',
              ]}
              valueFormat='.0f'
              domain={[1, 100]}
            />
          </div>
        </div>
      </section>
      <section id='uni-rankings' className='mt-10 pt-5'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Universities Statistics
        </h3>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center pb-5'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Universities with more students
            </p>
            <NivoBar
              data={topStudents}
              keys={['Total students']}
              indexBy='University'
              colors={['#c1121fbf']}
              labelTextColor='#fff'
              margin={{ left: 220, bottom: 80, top: 40, right: 10 }}
              mobileMargin={{ left: 120, bottom: 30, top: 30, right: 10 }}
              mobileLayout='horizontal'
              layout='horizontal'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              xtickRotation={90}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full max-md:pt-20 h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Universities with more international students
            </p>
            <NivoBar
              data={topInternational}
              keys={['internationalPercentage']}
              indexBy='University'
              colors={['#003049bf']}
              labelTextColor='#fff'
              margin={{ left: 220, bottom: 80, top: 40, right: 10 }}
              mobileMargin={{ left: 120, bottom: 30, top: 30, right: 10 }}
              mobileLayout='horizontal'
              layout='horizontal'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              xtickRotation={90}
            />
          </div>
        </div>
      </section>
      <section id='most-ranked' className='mt-10 pt-5'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center pb-5'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Most ranked universities students
            </p>
            <NivoBar
              data={topRanking}
              keys={['Total students']}
              indexBy='University'
              colors={['#669bbcbf']}
              labelTextColor='#fff'
              margin={{ left: 220, bottom: 80, top: 40, right: 10 }}
              mobileMargin={{ left: 120, bottom: 30, top: 30, right: 10 }}
              mobileLayout='horizontal'
              layout='horizontal'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              xtickRotation={90}
            />
          </div>
        </div>
      </section>
      <section id='foundation-year' className='mt-10 pt-5'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20 max-md:mb-5'>
          Univesities by Foundation year
        </h3>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[600px] max-md:h-[800px]'>
            <NivoBar
              data={byFoundationYear}
              keys={['universities']}
              indexBy='year'
              colors={['#669bbcbf']}
              labelTextColor='#fff'
              margin={{ left: 40, bottom: 40, top: 60, right: 10 }}
              mobileMargin={{ left: 40, bottom: 30, top: 60, right: 10 }}
              mobileLayout='horizontal'
              layout='vertical'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              xtickRotation={90}
            />
          </div>
          <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center w-full mt-10'>
            <div className='stats-radar basis-1/2 max-md:basis-full max-md:mb-10'>
              <p className='text-center font-bold mb-4'>Oldest University</p>
              <p className='text-center font-bold text-4xl text-[#c1121f]'>
                {byFoundationYear[0].names[0]}
              </p>
            </div>
            <div className='stats-radar basis-1/2 max-md:basis-full'>
              <p className='text-center font-bold mb-4'>Younger University</p>
              <p className='text-center font-bold text-4xl text-[#003049]'>
                {byFoundationYear[byFoundationYear.length - 1].names[0]}
              </p>
            </div>
          </div>
        </div>
      </section>
      <p className='text-center text-xs mt-20'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#003049] font-bold'
          href='https://cwur.org'
          rel='noopener noreferrer'
          target='_blank'
        >
          The Center for World University Rankings
        </a>
      </p>
    </>
  );
};

export default Page91;
