import dynamic from 'next/dynamic';

import './page.css';

import Ball from '@internal/components/Ball';
import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoBump from '@internal/components/Charts/Nivo/Bump';
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
  bumpValuesSeason,
  bumpValuesPlayoff,
} = getBasketData(seasonData, playoffData);

const Sankey = dynamic(() => import('./components/Sankey'), { ssr: false });

const Page120 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold'>
          Moses Malone Statistics data
        </h1>
        <p className='py-2 font-mono text-lg'>
          Moses Malone played <span>19</span> seasons for <span>7</span> teams,
          including the Rockets and 76ers. He averaged <span>20.6</span> points
          and <span>12.2</span> rebounds in <span>1,329</span> regular-season
          games. He was selected to play in <span>12</span> All-Star games. He
          won <span>3</span> MVP awards, <span>1</span> Finals MVP award and{' '}
          <span>1</span> NBA championship. He was inducted into the Hall of Fame
          in <span>2001</span>.
        </p>
        <p className='py-2 font-mono text-lg font-bold'>
          <span>Awards:</span>
        </p>
        <ul className='list-disc py-2'>
          <li>NBA Champion (1983)</li>
          <li>3x MVP (1979, 1982, 1983)</li>
          <li>Finals MVP (1983)</li>
          <li>
            13x All-Star (1975, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985,
            1986, 1987, 1988, 1989)
          </li>
          <li>4x All-NBA 1st Team (1979, 1982, 1983, 1985)</li>
          <li>4x All-NBA 2nd Team (1980, 1981, 1984, 1987)</li>
          <li>All-Rookie 1st Team (1975)</li>
        </ul>
      </section>
      <section id='regular-season'>
        <h3 className='py-2 font-mono text-3xl'>Regular Season</h3>
        <h4 className='text-center font-mono text-xl'>STATISTICS</h4>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={49.1}
              max={100}
              percentage={49.1}
              colors={['#000000']}
              tracksColor='#CE1141'
            />
            <p className='text-center font-mono text-lg'>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={76.9}
              max={100}
              percentage={76.9}
              colors={['#000000']}
              tracksColor='#CE1141'
            />

            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={10.0}
              max={100}
              percentage={10.0}
              colors={['#000000']}
              tracksColor='#CE1141'
            />
            <p className='text-center font-mono text-lg'>3-Point Percentage</p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={27409}
              max={38995}
              percentage={((27409 / 38995) * 100).toFixed(1)}
              colors={['#000000']}
              tracksColor='#CE1141'
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
              colors={['#ff8200', '#00b2a9', '#CE1141']}
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
              colors={['#ff8200', '#00b2a9', '#CE1141']}
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
              data={47.9}
              max={100}
              percentage={47.9}
              colors={['#000000']}
              tracksColor='#CE1141'
            />
            <p className='text-center font-mono text-lg '>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={76.2}
              max={100}
              percentage={76.2}
              colors={['#000000']}
              tracksColor='#CE1141'
            />
            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={14.3}
              max={100}
              percentage={14.3}
              colors={['#000000']}
              tracksColor='#CE1141'
            />
            <p className='text-center font-mono text-lg max-md:basis-full'>
              3-Point Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={2077}
              max={8023}
              percentage={((2077 / 8023) * 100).toFixed(1)}
              colors={['#000000']}
              tracksColor='#CE1141'
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
              colors={['#ff8200', '#00b2a9', '#CE1141']}
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
              colors={['#ff8200', '#00b2a9', '#CE1141']}
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
          href='https://www.nba.com/stats/player/77449/career'
          rel='noopener noreferrer'
          target='_blank'
        >
          offical NBA stats
        </a>
      </p>
    </>
  );
};

export default Page120;
