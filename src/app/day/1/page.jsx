import dynamic from 'next/dynamic';

import Ball from '@internal/components/Ball';
import Table from './components/Table';

import './page.css';
import seasonData from './data/season';
import playoffData from './data/playoff';

const Percentage = dynamic(() => import('./components/Percentage'), {
  ssr: false,
});
const Radar = dynamic(() => import('./components/Radar'), { ssr: false });
const Points = dynamic(() => import('./components/Points'), { ssr: false });
const Sankey = dynamic(() => import('./components/Sankey'), { ssr: false });

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
          <snap>1</snap> MVP award, <span>2</span> Finals MVP awards and{' '}
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
            <Percentage data={44.7} max={100} percentage={44.7} />
            <p className='text-center font-mono text-lg'>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <Percentage data={83.7} max={100} percentage={83.7} />

            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <Percentage data={32.9} max={100} percentage={32.9} />
            <p className='text-center font-mono text-lg'>3-Point Percentage</p>
          </div>
          <div className='stats-percentage basis-1/4  max-md:basis-full max-md:pb-10'>
            <Percentage
              data={33643}
              max={38995}
              percentage={((33643 / 38995) * 100).toFixed(1)}
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
            <Points data={seasonData} />
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
            <Percentage data={44.8} max={100} percentage={44.8} />
            <p className='text-center font-mono text-lg '>
              Field Goal Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <Percentage data={81.6} max={100} percentage={81.6} />
            <p className='text-center font-mono text-lg'>
              Free Throw Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <Percentage data={33.1} max={100} percentage={33.1} />
            <p className='text-center font-mono text-lg max-md:basis-full'>
              3-Point Percentage
            </p>
          </div>
          <div className='stats-percentage basis-1/4 max-md:basis-full max-md:pb-10'>
            <Percentage
              data={5640}
              max={8023}
              percentage={((5640 / 8023) * 100).toFixed(1)}
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
            <Points data={playoffData} />
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
    </>
  );
};

export default Page1;
