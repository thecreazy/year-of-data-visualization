import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoItalyChoropleth from '@internal/components/Charts/Nivo/Choropleth/ItalianChrorepleth';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import {
  byCategory,
  byMesaure,
  total,
  totalByJudicialOffice,
  totalByProcedureType,
  totalByRegion,
} from './utils/getFormattedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page42 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 text-center font-mono text-5xl font-bold max-md:text-4xl'>
          {infos.title}
        </h1>
        <h3 className='max-md:text-md py-2 text-center font-mono text-xl font-bold'>
          {infos.description}
        </h3>
      </section>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>
            Total number of assets seized
          </p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#bc4749] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='total-by-region' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          Assets seized splitted by region
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center max-md:h-[600px]'>
          <NivoItalyChoropleth
            data={totalByRegion}
            colors={[
              '#081c15',
              '#1b4332',
              '#2d6a4f',
              '#40916c',
              '#52b788',
              '#74c69d',
              '#95d5b2',
            ]}
            domain={[0, 3500]}
          />
        </div>
      </section>
      <section id='split-type-office' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Procedure Type</p>
            <NivoPie
              data={totalByProcedureType}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#081c15bf', '#52b788bf']}
              arcLabelsTextColor='white'
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Judical Office</p>
            <NivoPie
              data={totalByJudicialOffice}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#081c15bf',
                '#1b4332bf',
                '#2d6a4fbf',
                '#40916cbf',
                '#52b788bf',
                '#74c69dbf',
                '#95d5b2bf',
              ]}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
        </div>
      </section>
      <section id='total-by-category' className='mt-10 pt-20'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Total Assets per category
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byCategory}
            keys={['assets']}
            indexBy='category'
            colors={['#52b788bf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 150 }}
            mobileMargin={{ left: 40, bottom: 150, top: 20 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={45}
          />
        </div>
      </section>
      <section id='total-by-mesaure' className='mt-10 pt-20'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Total Assets by legal provision
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={byMesaure}
            keys={['assets']}
            indexBy='mesaure'
            colors={['#52b788bf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 150 }}
            mobileMargin={{ left: 40, bottom: 150, top: 20 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={90}
          />
        </div>
      </section>

      <p className='pt-[30px] text-center text-xs '>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='font-bold text-[#52b788]'
          href='https://openregio.anbsc.it/statistiche/visualizza/beni_gestione/immobili'
          rel='noopener noreferrer'
          target='_blank'
        >
          openregio
        </a>
      </p>
    </>
  );
};

export default Page42;
