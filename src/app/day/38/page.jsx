import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth/Choropleth';
import NivoLine from '@internal/components/Charts/Nivo/Line';

import { infos } from './config';
import {
  byCountry,
  byRegion,
  byType,
  totalByRegion,
  totalData,
} from './utils/getParsedData';

const Page38 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='total' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Deaths in prison in the last 10 years
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[300px] max-xl:h-[500px]'>
          <NivoLine
            data={totalData}
            xScale={{
              type: 'point',
            }}
            axisBottom={{
              legendOffset: -12,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: '.2s',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={['#C88EA7']}
            margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 20, bottom: 100, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='by-region' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Deaths by region
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[1000px] max-xl:h-[700px]'>
          <NivoBar
            data={byRegion}
            keys={['Europe', 'Americas', 'Asia', 'Africa', 'Oceania']}
            indexBy='year'
            colors={['#DDE6ED', '#9DB2BF', '#E7CBCB', '#C88EA7', '#CBE4DE']}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 1.8]],
            }}
            margin={{ left: 70, bottom: 50, top: 70 }}
            mobileMargin={{ left: 30, bottom: 50 }}
            mobileLayout='horizontal'
            layout='vertical'
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
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='total-by-region' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total Deaths splitted by region
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[700px] max-xl:h-[600px]'>
          <NivoBar
            data={totalByRegion}
            keys={Object.keys(totalByRegion[0]).slice(1)}
            indexBy='region'
            colors={['#C88EA7']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 1.8]],
            }}
            margin={{ left: 70, bottom: 50, top: 70 }}
            mobileMargin={{ left: 70, bottom: 50 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
          />
        </div>
      </section>
      <section id='map' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Deaths per country
        </h3>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={byCountry}
            colors={['#DDE6ED', '#CBE4DE', '#9DB2BF', '#E7CBCB', '#C88EA7']}
            valueFormat='.2s'
            domain={[0, 6000]}
          />
        </div>
      </section>
      <section id='by-type-of-death' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-10 pt-10'>
          Deaths divided by type of death
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[400px] max-xl:h-[600px]'>
          <NivoBar
            data={byType}
            keys={['value']}
            indexBy='id'
            colors={['#9DB2BF']}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 1.8]],
            }}
            margin={{ left: 40, bottom: 140, top: 40, right: 10 }}
            mobileMargin={{ left: 40, bottom: 30, top: 30, right: 10 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={0}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#99627a] font-bold'
          href='https://dataunodc.un.org/dp-prisons-mortality'
          rel='noopener noreferrer'
          target='_blank'
        >
          UNODC
        </a>
      </p>
    </>
  );
};

export default Page38;
