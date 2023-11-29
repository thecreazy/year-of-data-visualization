import dynamic from 'next/dynamic';

import './page.css';

import Ball from '@internal/components/Ball';
import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPercentage from '@internal/components/Charts/Nivo/Percentage';

import Table from './components/Table';
import playoffData from './data/playoff';
import seasonData from './data/season';
import { getData } from './utils/getData';

const { pointsSesonData, pointsPlayoffData } = getData(seasonData, playoffData);

const Radar = dynamic(() => import('./components/Radar'), { ssr: false });
const Sankey = dynamic(() => import('./components/Sankey'), { ssr: false });

const Page28 = () => {
  return (
    <>
      <div className='logo-background h-[50vw] w-[50vw]' />
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold'>
          Shaquille O&apos;Neal Statistics data
        </h1>
        <p className='py-2 font-mono text-lg'>
          Shaquille O&apos;Neal played <span>19</span> seasons for{' '}
          <span>6</span> teams, including the Lakers and Heat. He averaged{' '}
          <span>23.7</span> points, <span>10.9</span> rebounds, <span>2.5</span>
          assists and <span>2.3</span> blocks in <span>1,207</span>{' '}
          regular-season games. He was selected to play in <span>15</span>{' '}
          All-Star games. He won the Rookie of the Year award, <span>1</span>{' '}
          MVP award, <span>3</span> Finals MVP awards and <span>4</span> NBA
          championships. He was inducted into the Hall of Fame in{' '}
          <span>2016</span>.
        </p>
        <p className='py-2 font-mono text-lg font-bold'>
          <span>Awards:</span>
        </p>
        <ul className='list-disc py-2'>
          <li>4x NBA Champion (2000, 2001, 2002, 2006) </li>
          <li>MVP (2000)</li>
          <li>Rookie Of The Year (1993) </li>
          <li>3x Finals MVP (2000, 2001, 2002) </li>
          <li>
            15x All-Star (1993, 1994, 1995, 1996, 1997, 1998, 2000, 2001, 2002,
            2003, 2004, 2005, 2006, 2007, 2009){' '}
          </li>
          <li>
            8x All-NBA 1st Team (1998, 2000, 2001, 2002, 2003, 2004, 2005, 2006){' '}
          </li>
          <li>2x All-NBA 2nd Team (1995, 1999) </li>
          <li>4x All-NBA 3rd Team (1994, 1996, 1997, 2009) </li>
          <li>All-Rookie 1st Team (1993) </li>
        </ul>
      </section>
      <section id='regular-season'>
        <h3 className='py-2 font-mono text-3xl'>Regular Season</h3>
        <h4 className='text-center font-mono text-xl'>STATISTICS</h4>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={58.2}
              max={100}
              percentage={58.2}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={52.7}
              max={100}
              percentage={52.7}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={4.5}
              max={100}
              percentage={4.5}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>3-Point Percentage</p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={28596}
              max={38995}
              percentage={((28596 / 38995) * 100).toFixed(1)}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>
              Points scored <span>(record)</span>
            </p>
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
              data={56.3}
              max={100}
              percentage={56.3}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg '>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={50.4}
              max={100}
              percentage={50.4}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={0}
              max={100}
              percentage={0}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg max-md:basis-full'>
              3-Point Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={5250}
              max={8023}
              percentage={((5250 / 8023) * 100).toFixed(1)}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>
              Points scored <span>(record)</span>
            </p>
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
        <div className='flex h-[1800px] flex-row py-16 max-md:hidden'>
          <Sankey dt1={seasonData} dt2={playoffData} />
        </div>
      </section>
      <Ball />
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from the{' '}
        <a
          className='text-[#552583]'
          href='https://www.nba.com/stats/player/406'
          rel='noopener noreferrer'
          target='_blank'
        >
          offical NBA stats
        </a>
      </p>
    </>
  );
};

export default Page28;
