import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';

import { infos } from './config';
import { byCountry, top50, top50byHomicides } from './utils/getParsedData';

const Page31 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='top50' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-end'>
          Top 50 Dangerous Cities In The World {'  '}
          <span className='text-sm'>(homicide every 100k) </span>
        </h3>
        <div className='mb-[20px] flex h-[800px] w-full justify-center max-md:h-[700px] max-xl:h-[800px]'>
          <NivoBar
            data={top50}
            keys={Object.keys(top50[0]).slice(1)}
            indexBy='city'
            colors={['#73A9AD']}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 150, top: 50 }}
            mobileMargin={{ left: 100, bottom: 150, top: 50 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[
              {
                dataFrom: 'keys',
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: -20,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                symbolSize: 20,
              },
            ]}
            xtickRotation={90}
          />
        </div>
      </section>
      <section id='by-number-of-homicides' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-end'>
          Top 50 Dangerous Cities In The World {'  '}
          <span className='text-sm'>(by number of homicides) </span>
        </h3>
        <div className='mb-[20px] flex h-[800px] w-full justify-center max-md:h-[700px] max-xl:h-[800px]'>
          <NivoBar
            data={top50byHomicides}
            keys={Object.keys(top50byHomicides[0]).slice(1)}
            indexBy='city'
            colors={['#73A9AD']}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 150, top: 50 }}
            mobileMargin={{ left: 100, bottom: 150, top: 50 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[
              {
                dataFrom: 'keys',
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: -20,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                symbolSize: 20,
              },
            ]}
            xtickRotation={90}
          />
        </div>
      </section>
      <section id='by-country' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Statistics by country
        </h3>
        <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>By number of cities</p>
            <NivoPie
              showTotal
              data={byCountry.numberOfCities}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#73A9AD',
                '#B3C890',
                '#99A98F',
                '#D14D72',
                '#FFABAB',
                '#D0BFFF',
                '#86A789',
                '#B2C8BA',
                '#FEA1A1',
              ]}
              arcLabelsTextColor='black'
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
            <p className='text-center font-bold mb-4'>By total homicidies</p>
            <NivoPie
              showTotal
              data={byCountry.byNumberOfHomicides}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#73A9AD',
                '#B3C890',
                '#99A98F',
                '#D14D72',
                '#FFABAB',
                '#D0BFFF',
                '#86A789',
                '#B2C8BA',
                '#FEA1A1',
              ]}
              arcLabelsTextColor='black'
            />
          </div>
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 01/2024 and taken from{' '}
        <a
          className='text-[#73A9AD] font-bold'
          href='https://www.worldatlas.com/cities/the-most-dangerous-cities-in-the-world.html'
          rel='noopener noreferrer'
          target='_blank'
        >
          Worldatlas
        </a>
      </p>
    </>
  );
};

export default Page31;
