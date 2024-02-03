import dayjs from 'dayjs';

import './page.css';

import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth/Choropleth';
import NivoGeoMap from '@internal/components/Charts/Nivo/GeoMap';
import ReactChartsLine from '@internal/components/Charts/ReactCharts/Line';

import dieselData from './data/diesel';
import elettricData from './data/elettric';
import petrolData from './data/petrol';
import { searchData } from './data/search';

const Page73 = () => {
  const emptyValue = [
    { label: 'Electric car', data: [] },
    { label: 'Diesel car', data: [] },
    { label: 'Petrol car', data: [] },
  ];
  const lineData = searchData.reduce((acc, curr) => {
    acc[0].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['Electric car'],
    });
    acc[1].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['Diesel car'],
    });
    acc[2].data.push({
      date: dayjs(dayjs(curr.date, 'YYYY-MM')).toDate(),
      value: curr['Petrol car'],
    });
    return acc;
  }, emptyValue);

  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold'>
          Automotive Comparison
        </h1>
        <div className='flex justify-center py-4'>
          <img
            className='rounded-2xl'
            src='/gtrend/elettricvspetrolvsdiesel.webp'
            alt='elettric vs petrol vs diesel image'
          />
        </div>
        <p className='text-center font-mono text-xs'>
          Image credit:{' '}
          <a
            href='https://www.acko.com/car-guide/electric-car-vs-petrol-car-vs-diesel-car-ownership-cost/'
            target='_blank'
            rel='noopener noreferrer'
          >
            ACKO
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
            colors={['#EDAE49', '#D1495B', '#00798C']}
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
          data1={elettricData}
          data2={dieselData}
          data3={petrolData}
          datasetNumber={3}
          colors={['#EDAE49', '#D1495B', '#00798C', '#9E89A7']}
        />
      </div>
      <section id='Electric car'>
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#EDAE49]'>
          Electric car
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={elettricData}
            colors={['#F4CE90', '#F0BD64', '#EDAE49', '#EBA433', '#E99C20']}
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
      <section id='Diesel car'>
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#D1495B]'>
          Diesel car
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={dieselData}
            colors={['#da6c7b', '#d65c6c', '#D1495B', '#ce3b4f', '#c43145']}
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
      <section id='Petrol car'>
        <h4 className='py-4 pt-8 text-center font-mono text-3xl text-[#00798C]'>
          Petrol car
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={petrolData}
            colors={['#009fb8', '#008da3', '#00798C', '#006a7a', '#005866']}
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
          className='text-[#EDAE49]'
          href='https://trends.google.com/trends/explore?cat=18&date=all&q=Electric%20car,Diesel%20car,Petrol%20car'
          rel='noopener noreferrer'
          target='_blank'
        >
          GoogleTrends
        </a>
      </p>
    </>
  );
};

export default Page73;
