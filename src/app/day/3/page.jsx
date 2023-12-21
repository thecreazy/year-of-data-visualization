import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';
import NivoStream from '@internal/components/Charts/Nivo/Stream';

import { infos } from './config';
import { lineData, productData, revenueData } from './utils/getFormattedData';

const Page3 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='stock-price' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Last 5 year stock price
        </h3>
        {JSON.stringify(lineData)}
        {/* <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[300px] max-xl:h-[500px]'>
          <NivoLine
            data={lineData}
            xScale={{
              type: 'time',
              format: '%Y-%m-%d',
              precision: 'day',
            }}
            axisBottom={{
              format: '%b %d %Y',
              tickValues: 'every 4 month',
              legendOffset: -12,
              tickRotation: 45,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: '.2s',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            xFormat='time:%Y-%m-%d'
            colors={['#2d6a4f']}
            margin={{ top: 20, right: 0, bottom: 70, left: 30 }}
            mobileMargin={{ top: 20, right: 0, bottom: 100, left: 30 }}
            enablePoints={false}
          />
        </div> */}
      </section>
      <section id='revenues-by-region' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Apple revenue by region 2015 to 2023 ($bn)
        </h3>
        <div className='mb-[20px] flex h-[570px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <NivoBar
            data={revenueData}
            keys={Object.keys(revenueData[0]).slice(1)}
            indexBy='year'
            colors={['#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226']}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 50, top: 70 }}
            mobileMargin={{ left: 30, bottom: 50 }}
            mobileLayout='vertical'
            layout='vertical'
            groupMode='stacked'
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
      <section id='revenues-by-product' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Apple revenue by product (%)
        </h3>
        <div className='mb-[20px] flex h-[570px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <NivoStream
            data={productData}
            keys={Object.keys(productData[0]).slice(1)}
            margin={{ top: 50, right: 0, bottom: 90, left: 40 }}
            mobileMargin={{ top: 10, right: 0, bottom: 50, left: 40 }}
            legend={[
              {
                anchor: 'bottom',
                direction: 'row',
                translateY: 70,
                itemWidth: 120,
                itemHeight: 20,
                itemTextColor: 'black',
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
            valueFormat='%'
            indexBy='time'
            colors={['#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226']}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#1b4332] font-bold'
          href='https://finance.yahoo.com/quote/AAPL/history?period1=1545004800&period2=1702771200&interval=1d&filter=history&frequency=1d&includeAdjustedClose=true'
          rel='noopener noreferrer'
          target='_blank'
        >
          Yahoo finance
        </a>
      </p>
    </>
  );
};

export default Page3;
