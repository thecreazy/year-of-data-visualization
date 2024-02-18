import dynamic from 'next/dynamic';

import './page.css';

import NivoUSAChoropleth from '@internal/components/Charts/Nivo/Choropleth/USAChrorepleth';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import {
  ratio,
  total,
  totalByState,
  totalDrivingFatalities,
  totalExcessiveDrinking,
} from './utils/getFormattedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page61 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold max-md:text-4xl'>
          {infos.title}
        </h1>
        <h3 className='max-md:text-md py-2 text-center font-mono text-xl font-bold'>
          {infos.description}
        </h3>
      </section>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total number of Fueling Stations
          </p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#457b9d] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='total-of-Ethanol' className='mt-10'>
        <h4 className='mb-8 text-center font-mono text-2xl font-bold'>
          Gallons of Ethanol per Capita
        </h4>
        <p className='mb-8 text-center font-mono '>
          Amount of ethanol consumed per capita in each state, measured in
          gallons.
        </p>
        <div className='mb-[20px] flex h-[400px] w-full justify-center max-md:h-[600px]'>
          <NivoUSAChoropleth
            data={totalByState}
            colors={['#8871E4', '#6E58CA', '#553EAF', '#3B2595', '#210B7A']}
            domain={[0, 4.84]}
          />
        </div>
      </section>
      <section id='total-of-Fatalities' className='mt-10'>
        <h4 className='mb-8 text-center font-mono text-2xl font-bold'>
          Driving Fatalities Involving Alcohol
        </h4>
        <p className='mb-8 text-center font-mono '>
          The percentage of driving fatalities in each state that involve
          alcohol.
        </p>
        <div className='mb-[20px] flex h-[400px] w-full justify-center max-md:h-[600px]'>
          <NivoUSAChoropleth
            data={totalDrivingFatalities}
            colors={['#ACD8E7', '#8EBECE', '#70A3B5', '#52899B', '#346E82']}
            domain={[0, 0.5]}
            valueFormat='>-.1%'
          />
        </div>
      </section>
      <section id='total-of-Drinking-rate' className='mt-10'>
        <h4 className='mb-8 text-center font-mono text-2xl font-bold'>
          Excessive Drinking Rate
        </h4>
        <p className='mb-8 text-center font-mono '>
          The percentage of the population engaging in excessive drinking
          behaviors in each state. Excessive alcohol consumption includes heavy
          drinking and binge drinking. Heavy drinking is eight or more drinks
          per week for women and 15 or more drinks per week for men. Binge
          drinking is four or more drinks during a single occasion for women and
          five or more for men
        </p>
        <div className='mb-[20px] flex h-[400px] w-full justify-center max-md:h-[600px]'>
          <NivoUSAChoropleth
            data={totalExcessiveDrinking}
            colors={['#F8B6CC', '#E88EAC', '#D7678C', '#C73F6B', '#B6174B']}
            domain={[0, 0.25]}
            valueFormat='>-.1%'
          />
        </div>
      </section>
      <section id='ratio-Drinking-rate-Fatalities' className='mt-20'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Relationship between Excessive Drinking rate and Driving Fatalities
          Involving Alcohol
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            data={ratio}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 10 }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              legend: 'Country',
              legendPosition: 'middle',
              legendOffset: 80,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Percentage',
              legendPosition: 'middle',
              legendOffset: -60,
            }}
            margin={{ top: 20, right: 20, bottom: 180, left: 70 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                translateX: 0,
                translateY: 160,
                itemWidth: 200,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
            colors={['#346E82bf', '#B6174Bbf']}
          />
        </div>
      </section>
      <p className='pt-[30px] text-center text-xs '>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='font-bold text-[#B6174B]'
          href='https://www.kaggle.com/datasets/annafabris/alcohol-consumption-by-state-2024/data?select=alcohol_consumption_by_usa_state_2024.csv'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle
        </a>
      </p>
    </>
  );
};

export default Page61;
