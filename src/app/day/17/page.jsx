import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import MusicBars from '@internal/components/MusicBars/MusicBars';

import { infos } from './config';
import {
  byArtistNumber,
  byReleaseMonth,
  byReleaseYear,
  topSongs,
  weightedYearByStream,
} from './utils/getParsedData';

const Page17 = () => {
  return (
    <>
      <div className='top'>
        <section id='infos'>
          <h1 className='py-2 font-mono text-4xl font-bold page-title'>
            {infos.title}
          </h1>
          <p className='py-2 font-mono text-lg'>{infos.description}</p>
        </section>
        <section id='top-streams' className='mt-10'>
          <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
            Top 30 streamed songs in 2023
          </h3>
          <div className='mb-[20px] flex h-[800px] w-full justify-center max-md:h-[500px] max-xl:h-[800px]'>
            <NivoBar
              data={topSongs}
              keys={Object.keys(topSongs[0]).slice(1)}
              indexBy='name'
              colors={['#5e548e']}
              labelTextColor='#fff'
              margin={{ left: 120, bottom: 50, top: 20 }}
              mobileMargin={{ left: 120, bottom: 50 }}
              mobileLayout='horizontal'
              layout='horizontal'
              legend={[]}
            />
          </div>
        </section>
        <section id='by-year' className='mt-10'>
          <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
            Top streamed songs by year of release
          </h3>
          <div className='flex flex-row flex-wrap py-16 max-md:h-fit max-md:py-4 justify-center'>
            <div className='stats-radar basis-1/2 max-md:basis-full h-[700px] max-md:h-[500px]  max-md:mt-5 max-md:mb-10 '>
              <p className='text-center font-bold mb-4'>
                Number by year of release
              </p>
              <NivoBar
                data={byReleaseYear}
                keys={Object.keys(byReleaseYear[0]).slice(1)}
                indexBy='year'
                colors={['#5e548e']}
                labelTextColor='#fff'
                margin={{ left: 120, bottom: 50, top: 20 }}
                mobileMargin={{ left: 30, bottom: 50 }}
                mobileLayout='horizontal'
                layout='horizontal'
                legend={[]}
              />
            </div>
            <div className='stats-radar basis-1/2 max-md:basis-full h-[600px] max-md:h-[400px] max-md:mt-5 max-md:mb-10 mt-10'>
              <p className='text-center font-bold mb-4'>Weighted by streams</p>
              <NivoPie
                data={weightedYearByStream}
                margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
                mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
                colors={[
                  '#f94144',
                  '#f3722c',
                  '#f8961e',
                  '#f9c74f',
                  '#90be6d',
                  '#43aa8b',
                  '#577590',
                  '#ffa69e',
                  '#b8f2e6',
                  '#5e6472',
                ]}
              />
            </div>
          </div>
        </section>
        <section id='by-release-month' className='mt-10'>
          <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
            Number of songs by release month
          </h3>
          <div className='mb-[20px] flex h-[500px] w-full justify-center max-md:h-[500px] max-xl:h-[500px]'>
            <NivoBar
              data={byReleaseMonth}
              keys={['Total']}
              indexBy='month'
              colors={['#5e548e']}
              labelTextColor='#fff'
              margin={{ left: 120, bottom: 50, top: 20 }}
              mobileMargin={{ left: 30, bottom: 50 }}
              mobileLayout='vertical'
              layout='vertical'
              legend={[]}
            />
          </div>
        </section>
        <section id='by-number-of-artists' className='mt-10'>
          <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
            Number of songs by Number of artists
          </h3>
          <div className='mb-[20px] flex h-[500px] w-full justify-center max-md:h-[500px] max-xl:h-[500px]'>
            <NivoBar
              data={byArtistNumber}
              keys={Object.keys(byArtistNumber[0]).slice(1)}
              indexBy='artists'
              colors={['#5e548e']}
              labelTextColor='#fff'
              margin={{ left: 120, bottom: 50, top: 20 }}
              mobileMargin={{ left: 30, bottom: 50 }}
              mobileLayout='vertical'
              layout='vertical'
              legend={[]}
            />
          </div>
        </section>
        <p className='text-center text-xs'>
          All data are updated at 01/2024 and taken from{' '}
          <a
            className='text-[#5e548e] font-bold'
            href='https://www.kaggle.com/datasets/nelgiriyewithana/top-spotify-songs-2023'
            rel='noopener noreferrer'
            target='_blank'
          >
            Kaggle
          </a>
        </p>
      </div>
      <MusicBars />
    </>
  );
};

export default Page17;
