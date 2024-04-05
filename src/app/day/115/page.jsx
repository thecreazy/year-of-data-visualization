import dynamic from 'next/dynamic';
import { format } from 'prettier';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';

import { infos } from './config';
import {
  byCountry,
  byIndustries,
  byValutation,
  byYear,
  ratio,
  totals,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Leaflet = dynamic(() => import('../../../components/Map/Leaflet'), {
  ssr: false,
});

const Page115 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>
            Number of Unicorn companies
          </p>
          <AnimatedNumber
            number={totals}
            className='font-mono w-full text-[#fe7f2d] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='by-value' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by Valuation in B$
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byValutation}
            keys={['unicorns']}
            indexBy='valutation'
            colors={['#619b8abf']}
            labelTextColor='#000'
            margin={{ left: 40, bottom: 100, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 100, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={45}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='by-country' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by Country
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byCountry}
            keys={['unicorns']}
            indexBy='region'
            colors={['#a1c181bf']}
            labelTextColor='#000'
            margin={{ left: 40, bottom: 100, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 100, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={45}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='by-industries' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Industries with more unicorns
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[700px]'>
          <NivoBar
            data={byIndustries}
            keys={['unicorns']}
            indexBy='industry'
            colors={['#FFC94Abf']}
            labelTextColor='#000'
            margin={{ left: 40, bottom: 100, top: 20, right: 20 }}
            mobileMargin={{ left: 40, bottom: 100, right: 20 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={45}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
      </section>
      <section id='anaysis-year-valuation' className='mt-20 pt-20'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Year/Valutation analysis
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            showCustomId='company'
            data={ratio}
            xScale={{ type: 'linear', min: 'auto' }}
            yScale={{ type: 'linear', min: 'auto' }}
            yFormat=',.2r'
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: 'Year',
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Valutation',
              legendPosition: 'middle',
              legendOffset: -40,
              format: ',.2r',
            }}
            margin={{ top: 20, right: 20, bottom: 70, left: 150 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 100 }}
            legends={[]}
            colors={['#fe7f2dbf']}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 04/2024 and taken from{' '}
        <a
          className='text-[#fe7f2d] font-bold'
          href='https://www.kaggle.com/datasets/shubhamoujlayan/all-the-unicorns-in-the-world'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle
        </a>
      </p>
    </>
  );
};

export default Page115;
