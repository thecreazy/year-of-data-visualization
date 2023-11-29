import dynamic from 'next/dynamic';

import Ball from '@internal/components/Ball';
import Table from './components/Table';
import './page.css';

import seasonData from './data/season';
import playoffData from './data/playoff';
import NivoPercentage from '@internal/components/Charts/Nivo/Percentage';
import NivoBar from '@internal/components/Charts/Nivo/Bar';

import { getData } from './utils/getData';
const { pointsSesonData, pointsPlayoffData } = getData(seasonData, playoffData);

const Radar = dynamic(() => import('./components/Radar'), { ssr: false });
const Sankey = dynamic(() => import('./components/Sankey'), { ssr: false });

const Page11 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold'>
          LeBron James Statistics data
        </h1>
        <p className='py-2 font-mono text-lg'>
          LeBron James has played <span>21</span> seasons for the Cavaliers,
          Lakers and Heat. He has averaged <span>27.2</span> points,{' '}
          <span>7.5</span> rebounds and <span>7.3</span> assists in{' '}
          <span>1,434</span> regular-season games. He was selected to play in{' '}
          <span>19</span> All-Star games. He has won the Rookie of the Year
          award, <span>4</span> MVP awards, <span>4</span> Finals MVP awards and{' '}
          <span>4</span> NBA championships.
        </p>
        <p className='py-2 font-mono text-lg font-bold'>
          <span>Awards:</span>
        </p>
        <ul className='list-disc py-2'>
          <li>4x NBA Champion (2012, 2013, 2016, 2020)</li>
          <li>4x MVP (2009, 2010, 2012, 2013)</li>
          <li>Rookie Of The Year (2004)</li>
          <li>4x Finals MVP (2012, 2013, 2016, 2020)</li>
          <li>
            19x All-Star (2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
            2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023)
          </li>
          <li>
            13x All-NBA 1st Team (2006, 2008, 2009, 2010, 2011, 2012, 2013,
            2014, 2015, 2016, 2017, 2018, 2020)
          </li>
          <li>3x All-NBA 2nd Team (2005, 2007, 2021)</li>
          <li>3x All-NBA 3rd Team (2019, 2022, 2023)</li>
          <li>All-Rookie 1st Team (2004)</li>
        </ul>
      </section>
      <section id='regular-season'>
        <h3 className='py-2 font-mono text-3xl'>Regular Season</h3>
        <h4 className='text-center font-mono text-xl'>STATISTICS</h4>
        <div className='flex flex-row py-16 max-md:h-fit max-md:flex-wrap max-md:py-4'>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={50.5}
              max={100}
              percentage={50.5}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={73.5}
              max={100}
              percentage={73.5}
              colors={['#FDB927']}
              tracksColor='#552583'
            />

            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={34.5}
              max={100}
              percentage={34.5}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg'>3-Point Percentage</p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={38995}
              max={38995}
              percentage={((38995 / 38995) * 100).toFixed(1)}
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
              data={49.5}
              max={100}
              percentage={49.5}
              colors={['#FDB927']}
              tracksColor='#552583'
            />
            <p className='text-center font-mono text-lg '>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <NivoPercentage
              data={74.1}
              max={100}
              percentage={74.1}
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
              data={8023}
              max={8023}
              percentage={((8023 / 8023) * 100).toFixed(1)}
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
          href='https://www.nba.com/stats/player/2544'
          rel='noopener noreferrer'
          target='_blank'
        >
          offical NBA stats
        </a>
      </p>
    </>
  );
};

export default Page11;
