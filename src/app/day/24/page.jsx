import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoRadar from '@internal/components/Charts/Nivo/Radar';
import ReactChartsLine from '@internal/components/Charts/ReactCharts/Line';

import {
  italyTotalData,
  lastYearComparisonDataByRegion,
  splitByFamilyType,
  zoneTotalData,
} from './utils/getFormattedData';

const Page24 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold max-md:text-4xl'>
          Italian Median households income
        </h1>
        <h3 className='max-md:text-md py-2 text-center font-mono text-xl font-bold'>
          Statistics of annual median households income from 2003 to 2021
        </h3>
      </section>
      <section id='total' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          Total data from 2003 to 2021
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <ReactChartsLine
            data={italyTotalData}
            initialHeight={400}
            colors={['#606c38']}
            width='100%'
          />
        </div>
      </section>
      <section id='by-zone' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          Total data from 2003 to 2021 divided by zone
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <ReactChartsLine
            data={zoneTotalData}
            initialHeight={400}
            colors={['#606c38', '#283618', '#dda15e', '#bc6c25', '#588157']}
            width='100%'
          />
        </div>
        <p>legend</p>
      </section>
      <section id='by-family-type' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          Total data from 2003 to 2021 divided by family type
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoRadar
            data={splitByFamilyType}
            keys={Object.keys(splitByFamilyType[0]).slice(1)}
            colors={[
              '#606c38',
              '#dda15e',
              '#588157',
              '#283618',
              '#bc6c25',
            ].reverse()}
            indexBy='year'
          />
        </div>
      </section>
      <section id='last-year-comparison' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          1999 vs 2022 Data splitted by region
        </h4>
        <div className='mb-[20px] flex h-[800px] w-full justify-center'>
          <NivoBar
            data={lastYearComparisonDataByRegion}
            keys={['2003', '2021']}
            margin={{ top: 50, right: 0, bottom: 50, left: 150 }}
            mobileMargin={{ bottom: 150, left: 50 }}
            colors={['#bc6c25', '#606c38']}
          />
        </div>
      </section>
      <p className='pt-[30px] text-center text-xs '>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='font-bold text-[#2b2a4c]'
          href='https://esploradati.istat.it/databrowser/#/it/dw/categories/IT1,HOU,1.0/HOU_INCOME/DCCV_REDNETFAMFONTERED/IT1,32_292_DF_DCCV_REDNETFAMFONTERED_2,1.0'
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
