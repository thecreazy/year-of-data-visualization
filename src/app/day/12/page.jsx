import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';
import ResponsiveTable from '@internal/components/ResponsiveTable/ResponsiveTable';

import { infos } from './config';
import {
  countriesData,
  countryData,
  lineData,
  revenueData,
  revenuesData,
  tableColumns,
  tableColumnsCountry,
} from './utils/getFormattedData';

const Page12 = () => {
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
        <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[300px] max-xl:h-[500px]'>
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
            colors={['#FF5A5F']}
            margin={{ top: 20, right: 0, bottom: 70, left: 30 }}
            mobileMargin={{ top: 20, right: 0, bottom: 100, left: 30 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='revenues-by-region' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Airbnb Revenues vs Profit
        </h3>
        <div className='mb-[20px] flex h-[570px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <NivoBar
            data={revenueData}
            keys={Object.keys(revenueData[0]).slice(1)}
            indexBy='year'
            colors={['#00A699', '#FF5A5F']}
            labelTextColor='#fff'
            margin={{ left: 70, bottom: 50, top: 70 }}
            mobileMargin={{ left: 30, bottom: 50 }}
            mobileLayout='vertical'
            yFormat='b'
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
        <p className='font-mono text-lg'>Stats</p>
        <ResponsiveTable
          columns={tableColumns}
          data={revenuesData}
          headerColor='#FF5A5F'
          bodyColor='#173e69'
          hoverColor='#e1e1e0'
        />
      </section>
      <section id='revenues-by-country' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Airbnb Gross Revenue By Country
        </h3>
        <div className='mb-[20px] flex h-[570px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <NivoBar
            data={countryData}
            keys={Object.keys(countryData[0]).slice(1)}
            indexBy='country'
            colors={['#00A699', '#FF5A5F']}
            labelTextColor='#fff'
            margin={{ left: 70, bottom: 50, top: 70 }}
            mobileMargin={{ left: 30, bottom: 50 }}
            mobileLayout='vertical'
            yFormat='b'
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
            theme={{
              text: {
                fontWeight: 600,
                fontSize: 12,
              },
            }}
          />
        </div>
        <p className='font-mono text-lg'>Stats</p>
        <ResponsiveTable
          columns={tableColumnsCountry}
          data={countriesData}
          headerColor='#FF5A5F'
          bodyColor='#173e69'
          hoverColor='#e1e1e0'
        />
      </section>
      <p className='text-center text-xs mt-10'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#484848] font-bold'
          href='https://finance.yahoo.com/quote/ABNB/analysis?p=ABNB'
          rel='noopener noreferrer'
          target='_blank'
        >
          Yahoo finance
        </a>
      </p>
      <div className='text-[#FF5A5F]' />
    </>
  );
};

export default Page12;
