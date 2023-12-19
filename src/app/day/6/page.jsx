import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoStream from '@internal/components/Charts/Nivo/Stream';

import { infos } from './config';
import {
  arpu,
  dailyUsers,
  monthlyUsers,
  totalArpu,
  weightedbyARPU,
} from './utils/getFormattedData';

const Page6 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='per-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-end'>
          Facebook Daily Active Users
          <span className='text-sm'>(In Millions)</span>
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[450px] max-xl:h-[550px]'>
          <NivoBar
            data={dailyUsers}
            keys={Object.keys(dailyUsers[0]).slice(1)}
            indexBy='time'
            colors={['#0b090a', '#161a1d', '#660708', '#a4161a']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 40, top: 10, right: 10 }}
            mobileMargin={{ left: 50, bottom: 30, top: 10, right: 0 }}
            mobileLayout='vertical'
            layout='vertical'
            groupMode='stacked'
            yFormat='m'
          />
        </div>
        <div className='mb-[20px] flex h-[570px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <NivoStream
            data={dailyUsers}
            keys={Object.keys(dailyUsers[0]).slice(1)}
            margin={{ top: 50, right: 40, bottom: 90, left: 120 }}
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
            valueFormat='.%m'
            indexBy='time'
            colors={['#0b090a', '#161a1d', '#660708', '#a4161a']}
          />
        </div>
      </section>
      <section id='per-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-end'>
          Facebook Monthly Active Users{' '}
          <span className='text-sm'>(In Millions)</span>
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[450px] max-xl:h-[550px]'>
          <NivoBar
            data={monthlyUsers}
            keys={Object.keys(monthlyUsers[0]).slice(1)}
            indexBy='time'
            colors={['#0b090a', '#161a1d', '#660708', '#a4161a']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 40, top: 10, right: 10 }}
            mobileMargin={{ left: 50, bottom: 30, top: 10, right: 0 }}
            mobileLayout='vertical'
            layout='vertical'
            groupMode='stacked'
            yFormat='m'
          />
        </div>
        <div className='mb-[20px] flex h-[570px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <NivoStream
            data={monthlyUsers}
            keys={Object.keys(monthlyUsers[0]).slice(1)}
            margin={{ top: 50, right: 40, bottom: 90, left: 120 }}
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
            valueFormat='.%m'
            indexBy='time'
            colors={['#0b090a', '#161a1d', '#660708', '#a4161a']}
          />
        </div>
      </section>
      <section id='detail-dota2' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Facebook Average Revenue per User (ARPU)
        </h3>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/3 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <NivoBar
              data={arpu.wordwide}
              keys={Object.keys(arpu.wordwide[0]).slice(1)}
              indexBy='time'
              colors={['#a4161a']}
              labelTextColor='#fff'
              margin={{ left: 0, bottom: 40, top: 40, right: 40 }}
              mobileMargin={{ left: 0, bottom: 30, top: 30, right: 0 }}
              mobileLayout='vertical'
              layout='vertical'
              groupMode='stacked'
              yFormat='$'
            />
            <p className='text-center font-bold'>Worldwide</p>
          </div>
          <div className='stats-radar basis-1/3 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <NivoBar
              data={arpu.usa}
              keys={Object.keys(arpu.usa[0]).slice(1)}
              indexBy='time'
              colors={['#a4161a']}
              labelTextColor='#fff'
              margin={{ left: 0, bottom: 40, top: 40, right: 40 }}
              mobileMargin={{ left: 0, bottom: 30, top: 30, right: 0 }}
              mobileLayout='vertical'
              layout='vertical'
              groupMode='stacked'
              yFormat='$'
            />
            <p className='text-center font-bold'>US & Canada</p>
          </div>
          <div className='stats-radar basis-1/3 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <NivoBar
              data={arpu.europe}
              keys={Object.keys(arpu.europe[0]).slice(1)}
              indexBy='time'
              colors={['#a4161a']}
              labelTextColor='#fff'
              margin={{ left: 0, bottom: 40, top: 40, right: 40 }}
              mobileMargin={{ left: 0, bottom: 30, top: 30, right: 0 }}
              mobileLayout='vertical'
              layout='vertical'
              groupMode='stacked'
              yFormat='$'
            />
            <p className='text-center font-bold'>Europe</p>
          </div>
          <div className='stats-radar basis-1/3 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <NivoBar
              data={arpu.asia}
              keys={Object.keys(arpu.asia[0]).slice(1)}
              indexBy='time'
              colors={['#a4161a']}
              labelTextColor='#fff'
              margin={{ left: 0, bottom: 40, top: 40, right: 40 }}
              mobileMargin={{ left: 0, bottom: 30, top: 30, right: 0 }}
              mobileLayout='vertical'
              layout='vertical'
              groupMode='stacked'
              yFormat='$'
            />
            <p className='text-center font-bold'>Asia-Pacific</p>
          </div>
          <div className='stats-radar basis-1/3 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <NivoBar
              data={arpu.rest}
              keys={Object.keys(arpu.rest[0]).slice(1)}
              indexBy='time'
              colors={['#a4161a']}
              labelTextColor='#fff'
              margin={{ left: 0, bottom: 40, top: 40, right: 0 }}
              mobileMargin={{ left: 0, bottom: 30, top: 30, right: 0 }}
              mobileLayout='vertical'
              layout='vertical'
              groupMode='stacked'
              yFormat='$'
            />
            <p className='text-center font-bold'>Rest of World</p>
          </div>
        </div>
        <p className='text-center text-xl'>Aggregated data</p>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoBar
            data={totalArpu}
            keys={Object.keys(totalArpu[0]).slice(1)}
            indexBy='time'
            colors={['#b1a7a6', '#0b090a', '#161a1d', '#660708', '#a4161a']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 40, top: 40, right: 10 }}
            mobileMargin={{ left: 30, bottom: 30, top: 30, right: 0 }}
            mobileLayout='vertical'
            layout='vertical'
            yFormat='$'
          />
        </div>
      </section>
      <section id='detail-dota2' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-end'>
          Facebook active users weighted by ARPU{' '}
          <span className='text-sm'>(In Millions$)</span>
        </h3>
        <div className='mb-[20px] flex h-[570px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <NivoStream
            data={weightedbyARPU}
            keys={Object.keys(weightedbyARPU[0]).slice(1)}
            margin={{ top: 50, right: 40, bottom: 90, left: 140 }}
            mobileMargin={{ top: 10, right: 0, bottom: 50, left: 30 }}
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
            valueFormat='.%m$'
            indexBy='time'
            colors={['#0b090a', '#161a1d', '#660708', '#a4161a']}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#161a1d] font-bold'
          href='https://s21.q4cdn.com/399680738/files/doc_earnings/2023/q3/presentation/Earnings-Presentation-Q3-2023.pdf'
          rel='noopener noreferrer'
          target='_blank'
        >
          Meta Earnings Presentation Q3 2023
        </a>
      </p>
      <div className='text-[#da291c] hover:bg-[#e1e1e0]'></div>
    </>
  );
};

export default Page6;
