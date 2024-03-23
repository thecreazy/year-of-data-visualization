import dynamic from 'next/dynamic';

import './page.css';

import ChartJSLine from '@internal/components/Charts/ChartJS/Line';
import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoSankey from '@internal/components/Charts/Nivo/Sankey';

import { infos } from './config';
import {
  clearDomesticData,
  clearIntarnationalData,
  clearSeasonData,
  domesticTotals,
  domesticValuesBar,
  domesticValuesLine,
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

const Page83 = () => {
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
              className='font-mono w-full text-[#006aa7] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Mins</p>
            <AnimatedNumber
              number={seasonTotals.mins}
              className='font-mono w-full text-[#006aa7] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Assists</p>
            <AnimatedNumber
              number={seasonTotals.assists}
              className='font-mono w-full text-[#006aa7] justify-center'
            />
          </div>
        </div>
        <p className='font-mono text-lg'>Goals and Assists per year</p>
        <div className='mb-[20px] flex h-[650px] w-full justify-center max-md:h-[500px] max-xl:h-[400px]'>
          <NivoBar
            data={seasonValuesBar}
            keys={Object.keys(seasonValuesBar[0]).slice(1)}
            colors={['#006aa7bf', '#d5ac05bf']}
            borderWidth={2}
            labelTextColor='#fff'
            margin={{ left: 80, bottom: 40 }}
            mobileMargin={{ left: 65, bottom: 0 }}
            groupMode='stacked'
            mobileLayout='horizontal'
          />
        </div>
        <p className='font-mono text-lg'>Mins played per year</p>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[180px] max-xl:h-[400px]'>
          <ChartJSLine
            data={seasonValuesLine.data}
            labels={seasonValuesLine.labels}
            animation
            noAspectRation
          />
        </div>
        <p className='font-mono text-lg'>Stats</p>
        <ResponsiveTable
          columns={tableColumns}
          data={clearSeasonData}
          headerColor='#d5ac05'
          bodyColor='#161A30'
          hoverColor='#e1e1e0'
        />
      </section>
      <section id='domestic-cups' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl text-center'>Domestic Cups</h3>
        <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Goals</p>
            <AnimatedNumber
              number={domesticTotals.goals}
              className='font-mono w-full text-[#006aa7] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Mins</p>
            <AnimatedNumber
              number={domesticTotals.mins}
              className='font-mono w-full text-[#006aa7] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Assists</p>
            <AnimatedNumber
              number={domesticTotals.assists}
              className='font-mono w-full text-[#006aa7] justify-center'
            />
          </div>
        </div>
        <p className='font-mono text-lg'>Goals and Assists per year</p>
        <div className='mb-[20px] flex h-[650px] w-full justify-center max-md:h-[500px] max-xl:h-[400px]'>
          <NivoBar
            data={domesticValuesBar}
            keys={Object.keys(domesticValuesBar[0]).slice(1)}
            colors={['#006aa7bf', '#d5ac05bf']}
            borderWidth={2}
            labelTextColor='#fff'
            margin={{ left: 80, bottom: 40 }}
            mobileMargin={{ left: 65, bottom: 0 }}
            groupMode='stacked'
            mobileLayout='horizontal'
          />
        </div>
        <p className='font-mono text-lg'>Mins played per year</p>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[180px] max-xl:h-[400px]'>
          <ChartJSLine
            data={domesticValuesLine.data}
            labels={domesticValuesLine.labels}
            animation
            noAspectRation
          />
        </div>
        <p className='font-mono text-lg'>Stats</p>
        <ResponsiveTable
          columns={tableColumns}
          data={clearDomesticData}
          headerColor='#d5ac05'
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
              className='font-mono w-full text-[#006aa7] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Mins</p>
            <AnimatedNumber
              number={internationalTotals.mins}
              className='font-mono w-full text-[#006aa7] justify-center'
            />
          </div>
          <div className='stats-radar basis-1/3 max-xl:basis-full'>
            <p className='text-center font-mono text-2xl'>Assists</p>
            <AnimatedNumber
              number={internationalTotals.assists}
              className='font-mono w-full text-[#006aa7] justify-center'
            />
          </div>
        </div>
        <p className='font-mono text-lg'>Goals and Assists per year</p>
        <div className='mb-[20px] flex h-[650px] w-full justify-center max-md:h-[500px] max-xl:h-[400px]'>
          <NivoBar
            data={internationalValuesBar}
            keys={Object.keys(internationalValuesBar[0]).slice(1)}
            colors={['#006aa7bf', '#d5ac05bf']}
            borderWidth={2}
            labelTextColor='#fff'
            margin={{ left: 80, bottom: 40 }}
            mobileMargin={{ left: 65, bottom: 0 }}
            groupMode='stacked'
            mobileLayout='horizontal'
          />
        </div>
        <p className='font-mono text-lg'>Mins played per year</p>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[180px] max-xl:h-[400px]'>
          <ChartJSLine
            data={internationalValuesLine.data}
            labels={internationalValuesLine.labels}
            animation
            noAspectRation
          />
        </div>
        <p className='font-mono text-lg'>Stats</p>
        <ResponsiveTable
          columns={tableColumnsOthers}
          data={clearIntarnationalData}
          headerColor='#d5ac05'
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
              ...new Array(24).fill('#FBBA00'),
              ...new Array(3).fill('#006aa7'),
              ...new Array(9).fill('#d5ac05'),
              ...new Array(1).fill('#004b87'),
            ]}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#d5ac05] font-bold'
          href='https://fbref.com/en/players/4cde5509/dom_cup/Zlatan-Ibrahimovic-Domestic-Cup-Stats'
          rel='noopener noreferrer'
          target='_blank'
        >
          FBREF.COM
        </a>
      </p>
      <div className='text-[#d5ac05] hover:bg-[#e1e1e0]'></div>
    </>
  );
};

export default Page83;
