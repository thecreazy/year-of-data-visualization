import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import {
  byGender,
  byIndustries,
  byTypology,
  ratio,
  total,
  totalByCountries,
  totalByIndustries,
  totalByOrganization,
  totalNetWorth,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page55 = () => {
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
            Total Net Worth of current Billionaires
          </p>
          <AnimatedNumber
            number={totalNetWorth}
            className='font-mono w-full text-[#DA0037] justify-center'
            size={80}
            tabletSize={50}
            mobileSize={25}
          />
        </div>
      </div>
      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>
            Number of current Billionaires
          </p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#DA0037] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split-gender-typology' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Gender</p>
            <NivoPie
              data={byGender}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#DA0037bf', '#444444bf']}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Typology</p>
            <NivoPie
              data={byTypology}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#DA0037bf', '#444444bf']}
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
      <section id='split-industries' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[400px]'>
            <p className='text-center font-bold mb-4 mt-20'>By Industry</p>
            <NivoPie
              data={byIndustries}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#DA0037bf',
                '#444444bf',
                '#2B2A4Cbf',
                '#860A35bf',
                '#495E57bf',
                '#45474Bbf',
                '#363062bf',
                '#533483bf',
                '#E94560bf',
                '#E94560bf',
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
      <section id='total-by-industry' className='mt-10 pt-20'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Total Net Worth by Industry{' '}
          <span className='text-sm'>(in Billion $) </span>
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={totalByIndustries}
            keys={['value']}
            indexBy='industry'
            colors={['#DA0037bf']}
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
          />
        </div>
      </section>
      <section id='age-net-rate' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Age vs Net Worth <span className='text-sm'>(in Billion $) </span>
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            data={ratio}
            xScale={{ type: 'linear', min: 17, max: 102 }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: 'Age',
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Final Worth',
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
            colors={['#444444bf']}
          />
        </div>
      </section>
      <section id='by-country' className='mt-10 '>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Number of Billionaires by country{' '}
          <span className='text-sm'>(that have more than 10 Billionaires)</span>
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={totalByCountries}
            keys={['Residence', 'Citizenship']}
            indexBy='country'
            colors={['#DA0037bf', '#444444bf']}
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
          />
        </div>
      </section>
      <section id='total-by-organization' className='mt-10 '>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Top 20 Organization Total Net Worth{' '}
          <span className='text-sm'>(in Billion $) </span>
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={totalByOrganization}
            keys={['value']}
            indexBy='organization'
            colors={['#DA0037bf']}
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
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#DA0037] font-bold'
          href='https://www.kaggle.com/datasets/endofnight17j03/billionaires-statistics-dataset/data'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle
        </a>
      </p>
    </>
  );
};

export default Page55;
