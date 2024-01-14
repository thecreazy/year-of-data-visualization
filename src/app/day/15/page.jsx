import './page.css';

import AntdTable from '@internal/components/Antd/Table';
import NivoBar from '@internal/components/Charts/Nivo/Bar';

import { infos } from './config';
import {
  costRegionData,
  membershipRegionData,
  revenuesRegionData,
  tableColumns,
  tableData,
  totalsData,
} from './utils/getParsedData';

const Page10 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='per-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Financial per year
        </h3>
        <div className='mb-[20px] flex h-[500px] w-full justify-center max-md:h-[500px] max-xl:h-[700px]'>
          <NivoBar
            data={totalsData}
            keys={['streaming', 'dvd', 'total']}
            indexBy='year'
            colors={['#db0000', '#831010', '#564d4d']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 25, top: 100 }}
            mobileMargin={{ left: 50, bottom: 25 }}
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
          />
        </div>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Membership</p>
            <NivoBar
              data={totalsData}
              keys={['membership']}
              indexBy='year'
              colors={['#db0000']}
              labelTextColor='#fff'
              margin={{ left: 120, bottom: 25 }}
              mobileMargin={{ left: 50, bottom: 25 }}
              mobileLayout='vertical'
              layout='vertical'
              groupMode='stacked'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Avg Membership cost</p>
            <NivoBar
              data={totalsData}
              keys={['avgPayment']}
              indexBy='year'
              colors={['#db0000']}
              labelTextColor='#fff'
              margin={{ left: 120, bottom: 25 }}
              mobileMargin={{ left: 50, bottom: 25 }}
              mobileLayout='vertical'
              layout='vertical'
              groupMode='stacked'
              xFormat='$'
            />
          </div>
        </div>
      </section>
      <section id='per-region' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Financial per region
        </h3>
        <div className='mb-[20px] flex h-[500px] w-full justify-center max-md:h-[500px] max-xl:h-[700px]'>
          <NivoBar
            data={revenuesRegionData}
            keys={Object.keys(revenuesRegionData[0]).slice(1)}
            indexBy='year'
            colors={['#db0000', '#831010', '#564d4d', '#0b0000']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 25, top: 100 }}
            mobileMargin={{ left: 50, bottom: 25 }}
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
          />
        </div>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Membership</p>
            <NivoBar
              data={membershipRegionData}
              keys={Object.keys(membershipRegionData[0]).slice(1)}
              indexBy='year'
              colors={['#db0000', '#831010', '#564d4d', '#0b0000']}
              labelTextColor='#fff'
              margin={{ left: 120, bottom: 25 }}
              mobileMargin={{ left: 50, bottom: 25 }}
              mobileLayout='vertical'
              layout='vertical'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Avg Membership cost</p>
            <NivoBar
              data={costRegionData}
              keys={Object.keys(costRegionData[0]).slice(1)}
              indexBy='year'
              colors={['#db0000', '#831010', '#564d4d', '#0b0000']}
              labelTextColor='#fff'
              margin={{ left: 120, bottom: 25 }}
              mobileMargin={{ left: 50, bottom: 25 }}
              mobileLayout='vertical'
              layout='vertical'
              xFormat='$'
            />
          </div>
        </div>
        <p className='font-mono text-lg text-center'>Stats</p>
        <div className='w-full h-auto flex-row py-4 max-lg:overflow-scroll text-center'>
          <AntdTable columns={tableColumns} data={tableData} />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#221f1f] font-bold'
          href='https://s22.q4cdn.com/959853165/files/doc_financials/2022/ar/4e32b45c-a99e-4c7d-b988-4eef8377500c.pdf'
          rel='noopener noreferrer'
          target='_blank'
        >
          Netflix, Inc. ANNUAL REPORT
        </a>
      </p>
    </>
  );
};

export default Page10;
