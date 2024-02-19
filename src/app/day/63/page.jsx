import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';
import TagCloud from '@internal/components/TagCloud/TagCloud';

import { infos } from './config';
import {
  byCategory,
  byDesigner,
  byMaxGames,
  byMinAge,
  cloudTag,
  ratio,
  totalGamesPerYear,
} from './utils/getParsedData';

const Page63 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='split-age-players' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4  justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:h-[300px] max-md:mb-8'>
            <p className='text-center font-bold mb-4'>Split by max players</p>
            <NivoBar
              data={byMaxGames}
              keys={['games']}
              indexBy='Max Players'
              colors={['#FF6969bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              labelTextColor='#fff'
              margin={{ left: 40, right: 40, bottom: 40, top: 20 }}
              mobileMargin={{ left: 40, right: 40, bottom: 40, top: 20 }}
              mobileLayout='vertical'
              layout='vertical'
              xtickRotation={45}
              groupMode='stacked'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]  max-md:h-[300px]'>
            <p className='text-center font-bold mb-4'>Split by Min age</p>
            <NivoBar
              data={byMinAge}
              keys={['games']}
              indexBy='Min Age'
              colors={['#FF6969bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              labelTextColor='#fff'
              margin={{ left: 40, right: 40, bottom: 40, top: 20 }}
              mobileMargin={{ left: 40, right: 40, bottom: 40, top: 20 }}
              mobileLayout='vertical'
              layout='vertical'
              xtickRotation={45}
              groupMode='stacked'
            />
          </div>
        </div>
      </section>
      <section id='number-games-per-year' className='mt-10'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Games per release year
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoLine
            data={totalGamesPerYear}
            yFormat='.0f'
            xScale={{
              type: 'point',
            }}
            axisBottom={{
              legendOffset: -12,
              tickRotation: 45,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={['#C70039']}
            margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 20, bottom: 100, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='ratio-playing-time-and-rating' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Correlation between playing time and user rating
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            data={ratio}
            xScale={{ type: 'point', min: 2001 }}
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
              legend: 'Sponsored Frames',
              legendPosition: 'middle',
              legendOffset: -60,
            }}
            margin={{ top: 20, right: 20, bottom: 80, left: 70 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            legends={[
              {
                anchor: 'bottom',
                direction: 'column',
                translateX: 0,
                translateY: 80,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
            colors={['#C70039bf']}
          />
        </div>
      </section>
      <section id='top-designers' className='mt-10 '>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Top 20 designers who have designed the most games
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byDesigner}
            keys={['games']}
            indexBy='name'
            colors={['#FF6969bf']}
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
            groupMode='stacked'
          />
        </div>
      </section>
      <section id='top-categories' className='mt-10 '>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Top Games Category (more than 100 games released)
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byCategory}
            keys={['games']}
            indexBy='category'
            colors={['#FF6969bf']}
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
            groupMode='stacked'
          />
        </div>
      </section>
      <section id='tag-cloud' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Most used game name
        </h3>
        <div className='w-full h-auto flex-row py-4 max-lg:overflow-scroll text-center'>
          <TagCloud data={cloudTag}></TagCloud>
        </div>
      </section>

      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#5FB49C] font-bold'
          href='https://boardgamegeek.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          boardgamegeek.com
        </a>
      </p>
    </>
  );
};

export default Page63;
