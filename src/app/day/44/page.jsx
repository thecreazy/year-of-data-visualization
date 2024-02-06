import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import NivoStream from '@internal/components/Charts/Nivo/Stream';
import ReactChartsLine from '@internal/components/Charts/ReactCharts/Line';

import { infos } from './config';
import {
  byAge,
  byCitizenship,
  byGender,
  lastYearZone,
  splitByZone,
  totalByGender,
  totalByYear,
  zones,
} from './utils/getParsedData';

const Page44 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='total-per-year' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total Population per year
        </h3>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <ReactChartsLine
            data={totalByYear}
            initialHeight={400}
            colors={['#e29578']}
            width='100%'
          />
        </div>
      </section>
      <section id='last-year-by-region' className='mt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          Total Population split by gender
        </h4>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={totalByGender}
            keys={['F', 'M']}
            indexBy='year'
            labelTextColor='black'
            margin={{ left: 50, bottom: 30, top: 50 }}
            mobileMargin={{ left: 50, bottom: 80 }}
            mobileLayout='vertical'
            layout='vertical'
            groupMode='stacked'
            colors={['#e29578bf', '#006d77bf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            enableLabel={false}
            legend={[
              {
                dataFrom: 'keys',
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: -50,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                symbolSize: 20,
              },
            ]}
          />
        </div>
      </section>
      <section id='revenues-by-product' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total Population split by neighborhood
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
      <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
        2022 Population detail
      </h4>
      <section id='last-year-by-region' className='mt-10'>
        <h5 className='mb-16 text-center font-mono text-xl font-bold'>
          By Neighborhood
        </h5>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={lastYearZone}
            keys={['residents']}
            indexBy='id'
            colors={['#e29578bf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 90 }}
            mobileMargin={{ left: 40, bottom: 80 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={45}
          />
        </div>
      </section>
      <section id='split-college-country' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Gender</p>
            <NivoPie
              data={byGender}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#e29578bf', '#006d77bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By Citizenship</p>
            <NivoPie
              data={byCitizenship}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#e29578bf', '#006d77bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
        </div>
      </section>
      <section id='total-by-draft-year' className='mt-10'>
        <h5 className='py-10 font-mono text-3xl max-md:text-xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          By age
        </h5>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[1000px] max-xl:h-[600px]'>
          <NivoBar
            data={byAge}
            keys={['residents']}
            indexBy='age'
            colors={['#006d77bf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 30 }}
            mobileMargin={{ left: 40, bottom: 80 }}
            mobileLayout='horizontal'
            layout='vertical'
            xtickRotation={90}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='text-[#944E63] font-bold'
          href='https://opendata.comune.bologna.it/explore/dataset/popolazione-residente-per-stato-civile-eta-sessocittadinanza-quartiere-e-zona-se/export/?disjunctive.eta_grandi&disjunctive.eta_quinquennali&disjunctive.quartiere&disjunctive.zona&disjunctive.centro_storico_zone_periferiche&disjunctive.stato_civile&disjunctive.sesso&sort=-anno&where=anno+%3E+2001&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQ09VTlQiLCJ5QXhpcyI6InJlc2lkZW50aSIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6IiNGOEIzMzQifV0sInhBeGlzIjoiYW5ubyIsIm1heHBvaW50cyI6bnVsbCwidGltZXNjYWxlIjoieWVhciIsInNvcnQiOiIiLCJjb25maWciOnsiZGF0YXNldCI6InBvcG9sYXppb25lLXJlc2lkZW50ZS1wZXItc3RhdG8tY2l2aWxlLWV0YS1zZXNzb2NpdHRhZGluYW56YS1xdWFydGllcmUtZS16b25hLXNlIiwib3B0aW9ucyI6eyJkaXNqdW5jdGl2ZS5ldGFfZ3JhbmRpIjp0cnVlLCJkaXNqdW5jdGl2ZS5ldGFfcXVpbnF1ZW5uYWxpIjp0cnVlLCJkaXNqdW5jdGl2ZS5xdWFydGllcmUiOnRydWUsImRpc2p1bmN0aXZlLnpvbmEiOnRydWUsImRpc2p1bmN0aXZlLmNlbnRyb19zdG9yaWNvX3pvbmVfcGVyaWZlcmljaGUiOnRydWUsImRpc2p1bmN0aXZlLnN0YXRvX2NpdmlsZSI6dHJ1ZSwiZGlzanVuY3RpdmUuc2Vzc28iOnRydWUsInNvcnQiOiItYW5ubyIsIndoZXJlIjoiYW5ubyA%2BIDIwMDEifX19XSwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D'
          rel='noopener noreferrer'
          target='_blank'
        >
          Opendata Comune Bologna
        </a>
      </p>
    </>
  );
};

export default Page44;
