import './page.css';

import ChartJSBar from '@internal/components/Charts/ChartJS/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';
import TimedNivoChoropleth from '@internal/components/TimeSeries/TimedNivoChoropleth';

import { infos } from './config';
import {
  mapData,
  totalData,
  vs1990,
  vs1990Income,
} from './utils/getParsedData';

const Page50 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='total' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total of km of forest in the world
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[300px] max-xl:h-[500px]'>
          <NivoLine
            data={totalData}
            yScale={{
              type: 'linear',
              min: 40000000,
              max: 'auto',
            }}
            axisBottom={{
              legendOffset: -12,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: '.2s',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={['#bc4749']}
            margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 20, bottom: 100, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='total-by-continent' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Percentage of increment or decrement of total forest area splitted by
          Continents
        </h3>
        <div className='mb-[20px] flex h-[640px] w-full justify-center max-md:h-[500px] max-xl:h-[640px]'>
          <ChartJSBar
            labels={vs1990.labels}
            data={vs1990.dataset}
            noAspectRation
          />
        </div>
      </section>
      <section id='total-by-income' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Percentage of increment or decrement of total forest area splitted by
          Income zones
        </h3>
        <div className='mb-[20px] flex h-[640px] w-full justify-center max-md:h-[500px] max-xl:h-[640px]'>
          <ChartJSBar
            labels={vs1990Income.labels}
            data={vs1990Income.dataset}
            noAspectRation
          />
        </div>
      </section>
      <section id='map' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total by country (time series)
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center'>
          <TimedNivoChoropleth
            data={mapData}
            colors={[
              '#EBA433',
              '#F7B51D',
              '#FFCA0A',
              '#FFDD00',
              '#F5E900',
              '#E3EB00',
              '#C6E000',
              '#ABD600',
              '#92CC00',
              '#7BC200',
              '#65B800',
              '#51AD00',
              '#3FA300',
              '#2E9900',
              '#1F8F00',
              '#128500',
              '#067A00',
              '#007004',
              '#00660C',
              '#005C12',
            ]}
            valueFormat='.2s'
            domain={[0, 1000000]}
            time={1000}
          />
        </div>
      </section>
      <p className='text-center text-xs mt-20'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#bc4749] font-bold'
          href='https://www.kaggle.com/datasets/webdevbadger/world-forest-area/data'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle
        </a>
      </p>
    </>
  );
};

export default Page50;
