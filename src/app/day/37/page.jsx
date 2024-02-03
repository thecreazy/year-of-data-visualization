import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoBolognaChoropleth from '@internal/components/Charts/Nivo/Choropleth/Bologna';
import NivoLine from '@internal/components/Charts/Nivo/Line';
import NivoStream from '@internal/components/Charts/Nivo/Stream';

import { infos } from './config';
import {
  lastYearZone,
  splitByZone,
  total2022,
  totalByYear,
  zones,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page37 = () => {
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
            Number of Immigrants in 2022
          </p>
          <AnimatedNumber
            number={total2022}
            className='font-mono w-full text-[#944E63] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='total-per-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total Immigrants per year
        </h3>
        <div className='mb-[20px] flex h-[550px] w-full justify-center max-md:h-[300px] max-xl:h-[500px]'>
          <NivoLine
            data={totalByYear}
            xScale={{
              type: 'point',
            }}
            axisBottom={{
              legendOffset: -12,
              tickRotation: 45,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: '.2s',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            xFormat='time:%Y-%m-%d'
            colors={['#944E63']}
            margin={{ top: 20, right: 40, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 40, bottom: 50, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='revenues-by-product' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by neighborhood
        </h3>
        <div className='mb-[20px] flex h-[570px] w-full justify-center max-md:h-[300px] max-xl:h-[400px]'>
          <NivoStream
            data={splitByZone}
            keys={zones}
            margin={{ top: 50, right: 10, bottom: 120, left: 70 }}
            mobileMargin={{ top: 10, right: 0, bottom: 50, left: 40 }}
            legend={[
              {
                anchor: 'bottom-left',
                direction: 'row',
                translateY: 80,
                itemWidth: 100,
                itemHeight: 20,
                itemTextColor: 'black',
                symbolSize: 12,
                symbolShape: 'circle',
                gridYValues: 2,
              },
            ]}
            indexBy='year'
            colors={[
              '#944E63',
              '#B47B84',
              '#B31212',
              '#CAA6A6',
              '#FFE7E7',
              '#FBFADA',
              '#ADBC9F',
              '#436850',
              '#12372A',
              '#294B29',
              '#50623A',
              '#789461',
              '#DBE7C9',
              '#FDF0D1',
              '#AC7D88',
              '#85586F',
              '#643843',
            ]}
            offsetType='diverging'
            axisBottomTickRotation='90'
          />
        </div>
      </section>
      <section id='last-year-by-region' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          2022 Data splitted by neighborhood
        </h4>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={lastYearZone}
            keys={['value']}
            indexBy='id'
            colors={['#944E63']}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 30 }}
            mobileMargin={{ left: 30, bottom: 80 }}
            mobileLayout='vertical'
            layout='vertical'
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#944E63] font-bold'
          href='https://opendata.comune.bologna.it/explore/dataset/iscritti-in-anagrafe-per-zona/information/?disjunctive.zone&sort=-anno&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJhcmVhc3BsaW5lIiwiZnVuYyI6IlFVQU5USUxFUyIsInlBeGlzIjoiaXNjcml0dGlfaW1taWdyYXRpX2VfaXNjcml0dGlfZF91ZmZpY2lvIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoicmFuZ2UtY3VzdG9tIiwic3Vic2V0cyI6NTB9XSwieEF4aXMiOiJhbm5vIiwibWF4cG9pbnRzIjpudWxsLCJzb3J0IjoiIiwic2VyaWVzQnJlYWtkb3duIjoiem9uZSIsInNlcmllc0JyZWFrZG93blRpbWVzY2FsZSI6IiIsInN0YWNrZWQiOiJub3JtYWwiLCJ0aW1lc2NhbGUiOiJ5ZWFyIiwiY29uZmlnIjp7ImRhdGFzZXQiOiJpc2NyaXR0aS1pbi1hbmFncmFmZS1wZXItem9uYSIsIm9wdGlvbnMiOnsiZGlzanVuY3RpdmUuem9uZSI6dHJ1ZSwic29ydCI6Ii1hbm5vIn19fV0sInRpbWVzY2FsZSI6IiIsImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWV9'
          rel='noopener noreferrer'
          target='_blank'
        >
          Opendata Comune Bologna
        </a>
      </p>
    </>
  );
};

export default Page37;
