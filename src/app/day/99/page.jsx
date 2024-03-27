import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import { byCountry, byProfit, ratio } from './utils/getParsedData';

const Page99 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title text-center'>
          {infos.title}
        </h1>
        <div className='flex justify-center py-4 h-[600px] max-md:h-[300px]'>
          <img
            className='rounded-2xl'
            src='/various/global-2000-2023.jpg'
            alt='Global 2000 2023'
          />
        </div>
        <p className='text-center font-mono text-xs'>
          Image credit:{' '}
          <a
            href='https://www.forbes.com/lists/global2000/?sh=3d57c89b5ac0'
            target='_blank'
            rel='noopener noreferrer'
          >
            ILLUSTRATION BY JOONHO KO FOR FORBES
          </a>
        </p>
        <p className='py-2 font-mono text-lg text-center pt-5'>
          {infos.description}
        </p>
      </section>
      <section id='total-by-country' className='mt-2'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Country Distribution
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[400px] max-xl:h-[600px]'>
          <NivoBar
            data={byCountry}
            keys={['value']}
            indexBy='Country'
            colors={['#6397cfbf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 130 }}
            mobileMargin={{ left: 30, bottom: 80 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={45}
          />
        </div>
      </section>
      <section id='split-profit' className='pb-20'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[400px] max-md:h-[1000px]'>
            <p className='text-center font-bold mb-4 mt-20'>
              Profit Distrubution
            </p>
            <NivoBar
              data={byProfit}
              keys={['companies']}
              indexBy='profit'
              colors={['#d9715bbf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              labelTextColor='#fff'
              margin={{ left: 40, top: 40, bottom: 70, right: 40 }}
              mobileMargin={{ left: 70, right: 20, bottom: 80 }}
              mobileLayout='horizontal'
              layout='vertical'
              xtickRotation={45}
              valueScale={{ type: 'symlog' }}
            />
          </div>
        </div>
      </section>
      <section id='anaysis-profit-market-value' className='mt-10 pt-20'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Profit/Market Value
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            showCustomId='company'
            data={ratio}
            xScale={{ type: 'symlog', min: -20000000000, max: 200000000000 }}
            yScale={{ type: 'symlog', min: 32000000, max: 2800000000000 }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              legend: 'Profit',
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Market Value',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            margin={{ top: 20, right: 40, bottom: 100, left: 150 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            legends={[
              {
                anchor: 'top',
                direction: 'column',
                translateX: 0,
                translateY: 20,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
            colors={['#528c6cbf']}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#2055a5] font-bold'
          href='https://www.forbes.com/lists/global2000/?sh=3d57c89b5ac0'
          rel='noopener noreferrer'
          target='_blank'
        >
          forbes.com
        </a>
      </p>
    </>
  );
};

export default Page99;
