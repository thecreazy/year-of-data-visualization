import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoItalyChoropleth from '@internal/components/Charts/Nivo/Choropleth/ItalianChrorepleth';
import ReactChartsLine from '@internal/components/Charts/ReactCharts/Line';
import Legend from '@internal/components/Legend/Legend';

import {
  italyTotalData,
  lastYearComparisonDataByRegion,
  lastYearDataByRegion,
  zoneTotalData,
} from './utils/getFormattedData';

const Page5 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold max-md:text-4xl'>
          Italian births time series
        </h1>
        <h3 className='max-md:text-md py-2 text-center font-mono text-xl font-bold'>
          Statistics on births in Italy from 1999 to 2022
        </h3>
      </section>
      <section id='total' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          Total data from 1999 to 2022
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <ReactChartsLine
            data={italyTotalData}
            initialHeight={400}
            colors={['#2B2A4C']}
            width='100%'
          />
        </div>
      </section>
      <section id='by-zone' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          Total data from 1999 to 2022 divided by zone
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <ReactChartsLine
            data={zoneTotalData}
            initialHeight={400}
            colors={['#B31212', '#56B324', '#00B398', '#B3471B']}
            width='100%'
          />
        </div>
        <Legend
          options={[
            { color: '#B31212', label: 'Nord' },
            { color: '#56B324', label: 'Center' },
            { color: '#00B398', label: 'Sud' },
            { color: '#B3471B', label: 'Islands' },
          ]}
        />
      </section>
      <section id='last-year-by-region' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          2022 Data splitted by region
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center max-md:h-[600px]'>
          <NivoItalyChoropleth
            data={lastYearDataByRegion}
            colors={[
              '#D41515',
              '#C21313',
              '#B31212',
              '#A11010',
              '#870E0E',
              '#750C0C',
              '#660A0A',
            ]}
            domain={[0, 70000]}
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
            keys={['1999', '2022']}
            margin={{ top: 50, right: 0, bottom: 50, left: 150 }}
            mobileMargin={{ bottom: 150, left: 50 }}
            colors={['#529888', '#995853']}
          />
        </div>
      </section>
      <p className='pt-[30px] text-center text-xs '>
        All data are updated at the end of the 2022 and taken from{' '}
        <a
          className='font-bold text-[#2b2a4c]'
          href='https://esploradati.istat.it/databrowser/#/it/dw/categories/IT1,POP,1.0/POP_BIRTHFERT/DCIS_NATI2/IT1,25_74_DF_DCIS_NATI2_1,1.0'
          rel='noopener noreferrer'
          target='_blank'
        >
          ISTAT
        </a>
      </p>
    </>
  );
};

export default Page5;
