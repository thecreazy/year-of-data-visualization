'use client';

import { useState } from 'react';
import Select from 'react-select';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth/Choropleth';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import {
  byContinent,
  countries,
  distrubutionByCountry,
  mapData,
  ratio,
} from './utils/getParsedData';

const Page89 = () => {
  const [country, setCountry] = useState(0);
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='expectancy-maps' className='mt-10'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[400px] max-md:h-[500px]'>
            <p className='text-center font-bold mb-4'>
              Life expectancy per country in 2021
            </p>
            <NivoChoropleth
              data={mapData}
              colors={['#d8f3dc', '#95d5b2', '#52b788', '#40916c', '#2d6a4f']}
              valueFormat='.0f'
              domain={[53, 83]}
            />
          </div>
        </div>
      </section>
      <section id='country-year-distrubution' className='mt-10 pt-5'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20 max-md:mb-5'>
          Yearly life expectancy per country:{' '}
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
          <div className='stats-radar basis-full h-[600px] max-md:h-[600px]'>
            <NivoBar
              data={distrubutionByCountry[country]}
              keys={Object.keys(distrubutionByCountry[country][0]).slice(1)}
              indexBy='year'
              colors={['#e07a5fbf']}
              labelTextColor='#fff'
              margin={{ left: 40, bottom: 40, top: 40, right: 10 }}
              mobileMargin={{ left: 40, bottom: 30, top: 10, right: 10 }}
              mobileLayout='horizontal'
              layout='vertical'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              groupMode='stacked'
              xtickRotation={45}
            />
          </div>
        </div>
      </section>
      <section id='ratio-per-country' className='mt-20'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Comparison between life expectancy and birth rate for each country in
          2021
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            showCustomId='country'
            data={ratio}
            xScale={{ type: 'linear', min: 50 }}
            yScale={{ type: 'linear', min: 0 }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              truncateTickAt: 50,
              legend: 'Life Expectancy',
              legendPosition: 'middle',
              legendOffset: 120,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Birth Rate ',
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
            colors={['#9b2226bf']}
          />
        </div>
      </section>
      <section id='year-distrubution-continent' className='mt-10 pt-5'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20 max-md:mb-5'>
          Yearly life expectancy per continent
        </h3>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[600px] max-md:h-[600px]'>
            <NivoBar
              data={byContinent}
              keys={Object.keys(byContinent[0]).slice(1)}
              indexBy='year'
              colors={[
                '#40916cbf',
                '#3d405bbf',
                '#e07a5fbf',
                '#f2cc8fbf',
                '#9b2226bf',
              ]}
              labelTextColor='#fff'
              margin={{ left: 40, bottom: 40, top: 60, right: 10 }}
              mobileMargin={{ left: 40, bottom: 30, top: 60, right: 10 }}
              mobileLayout='horizontal'
              layout='vertical'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
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
        </div>
      </section>
      <p className='text-center text-xs mt-20'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#9b2226] font-bold'
          href='https://www.worldbank.org/en/home'
          rel='noopener noreferrer'
          target='_blank'
        >
          worldbank.org
        </a>
      </p>
    </>
  );
};

export default Page89;
