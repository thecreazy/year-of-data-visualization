import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoItalyChoropleth from '@internal/components/Charts/Nivo/Choropleth/ItalianChrorepleth';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import {
  citizenByRegion,
  mapExtraUE,
  mapUE,
  total,
  totalByCitizenship,
  totalByRegion,
  totalBySchoolGrade,
} from './utils/getFormattedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page65 = () => {
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
            Total students in Italy
          </p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#EF3E36] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split-grade-citizen' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By school grade</p>
            <NivoPie
              data={totalBySchoolGrade}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#EF3E36bf', '#17BEBBbf', '#F4E409bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='black'
              valueFormat='>.5s'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>By citizenship</p>
            <NivoPie
              data={totalByCitizenship}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#EF3E36bf', '#17BEBBbf', '#F4E409bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='black'
              valueFormat='>.5s'
            />
          </div>
        </div>
      </section>
      <section id='total-by-region' className='mt-10 pt-10'>
        <h4 className='mb-16 text-center font-mono text-2xl font-bold'>
          Students by Italian region
        </h4>
        <div className='mb-[20px] flex h-[400px] w-full justify-center max-md:h-[600px]'>
          <NivoItalyChoropleth
            data={totalByRegion}
            colors={['#ffbebe', '#f89894', '#eb7168', '#db493b', '#c51107']}
            domain={[60000, 900000]}
            legendItemSize={110}
            valueFormat='>.5s'
          />
        </div>
      </section>
      <section id='total-by-region-citizen' className='mt-10 '>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Regional analysis by citizenship
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={citizenByRegion}
            keys={Object.keys(citizenByRegion[0]).slice(1)}
            indexBy='region'
            colors={['#EF3E36bf', '#17BEBBbf', '#F4E409bf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            margin={{ left: 60, bottom: 150 }}
            mobileMargin={{ left: 60, bottom: 150, top: 20 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={45}
            enableLabel={false}
            legend={[
              {
                anchor: 'bottom',
                direction: 'row',
                translateY: 100,
                itemWidth: 100,
                itemHeight: 20,
                itemTextColor: 'black',
                symbolSize: 12,
                symbolShape: 'square',
                gridYValues: 2,
              },
            ]}
            yFormat='>.5s'
          />
        </div>
      </section>
      <section id='ue-extraue-maps' className='mt-10'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>UE Students</p>
            <NivoItalyChoropleth
              data={mapUE}
              colors={['#bdfffe', '#99e8e7', '#75d1cf', '#4bbbb9', '#00a5a2']}
              domain={[0, 20000]}
              legendItemSize={80}
              valueFormat='>.2s'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full max-md:pt-20 h-[400px]'>
            <p className='text-center font-bold mb-4'>Extra UE Students</p>
            <NivoItalyChoropleth
              data={mapExtraUE}
              colors={['#fffbc2', '#f2ec9b', '#e5dc73', '#d8cd49', '#cbbd00']}
              domain={[0, 100000]}
              legendItemSize={80}
              valueFormat='>.2s'
            />
          </div>
        </div>
      </section>

      <p className='pt-[30px] text-center text-xs pt-4'>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='font-bold text-[#17BEBB]'
          href='https://dati.istruzione.it/opendata/opendata/catalog/ALUITASTRACITSTA'
          rel='noopener noreferrer'
          target='_blank'
        >
          dati.istruzione.it
        </a>
      </p>
    </>
  );
};

export default Page65;
