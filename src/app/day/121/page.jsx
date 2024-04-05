import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth/Choropleth';
import NivoLine from '@internal/components/Charts/Nivo/Line';

import { infos } from './config';
import {
  byCountry,
  byRegion,
  totalByRegion,
  totalData,
} from './utils/getParsedData';

const Page121 = () => {
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
          Last 10 year Victims
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
            yFormat='.2s'
            colors={['#C65840']}
            margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 20, bottom: 100, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='by-region' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Victims by region
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[1000px] max-xl:h-[700px]'>
          <NivoBar
            data={byRegion}
            keys={Object.keys(byRegion[0]).slice(1)}
            indexBy='year'
            colors={[
              '#3F6F76bf',
              '#69B7CEbf',
              '#C65840bf',
              '#F4CE4Bbf',
              '#62496Fbf',
            ]}
            yFormat='.2s'
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 2.6]],
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
          />
        </div>
      </section>
      <section id='by-region-and-age' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total Victimis splitted by region
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[1000px] max-xl:h-[700px]'>
          <NivoBar
            data={totalByRegion}
            keys={Object.keys(totalByRegion[0]).slice(1)}
            indexBy='region'
            colors={['#3F6F76bf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            yFormat='.2s'
            margin={{ left: 70, bottom: 50, top: 70 }}
            mobileMargin={{ left: 30, bottom: 50 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
          />
        </div>
      </section>
      <section id='map' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Victims per country
        </h3>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={byCountry}
            colors={['#fff0f3', '#ffb3c1', '#ff4d6d', '#a4133c', '#590d22']}
            valueFormat='.2s'
            domain={[0, 120000]}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of 04/2024 and taken from{' '}
        <a
          className='text-[#a86a48] font-bold'
          href='https://dataunodc.un.org/dp-crime-violent-offences'
          rel='noopener noreferrer'
          target='_blank'
        >
          UNODC
        </a>
      </p>
    </>
  );
};

export default Page121;
