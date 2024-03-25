import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import {
  byEmployees,
  byGender,
  byIndustry,
  ratio,
  total,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page92 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title text-center'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg text-center'>
          {infos.description}
        </p>
      </section>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>
            Number of public companies analyzed
          </p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#fe6d73] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split-gender-employees' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By CEO Gender</p>
            <NivoPie
              data={byGender}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#17c3b2bf', '#227c9dbf', '#fe6d73bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextCol
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Number of Employees</p>
            <NivoPie
              data={byEmployees}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#17c3b2bf',
                '#227c9dbf',
                '#fe6d73bf',
                '#ffcb77bf',
                '#f28f3bbf',
                '#c8553dbf',
              ]}
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
      <section id='by-industry' className='mt-2 pt-10'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[600px] max-md:h-[1000px]'>
            <p className='text-center font-bold mb-4 mt-20'>
              Industy distribution
            </p>
            <NivoBar
              data={byIndustry}
              keys={['companies']}
              indexBy='industry'
              colors={['#fe6d73bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              labelTextColor='#fff'
              margin={{ left: 40, top: 40, bottom: 150, right: 40 }}
              mobileMargin={{ left: 70, right: 20, bottom: 80 }}
              mobileLayout='horizontal'
              layout='vertical'
              xtickRotation={45}
            />
          </div>
        </div>
      </section>
      <section id='anaysis-revenues-profits' className='mt-20 pt-20'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Revenues/Profits analysis
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            showCustomId='company'
            data={ratio}
            xScale={{ type: 'linear', min: 'auto' }}
            yScale={{ type: 'linear', min: 'auto' }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: 'Revenues',
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Profits',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            margin={{ top: 20, right: 20, bottom: 70, left: 150 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 100 }}
            legends={[]}
            colors={['#227c9dbf']}
          />
        </div>
      </section>
      <p className='text-center text-xs pt-5'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#17c3b2] font-bold'
          href='https://it.finance.yahoo.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          Yahoo finance
        </a>
      </p>
    </>
  );
};

export default Page92;
