import './page.css';

import dayjs from 'dayjs';

import { searchData } from './data/search';
import ReactChartsLine from '@internal/components/Charts/ReactCharts/Line';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth';
import risottoData from './data/risotto';
import paellaData from './data/paella';
import NivoGeoMap from '@internal/components/Charts/Nivo/GeoMap';

const Page62 = () => {
  const emptyValue = [
    { label: 'Risotto', data: [] },
    { label: 'Paella', data: [] },
  ];
  const lineData = searchData.reduce((acc, curr) => {
    acc[0].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['Risotto'],
    });
    acc[1].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['Paella'],
    });
    return acc;
  }, emptyValue);

  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold'>
          Risotto vs. Paella
        </h1>
        <div className='flex justify-center py-4'>
          <img
            className='rounded-2xl'
            src='/gtrend/risottovspaella.jpeg'
            alt='arancina vs arancino image'
          />
        </div>
        <p className='text-center font-mono text-xs'>
          Image credit:{' '}
          <a
            href='https://www.yummy.ph/lessons/cooking/paella-vs-risotto-difference-a00249-20210825-lfrm'
            target='_blank'
            rel='noopener noreferrer'
          >
            Yummy
          </a>
        </p>
        <h3 className='py-4 text-center font-mono text-3xl'>
          Global comparison between Google searches from 2004 to today
        </h3>
      </section>
      <section id='global'>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <ReactChartsLine
            data={lineData}
            initialHeight={400}
            colors={['#3fc1c9', '#fc5185']}
            width='100%'
          />
        </div>
        <p className='text-centered font-mono text-xs'>
          The numbers represent search interest relative to the highest point of
          the graph for the indicated region and period. The value 100 indicates
          the highest search frequency for the term, 50 indicates half of the
          searches. A score of 0, however, indicates that not enough data was
          collected for the term.
        </p>
      </section>
      <h4 className='mt-[50px] py-4 text-center font-mono text-3xl text-[#393939]'>
        Most searched by region
      </h4>
      <div className='mb-[50px] mt-[30px] flex h-[400px] w-full justify-center'>
        <NivoGeoMap
          data1={risottoData}
          data2={paellaData}
          colors={['#3fc1c9', '#fc5185', '#9E89A7']}
        />
      </div>
      <section id='global'>
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#3fc1c9]'>
          Risotto
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={risottoData}
            colors={['#47DEE6', '#42CCD4', '#3fc1c9', '#3AB4BA', '#36A7AD']}
            valueFormat='.2s'
          />
        </div>
        <p className='text-centered font-mono text-xs'>
          See in which location your term was most popular during the specified
          time frame. Values are calculated on a scale from 0 to 100, where 100
          is the location with the most popularity as a fraction of total
          searches in that location, a value of 50 indicates a location which is
          half as popular. A value of 0 indicates a location where there was not
          enough data for this term.
        </p>
      </section>
      <section id='global'>
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#fc5185]'>
          Paella
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={paellaData}
            colors={['#FF7186', '#FF6586', '#fc5185', '#FC3B85', '#FC0F85']}
            valueFormat='.2s'
          />
        </div>
        <p className='text-centered font-mono text-xs'>
          See in which location your term was most popular during the specified
          time frame. Values are calculated on a scale from 0 to 100, where 100
          is the location with the most popularity as a fraction of total
          searches in that location, a value of 50 indicates a location which is
          half as popular. A value of 0 indicates a location where there was not
          enough data for this term.
        </p>
      </section>
      <p className='pt-[30px] text-center text-xs'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#3fc1c9]'
          href='https://trends.google.com/trends/explore?date=all&q=%2Fm%2F034xzm,%2Fm%2F0ct59'
          rel='noopener noreferrer'
          target='_blank'
        >
          GoogleTrends
        </a>
      </p>
    </>
  );
};

export default Page62;
