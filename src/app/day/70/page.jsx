import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import {
  ageDistrubution,
  ageSurvived,
  byClass,
  byEmbarked,
  byGender,
  bySurvived,
  classSurvived,
  total,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page70 = () => {
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
          <p className='text-center font-mono text-3xl'>Total Passengers</p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#FBA834] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split-gender-survived' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>Gender</p>
            <NivoPie
              data={byGender}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#FBA834bf', '#333A73bf']}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>Survivor or Victim </p>
            <NivoPie
              data={bySurvived}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#FBA834bf', '#333A73bf', '#5E1675bf']}
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
      <section id='split-embarked-class' className='mt-2 pt-10'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>Embarked Board</p>
            <NivoPie
              data={byEmbarked}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#FBA834bf', '#333A73bf', '#5E1675bf']}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>Ticket Class</p>
            <NivoPie
              data={byClass}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#FBA834bf', '#333A73bf', '#5E1675bf']}
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
      <section id='age-distrubution' className='mt-10 pt-10'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Passengers Age distrubution
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[800px] max-xl:h-[600px]'>
          <NivoBar
            data={ageDistrubution}
            keys={['passengers']}
            indexBy='age'
            colors={['#5E1675bf']}
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
      <section id='age-survivor' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Victims by age distrubution
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[800px] max-xl:h-[600px]'>
          <NivoBar
            data={ageSurvived}
            keys={['Survivors', 'Victims']}
            indexBy='age'
            colors={[
              '#FBA834bf',
              '#333A73bf',
              '#9B2B7Dbf',
              '#C60052bf',
              '#2F4858bf',
              '#334C78bf',
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
      <section id='class-survivor' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Victims by ticket class
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={classSurvived}
            keys={['Survivors', 'Victims']}
            indexBy='class'
            colors={[
              '#FBA834bf',
              '#333A73bf',
              '#9B2B7Dbf',
              '#C60052bf',
              '#2F4858bf',
              '#334C78bf',
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
      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#624589] font-bold'
          href='https://titanicfacts.net/titanic-passenger-list/'
          rel='noopener noreferrer'
          target='_blank'
        >
          titanicfacts.net
        </a>
      </p>
    </>
  );
};

export default Page70;
