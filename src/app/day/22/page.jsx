import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import './utils/getParsedData';
import {
  averageTurnoverByIndusty,
  byIndustry,
  byNumberOfEmployee,
  byYearOfFoundation,
} from './utils/getParsedData';

const Page22 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='split-per-foundation-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by foundation year
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoBar
            data={byYearOfFoundation}
            keys={Object.keys(byYearOfFoundation[0]).slice(1)}
            indexBy='year'
            colors={['#05668d']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 50, top: 20 }}
            mobileMargin={{ left: 40, bottom: 50 }}
            mobileLayout='vertical'
            layout='vertical'
            legend={[]}
          />
        </div>
      </section>
      <section id='industry-dimension' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Dimension and industry
        </h3>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>
              Split by number of employee
            </p>
            <NivoPie
              data={byNumberOfEmployee}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#114b5f',
                '#05668d',
                '#427aa1',
                '#1a936f',
                '#679436',
                '#a5be00',
                '#88d498',
                '#f3e9d2',
                '#d5b9b2',
                '#a26769',
                '#6d2e46',
                '#895737',
              ]}
              arcLabelsTextColor='black'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'> Split by industry</p>
            <NivoPie
              data={byIndustry}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#114b5f',
                '#05668d',
                '#427aa1',
                '#1a936f',
                '#679436',
                '#a5be00',
                '#88d498',
                '#f3e9d2',
                '#d5b9b2',
                '#a26769',
                '#6d2e46',
                '#895737',
              ]}
              arcLabelsTextColor='black'
            />
          </div>
        </div>
      </section>
      <section id='average-turnover-per-industry' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total company turnover per industry{' '}
          <span className='text-sm'>(sum of avg in CZK) </span>
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoBar
            data={averageTurnoverByIndusty}
            keys={Object.keys(averageTurnoverByIndusty[0]).slice(1)}
            indexBy='industry'
            colors={['#679436']}
            labelTextColor='#fff'
            margin={{ left: 400, bottom: 50, top: 20 }}
            mobileMargin={{ left: 140, bottom: 50 }}
            mobileLayout='horizontal'
            layout='horizontal'
            legend={[]}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 01/2024 and taken from{' '}
        <a
          className='text-[#05668d] font-bold'
          href='https://data.europa.eu/data/datasets/https-kod-brno-cz-nkod-dataset-b1f08fc3c64a404e86aa360e100e7396_0-ttl?locale=en'
          rel='noopener noreferrer'
          target='_blank'
        >
          Czech National Open Data Portal
        </a>
      </p>
    </>
  );
};

export default Page22;
