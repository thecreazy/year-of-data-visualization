import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import {
  byAppleProduct,
  byTitle,
  byType,
  ratio,
  total,
  totalFrames,
  totalFramesPerYear,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page58 = () => {
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
            Total Product Placement
          </p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#414288] justify-center'
            size={80}
          />
        </div>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total Sponsored Frames
          </p>
          <AnimatedNumber
            number={totalFrames}
            className='font-mono w-full text-[#414288] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split-type-product' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>Placement by Show Type</p>
            <NivoPie
              data={byType}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#414288bf', '#682D63bf']}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>Placement by Product</p>
            <NivoPie
              data={byAppleProduct}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#414288bf',
                '#682D63bf',
                '#5FB49Cbf',
                '#98DFAFbf',
                '#DEEFB7bf',
                '#D0CFECbf',
                '#FF9F1Cbf',
                '#A4036Fbf',
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
      <section id='number-of-frames' className='mt-10 pt-20'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Sponsored Frames per year
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoLine
            data={totalFramesPerYear}
            yFormat='.0f'
            xScale={{
              type: 'point',
            }}
            axisBottom={{
              legendOffset: -12,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={['#414288']}
            margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 20, bottom: 100, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='ratio-year-frame-per-movie' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Shows per year and number of movie
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            data={ratio}
            xScale={{ type: 'point', min: 2001 }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: 'Year',
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Sponsored Frames',
              legendPosition: 'middle',
              legendOffset: -60,
            }}
            margin={{ top: 20, right: 20, bottom: 80, left: 70 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            legends={[
              {
                anchor: 'bottom',
                direction: 'column',
                translateX: 0,
                translateY: 80,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
            colors={['#5FB49Cbf']}
          />
        </div>
      </section>
      <section id='top-titles' className='mt-10 '>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Most 20 sponsored Titles
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byTitle}
            keys={['frames']}
            indexBy='title'
            colors={['#414288bf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 60, bottom: 130 }}
            mobileMargin={{ left: 60, bottom: 80 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={45}
            groupMode='stacked'
          />
        </div>
      </section>

      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#5FB49C] font-bold'
          href='https://www.kaggle.com/datasets/mohammadhmozafary/apples-product-placements-in-movies-and-tv-shows'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle
        </a>
      </p>
    </>
  );
};

export default Page58;
