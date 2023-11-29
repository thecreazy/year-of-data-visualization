import dynamic from 'next/dynamic';

import Ball from '@internal/components/Ball';
import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPercentage from '@internal/components/Charts/Nivo/Percentage';

import Table from './components/Table';

import './page.css';
import seasonData from './data/season';
import playoffData from './data/playoff';

import { getData } from './utils/getData';

const Radar = dynamic(() => import('./components/Radar'), { ssr: false });
const Sankey = dynamic(() => import('./components/Sankey'), { ssr: false });

const { pointsSesonData, pointsPlayoffData } = getData(seasonData, playoffData);

const Page1 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold'>
          Kobe Bryant Statistics data
        </h1>
        <p className='py-2 font-mono text-lg'>
          Kobe Bryant played 20 seasons for the <span>Lakers</span>. He averaged{' '}
          <span>25.0</span> points, <span>5.2</span> rebounds and{' '}
          <span>4.7</span> assists in <span>1,346</span> regular-season games.
          He was selected to play in <span>18</span> All-Star games. He won{' '}
          <span>1</span> MVP award, <span>2</span> Finals MVP awards and{' '}
          <span>5</span> NBA championships. He was inducted into the Hall of
          Fame in <span>2020</span>.
        </p>
        <p className='py-2 font-mono text-lg font-bold'>
          <span>Awards:</span>
        </p>
        <ul className='list-disc py-2'>
          <li>5x NBA Champion (2000, 2001, 2002, 2009, 2010)</li>
          <li>MVP (2008)</li>
          <li>2x Finals MVP (2009, 2010)</li>
          <li>
            18x All-Star (1998, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
            2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016)
          </li>
          <li>
            11x All-NBA 1st Team (2002, 2003, 2004, 2006, 2007, 2008, 2009,
            2010, 2011, 2012, 2013)
          </li>
          <li>2x All-NBA 2nd Team (2000, 2001)</li>
          <li>2x All-NBA 3rd Team (1999, 2005)</li>
          <li>All-Rookie 2nd Team (1997)</li>
        </ul>
      </section>
      <section id='regular-season'>
        <h3 className='py-2 font-mono text-3xl'>Regular Season</h3>
        <h4 className='text-center font-mono text-xl'>STATISTICS</h4>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={44.7}
              max={100}
              percentage={44.7}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={83.7}
              max={100}
              percentage={83.7}
              colors={['#FDB927']}
              tracksColor='#552583'
            />

            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={32.9}
              max={100}
              percentage={32.9}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>3-Point Percentage</p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={33643}
              max={38995}
              percentage={((33643 / 38995) * 100).toFixed(1)}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>Points scored </p>
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
              colors={['#FDB927']}
              labelTextColor={{
                from: 'color',
                modifiers: [['darker', 12]],
              }}
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
              data={44.8}
              max={100}
              percentage={44.8}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg '>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={81.6}
              max={100}
              percentage={81.6}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={33.1}
              max={100}
              percentage={33.1}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg max-md:basis-full'>
              3-Point Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={5640}
              max={8023}
              percentage={((5640 / 8023) * 100).toFixed(1)}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>Points scored </p>
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
              colors={['#FDB927']}
              labelTextColor={{
                from: 'color',
                modifiers: [['darker', 12]],
              }}
            />
          </div>
        </div>
        <div className='flex h-auto flex-row py-16 max-lg:overflow-scroll'>
          <Table data={playoffData} />
        </div>
      </section>
      <section id='score-recap'>
        <h3 className='py-2 font-mono text-3xl max-md:hidden'>Score Recap</h3>
        <div className='flex h-[1000px] flex-row py-16 max-md:hidden'>
          <Sankey dt1={seasonData} dt2={playoffData} />
        </div>
      </section>
      <Ball />
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from the{' '}
        <a
          className='text-[#552583]'
          href='https://www.nba.com/stats/player/977/career'
          rel='noopener noreferrer'
          target='_blank'
        >
          offical NBA stats
        </a>
      </p>
    </>
  );
};

export default Page1;
