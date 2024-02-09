import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import {
  byCompanySize,
  byCountry,
  byIndustry,
  salarySizeRatio,
  sizeJobsRatio,
  totals,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page49 = () => {
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
            Number of Companies analyzed
          </p>
          <AnimatedNumber
            number={totals}
            className='font-mono w-full text-[#E07A5F] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Company size</p>
            <NivoPie
              data={byCompanySize}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#3D405Bbf',
                '#81B29Abf',
                '#451952bf',
                '#E07A5Fbf',
                '#F39F5Abf',
                '#283618bf',
                '#B7B7A4bf',
              ]}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>To 20 Industries</p>
            <NivoPie
              data={byIndustry}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#3D405Bbf',
                '#81B29Abf',
                '#451952bf',
                '#E07A5Fbf',
                '#F39F5Abf',
                '#283618bf',
                '#B7B7A4bf',
              ]}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
        </div>
      </section>
      <section id='size-jobs-ration' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center  mb-10 pt-40'>
          Job openings - Company size ratio
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            data={sizeJobsRatio}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: 'Company size',
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Job Openings',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            margin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            legends={[]}
            colors={['#451952bf']}
            showSerieId
          />
        </div>
      </section>
      <section id='salary-company-ration' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center  mb-10 pt-20'>
          AVG Salary - Company size ratio
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[600px] max-xl:h-[600px]'>
          <NivoScatterPlot
            data={salarySizeRatio}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: 'Job Openings',
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Company size',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            margin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            legends={[]}
            colors={['#451952bf']}
            showSerieId
          />
        </div>
      </section>
      <section id='by-country' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by country
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            valueScale={{ type: 'symlog' }}
            data={byCountry}
            keys={Object.keys(byCountry[0]).slice(1)}
            indexBy='country'
            colors={['#81B29Abf']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 40, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 80, right: 20 }}
            mobileLayout='horizontal'
            layout='horizontal'
            legend={[]}
            xtickRotation={90}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#E07A5F] font-bold'
          href='https://www.kaggle.com/datasets/arshkon/linkedin-job-postings/data'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle
        </a>
      </p>
    </>
  );
};

export default Page49;
