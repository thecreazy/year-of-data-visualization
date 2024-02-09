import dynamic from 'next/dynamic';

import './page.css';

import ChartJSLine from '@internal/components/Charts/ChartJS/Line';
import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoSankey from '@internal/components/Charts/Nivo/Sankey';

import { infos } from './config';
import {
  clearIntarnationalData,
  clearSeasonData,
  internationalTotals,
  internationalValuesBar,
  internationalValuesLine,
  sankeyLinks,
  sankeyNodes,
  seasonTotals,
  seasonValuesBar,
  seasonValuesLine,
  tableColumns,
  tableColumnsOthers,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);
const ResponsiveTable = dynamic(
  () => import('../../../components/ResponsiveTable/ResponsiveTable'),
  { ssr: false }
);

const Page48 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
        <p className='py-2 font-mono text-lg font-bold middle-title'>
          <span>Awards:</span>
        </p>
        <ul className='list-disc py-2'>
          {infos.awards.map((type) => {
            return (
              <li key={type.title}>
                <span className='font-bold li-title'>{type.title}</span>
                <ul className='list-disc py-2 pl-4'>
                  {type.data.map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>
      <section id='seasons' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl text-center'>
          Domestic Leagues
        </h3>
        <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Goals</p>
            <AnimatedNumber
              number={seasonTotals.goals}
              className='font-mono w-full text-[#009739] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Mins</p>
            <AnimatedNumber
              number={seasonTotals.mins}
              className='font-mono w-full text-[#009739] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Assists</p>
            <AnimatedNumber
              number={seasonTotals.assists}
              className='font-mono w-full text-[#009739] justify-center'
            />
          </div>
        </div>
        <p className='font-mono text-lg'>Goals and Assists per year</p>
        <div className='mb-[20px] flex h-[650px] w-full justify-center max-md:h-[500px] max-xl:h-[400px]'>
          <NivoBar
            data={seasonValuesBar}
            keys={Object.keys(seasonValuesBar[0]).slice(1)}
            colors={['#009739bf', '#FEDD00bf']}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 12]],
            }}
            margin={{ left: 80, bottom: 40 }}
            mobileMargin={{ left: 65, bottom: 0 }}
            groupMode='stacked'
            mobileLayout='horizontal'
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
          />
        </div>
        <p className='font-mono text-lg'>Mins played per year</p>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[180px] max-xl:h-[400px]'>
          <ChartJSLine
            data={seasonValuesLine.data}
            labels={seasonValuesLine.labels}
            animation
          />
        </div>
        <p className='font-mono text-lg'>Stats</p>
        <ResponsiveTable
          columns={tableColumns}
          data={clearSeasonData}
          headerColor='#009739'
          bodyColor='#161A30'
          hoverColor='#e1e1e0'
        />
      </section>
      <section id='international-cups' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl text-center'>
          International Cups
        </h3>
        <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Goals</p>
            <AnimatedNumber
              number={internationalTotals.goals}
              className='font-mono w-full text-[#009739] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Mins</p>
            <AnimatedNumber
              number={internationalTotals.mins}
              className='font-mono w-full text-[#009739] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Assists</p>
            <AnimatedNumber
              number={internationalTotals.assists}
              className='font-mono w-full text-[#009739] justify-center'
            />
          </div>
        </div>
        <p className='font-mono text-lg'>Goals and Assists per year</p>
        <div className='mb-[20px] flex h-[650px] w-full justify-center max-md:h-[500px] max-xl:h-[400px]'>
          <NivoBar
            data={internationalValuesBar}
            keys={Object.keys(internationalValuesBar[0]).slice(1)}
            colors={['#009739bf', '#FEDD00bf']}
            margin={{ left: 80, bottom: 40 }}
            mobileMargin={{ left: 65, bottom: 0 }}
            groupMode='stacked'
            mobileLayout='horizontal'
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 12]],
            }}
          />
        </div>
        <p className='font-mono text-lg'>Mins played per year</p>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[180px] max-xl:h-[400px]'>
          <ChartJSLine
            data={internationalValuesLine.data}
            labels={internationalValuesLine.labels}
            animation
          />
        </div>
        <p className='font-mono text-lg'>Stats</p>
        <ResponsiveTable
          columns={tableColumnsOthers}
          data={clearIntarnationalData}
          headerColor='#009739'
          bodyColor='#161A30'
          hoverColor='#e1e1e0'
        />
      </section>
      <section id='score-recap' className='mt-[40px] mb-[20px]'>
        <h3 className='py-2 font-mono text-3xl max-md:hidden'>Goals Recap</h3>
        <div className='flex h-[2000px] flex-row py-16 max-md:hidden'>
          <NivoSankey
            links={sankeyLinks}
            nodes={sankeyNodes}
            colors={[
              ...new Array(13).fill('#FEDD00bf'),
              ...new Array(2).fill('#009739'),
              ...new Array(5).fill('#012169'),
              ...new Array(1).fill('#FEDD00bf'),
            ]}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#009739] font-bold'
          href='https://fbref.com/en/players/57feb553/intl_cup/Ronaldo-International-Cup-Stats'
          rel='noopener noreferrer'
          target='_blank'
        >
          FBREF.COM
        </a>
      </p>
      <div className='text-[#009739] hover:bg-[#e1e1e0]'></div>
    </>
  );
};

export default Page48;
