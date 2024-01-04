import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoChoropleth from '@internal/components/Charts/Nivo/Choropleth';

import { infos } from './config';
import { mapData } from './utils/getParsedData';

const Page13 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='map' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Percentage per country
        </h3>
        <div className='mb-[20px] flex h-[400px] w-full justify-center'>
          <NivoChoropleth
            data={mapData}
            colors={[
              '#CCBAC9',
              '#B3A2B0',
              '#9A8C98',
              '#80747E',
              '#665D65',
            ].reverse()}
            valueFormat='.2s'
            domain={[0, 50]}
          />
        </div>
      </section>
      <section id='per-country' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Percentage per country
        </h3>
        <div className='mb-[20px] flex h-[2000px] w-full justify-center max-md:h-[2000px] max-xl:h-[2000px]'>
          <NivoBar
            xAxis
            data={mapData}
            keys={['value']}
            indexBy='label'
            colors={['#4a4e69']}
            labelTextColor='#fff'
            margin={{ left: 120, bottom: 40, top: 40, right: 10 }}
            mobileMargin={{ left: 80, bottom: 30, top: 30, right: 10 }}
            mobileLayout='horizontal'
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from{' '}
        <a
          className='text-[#4a4e69] font-bold'
          href='https://gender-data-hub-2-undesa.hub.arcgis.com/datasets/faec1302cdd64111a4d6ba3f438477c1/explore'
          rel='noopener noreferrer'
          target='_blank'
        >
          The gender data hub
        </a>
      </p>
    </>
  );
};

export default Page13;
