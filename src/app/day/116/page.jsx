import dayjs from 'dayjs';

import './page.css';

import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth/Choropleth';
import NivoGeoMap from '@internal/components/Charts/Nivo/GeoMap';
import ReactChartsLine from '@internal/components/Charts/ReactCharts/Line';
import Legend from '@internal/components/Legend/Legend';

import { infos } from './config';
import firstData from './data/first';
import { searchData } from './data/search';
import secondData from './data/second';
import thirdData from './data/third';

const Page116 = () => {
  const emptyValue = [
    { label: 'World War I', data: [] },
    { label: 'World War II', data: [] },
    { label: 'World War III', data: [] },
  ];
  const lineData = searchData.reduce((acc, curr) => {
    acc[0].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['World War I'],
    });
    acc[1].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['World War II'],
    });
    acc[2].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['World War III'],
    });
    return acc;
  }, emptyValue);

  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold'>
          {infos.title}
        </h1>
        <div className='flex justify-center py-4'>
          <img
            className='rounded-2xl'
            src='https://nypost.com/wp-content/uploads/sites/2/2016/11/shutterstock_320460137.jpg?quality=75&strip=all&w=744'
            alt='WWI vs WWII vs WWIII'
          />
        </div>
        <p className='text-center font-mono text-xs'>
          Image credit:{' '}
          <a
            href='https://nypost.com/2016/11/10/here-are-the-safest-places-to-hide-in-case-of-wwiii/'
            target='_blank'
            rel='noopener noreferrer'
          >
            nypost
          </a>
        </p>
        <h3 className='py-4 text-center font-mono text-3xl'>
          {infos.description}
        </h3>
      </section>
      <section id='global'>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <ReactChartsLine
            data={lineData}
            initialHeight={400}
            colors={['#d58401', '#c1142e', '#00778a']}
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
      <div className='mb-[50px] mt-[30px] flex h-[400px] w-full justify-center flex flex-col gap-4'>
        <NivoGeoMap
          data1={firstData}
          data2={secondData}
          data3={thirdData}
          datasetNumber={3}
          colors={['#d58401', '#c1142e', '#00778a', '#9E89A7']}
        />
        <Legend
          options={[
            { color: '#d58401', label: 'WWI' },
            { color: '#c1142e', label: 'WWII' },
            { color: '#00778a', label: 'WWIII' },
            { color: '#9E89A7', label: 'Equal' },
          ]}
        />
      </div>
      <section id='World War I'>
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#d58401]'>
          World War I
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={firstData}
            colors={['#ffe9c8', '#f5d09a', '#ebb76e', '#e09e41', '#d58401']}
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
      <section id='World War II'>
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#c1142e]'>
          World War II
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={secondData}
            colors={['#ffafba', '#f38d98', '#e56b75', '#d44651', '#c1142e']}
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
      <section id='World War III'>
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#00778a]'>
          World War III
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={thirdData}
            colors={['#aff4ff', '#8ad3e0', '#65b4c3', '#3e95a6', '#00778a']}
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
        All data are updated at 04/2024 and taken from{' '}
        <a
          className='text-[#d58401]'
          href='https://trends.google.com/trends/explore?date=all&q=%2Fm%2F0cm2xh,%2Fm%2F081pw,%2Fm%2F0hc1g&hl=en'
          rel='noopener noreferrer'
          target='_blank'
        >
          GoogleTrends
        </a>
      </p>
    </>
  );
};

export default Page116;
