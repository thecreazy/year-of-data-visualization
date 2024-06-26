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

const Page112 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold'>
          Magic Johnson Statistics data
        </h1>
        <p className='py-2 font-mono text-lg'>
          Magic Johnson played <span>13</span> seasons for the Lakers. He
          averaged <span>19.5</span>
          points, <span>11.2</span> assists and <span>7.2</span> rebounds in{' '}
          <span>906</span> regular-season games. He was selected to play in{' '}
          <span>11</span> All-Star games. He won <span>3</span> MVP awards,{' '}
          <span>3</span>
          Finals MVP awards and <span>5</span> NBA championships. He was
          inducted into the Hall of Fame in <span>2002</span>.
        </p>
        <p className='py-2 font-mono text-lg font-bold'>
          <span>Awards:</span>
        </p>
        <ul className='list-disc py-2'>
          <li>5x NBA Champion (1980, 1982, 1985, 1987, 1988)</li>
          <li>3x MVP (1987, 1989, 1990)</li>
          <li>3x Finals MVP (1980, 1982, 1987)</li>
          <li>
            12x All-Star (1980, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
            1990, 1991, 1992)
          </li>
          <li>
            9x All-NBA 1st Team (1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990,
            1991)
          </li>
          <li>All-NBA 2nd Team (1982)</li>
          <li>All-Rookie 1st Team (1980)</li>
        </ul>
      </section>
      <section id='regular-season'>
        <h3 className='py-2 font-mono text-3xl'>Regular Season</h3>
        <h4 className='text-center font-mono text-xl'>STATISTICS</h4>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={52.0}
              max={100}
              percentage={52.0}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={84.8}
              max={100}
              percentage={84.8}
              colors={['#FDB927']}
              tracksColor='#552583'
            />

            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={30.3}
              max={100}
              percentage={30.3}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>3-Point Percentage</p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={17707}
              max={38995}
              percentage={((17707 / 38995) * 100).toFixed(1)}
              colors={['#FDB927']}
              tracksColor='#552583'
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
              colors={['#E56BAA', '#9e71c8', '#FDB927']}
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
              colors={['#FDB927']}
              labelTextColor='black'
            />
          </div>
        </div>
        <div className='flex flex-row py-16 max-md:hidden max-md:h-fit max-md:flex-wrap  max-md:py-4'>
          <div className='stats-radar basis-full'>
            <p className='text-center font-mono text-lg'>Trend per year</p>
            <NivoBump
              values={bumpValuesSeason}
              colors={['#E56BAA', '#9e71c8', '#FDB927']}
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
              data={50.6}
              max={100}
              percentage={50.6}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg '>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={83.8}
              max={100}
              percentage={83.8}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={24.1}
              max={100}
              percentage={24.1}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg max-md:basis-full'>
              3-Point Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={3701}
              max={8023}
              percentage={((3701 / 8023) * 100).toFixed(1)}
              colors={['#FDB927']}
              tracksColor='#552583'
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
              colors={['#E56BAA', '#9e71c8', '#FDB927']}
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
              colors={['#FDB927']}
              labelTextColor='black'
            />
          </div>
        </div>
        <div className='flex flex-row py-16 max-md:hidden max-md:h-fit max-md:flex-wrap  max-md:py-4'>
          <div className='stats-radar basis-full'>
            <p className='text-center font-mono text-lg'>Trend per year</p>
            <NivoBump
              values={bumpValuesPlayoff}
              colors={['#E56BAA', '#9e71c8', '#FDB927']}
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
          href='https://www.nba.com/stats/player/77142/career'
          rel='noopener noreferrer'
          target='_blank'
        >
          offical NBA stats
        </a>
      </p>
    </>
  );
};

export default Page112;
