import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';

import { infos } from './config';
import {
  byCirculatoryCategories,
  byCovidCategories,
  byMacroCategories,
  byTumorsCategories,
  femaleTotal,
  femaleTotalCirculatory,
  femaleTotalCovid,
  femaleTotalTumors,
  maleTotal,
  maleTotalCirculatory,
  maleTotalCovid,
  maleTotalTumors,
  total,
  totalCirculatory,
  totalCovid,
  totalTumors,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page60 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>Total deaths</p>
          <AnimatedNumber
            mobileSize={70}
            number={total}
            className='font-mono w-full text-[#0B4F6C] justify-center'
            size={80}
          />
        </div>
      </div>
      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-1/2 max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>Total Female deaths</p>
          <AnimatedNumber
            mobileSize={70}
            number={femaleTotal}
            className='font-mono w-full text-[#B80C09] justify-center'
            size={80}
          />
        </div>
        <div className='stats-radar basis-1/2 max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>Total Male deaths</p>
          <AnimatedNumber
            mobileSize={70}
            number={maleTotal}
            className='font-mono w-full text-[#01BAEF] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='macro-category-distrubution' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Most common causes of death
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byMacroCategories}
            keys={['male', 'female']}
            indexBy='category'
            colors={['#01BAEFbf', '#B80C09bf']}
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

      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>Total tumors deaths</p>
          <AnimatedNumber
            mobileSize={70}
            number={totalTumors}
            className='font-mono w-full text-[#0B4F6C] justify-center'
            size={80}
          />
        </div>
      </div>
      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-1/2 max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total Female tumors deaths
          </p>
          <AnimatedNumber
            mobileSize={70}
            number={femaleTotalTumors}
            className='font-mono w-full text-[#B80C09] justify-center'
            size={80}
          />
        </div>
        <div className='stats-radar basis-1/2 max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total Female tumors deaths
          </p>
          <AnimatedNumber
            mobileSize={70}
            number={maleTotalTumors}
            className='font-mono w-full text-[#01BAEF] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='tumors-distrubution' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Most common Tumors causes of death
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byTumorsCategories}
            keys={['male', 'female']}
            indexBy='category'
            colors={['#01BAEFbf', '#B80C09bf']}
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

      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total Circulatory system diseases deaths
          </p>
          <AnimatedNumber
            mobileSize={70}
            number={totalCirculatory}
            className='font-mono w-full text-[#0B4F6C] justify-center'
            size={80}
          />
        </div>
      </div>
      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-1/2 max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total Female Circulatory system diseases deaths
          </p>
          <AnimatedNumber
            mobileSize={70}
            number={femaleTotalCirculatory}
            className='font-mono w-full text-[#B80C09] justify-center'
            size={80}
          />
        </div>
        <div className='stats-radar basis-1/2 max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total Male Circulatory system diseases deaths
          </p>
          <AnimatedNumber
            mobileSize={70}
            number={maleTotalCirculatory}
            className='font-mono w-full text-[#01BAEF] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='circulatory-system-distrubution' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Most common Circulatory system causes of death
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byCirculatoryCategories}
            keys={['male', 'female']}
            indexBy='category'
            colors={['#01BAEFbf', '#B80C09bf']}
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

      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total Covid-19 deaths
          </p>
          <AnimatedNumber
            mobileSize={70}
            number={totalCovid}
            className='font-mono w-full text-[#0B4F6C] justify-center'
            size={80}
          />
        </div>
      </div>
      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-1/2 max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total Female Covid-19 deaths
          </p>
          <AnimatedNumber
            mobileSize={70}
            number={femaleTotalCovid}
            className='font-mono w-full text-[#B80C09] justify-center'
            size={80}
          />
        </div>
        <div className='stats-radar basis-1/2 max-xl:basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total Male Covid-19 deaths
          </p>
          <AnimatedNumber
            mobileSize={70}
            number={maleTotalCovid}
            className='font-mono w-full text-[#01BAEF] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='covid19-distrubution' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Most common Covid-19 causes of death
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byCovidCategories}
            keys={['male', 'female']}
            indexBy='category'
            colors={['#01BAEFbf', '#B80C09bf']}
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

      <p className='text-center text-xs mt-20'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#0B4F6C] font-bold'
          href='https://esploradati.istat.it/databrowser/#/it/dw/categories/IT1,Z0810HEA,1.0/HEA_DEATH/DCIS_CMORTE1_EV/IT1,39_493_DF_DCIS_CMORTE1_EV_1,1.0'
          rel='noopener noreferrer'
          target='_blank'
        >
          ISTAT
        </a>
      </p>
    </>
  );
};

export default Page60;
