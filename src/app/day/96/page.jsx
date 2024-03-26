import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';

import { infos } from './config';
import {
  top20Beneficiaries,
  top20Categories,
  total,
  totalByYear,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page96 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title text-center'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg text-center'>
          {infos.description}
        </p>
      </section>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>Total spent in 2023</p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#632c8c] justify-center'
            size={80}
            mobileSize={35}
          />
        </div>
      </div>
      <section id='by-category' className='mt-2 pt-10'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[600px] max-md:h-[600px]'>
            <p className='text-center font-bold mb-4 mt-20'>
              Top 20 spent categories
            </p>
            <NivoBar
              data={top20Categories}
              keys={['amount']}
              indexBy='category'
              colors={['#632c8cbf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              labelTextColor='#fff'
              margin={{ left: 40, top: 40, bottom: 250, right: 40 }}
              mobileMargin={{ left: 40, top: 40, bottom: 250, right: 20 }}
              mobileLayout='vertical'
              layout='vertical'
              xtickRotation={45}
              yFormat='.3s'
            />
          </div>
        </div>
      </section>
      <section id='by-beneficiaries' className='mt-2 pt-10'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[600px] max-md:h-[600px]'>
            <p className='text-center font-bold mb-4 mt-20'>
              Top 20 Beneficiaries
            </p>
            <NivoBar
              data={top20Beneficiaries}
              keys={['amount']}
              indexBy='beneficiary'
              colors={['#632c8cbf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              labelTextColor='#fff'
              margin={{ left: 40, top: 40, bottom: 250, right: 40 }}
              mobileMargin={{ left: 40, top: 40, bottom: 250, right: 20 }}
              mobileLayout='vertical'
              layout='vertical'
              xtickRotation={45}
              yFormat='.3s'
            />
          </div>
        </div>
      </section>
      <section id='by-beneficiaries' className='mt-2 pt-10 mb-10 pb-10'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-full h-[600px] max-md:h-[400px]'>
            <p className='text-center font-bold mb-4 mt-20'>
              Last 6 year spent budget
            </p>
            <NivoLine
              data={totalByYear}
              xFormat='.3s'
              yFormat='.3s'
              xScale={{
                type: 'point',
              }}
              axisBottom={{
                legendOffset: -12,
                tickRotation: 0,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: -40,
                legendPosition: 'middle',
                format: '.3s',
              }}
              colors={['#632c8c']}
              margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
              mobileMargin={{ top: 20, right: 20, bottom: 100, left: 40 }}
              enablePoints={false}
            />
          </div>
        </div>
      </section>
      <p className='text-center text-xs pt-10'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#632c8c] font-bold'
          href='https://dati.toscana.it/dataset/dentro-il-bilancio-2023'
          rel='noopener noreferrer'
          target='_blank'
        >
          open.toscana.it
        </a>
      </p>
    </>
  );
};

export default Page96;
