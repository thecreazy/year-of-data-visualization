import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import './utils/getParsedData';
import {
  byArrestAge,
  byCounty,
  byGender,
  byRace,
  executedByAge,
  executedByCounty,
  executedByRace,
  executedByYear,
} from './utils/getParsedData';

const Page26 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='inmated-on-death-row' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Stats of the actual inmates on death row
        </h3>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>
              Actual inmates by gender
            </p>
            <NivoPie
              data={byGender}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#dc2f02', '#faa307']}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Actual inmates by race</p>
            <NivoPie
              data={byRace}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#dc2f02', '#faa307', '#6a040f', '#370617', '#03071e']}
              arcLabelsTextColor='white'
            />
          </div>
        </div>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[500px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>
              Actual inmates by age of arrest
            </p>
            <NivoPie
              data={byArrestAge}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#dc2f02',
                '#faa307',
                '#6a040f',
                '#370617',
                '#03071e',
                '#9d0208',
              ]}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[500px]  max-md:h-[300px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>
              Actual inmates by county
            </p>
            <NivoBar
              data={byCounty}
              keys={Object.keys(byCounty[0]).slice(1)}
              indexBy='county'
              colors={['#9d0208']}
              labelTextColor='#fff'
              margin={{ left: 80, bottom: 50, top: 20 }}
              mobileMargin={{ left: 20, bottom: 50 }}
              mobileLayout='vertical'
              layout='vertical'
              legend={[]}
              xtickRotation={90}
            />
          </div>
        </div>
      </section>
      <section id='total-execution-per-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total execution per year
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoBar
            data={executedByYear}
            keys={Object.keys(executedByYear[0]).slice(1)}
            indexBy='year'
            colors={['#d00000']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 50, top: 20 }}
            mobileMargin={{ left: 40, bottom: 50 }}
            mobileLayout='vertical'
            layout='vertical'
            legend={[]}
          />
        </div>
      </section>
      <section id='total-execution-by-county' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total executions by county
        </h3>
        <div className='mb-[20px] flex h-[500px] w-full justify-center max-md:h-[700px] max-xl:h-[500px]'>
          <NivoBar
            data={executedByCounty}
            keys={Object.keys(executedByCounty[0]).slice(1)}
            indexBy='county'
            colors={['#e85d04']}
            labelTextColor='#fff'
            margin={{ left: 80, bottom: 50, top: 20 }}
            mobileMargin={{ left: 60, bottom: 50 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={90}
          />
        </div>
      </section>
      <section id='execution-stats' className='mt-10'>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Executed by age</p>
            <NivoPie
              data={executedByAge}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#dc2f02',
                '#faa307',
                '#6a040f',
                '#370617',
                '#03071e',
                '#9d0208',
              ]}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>Executed by Race</p>
            <NivoPie
              data={executedByRace}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#dc2f02', '#faa307', '#6a040f', '#370617', '#03071e']}
              arcLabelsTextColor='white'
            />
          </div>
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 01/2024 and taken from{' '}
        <a
          className='text-[#d00000] font-bold'
          href='https://www.tdcj.texas.gov/death_row/dr_offenders_on_dr.html'
          rel='noopener noreferrer'
          target='_blank'
        >
          Texas Department of Criminal Justice homepage
        </a>
      </p>
    </>
  );
};

export default Page26;
