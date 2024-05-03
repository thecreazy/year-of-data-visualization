import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoItalyChoropleth from '@internal/components/Charts/Nivo/Choropleth/ItalianChrorepleth';
import ReactChartsLine from '@internal/components/Charts/ReactCharts/Line';
import Legend from '@internal/components/Legend/Legend';

import { infos } from './config';
import {
  italyTotalData,
  lastYearComparisonDataByRegion,
  lastYearDataByRegion,
  zoneTotalData,
} from './utils/getFormattedData';

const Page125 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold max-md:text-4xl'>
          {infos.title}
        </h1>
        <h3 className='max-md:text-md py-2 text-center font-mono text-xl font-bold'>
          {infos.description}
        </h3>
      </section>
      <section id='total' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          Total divorces from 2015 to 2021
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
          Total divorces from 2015 to 2021 divided by zone
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <ReactChartsLine
            data={zoneTotalData}
            initialHeight={400}
            colors={['#4793AF', '#FFC470', '#DD5746', '#8B322C']}
            width='100%'
          />
        </div>
        <Legend
          options={[
            { color: '#4793AF', label: 'Nord' },
            { color: '#FFC470', label: 'Center' },
            { color: '#DD5746', label: 'Sud' },
            { color: '#8B322C', label: 'Islands' },
          ]}
        />
      </section>
      <section id='last-year-by-region' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          2021 divorces splitted by region
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center max-md:h-[600px]'>
          <NivoItalyChoropleth
            data={lastYearDataByRegion}
            colors={[
              '#fcdede',
              '#f59b9b',
              '#ef5959',
              '#e81717',
              '#a61010',
              '#630a0a',
              '#210303',
            ]}
            domain={[0, 14000]}
          />
        </div>
      </section>
      <section id='last-year-comparison' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          2015 vs 2021 divorces splitted by region
        </h4>
        <div className='mb-[20px] flex h-[800px] w-full justify-center'>
          <NivoBar
            data={lastYearComparisonDataByRegion}
            keys={['2015', '2021']}
            margin={{ top: 50, right: 0, bottom: 50, left: 150 }}
            mobileMargin={{ bottom: 150, left: 50 }}
            colors={['#FFC470bf', '#4793AFbf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#000'
            legend={[
              {
                dataFrom: 'keys',
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: -50,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                symbolSize: 20,
              },
            ]}
          />
        </div>
      </section>
      <p className='pt-[30px] text-center text-xs '>
        All data are updated at 05/2024 and taken from{' '}
        <a
          className='font-bold text-[#2b2a4c]'
          href='https://esploradati.istat.it/databrowser/#/it/dw/categories/IT1,POP,1.0/POP_SEPDIV/DCIS_SEPARAZFIG1/IT1,27_469_DF_DCIS_SEPARAZFIG1_1,1.0'
          rel='noopener noreferrer'
          target='_blank'
        >
          ISTAT
        </a>
      </p>
    </>
  );
};

export default Page125;
