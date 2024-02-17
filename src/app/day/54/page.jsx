import dynamic from 'next/dynamic';

import './page.css';

import AntdTable from '@internal/components/Antd/Table';
import NivoHeatMapCanvas from '@internal/components/Charts/Nivo/HeatMapCanvas';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import {
  byExtraUrbanPublicTransport,
  byPrivateVeichles,
  byRailTransport,
  bySchoolBus,
  byUrbanPublicTransport,
  forDisableStudents,
  heatMapRegions,
  perProvince,
  total,
} from './utils/getFormattedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page54 = () => {
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
            Number Of School Buildings in italy
          </p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#527853] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split-private-rail-schoolbus' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/3 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Reachable by private cars
            </p>
            <NivoPie
              data={byPrivateVeichles}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#527853bf', '#DF826Cbf']}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/3 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Reachable by school bus
            </p>
            <NivoPie
              data={bySchoolBus}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#DF826Cbf', '#527853bf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/3 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Reachable by rail transport (500m)
            </p>
            <NivoPie
              data={byRailTransport}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#DF826Cbf', '#527853bf']}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
        </div>
      </section>
      <section id='split-urban-extraurban' className='mt-20'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Reachable by urban public transport
            </p>
            <NivoPie
              data={byUrbanPublicTransport}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#DF826Cbf', '#527853bf']}
              arcLabelsTextColor='white'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Reachable by extra-urban public transport
            </p>
            <NivoPie
              data={byExtraUrbanPublicTransport}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#527853bf', '#DF826Cbf']}
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              arcLabelsTextColor='white'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>
              Presence of transport service dedicated to disabled students
            </p>
            <NivoPie
              data={forDisableStudents}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={['#DF826Cbf', '#527853bf']}
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
      <section id='detil-regions' className='mt-20'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Details by region
        </h3>
        <div className='flex h-[800px] flex-row py-12'>
          <NivoHeatMapCanvas
            data={heatMapRegions}
            colors={{
              type: 'sequential',
              colors: ['#D2E3C8', '#4F6F52'],
            }}
            axisRight={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisTop={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendOffset: 46,
            }}
            axisTopMobileRotation={45}
            axisTopTabletRotation={45}
            margin={{ top: 120, right: 60, bottom: 80, left: 120 }}
            mobileMargin={{ top: 120, right: 20, bottom: 80, left: 120 }}
            legends={[
              {
                anchor: 'bottom',
                translateX: 0,
                translateY: 50,
                length: 200,
                thickness: 10,
                direction: 'row',
                tickPosition: 'after',
                tickSize: 3,
                tickSpacing: 4,
                tickOverlap: false,
                title: 'Buildings →',
                titleAlign: 'start',
                titleOffset: 4,
              },
            ]}
          />
        </div>
      </section>
      <section id='detail-provinces' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Details by province
        </h3>
        <div className='w-full h-auto flex-row py-4 max-lg:overflow-scroll text-center'>
          <AntdTable columns={perProvince.columns} data={perProvince.data} />
        </div>
      </section>

      <p className='pt-[30px] text-center text-xs '>
        All data are updated at 02/2024 and taken from{' '}
        <a
          className='font-bold text-[#527853]'
          href='https://dati.istruzione.it/opendata/opendata/catalog/EDICOLLEGAMENTISTA'
          rel='noopener noreferrer'
          target='_blank'
        >
          dati.istruzione.it
        </a>
      </p>
    </>
  );
};

export default Page54;
