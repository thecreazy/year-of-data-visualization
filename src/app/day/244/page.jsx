import './page.css';

import NivoBoxPlot from '@internal/components/Charts/Nivo/BoxPlot';
import NivoCalendar from '@internal/components/Charts/Nivo/Calendar';
import NivoHeatMapCanvas from '@internal/components/Charts/Nivo/HeatMapCanvas';

import {
  historical,
  lastFiveYearsData,
  lastYearData,
} from './utils/getFormattedData';

const Page244 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold max-md:text-4xl'>
          Swedish&apos;s Historical temperatures
        </h1>
        <h3 className='max-md:text-md py-2 text-center font-mono text-xl font-bold'>
          Historical Swedish data from 1979 to 2022 on max temperatures
          calculated from 3 different locations
        </h3>
      </section>
      <section id='last-year' className='py-4'>
        <h4 className=' text-center font-mono text-2xl font-bold'>2022</h4>
        <p className='text-center'>Avg max temperatures splitted by position</p>
        <div className='flex h-[600px] flex-row py-12  max-md:h-[400px]'>
          <NivoBoxPlot
            data={lastYearData}
            colors={['#6F595B', '#F05E7E', '#7FD1AE']}
          />
        </div>
      </section>
      <section id='last-5year' className='py-4'>
        <h4 className='text-center font-mono text-2xl font-bold'>
          Last 5 year
        </h4>
        <p className='text-center'>
          Avg monthly max temperatures splitted by position
        </p>
        <div className='flex h-[2000px] flex-row py-12'>
          <NivoHeatMapCanvas
            data={lastFiveYearsData}
            colors={{
              type: 'sequential',
              scheme: 'yellow_orange_red',
            }}
          />
        </div>
      </section>
      <section id='historical' className='py-4'>
        <h4 className='text-center font-mono text-2xl font-bold'>
          1979 to 2022
        </h4>
        <p className='text-center'>
          Data from{' '}
          <a
            className='text-bold text-[#cc0000]'
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.google.com/maps/place/840+32+Kl%C3%B6vsj%C3%B6,+Sweden/@63.008617,-3.907807,5z/data=!4m6!3m5!1s0x466f182af2b398a7:0xa03450954ed8e30!8m2!3d62.5282992!4d14.1944191!16s%2Fm%2F05zy82d?entry=ttu'
          >
            Klövsjö (802mt)
          </a>
        </p>
        <div className='flex h-[9000px] flex-row py-12 max-xl:h-[6000px]  max-md:h-[3500px]'>
          <NivoCalendar
            data={historical}
            from={historical[0].day}
            after={2000}
            to='2022-12-31'
            dayBorderColor='#fde9eb'
            colors={[
              '#2fa1d9',
              '#36b1d9',
              '#3bbdd9',
              '#3dc2d9',
              '#48d9bb',
              '#4ad960',
              '#4bd926',
              '#8bd926',
              '#bdd926',
              '#d8d927',
              '#d9b127',
              '#d99025',
              '#d98227',
            ]}
          />
        </div>
      </section>
      <p className='pt-[30px] text-center text-xs'>
        All data are updated at the end of the 2022 and taken from{' '}
        <a
          className='text-[#cc0000]'
          href='https://www.ecad.eu/dailydata/index.php'
          rel='noopener noreferrer'
          target='_blank'
        >
          ECAD
        </a>
      </p>
    </>
  );
};

export default Page244;
