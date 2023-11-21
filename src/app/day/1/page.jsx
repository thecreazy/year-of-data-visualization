import dynamic from 'next/dynamic';
import Head from 'next/head';

import Ball from '@internal/components/Ball';

import './page.css';
import seasonData from './data/season';
import playoffData from './data/playoff';

const Percentage = dynamic(() => import('./components/Percentage'), {
  ssr: false,
});
const Radar = dynamic(() => import('./components/Radar'), { ssr: false });
const Points = dynamic(() => import('./components/Points'), { ssr: false });

const Page1 = () => {
  return (
    <>
      <h1 className='py-2 font-mono text-4xl font-bold'>
        Kobe Bryant Statistics data
      </h1>
      <p className='py-2 font-mono text-lg'>
        Kobe Bryant played 20 seasons for the <span>Lakers</span>. He averaged{' '}
        <span>25.0</span> points, <span>5.2</span> rebounds and <span>4.7</span>{' '}
        assists in <span>1,346</span> regular-season games. He was selected to
        play in <span>18</span> All-Star games. He won <snap>1</snap> MVP award,{' '}
        <span>2</span> Finals MVP awards and <span>5</span> NBA championships.
        He was inducted into the Hall of Fame in <span>2020</span>.
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
          11x All-NBA 1st Team (2002, 2003, 2004, 2006, 2007, 2008, 2009, 2010,
          2011, 2012, 2013)
        </li>
        <li>2x All-NBA 2nd Team (2000, 2001)</li>
        <li>2x All-NBA 3rd Team (1999, 2005)</li>
        <li>All-Rookie 2nd Team (1997)</li>
      </ul>
      <Ball />
      <h3 className='py-2 font-mono text-3xl'>Regular Season</h3>
      <h4 className='text-center font-mono text-xl'>STATISTICS</h4>
      <div class='flex flex-row py-16'>
        <div class='stats-percentage basis-1/4'>
          <Percentage data={44.7} max={100} />
          <p className='text-center font-mono text-lg'>Field Goal Percentage</p>
        </div>
        <div class='stats-percentage basis-1/4'>
          <Percentage data={83.7} max={100} />

          <p className='text-center font-mono text-lg'>Free Throw Percentage</p>
        </div>
        <div class='stats-percentage basis-1/4'>
          <Percentage data={32.9} max={100} />
          <p className='text-center font-mono text-lg'>3-Point Percentage</p>
        </div>
        <div class='stats-percentage basis-1/4'>
          <Percentage data={33643} max={38995} />
          <p className='text-center font-mono text-lg'>Points scored </p>
        </div>
      </div>
      <div class='flex flex-row py-16'>
        <div class='stats-radar basis-1/2'>
          <p className='text-center font-mono text-lg'>Main stats per year</p>
          <Radar data={seasonData} />
        </div>
        <div class='stats-radar basis-1/2'>
          <p className='text-center font-mono text-lg'>Points per year</p>
          <Points data={seasonData} />
        </div>
      </div>

      <h3 className='py-2 font-mono text-3xl'>Playoffs</h3>
      <h4 className='text-center font-mono text-xl'>STATISTICS</h4>
      <div class='flex flex-row py-16'>
        <div class='stats-percentage basis-1/4'>
          <Percentage data={44.8} max={100} />
          <p className='text-center font-mono text-lg'>Field Goal Percentage</p>
        </div>
        <div class='stats-percentage basis-1/4'>
          <Percentage data={81.6} max={100} />

          <p className='text-center font-mono text-lg'>Free Throw Percentage</p>
        </div>
        <div class='stats-percentage basis-1/4'>
          <Percentage data={33.1} max={100} />
          <p className='text-center font-mono text-lg'>3-Point Percentage</p>
        </div>
        <div class='stats-percentage basis-1/4'>
          <Percentage data={5640} max={6000} />
          <p className='text-center font-mono text-lg'>Points scored </p>
        </div>
      </div>
      <div class='flex flex-row py-16'>
        <div class='stats-radar basis-1/2'>
          <p className='text-center font-mono text-lg'>Main stats per year</p>
          <Radar data={playoffData} />
        </div>
        <div class='stats-radar basis-1/2'>
          <p className='text-center font-mono text-lg'>Points per year</p>
          <Points data={playoffData} />
        </div>
      </div>
    </>
  );
};

export default Page1;
