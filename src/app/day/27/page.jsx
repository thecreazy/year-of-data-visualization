import dynamic from 'next/dynamic';

import './page.css';

import AntdTable from '@internal/components/Antd/Table';
import NivoBar from '@internal/components/Charts/Nivo/Bar';

import { infos } from './config';
import './utils/getParsedData';
import {
  byRating,
  cloudTag,
  topViewedShow,
  total,
  totalHours,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);
const TagCloud = dynamic(
  () => import('../../../components/TagCloud/TagCloud'),
  { ssr: false }
);

const Page27 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <div className='flex flex-row py-16 max-xl:h-fit max-xl:flex-wrap max-xl:py-4'>
        <div className='stats-radar basis-1/2 max-md:basis-full'>
          <p className='text-center font-mono text-2xl'>Number of Shows</p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#d90429] justify-center'
            size={40}
          />
        </div>
        <div className='stats-radar basis-1/2 max-md:basis-full'>
          <p className='text-center font-mono text-2xl'>Total Hours watched</p>
          <AnimatedNumber
            number={totalHours}
            className='font-mono w-full text-[#d90429] justify-center'
            size={40}
          />
        </div>
      </div>
      <section id='splitted-by-imdb-rating' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Splitted by IMDB rating
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoBar
            data={byRating}
            keys={Object.keys(byRating[0]).slice(1)}
            indexBy='rating'
            colors={['#d90429']}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 50, top: 20 }}
            mobileMargin={{ left: 40, bottom: 50 }}
            mobileLayout='vertical'
            layout='vertical'
            legend={[]}
            xtickRotation={90}
            enableLabel={false}
          />
        </div>
      </section>
      <section id='top-shows' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Top 20 most watched show
        </h3>
        <div className='w-full h-auto flex-row py-4 max-lg:overflow-scroll text-center'>
          <AntdTable
            columns={topViewedShow.columns}
            data={topViewedShow.data}
          />
        </div>
      </section>
      <section id='tag-cloud' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Tags of the most watched show
        </h3>
        <div className='w-full h-auto flex-row py-4 max-lg:overflow-scroll text-center'>
          <TagCloud data={cloudTag}></TagCloud>
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 01/2024 and taken from{' '}
        <a
          className='text-[#d00000] font-bold'
          href='https://www.tdcj.texas.gov/death_row/dr_offenders_on_dr.html'
          rel='noopener noreferrer'
          target='_blank'
        >
          Texas Department of Criminal Justice homepage
        </a>
      </p>
    </>
  );
};

export default Page27;
