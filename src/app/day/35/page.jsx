import './page.css';

import dayjs from 'dayjs';

import { searchData } from './data/search';
import ReactChartsLine from '@internal/components/Charts/ReactCharts/Line';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth';
import messiData from './data/messi';
import ronaldoData from './data/ronaldo';
import NivoGeoMap from '@internal/components/Charts/Nivo/GeoMap';

const Page35 = () => {
  const emptyValue = [
    { label: 'Lionel Messi', data: [] },
    { label: 'Cristiano Ronaldo', data: [] },
  ];
  const lineData = searchData.reduce((acc, curr) => {
    acc[0].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['Lionel Messi'],
    });
    acc[1].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['Cristiano Ronaldo'],
    });
    return acc;
  }, emptyValue);

  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold'>
          Cristiano Ronaldo vs. Lionel Messi
        </h1>
        <div className='flex justify-center py-4'>
          <img
            className='rounded-2xl'
            src='/gtrend/messivsronaldo.jpg'
            alt='mark vs zuck image'
          />
        </div>
        <p className='text-center font-mono text-xs'>
          Image credit: Messi vs. Cristiano en la versión cómic del Mundial
          según Marvel y ESPN. Twitter/ESPN
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
            colors={['#43A1D5', '#DA291C']}
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
          data1={messiData}
          data2={ronaldoData}
          colors={['#43A1D5', '#DA291C', '#A8515A']}
        />
      </div>
      <section id='global'>
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#43A1D5]'>
          Lionel Messi
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={messiData}
            colors={['#4FC1FF', '#4AB6F0', '#43A1D5', '#3E99C9', '#3A8FBD']}
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
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#DA291C]'>
          Cristiano Ronaldo
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={ronaldoData}
            colors={['#FF3021', '#E62B1E', '#DA291C', '#C9261A', '#B82318']}
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
          className='text-[#43A1D5]'
          href='https://trends.google.com/trends/explore?date=all&q=%2Fm%2F06qjgc,%2Fm%2F02xt6q'
          rel='noopener noreferrer'
          target='_blank'
        >
          GoogleTrends
        </a>
      </p>
    </>
  );
};

export default Page35;
