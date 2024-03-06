import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import {
  byCategory,
  categories,
  top20Actors,
  top20Country,
  top20Directing,
  top20Films,
  top20Music,
  top20Nominee,
  total,
  totalPrizes,
  winnerVSNomenee,
  yearCategory,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page72 = () => {
  return (
    <>
      <section id='infos'>
        <div className='flex justify-center py-4'>
          <img
            className='w-[400px]'
            src='/various/oscars.jpg'
            alt='the oscars'
          />
        </div>
        <h1 className='py-2 font-mono text-4xl font-bold page-title text-center'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg text-center'>
          {infos.description}
        </p>
      </section>
      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>Total prizes awarded</p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#C63D2F] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split-category-vs' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Category</p>
            <NivoPie
              data={byCategory}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#C63D2Fbf',
                '#E25E3Ebf',
                '#FF9B50bf',
                '#FFBB5Cbf',
                '#F5CCA0bf',
                '#E48F45bf',
                '#994D1Cbf',
                '#6B240Cbf',
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
            <p className='text-center font-bold mb-4'>Winners vs Nominees</p>
            <NivoPie
              data={winnerVSNomenee}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#C63D2Fbf', '#FFBB5Cbf']}
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
      <section id='number-of-winners' className='mt-10 pt-20 max-md:pt-5'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Number of prizes awarded for year
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoLine
            data={totalPrizes}
            xScale={{
              type: 'point',
            }}
            yFormat='.0f'
            axisBottom={{
              legendOffset: -12,
              tickRotation: 0,
              tickRotation: 90,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={['#C63D2F']}
            margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 20, bottom: 100, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='category-by-year' className='mt-10 '>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Prizes awarded per category per year
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[800px] max-xl:h-[600px]'>
          <NivoBar
            data={yearCategory}
            keys={categories}
            indexBy='year'
            colors={[
              '#C63D2Fbf',
              '#E25E3Ebf',
              '#FF9B50bf',
              '#FFBB5Cbf',
              '#F5CCA0bf',
              '#E48F45bf',
              '#994D1Cbf',
              '#6B240Cbf',
            ]}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 60, bottom: 130 }}
            mobileMargin={{ left: 30, bottom: 80 }}
            mobileLayout='horizontal'
            layout='vertical'
            xtickRotation={45}
            groupMode='stacked'
          />
        </div>
      </section>
      <section id='top-20-films' className='mt-10 '>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Top 21 films who have won most prizes
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={top20Films}
            keys={['wins']}
            indexBy='film'
            colors={['#C63D2Fbf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 60, bottom: 130 }}
            mobileMargin={{ left: 30, bottom: 80, top: 10 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={45}
          />
        </div>
      </section>
      <section id='split-director-actor' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:h-[500px]'>
            <p className='text-center font-bold mb-4'>
              Most awarded actors and actress
            </p>
            <NivoBar
              data={top20Actors}
              keys={['wins']}
              indexBy='name'
              colors={['#E25E3Ebf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              labelTextColor='#fff'
              margin={{ top: 10, left: 60, bottom: 130 }}
              mobileMargin={{ top: 10, left: 30, bottom: 180 }}
              mobileLayout='vertical'
              layout='vertical'
              xtickRotation={45}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:h-[500px]'>
            <p className='text-center font-bold mb-4'>Most awarded directors</p>
            <NivoBar
              data={top20Directing}
              keys={['wins']}
              indexBy='name'
              colors={['#E25E3Ebf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              labelTextColor='#fff'
              margin={{ top: 10, left: 60, bottom: 130 }}
              mobileMargin={{ top: 10, left: 30, bottom: 180 }}
              mobileLayout='vertical'
              layout='vertical'
              xtickRotation={45}
            />
          </div>
        </div>
      </section>
      <section id='split-country-music' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:h-[500px]'>
            <p className='text-center font-bold mb-4'>
              Most awarded musical composers
            </p>
            <NivoBar
              data={top20Music}
              keys={['wins']}
              indexBy='name'
              colors={['#FF9B50bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              labelTextColor='#fff'
              margin={{ top: 10, left: 60, bottom: 130 }}
              mobileMargin={{ top: 10, left: 30, bottom: 180 }}
              mobileLayout='vertical'
              layout='vertical'
              xtickRotation={45}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:h-[500px]'>
            <p className='text-center font-bold mb-4'>
              Most awarded foreign countries
            </p>
            <NivoBar
              data={top20Country}
              keys={['wins']}
              indexBy='name'
              colors={['#FF9B50bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              labelTextColor='#fff'
              margin={{ top: 10, left: 60, bottom: 130 }}
              mobileMargin={{ top: 10, left: 30, bottom: 180 }}
              mobileLayout='vertical'
              layout='vertical'
              xtickRotation={45}
            />
          </div>
        </div>
      </section>
      <section id='by-nomenee' className='mt-10'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Most nomenee actors and actress
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={top20Nominee}
            keys={['wins']}
            indexBy='name'
            colors={['#FFBB5Cbf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='black'
            margin={{ left: 60, bottom: 130 }}
            mobileMargin={{ left: 30, top: 10, bottom: 80 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={45}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#C63D2F] font-bold'
          href='https://awardsdatabase.oscars.org/'
          rel='noopener noreferrer'
          target='_blank'
        >
          oscars.org
        </a>
      </p>
    </>
  );
};

export default Page72;
