import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoAfricanChoropleth from '@internal/components/Charts/Nivo/Choropleth/African';

import { infos } from './config';
import { mapData } from './utils/getParsedData';

const Page71 = () => {
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
          <NivoAfricanChoropleth
            data={mapData}
            colors={['#ffafb2', '#eb8f92', '#d56f72', '#bf4e53', '#a82a36']}
            valueFormat='.2s'
            domain={[0, 99]}
          />
        </div>
      </section>
      <section id='per-country' className='mt-10'>
        <div className='mb-[20px] flex h-[2000px] w-full justify-center max-md:h-[2000px] max-xl:h-[2000px]'>
          <NivoBar
            xAxis
            data={mapData}
            keys={['value']}
            indexBy='label'
            colors={['#CE5A67bf']}
            margin={{ left: 120, bottom: 40, top: 40, right: 10 }}
            mobileMargin={{ left: 80, bottom: 30, top: 30, right: 10 }}
            mobileLayout='horizontal'
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='black'
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#a82a36] font-bold'
          href='https://gender-data-hub-2-undesa.hub.arcgis.com/datasets/ea2d3dc06ca4496bad9dd3830dad7f7e/explore'
          rel='noopener noreferrer'
          target='_blank'
        >
          The gender data hub
        </a>
      </p>
    </>
  );
};

export default Page71;
