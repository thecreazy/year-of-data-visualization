import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import {
  byBenefits,
  byExperienceLevel,
  byRemote,
  bySalary,
  bySkills,
  byWorkType,
  totals,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page36 = () => {
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
            Number of jobs analyzed
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
            <p className='text-center font-bold mb-4'>By Work Type</p>
            <NivoPie
              data={byWorkType}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#3D405B',
                '#81B29A',
                '#451952',
                '#E07A5F',
                '#F39F5A',
                '#283618',
                '#B7B7A4',
              ]}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Experience Level</p>
            <NivoPie
              data={byExperienceLevel}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#3D405B',
                '#81B29A',
                '#451952',
                '#E07A5F',
                '#F39F5A',
                '#283618',
                '#B7B7A4',
              ]}
              arcLabelsTextColor='white'
            />
          </div>
        </div>
      </section>
      <section id='split-remote' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[400px]'>
            <p className='text-center font-bold mb-4 mt-20'>Remote frendly</p>
            <NivoPie
              data={byRemote}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#81B29A', '#E07A5F']}
              arcLabelsTextColor='white'
            />
          </div>
        </div>
      </section>
      <section id='by-salary' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center  mb-10 pt-40'>
          Split by salary
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[400px] max-xl:h-[600px]'>
          <NivoBar
            data={bySalary}
            keys={['value']}
            indexBy='range'
            colors={['#E07A5F']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 40, top: 40, right: 10 }}
            mobileMargin={{ left: 40, bottom: 30, top: 10, right: 10 }}
            mobileLayout='horizontal'
            layout='vertical'
          />
        </div>
      </section>
      <section id='by-benefits' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center  mb-10 pt-20'>
          Split by Benefits
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[600px] max-xl:h-[600px]'>
          <NivoBar
            data={byBenefits}
            keys={['value']}
            indexBy='benefit'
            colors={['#E07A5F']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 140, top: 40, right: 10 }}
            mobileMargin={{ left: 80, bottom: 140, top: 30, right: 10 }}
            mobileLayout='horizontal'
            layout='vertical'
            xtickRotation={45}
          />
        </div>
      </section>
      <section id='by-job-skills' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by job category
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={bySkills}
            keys={Object.keys(bySkills[0]).slice(1)}
            indexBy='category'
            colors={['#81B29A']}
            labelTextColor='#fff'
            margin={{ left: 140, bottom: 40, top: 20 }}
            mobileMargin={{ left: 100, bottom: 80 }}
            mobileLayout='horizontal'
            layout='horizontal'
            legend={[]}
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

export default Page36;
