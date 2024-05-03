import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';
import ResponsiveTable from '@internal/components/ResponsiveTable/ResponsiveTable';

import { infos } from './config';
import {
  employeesData,
  employeesDataYear,
  lineData,
  revenueData,
  revenuesData,
  tableColumns,
  tableColumnsEmployees,
} from './utils/getFormattedData';

const Page131 = () => {
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
          Historical stock price
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[300px] max-xl:h-[500px]'>
          <NivoLine
            enableSlices={false}
            data={lineData}
            xScale={{
              type: 'time',
              format: '%Y-%m-%d',
              precision: 'day',
            }}
            axisBottom={{
              format: '%b %d %Y',
              tickValues: 'every 1 year',
              legendOffset: -12,
              tickRotation: 90,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: '$.2s',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            xFormat='time:%Y-%m-%d'
            yFormat=' >-$.2f'
            colors={['#FF2800']}
            margin={{ top: 20, right: 0, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 0, bottom: 100, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='revenues-vs-profit' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Ferrari N.V. Revenues vs Profit
        </h3>
        <div className='mb-[20px] flex h-[570px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <NivoBar
            data={revenueData}
            keys={Object.keys(revenueData[0]).slice(1)}
            indexBy='year'
            colors={['#00A699bf', '#FF2800bf']}
            borderWidth={2}
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
          headerColor='#FF2800'
          bodyColor='#173e69'
          hoverColor='#e1e1e0'
        />
      </section>
      <section id='employees' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Ferrari N.V. Number of Employees
        </h3>
        <div className='mb-[20px] flex h-[570px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <NivoBar
            data={employeesDataYear}
            keys={Object.keys(employeesDataYear[0]).slice(1)}
            indexBy='year'
            colors={['#00A699bf']}
            borderWidth={2}
            labelTextColor='#fff'
            margin={{ left: 70, bottom: 50, top: 70 }}
            mobileMargin={{ left: 30, bottom: 50 }}
            mobileLayout='vertical'
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
          columns={tableColumnsEmployees}
          data={employeesData}
          headerColor='#FF2800'
          bodyColor='#173e69'
          hoverColor='#e1e1e0'
        />
      </section>
      <p className='text-center text-xs mt-10'>
        All data are updated at the end of 05/2024 and taken from{' '}
        <a
          className='text-[#484848] font-bold'
          href='https://finance.yahoo.com/quote/RACE'
          rel='noopener noreferrer'
          target='_blank'
        >
          Yahoo finance
        </a>
      </p>
      <div className='text-[#FF2800]' />
    </>
  );
};

export default Page131;
