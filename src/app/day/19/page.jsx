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

const Page19 = () => {
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
            colors={['#3F6F76', '#69B7CE', '#C65840', '#F4CE4B', '#62496F']}
            labelTextColor='#fff'
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
            colors={['#C65840']}
            labelTextColor='#fff'
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
            colors={['#94422F', '#AD4D37', '#C65840', '#E06448', '#FA6F50']}
            valueFormat='.2s'
            domain={[0, 150000]}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from{' '}
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

export default Page19;
