import dynamic from 'next/dynamic';

import './page.css';

import Ball from '@internal/components/Ball';
import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoBump from '@internal/components/Charts/Nivo/Bump';
import NivoPercentage from '@internal/components/Charts/Nivo/Percentage';
import NivoRadar from '@internal/components/Charts/Nivo/Radar';
import { getBasketData } from '@internal/utils/getBasketData';

import { Flag } from './components/Flag';
import Table from './components/Table';
import playoffData from './data/playoff';
import seasonData from './data/season';

const {
  pointsSesonData,
  pointsPlayoffData,
  radarSeasonData,
  radarPlayoffData,
  bumpValuesSeason,
  bumpValuesPlayoff,
} = getBasketData(seasonData, playoffData);

const Sankey = dynamic(() => import('./components/Sankey'), { ssr: false });

const Page93 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold'>
          Tim Duncan Statistics data
        </h1>
        <p className='py-2 font-mono text-lg'>
          Tim Duncan played <span>19</span> seasons for the Spurs. He averaged{' '}
          <span>19.0</span> points, <span>10.8</span> rebounds, <span>3.0</span>{' '}
          assists and <span>2.2</span> blocks in <span>1,392</span>{' '}
          regular-season games. He was selected to play in <span>15</span>{' '}
          All-Star games. He won the Rookie of the Year award, <span>2</span>{' '}
          MVP awards, <span>3</span> Finals MVP awards and <span>5</span> NBA
          championships. He was inducted into the Hall of Fame in{' '}
          <span>2020</span>.
        </p>
        <p className='py-2 font-mono text-lg font-bold'>
          <span>Awards:</span>
        </p>
        <ul className='list-disc py-2'>
          <li>5x NBA Champion (1999, 2003, 2005, 2007, 2014)</li>
          <li>2x MVP (2002, 2003)</li>
          <li>Rookie Of The Year (1998)</li>
          <li>3x Finals MVP (1999, 2003, 2005)</li>
          <li>
            15x All-Star (1998, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
            2008, 2009, 2010, 2011, 2013, 2015)
          </li>
          <li>
            10x All-NBA 1st Team (1998, 1999, 2000, 2001, 2002, 2003, 2004,
            2005, 2007, 2013)
          </li>
          <li>3x All-NBA 2nd Team (2006, 2008, 2009)</li>
          <li>2x All-NBA 3rd Team (2010, 2015)</li>
          <li>All-Rookie 1st Team (1998)</li>
        </ul>
      </section>
      <section id='regular-season'>
        <h3 className='py-2 font-mono text-3xl'>Regular Season</h3>
        <h4 className='text-center font-mono text-xl'>STATISTICS</h4>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={49.9}
              max={100}
              percentage={49.9}
              colors={['#000000']}
              tracksColor='#ef426f'
            />
            <p className='text-center font-mono text-lg'>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={88.6}
              max={100}
              percentage={88.6}
              colors={['#000000']}
              tracksColor='#ef426f'
            />

            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={38.6}
              max={100}
              percentage={38.6}
              colors={['#000000']}
              tracksColor='#ef426f'
            />
            <p className='text-center font-mono text-lg'>3-Point Percentage</p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={27331}
              max={38995}
              percentage={((27331 / 38995) * 100).toFixed(1)}
              colors={['#000000']}
              tracksColor='#ef426f'
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
              colors={['#ff8200', '#00b2a9', '#ef426f']}
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
              colors={['#ff8200']}
              labelTextColor='white'
            />
          </div>
        </div>
        <div className='flex flex-row py-16 max-md:hidden max-md:h-fit max-md:flex-wrap  max-md:py-4'>
          <div className='stats-radar basis-full'>
            <p className='text-center font-mono text-lg'>Trend per year</p>
            <NivoBump
              values={bumpValuesSeason}
              colors={['#ff8200', '#00b2a9', '#ef426f']}
              lineWidth={3}
              activeLineWidth={6}
              inactiveLineWidth={3}
              pointSize={10}
              activePointSize={16}
              inactivePointSize={0}
              pointColor={{ theme: 'background' }}
              theme={{
                grid: {
                  line: { stroke: '#ababab' },
                },
              }}
              pointBorderWidth={3}
              activePointBorderWidth={3}
              axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -36,
              }}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'ranking',
                legendPosition: 'middle',
                legendOffset: -40,
              }}
              margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
              axisRight={null}
            />
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
              data={47.6}
              max={100}
              percentage={47.6}
              colors={['#000000']}
              tracksColor='#ef426f'
            />
            <p className='text-center font-mono text-lg '>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={86.9}
              max={100}
              percentage={86.9}
              colors={['#000000']}
              tracksColor='#ef426f'
            />
            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={35.5}
              max={100}
              percentage={35.5}
              colors={['#000000']}
              tracksColor='#ef426f'
            />
            <p className='text-center font-mono text-lg max-md:basis-full'>
              3-Point Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={4878}
              max={8023}
              percentage={((4878 / 8023) * 100).toFixed(1)}
              colors={['#000000']}
              tracksColor='#ef426f'
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
              colors={['#ff8200', '#00b2a9', '#ef426f']}
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
              colors={['#ff8200']}
              labelTextColor='white'
            />
          </div>
        </div>
        <div className='flex flex-row py-16 max-md:hidden max-md:h-fit max-md:flex-wrap  max-md:py-4'>
          <div className='stats-radar basis-full'>
            <p className='text-center font-mono text-lg'>Trend per year</p>
            <NivoBump
              values={bumpValuesPlayoff}
              colors={['#ff8200', '#00b2a9', '#ef426f']}
              lineWidth={3}
              activeLineWidth={6}
              inactiveLineWidth={3}
              pointSize={10}
              activePointSize={16}
              inactivePointSize={0}
              pointColor={{ theme: 'background' }}
              theme={{
                grid: {
                  line: { stroke: '#ababab' },
                },
              }}
              pointBorderWidth={3}
              activePointBorderWidth={3}
              axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -36,
              }}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'ranking',
                legendPosition: 'middle',
                legendOffset: -40,
              }}
              margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
              axisRight={null}
            />
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
        All data are updated at 04/2024 and taken from{' '}
        <a
          className='text-[#ff8200]'
          href='https://www.nba.com/stats/player/1495/career'
          rel='noopener noreferrer'
          target='_blank'
        >
          offical NBA stats
        </a>
      </p>
    </>
  );
};

export default Page93;
