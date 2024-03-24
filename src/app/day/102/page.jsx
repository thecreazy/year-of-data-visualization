import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoLine from '@internal/components/Charts/Nivo/Line';
import NivoPie from '@internal/components/Charts/Nivo/Pie';
import NivoScatterPlot from '@internal/components/Charts/Nivo/Scatterplot';
import TagCloud from '@internal/components/TagCloud/TagCloud';

import { infos } from './config';
import {
  byAlbum,
  bySongArtists,
  cloudTag,
  ratio,
  top10Album,
  top10Songs,
  topSongArtists,
  total,
  totalByYear,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page102 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <div className='flex flex-row py-8 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>Total Songs</p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#2a9d8f] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='split-album-artists' className='mt-2'>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>Song by album</p>
            <NivoPie
              data={byAlbum}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#1d3557bf',
                '#2a9d8fbf',
                '#e9c46abf',
                '#f4a261bf',
                '#e76f51bf',
              ]}
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
              Songs by number of artists
            </p>
            <NivoPie
              data={bySongArtists}
              margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
              mobileMargin={{ top: 50, left: 50, right: 50, bottom: 50 }}
              colors={[
                '#1d3557bf',
                '#2a9d8fbf',
                '#e9c46abf',
                '#f4a261bf',
                '#e76f51bf',
              ]}
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

      <section id='top-songs-album' className='mt-10 pt-20'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Released songs per year
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoLine
            data={totalByYear}
            yFormat='.0f'
            xScale={{
              type: 'point',
            }}
            axisBottom={{
              legendOffset: -12,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={['#e76f51']}
            margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
            mobileMargin={{ top: 20, right: 20, bottom: 100, left: 40 }}
            enablePoints={false}
          />
        </div>
      </section>
      <section id='year-distrubution' className='mt-10 pt-5'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mb-20'>
          Genius.com views statistics
        </h3>
        <div className='flex flex-row flex-wrap max-md:h-fit max-md:py-4 justify-center pb-5'>
          <div className='stats-radar basis-1/2 max-md:basis-full h-[400px]'>
            <p className='text-center font-bold mb-4'>Top 10 albums by views</p>
            <NivoBar
              data={top10Album.reverse()}
              keys={['views']}
              indexBy='album'
              colors={['#e76f51bf']}
              labelTextColor='#fff'
              margin={{ left: 220, bottom: 80, top: 40, right: 10 }}
              mobileMargin={{ left: 120, bottom: 30, top: 30, right: 10 }}
              mobileLayout='horizontal'
              layout='horizontal'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              xtickRotation={90}
            />
          </div>
          <div className='stats-radar basis-1/2 max-md:basis-full max-md:pt-20 h-[400px]'>
            <p className='text-center font-bold mb-4'>Top 10 songs by views</p>
            <NivoBar
              data={top10Songs.reverse()}
              keys={['views']}
              indexBy='song'
              colors={['#2a9d8fbf']}
              labelTextColor='#fff'
              margin={{ left: 220, bottom: 80, top: 40, right: 10 }}
              mobileMargin={{ left: 120, bottom: 30, top: 30, right: 10 }}
              mobileLayout='horizontal'
              layout='horizontal'
              borderWidth={2}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
              }}
              xtickRotation={90}
            />
          </div>
        </div>
      </section>
      <section id='ratio-year-song-view' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Song's views per released year
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoScatterPlot
            showCustomId='title'
            data={ratio}
            xScale={{ type: 'point', min: 2001 }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: 'Year',
              legendPosition: 'middle',
              legendOffset: 40,
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Views',
              legendPosition: 'middle',
              legendOffset: -60,
            }}
            margin={{ top: 20, right: 20, bottom: 80, left: 70 }}
            mobileMargin={{ top: 20, right: 20, bottom: 70, left: 50 }}
            legends={[
              {
                anchor: 'bottom',
                direction: 'column',
                translateX: 0,
                translateY: 80,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
              },
            ]}
            colors={['#2a9d8fbf']}
          />
        </div>
      </section>
      <section id='top-artists' className='mt-10 '>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Top 20 collaborators
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[500px] max-xl:h-[600px]'>
          <NivoBar
            data={topSongArtists}
            keys={['songs']}
            indexBy='artist'
            colors={['#e76f51bf']}
            borderWidth={2}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            labelTextColor='#fff'
            margin={{ left: 30, bottom: 130, top: 20 }}
            mobileMargin={{ left: 30, bottom: 80, top: 20 }}
            mobileLayout='vertical'
            layout='vertical'
            xtickRotation={45}
            groupMode='stacked'
          />
        </div>
      </section>
      <section id='tag-cloud' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Most relevant song's categories
        </h3>
        <div className='w-full h-auto flex-row py-4 max-lg:overflow-scroll text-center'>
          <TagCloud data={cloudTag}></TagCloud>
        </div>
      </section>

      <p className='text-center text-xs mt-20'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#e76f51] font-bold'
          href='https://genius.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          Genius.com
        </a>
      </p>
    </>
  );
};

export default Page102;
