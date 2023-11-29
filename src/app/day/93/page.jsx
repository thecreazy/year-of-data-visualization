import dynamic from 'next/dynamic';

import Ball from '@internal/components/Ball';
import Table from './components/Table';

import './page.css';
import seasonData from './data/season';
import playoffData from './data/playoff';
import { Flag } from './components/Flag';
import NivoPercentage from '@internal/components/Charts/Nivo/Percentage';
import NivoBar from '@internal/components/Charts/Nivo/Bar';

import { getData } from './utils/getData';
const { pointsSesonData, pointsPlayoffData } = getData(seasonData, playoffData);

const Radar = dynamic(() => import('./components/Radar'), { ssr: false });
const Sankey = dynamic(() => import('./components/Sankey'), { ssr: false });
const Bump = dynamic(() => import('./components/Bump'), { ssr: false });

const Page93 = () => {
  return (
    <>
      <div className='logo-background h-[50vw] w-[50vw]'>
        <Flag />
      </div>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold'>
          Allen Iverson Statistics data
        </h1>
        <p className='py-2 font-mono text-lg'>
          Allen Iverson played <span>14</span> seasons for <span>4</span> teams,
          including the 76ers and Nuggets. He averaged <span>26.7</span> points,{' '}
          <span>6.2</span> assists, <span>3.7</span> rebounds and{' '}
          <span>2.2</span> steals in <span>914</span> regular-season games. He
          was selected to play in <span>11</span> All-Star games. He won the
          Rookie of the Year award and <span>1</span> MVP award. He was inducted
          into the Hall of Fame in <span>2016</span>.
        </p>
        <p className='py-2 font-mono text-lg font-bold'>
          <span>Awards:</span>
        </p>
        <ul className='list-disc py-2'>
          <li>MVP (2001)</li>
          <li>Rookie Of The Year (1997)</li>
          <li>
            11x All-Star (2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
            2009, 2010)
          </li>
          <li>3x All-NBA 1st Team (1999, 2001, 2005)</li>
          <li>3x All-NBA 2nd Team (2000, 2002, 2003)</li>
          <li>All-NBA 3rd Team (2006)</li>
          <li>All-Rookie 1st Team (1997)</li>
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
              colors={['#ED174C']}
              tracksColor='#006BB6'
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
              colors={['#ED174C']}
              tracksColor='#006BB6'
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
              colors={['#ED174C']}
              tracksColor='#006BB6'
            />
            <p className='text-center font-mono text-lg'>3-Point Percentage</p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={27331}
              max={38995}
              percentage={((27331 / 38995) * 100).toFixed(1)}
              colors={['#ED174C']}
              tracksColor='#006BB6'
            />
            <p className='text-center font-mono text-lg'>Points scored</p>
          </div>
        </div>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-radar basis-1/2 max-md:basis-full'>
            <p className='text-center font-mono text-lg'>Main stats per year</p>
            <Radar data={seasonData} />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full '>
            <p className='text-center font-mono text-lg'>Points per year</p>
            <NivoBar
              data={pointsSesonData}
              keys={['Points']}
              margin={{ top: 30, bottom: 50, left: 100 }}
              mobileMargin={{ top: 30, bottom: 50, left: 30 }}
              colors={['#ED174C']}
              labelTextColor='white'
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
              data={47.6}
              max={100}
              percentage={47.6}
              colors={['#ED174C']}
              tracksColor='#006BB6'
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
              colors={['#ED174C']}
              tracksColor='#006BB6'
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
              colors={['#ED174C']}
              tracksColor='#006BB6'
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
              colors={['#ED174C']}
              tracksColor='#006BB6'
            />
            <p className='text-center font-mono text-lg'>Points scored</p>
          </div>
        </div>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-radar basis-1/2 max-md:basis-full'>
            <p className='text-center font-mono text-lg'>Main stats per year</p>
            <Radar data={playoffData} />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full'>
            <p className='text-center font-mono text-lg'>Points per year</p>
            <NivoBar
              data={pointsPlayoffData}
              keys={['Points']}
              margin={{ top: 30, bottom: 50, left: 100 }}
              mobileMargin={{ top: 30, bottom: 50, left: 30 }}
              colors={['#ED174C']}
              labelTextColor='white'
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
          className='text-[#ed174c]'
          href='https://www.nba.com/stats/player/947/career'
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
