import { format } from 'prettier';

import './page.css';

import NivoEasyLine from '@internal/components/Charts/Nivo/EasyLine';

import { infos } from './config';
import { euVSusa, markers, states } from './utils/getParsedData';

const Page110 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>

      <section id='top-songs-album' className='mt-10'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          EUR VS USD
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoEasyLine
            data={euVSusa}
            tooltipInfo={{
              xName: 'Date',
              xFormat: 'date',
            }}
            margin={{ top: 50, right: 60, bottom: 80, left: 60 }}
            mobileMargin={{ top: 50, right: 40, bottom: 80, left: 60 }}
            xFormat={{ format: '%Y-%m-%d' }}
            yFormat=',.0f'
            xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
            yScale={{ type: 'linear' }}
            axisRight={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: '.2s',
              legend: '',
              legendOffset: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: '.2s',
              legend: 'volume',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: 'Year',
              legendOffset: 36,
              legendPosition: 'middle',
              format: '%Y-%m-%d',
            }}
            colors={['#f72585', '#3a0ca3']}
            lineWidth={3}
            legend={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 80,
                itemsSpacing: 2,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 12,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
            markers={markers}
          />
        </div>
      </section>

      <section id='top-songs-album' className='mt-10'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Countries Comparison
        </h3>
        <div
          className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'
          data-testid='line'
        >
          <NivoEasyLine
            tooltipInfo={{
              xName: 'Date',
              xFormat: 'date',
            }}
            data={states}
            margin={{ top: 50, right: 160, bottom: 80, left: 60 }}
            mobileMargin={{ top: 50, right: 40, bottom: 80, left: 60 }}
            yFormat=',.0f'
            xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
            yScale={{ type: 'linear' }}
            axisRight={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: '.2s',
              legend: '',
              legendOffset: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: '.2s',
              legend: 'volume',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: 'Year',
              legendOffset: 36,
              legendPosition: 'middle',
              format: '%Y-%m-%d',
            }}
            colors={['#f72585', '#3a0ca3', '#4cc9f0']}
            lineWidth={3}
            legend={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 80,
                itemsSpacing: 2,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 12,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
            markers={markers}
          />
        </div>
      </section>

      <p className='text-center text-xs mt-20'>
        All data are updated at 04/2024 and taken from{' '}
        <a
          className='text-[#f72585] font-bold'
          href='https://fred.stlouisfed.org'
          rel='noopener noreferrer'
          target='_blank'
        >
          FRED Economic data
        </a>
      </p>
    </>
  );
};

export default Page110;
