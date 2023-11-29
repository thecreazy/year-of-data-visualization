import dynamic from 'next/dynamic';

import './page.css';

import Ball from '@internal/components/Ball';
import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPercentage from '@internal/components/Charts/Nivo/Percentage';
import NivoRadar from '@internal/components/Charts/Nivo/Radar';
import { getBasketData } from '@internal/utils/getBasketData';

import Table from './components/Table';
import playoffData from './data/playoff';
import seasonData from './data/season';

const {
  pointsSesonData,
  pointsPlayoffData,
  radarSeasonData,
  radarPlayoffData,
} = getBasketData(seasonData, playoffData);
const Sankey = dynamic(() => import('./components/Sankey'), { ssr: false });
const Bump = dynamic(() => import('./components/Bump'), { ssr: false });

const Page56 = () => {
  return (
    <>
      <div className='logo-background h-[50vw] w-[50vw]' />
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold'>
          Stephen Curry Statistics data
        </h1>
        <p className='py-2 font-mono text-lg'>
          Stephen Curry has played <span>15</span> seasons for the Warriors. He
          has averaged <span>24.7</span> points, <span>6.5</span> assists and{' '}
          <span>4.7</span> rebounds in <span>895</span> regular-season games. He
          was selected to play in <span>9</span> All-Star games. He has won{' '}
          <span>2</span> MVP awards, <span>1</span> Finals MVP award and{' '}
          <span>4</span> NBA championships.
        </p>
        <p className='py-2 font-mono text-lg font-bold'>
          <span>Awards:</span>
        </p>
        <ul className='list-disc py-2'>
          <li>4x NBA Champion (2015, 2017, 2018, 2022)</li>
          <li>2x MVP (2015, 2016)</li>
          <li>Finals MVP (2022)</li>
          <li>
            9x All-Star (2014, 2015, 2016, 2017, 2018, 2019, 2021, 2022, 2023)
          </li>
          <li>4x All-NBA 1st Team (2015, 2016, 2019, 2021)</li>
          <li>4x All-NBA 2nd Team (2014, 2017, 2022, 2023)</li>
          <li>All-NBA 3rd Team (2018)</li>
          <li>All-Rookie 1st Team (2010)</li>
        </ul>
      </section>
      <section id='regular-season'>
        <h3 className='py-2 font-mono text-3xl'>Regular Season</h3>
        <h4 className='text-center font-mono text-xl'>STATISTICS</h4>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={47.5}
              max={100}
              percentage={47.5}
              colors={['#FFC72C']}
              tracksColor='#1D428A'
            />
            <p className='text-center font-mono text-lg'>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={90.9}
              max={100}
              percentage={90.9}
              colors={['#FFC72C']}
              tracksColor='#1D428A'
            />

            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={42.8}
              max={100}
              percentage={42.8}
              colors={['#FFC72C']}
              tracksColor='#1D428A'
            />
            <p className='text-center font-mono text-lg'>3-Point Percentage</p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={22107}
              max={38995}
              percentage={((22107 / 38995) * 100).toFixed(1)}
              colors={['#FFC72C']}
              tracksColor='#1D428A'
            />
            <p className='text-center font-mono text-lg'>Points scored</p>
          </div>
        </div>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-radar basis-1/2 max-md:basis-full'>
            <p className='text-center font-mono text-lg'>Main stats per year</p>
            <NivoRadar
              data={radarSeasonData}
              keys={Object.keys(radarSeasonData[0]).slice(1)}
              colors={['#9e71c8', '#1D428A', '#E56BAA']}
              indexBy='season'
              maxValue={100}
              theme={{
                text: {
                  fill: '#393939',
                  fontWeight: 600,
                },
                tooltip: {
                  container: { color: '#393939' },
                },
                grid: {
                  line: { stroke: '#949494' },
                },
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full '>
            <p className='text-center font-mono text-lg'>Points per year</p>
            <NivoBar
              data={pointsSesonData}
              keys={['Points']}
              margin={{ top: 30, bottom: 50, left: 100 }}
              mobileMargin={{ top: 30, bottom: 50, left: 30 }}
              colors={['#FFC72C']}
              labelTextColor={{
                from: 'color',
                modifiers: [['darker', 12]],
              }}
            />
          </div>
        </div>
        <div className='flex flex-row py-16 max-md:hidden max-md:h-fit max-md:flex-wrap  max-md:py-4'>
          <div className='stats-radar basis-full'>
            <p className='text-center font-mono text-lg'>Trend per year</p>
            <Bump data={seasonData} />
          </div>
        </div>
        <div className='h-data flex flex-row py-16 max-lg:overflow-scroll'>
          <Table data={seasonData} />
        </div>
      </section>
      <section id='playoff'>
        <h3 className='py-2 font-mono text-3xl'>Playoffs</h3>
        <h4 className='text-center font-mono text-xl'>STATISTICS</h4>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={45.3}
              max={100}
              percentage={45.3}
              colors={['#FFC72C']}
              tracksColor='#1D428A'
            />
            <p className='text-center font-mono text-lg '>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={88.9}
              max={100}
              percentage={88.9}
              colors={['#FFC72C']}
              tracksColor='#1D428A'
            />
            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={39.7}
              max={100}
              percentage={39.7}
              colors={['#FFC72C']}
              tracksColor='#1D428A'
            />
            <p className='text-center font-mono text-lg max-md:basis-full'>
              3-Point Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={3966}
              max={8023}
              percentage={((3966 / 8023) * 100).toFixed(1)}
              colors={['#FFC72C']}
              tracksColor='#1D428A'
            />
            <p className='text-center font-mono text-lg'>Points scored</p>
          </div>
        </div>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-radar basis-1/2 max-md:basis-full'>
            <p className='text-center font-mono text-lg'>Main stats per year</p>
            <NivoRadar
              data={radarPlayoffData}
              keys={Object.keys(radarPlayoffData[0]).slice(1)}
              colors={['#9e71c8', '#1D428A', '#E56BAA']}
              indexBy='season'
              maxValue={100}
              theme={{
                text: {
                  fill: '#393939',
                  fontWeight: 600,
                },
                tooltip: {
                  container: { color: '#393939' },
                },
                grid: {
                  line: { stroke: '#949494' },
                },
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full'>
            <p className='text-center font-mono text-lg'>Points per year</p>
            <NivoBar
              data={pointsPlayoffData}
              keys={['Points']}
              margin={{ top: 30, bottom: 50, left: 100 }}
              mobileMargin={{ top: 30, bottom: 50, left: 30 }}
              colors={['#FFC72C']}
              labelTextColor={{
                from: 'color',
                modifiers: [['darker', 12]],
              }}
            />
          </div>
        </div>
        <div className='flex flex-row py-16 max-md:hidden max-md:h-fit max-md:flex-wrap  max-md:py-4'>
          <div className='stats-radar basis-full'>
            <p className='text-center font-mono text-lg'>Trend per year</p>
            <Bump data={playoffData} />
          </div>
        </div>
        <div className='flex h-auto flex-row py-16 max-lg:overflow-scroll'>
          <Table data={playoffData} />
        </div>
      </section>
      <section id='score-recap'>
        <h3 className='py-2 font-mono text-3xl max-md:hidden'>Score Recap</h3>
        <div className='flex h-[1800px] flex-row py-16 max-md:hidden'>
          <Sankey dt1={seasonData} dt2={playoffData} />
        </div>
      </section>
      <Ball />
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from the{' '}
        <a
          className='text-[#1D428A]'
          href='https://www.nba.com/stats/player/201939'
          rel='noopener noreferrer'
          target='_blank'
        >
          offical NBA stats
        </a>
      </p>
    </>
  );
};

export default Page56;
