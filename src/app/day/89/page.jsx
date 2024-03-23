import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth/Choropleth';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import {
  femaleByYear,
  femaleMapData,
  maleByYear,
  maleMapData,
  ratio,
} from './utils/getParsedData';

const Page89 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='ages-distrubution' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Ages per country
        </h3>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Male legal age distrubution
            </p>
            <NivoBar
              xAxis
              data={maleByYear}
              keys={['countries']}
              indexBy='age'
              colors={['#FB8B24bf']}
              labelTextColor='#fff'
              margin={{ left: 40, bottom: 40, top: 40, right: 10 }}
              mobileMargin={{ left: 20, bottom: 30, top: 30, right: 10 }}
              mobileLayout='vertical'
              layout='vertical'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full max-md:pt-20 h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Female legal age distrubution
            </p>
            <NivoBar
              xAxis
              data={femaleByYear}
              keys={['countries']}
              indexBy='age'
              colors={['#04A777bf']}
              labelTextColor='#fff'
              margin={{ left: 40, bottom: 40, top: 40, right: 10 }}
              mobileMargin={{ left: 20, bottom: 30, top: 30, right: 10 }}
              mobileLayout='vertical'
              layout='vertical'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
        </div>
      </section>
      <section id='ages-maps' className='mt-10'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>Male legal age</p>
            <NivoChoropleth
              data={maleMapData}
              colors={[
                '#F8D2AF',
                '#F9C698',
                '#F9BA81',
                '#FAAF6A',
                '#FAA352',
                '#FB973B',
                '#FB8B24',
              ]}
              valueFormat='.2s'
              domain={[15, 21]}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full max-md:pt-20 h-[400px]'>
            <p className='text-center font-bold mb-4'>Female legal age</p>
            <NivoChoropleth
              data={femaleMapData}
              colors={[
                '#B1F5E0',
                '#8EE5CB',
                '#6CD6B6',
                '#49C6A1',
                '#27B78C',
                '#04A777',
              ]}
              valueFormat='.2s'
              domain={[16, 21]}
            />
          </div>
        </div>
      </section>
      <section id='ratio-ages-per-country' className='mt-20'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Difference into every country for male and female minimun age
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            data={ratio}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 14 }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              legend: 'Country',
              legendPosition: 'middle',
              legendOffset: 120,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Age',
              legendPosition: 'middle',
              legendOffset: -60,
            }}
            margin={{ top: 20, right: 20, bottom: 180, left: 70 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                translateX: 0,
                translateY: 160,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
            colors={['#FB8B24bf', '#04A777bf']}
          />
        </div>
      </section>
      <p className='text-center text-xs mt-20'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#D90368] font-bold'
          href='https://gender-data-hub-2-undesa.hub.arcgis.com/datasets/2a6b107e3ddb44bbb950d43c53f9bb2f/explore'
          rel='noopener noreferrer'
          target='_blank'
        >
          The gender data hub
        </a>
      </p>
    </>
  );
};

export default Page89;
