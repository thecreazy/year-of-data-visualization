import './page.css';

import dayjs from 'dayjs';

import { searchData } from './data/search';
import ReactChartsLine from '@internal/components/Charts/ReactCharts/Line';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth';
import arancinaData from './data/arancina';
import arancinoData from './data/arancino';
import NivoGeoMap from '@internal/components/Charts/Nivo/GeoMap';

const Page53 = () => {
  const emptyValue = [
    { label: 'Arancina', data: [] },
    { label: 'Arancino', data: [] },
  ];
  const lineData = searchData.reduce((acc, curr) => {
    acc[0].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['Arancina'],
    });
    acc[1].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['Arancino'],
    });
    return acc;
  }, emptyValue);

  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold'>
          Arancina vs. Arancino
        </h1>
        <div className='flex justify-center py-4'>
          <img
            className='rounded-2xl'
            src='/gtrend/arancinavsarancino.jpg'
            alt='arancina vs arancino image'
          />
        </div>
        <p className='text-center font-mono text-xs'>
          Image credit:{' '}
          <a
            href='https://www.youtube.com/watch?app=desktop&v=p0sZIJuXGqk'
            target='_blank'
            rel='noopener noreferrer'
          >
            Sicily&apos;s Journey Youtube Channel
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
            colors={['#f4b6b9', '#01ae9b']}
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
          data1={arancinaData}
          data2={arancinoData}
          colors={['#f4b6b9', '#01ae9b', '#A3B3AF']}
        />
      </div>
      <section id='global'>
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#f4b6b9]'>
          Arancina
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={arancinaData}
            colors={['#FFC8C2', '#FFC3C2', '#f4b6b9', '#EDB2B5', '#E6ACAF']}
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
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#01ae9b]'>
          Arancino
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={arancinoData}
            colors={['#02E6CB', '#02C4AE', '#01ae9b', '#02A390', '#019483']}
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
          className='text-[#f4b6b9]'
          href='https://trends.google.com/trends/explore?date=all&q=arancina,arancino&hl=en'
          rel='noopener noreferrer'
          target='_blank'
        >
          GoogleTrends
        </a>
      </p>
    </>
  );
};

export default Page53;
