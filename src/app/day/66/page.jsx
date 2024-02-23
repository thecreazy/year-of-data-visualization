import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import {
  byBedrooms,
  byNeighbourhood,
  byPrice,
  byRoomType,
  ratio,
  total,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page66 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>
            Number of properties on Airbnb
          </p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#fe5f55] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split-room-bedrooms' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Room Type</p>
            <NivoPie
              data={byRoomType}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#00798cbf',
                '#fe5f55bf',
                '#495867bf',
                '#bdd5eabf',
                '#577399bf',
              ]}
              borderWidth={2}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Bedrooms</p>
            <NivoPie
              data={byBedrooms}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#00798cbf',
                '#495867bf',
                '#fe5f55bf',
                '#edae49bf',
                '#577399bf',
                '#d1495bbf',
                '#30638ebf',
                '#003d5bbf',
                '#bdd5eabf',
              ]}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
        </div>
      </section>
      <section id='split-price' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[400px] max-md:h-[1000px]'>
            <p className='text-center font-bold mb-4 mt-20'>
              Price Distrubution
            </p>
            <NivoBar
              data={byPrice}
              keys={['properties']}
              indexBy='price'
              colors={['#fe5f55bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              labelTextColor='#fff'
              margin={{ left: 40, top: 40, bottom: 70, right: 40 }}
              mobileMargin={{ left: 70, right: 20, bottom: 80 }}
              mobileLayout='horizontal'
              layout='vertical'
              xtickRotation={45}
            />
          </div>
        </div>
      </section>
      <section id='total-by-neighbourhood' className='mt-10 pt-20'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Top 20 Neighbourhood
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byNeighbourhood}
            keys={['value']}
            indexBy='neighbourhood'
            colors={['#fe5f55bf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 130 }}
            mobileMargin={{ left: 30, bottom: 80 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={45}
          />
        </div>
      </section>
      <section id='anaysis-pricing-rating' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Pricing/Ratings analysis
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            data={ratio}
            xScale={{ type: 'symlog', min: 9, max: 10000 }}
            yScale={{ type: 'linear', min: 0, max: 6 }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: 'Price',
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Rating',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            margin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            legends={[
              {
                anchor: 'bottom',
                direction: 'column',
                translateX: 0,
                translateY: 20,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
            colors={['#00798cbf']}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#fe5f55] font-bold'
          href='http://insideairbnb.com/get-the-data/'
          rel='noopener noreferrer'
          target='_blank'
        >
          Insideairbnb
        </a>
      </p>
    </>
  );
};

export default Page66;
