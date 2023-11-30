'use client';

import dynamic from 'next/dynamic';

import './page.css';

import ResponsiveTable from '@internal/components/ResponsiveTable/ResponsiveTable';

import './utils/getFormattedData';
import {
  barDataset,
  labels,
  tableColumns,
  tableData,
  totals,
} from './utils/getFormattedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const ChartJSBar = dynamic(
  () => import('../../../components/Charts/ChartJS/Bar'),
  { ssr: false }
);

const Page24 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold max-md:text-4xl'>
          Italian population by age
        </h1>
        <h3 className='max-md:text-md py-2 text-center font-mono text-xl font-bold'>
          Statistics of italian population by age in 2023`
        </h3>
      </section>
      <section id='totals' className='mt-10'>
        <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Female</p>
            <AnimatedNumber
              number={totals.female}
              className='font-mono w-full text-[#386641] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Total</p>
            <AnimatedNumber
              number={totals.italy}
              className='font-mono w-full text-[#a7c957] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Male</p>
            <AnimatedNumber
              number={totals.male}
              className='font-mono w-full text-[#bc4749] justify-center'
            />
          </div>
        </div>
      </section>
      <section id='by-gender' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          Breakdown by sex
        </h4>
        <div className='mb-[20px] flex h-[640px] w-full justify-center max-md:h-[500px] max-xl:h-[400px]'>
          <ChartJSBar labels={labels} data={barDataset} />
        </div>
        <ResponsiveTable
          columns={tableColumns}
          data={tableData}
          headerColor='#bc4749'
          bodyColor='#386641'
          hoverColor='#fefae0'
        />
      </section>
      <p className='pt-[30px] text-center text-xs '>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='font-bold text-[#386641]'
          href='https://esploradati.istat.it/databrowser/#/it/dw/categories/IT1,POP,1.0/POP_POPULATION/DCIS_POPRES1/IT1,22_289_DF_DCIS_POPRES1_2,1.0'
          rel='noopener noreferrer'
          target='_blank'
        >
          ISTAT
        </a>
      </p>
    </>
  );
};

export default Page24;
