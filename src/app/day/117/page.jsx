'use client';

import { useState } from 'react';
import Select from 'react-select';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth/Choropleth';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import {
  countries,
  distrubutionByCountry,
  femaleMapData,
  ratio,
} from './utils/getParsedData';

const Page117 = () => {
  const [country, setCountry] = useState(0);
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='percentage-maps' className='mt-10'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full max-md:basis-full max-md:pt-20 h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Maternal mortality ratio per 100.000 live births
            </p>
            <NivoChoropleth
              data={femaleMapData}
              colors={['#ffecb8', '#f2d690', '#e5c168', '#d8ab3f', '#cb9500']}
              valueFormat='.0f'
              domain={[0, 1000]}
            />
          </div>
        </div>
      </section>
      <section id='year-distrubution' className='mt-10 pt-5'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Year distribution per country:{' '}
          <Select
            className='text-left min-w-[140px]'
            classNamePrefix='select_transparent'
            defaultValue={countries.find((val) => val.value === country)}
            onChange={(c) => setCountry(c.value)}
            options={countries}
            aria-label='select-country'
          />
        </h3>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full max-md:basis-full max-md:pt-20 h-[600px]'>
            <p className='text-center font-bold mb-4'>
              Maternal mortality ratio per 100.000 live births distrubution
            </p>
            <NivoBar
              data={distrubutionByCountry.F[country]}
              keys={['value']}
              indexBy='year'
              colors={['#fb5607bf']}
              labelTextColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              margin={{ left: 40, bottom: 40, top: 40, right: 10 }}
              mobileMargin={{ left: 20, bottom: 30, top: 30, right: 10 }}
              mobileLayout='vertical'
              layout='vertical'
              borderWidth={3}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              verticalLabels
              enableLabel={false}
              xtickRotation={45}
            />
          </div>
        </div>
      </section>
      <section id='ratio--per-country' className='mt-20'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Yearly global distribution of maternal mortality ratio per 100.000
          live births
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            showCustomId='title'
            data={ratio}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 0 }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              truncateTickAt: 50,
              legend: 'Country',
              legendPosition: 'middle',
              legendOffset: 120,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Ratio',
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
            colors={['#8338ecbf']}
          />
        </div>
      </section>
      <p className='text-center text-xs mt-20'>
        All data are updated at 04/2024 and taken from{' '}
        <a
          className='text-[#D90368] font-bold'
          href='https://gender-data-hub-2-undesa.hub.arcgis.com/datasets/b8dab52b701440119b545c870afc7fbf/explore'
          rel='noopener noreferrer'
          target='_blank'
        >
          The gender data hub
        </a>
      </p>
    </>
  );
};

export default Page117;
