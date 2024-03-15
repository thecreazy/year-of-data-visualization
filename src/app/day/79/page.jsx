import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth/Choropleth';
import NivoLine from '@internal/components/Charts/Nivo/Line';

import { infos } from './config';
import {
  byCountry,
  femaleMapData,
  maleMapData,
  totalByRegion,
  totalData,
} from './utils/getParsedData';

const Page79 = () => {
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
          World average of cocaine use in percentage
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
              format: '>-.2%',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={['#8a1e3f', '#FF6978', '#B1EDE8']}
            margin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            mobileMargin={{ top: 20, right: 20, bottom: 100, left: 50 }}
            enablePoints={false}
            yFormat='>-.2%'
          />
        </div>
      </section>
      <section id='map' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          World average of cocaine use in percentage by state
        </h3>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={byCountry}
            colors={['#ffd6e2', '#e3a8b8', '#c77c8f', '#a94f66', '#8a1e3f']}
            valueFormat='>-.2%'
            domain={[0, 0.05]}
            legendItemSize={114}
          />
        </div>
      </section>
      <section id='male-female-maps' className='mt-10'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>Male percentage</p>
            <NivoChoropleth
              data={maleMapData}
              colors={['#e6fffc', '#b6e1dc', '#87c4be', '#54a7a0', '#008a83']}
              valueFormat='>-.2%'
              domain={[0, 0.05]}
              legendItemSize={114}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full max-md:pt-20 h-[400px]'>
            <p className='text-center font-bold mb-4'>Female percentage</p>
            <NivoChoropleth
              data={femaleMapData}
              colors={['#ffe7e7', '#ffcacb', '#ffacaf', '#ff8d94', '#ff6b7a']}
              valueFormat='>-.2%'
              domain={[0, 0.05]}
              legendItemSize={114}
            />
          </div>
        </div>
      </section>
      <section id='total-by-region' className='mt-10 pt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total percentage splitted by region
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[700px] max-xl:h-[600px]'>
          <NivoBar
            data={totalByRegion}
            keys={Object.keys(totalByRegion[0]).slice(1)}
            indexBy='Region'
            colors={['#8a1e3fbf']}
            borderWidth={3}
            labelTextColor='white'
            margin={{ left: 70, bottom: 50, top: 70 }}
            mobileMargin={{ left: 70, bottom: 50 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            yFormat='>-.2%'
          />
        </div>
      </section>

      <p className='text-center text-xs'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#FF6978] font-bold'
          href='https://dataunodc.un.org/dp-drug-use-prevalence'
          rel='noopener noreferrer'
          target='_blank'
        >
          UNODC
        </a>
      </p>
    </>
  );
};

export default Page79;
