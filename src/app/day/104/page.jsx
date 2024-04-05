import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import './utils/getParsedData';
import {
  byCounty,
  byManufacturer,
  byYear,
  ratio,
  totalAccident,
  totalElectric,
  totalPlugin,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page104 = () => {
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
            Number of elettric vehicles
          </p>
          <AnimatedNumber
            number={totalAccident}
            className='font-mono w-full text-[#28666e] justify-center'
            size={80}
            mobileSize={40}
          />
        </div>
      </div>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-1/2 max-md:basis-full'>
          <p className='text-center font-mono text-2xl'>
            Plug-in Hybrid Electric Vehicles
          </p>
          <AnimatedNumber
            number={totalPlugin}
            className='font-mono w-full text-[#28666e] justify-center'
            size={40}
          />
        </div>
        <div className='stats-radar basis-1/2 max-md:basis-full'>
          <p className='text-center font-mono text-2xl'>
            Battery Electric Vehicles
          </p>
          <AnimatedNumber
            number={totalElectric}
            className='font-mono w-full text-[#28666e] justify-center'
            size={40}
          />
        </div>
      </div>
      <section id='top-manufacturer' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Top 20 Manufacturer
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[500px]'>
          <NivoBar
            data={byManufacturer}
            keys={Object.keys(byManufacturer[0]).slice(1)}
            indexBy='Manufacturer'
            colors={['#f7b538bf']}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 5]],
            }}
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
      <section id='by-county' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Distribution of Electric Vehicles by County
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[500px]'>
          <NivoBar
            data={byCounty}
            keys={Object.keys(byCounty[0]).slice(1)}
            indexBy='County'
            colors={['#780116bf']}
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
      <section id='by-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Trend in Electric Vehicle Manufacturing Over Time
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[300px] max-xl:h-[500px]'>
          <NivoLine
            data={byYear}
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
              format: '.2s',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            yFormat='.2s'
            colors={['#d8572a']}
            margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 20, bottom: 100, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='anaysis-year-valuation' className='mt-20 pt-20'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Electric Range / Model Year Analysis
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            showCustomId='model'
            data={ratio}
            xScale={{ type: 'linear', min: 'auto' }}
            yScale={{ type: 'linear', min: 'auto' }}
            yFormat=',.2r'
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
              legend: 'Electric Range',
              legendPosition: 'middle',
              legendOffset: -40,
              format: ',.2r',
            }}
            margin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            legends={[]}
            colors={['#c32f27bf']}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#f7b538] font-bold'
          href='https://www.kaggle.com/datasets/sahirmaharajj/electric-vehicle-population/code'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle.com
        </a>
      </p>
    </>
  );
};

export default Page104;
