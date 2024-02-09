import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import {
  budgetvsBoxOffice,
  byDirector,
  byOwnership,
  byPhase,
  byReleaseYear,
  scorebyDirector,
  totals,
  yearImdb,
  yearMeta,
  yearRotten,
  yearTomatometer,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page51 = () => {
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
            Number of Marvel Movies
          </p>
          <AnimatedNumber
            number={totals}
            className='font-mono w-full text-[#e23636] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Year</p>
            <NivoPie
              data={byOwnership}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#e23636bf',
                '#000000bf',
                '#504a4abf',
                '#518ccabf',
                '#f78f3fbf',
              ]}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>To 20 Industries</p>
            <NivoPie
              data={byPhase}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#e23636bf',
                '#000000bf',
                '#504a4abf',
                '#518ccabf',
                '#4b0908bf',
                '#f78f3fbf',
              ]}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
        </div>
      </section>
      <section id='by-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by release year
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byReleaseYear}
            keys={Object.keys(byReleaseYear[0]).slice(1)}
            indexBy='year'
            colors={['#e23636bf']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 40, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 80, right: 20 }}
            mobileLayout='vertical'
            layout='vertical'
            legend={[]}
            xtickRotation={90}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='split-year-rating' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[500px]'>
            <p className='text-center font-bold mb-4'>IMDB score per year</p>
            <NivoScatterPlot
              data={yearImdb}
              xScale={{ type: 'point', min: 1998, max: 2023 }}
              yScale={{ type: 'linear', min: 0, max: 10 }}
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 45,
                legend: 'Year',
                legendPosition: 'middle',
                legendOffset: 40,
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Score',
                legendPosition: 'middle',
                legendOffset: -40,
              }}
              margin={{ top: 20, right: 20, bottom: 170, left: 50 }}
              mobileMargin={{ top: 20, right: 20, bottom: 170, left: 50 }}
              legends={[]}
              colors={['#e23636bf']}
              showSerieId
            />
          </div>

          <div className='stats-radar basis-1/2 max-md:basis-full h-[500px]'>
            <p className='text-center font-bold mb-4'>Meta score per year</p>
            <NivoScatterPlot
              data={yearMeta}
              xScale={{ type: 'point', min: 1998, max: 2023 }}
              yScale={{ type: 'linear', min: 0, max: 100 }}
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 45,
                legend: 'Year',
                legendPosition: 'middle',
                legendOffset: 40,
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Score',
                legendPosition: 'middle',
                legendOffset: -40,
              }}
              margin={{ top: 20, right: 20, bottom: 170, left: 50 }}
              mobileMargin={{ top: 20, right: 20, bottom: 170, left: 50 }}
              legends={[]}
              colors={['#e23636bf']}
              showSerieId
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[500px]'>
            <p className='text-center font-bold mb-4'>
              Tomatometer scoer per year
            </p>
            <NivoScatterPlot
              data={yearTomatometer}
              xScale={{ type: 'point', min: 1998, max: 2023 }}
              yScale={{ type: 'linear', min: 0, max: 100 }}
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 45,
                legend: 'Year',
                legendPosition: 'middle',
                legendOffset: 40,
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Score',
                legendPosition: 'middle',
                legendOffset: -40,
              }}
              margin={{ top: 20, right: 20, bottom: 170, left: 50 }}
              mobileMargin={{ top: 20, right: 20, bottom: 170, left: 50 }}
              legends={[]}
              colors={['#e23636bf']}
              showSerieId
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[500px]'>
            <p className='text-center font-bold mb-4'>
              Rotten Tomato Score per year
            </p>
            <NivoScatterPlot
              data={yearRotten}
              xScale={{ type: 'point', min: 1998, max: 2023 }}
              yScale={{ type: 'linear', min: 0, max: 100 }}
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 45,
                legend: 'Year',
                legendPosition: 'middle',
                legendOffset: 40,
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Score',
                legendPosition: 'middle',
                legendOffset: -40,
              }}
              margin={{ top: 20, right: 20, bottom: 170, left: 50 }}
              mobileMargin={{ top: 20, right: 20, bottom: 170, left: 50 }}
              legends={[]}
              colors={['#e23636bf']}
              showSerieId
            />
          </div>
        </div>
      </section>
      <section id='by-director' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Films per Director
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[500px] max-xl:h-[700px]'>
          <NivoBar
            data={byDirector}
            keys={Object.keys(byDirector[0]).slice(1)}
            indexBy='year'
            colors={['#000000bf']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 140, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 80, right: 20 }}
            mobileLayout='vertical'
            layout='vertical'
            legend={[]}
            xtickRotation={90}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='score-by-director' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          AVG IMDB score per Director
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[500px] max-xl:h-[700px]'>
          <NivoBar
            data={scorebyDirector}
            keys={Object.keys(scorebyDirector[0]).slice(1)}
            indexBy='year'
            colors={['#f78f3fbf']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 140, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 80, right: 20 }}
            mobileLayout='vertical'
            layout='vertical'
            legend={[]}
            xtickRotation={90}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='budget-vs-box-office' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center  mb-10 pt-40'>
          Budget / International Box Office Analysis
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[500px] max-xl:h-[500px]'>
          <NivoScatterPlot
            data={budgetvsBoxOffice}
            xFormat='>-$,.2r'
            yFormat='>-$,.2r'
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              format: '>-$,.2r',
              tickRotation: 0,
              legend: 'Budget',
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisLeft={{
              orient: 'left',
              format: '>-$,.2r',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Worldwide Box Office',
              legendPosition: 'middle',
              legendOffset: -100,
            }}
            margin={{ top: 20, right: 50, bottom: 70, left: 120 }}
            mobileMargin={{ top: 20, right: 50, bottom: 70, left: 120 }}
            legends={[]}
            colors={['#e23636bf']}
            showSerieId
          />
        </div>
      </section>

      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#e23636] font-bold'
          href='https://www.kaggle.com/datasets/monkeybusiness7/marvel-cinematic-universe-box-office/data'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle
        </a>
      </p>
    </>
  );
};

export default Page51;
