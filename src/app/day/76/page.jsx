import dynamic from 'next/dynamic';

import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import TagCloud from '@internal/components/TagCloud/TagCloud';

import { infos } from './config';
import './utils/getParsedData';
import {
  averageReview,
  cloudTag,
  colors,
  timeDistribution,
  total,
} from './utils/getParsedData';

const AnimatedNumber = dynamic(
  () => import('../../../components/AnimatedNumber/AnimatedNumber'),
  { ssr: false }
);

const Page76 = () => {
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
          <p className='text-center font-mono text-3xl'>Total Reviews</p>
          <AnimatedNumber
            number={total}
            className='font-mono w-full text-[#0a9396] justify-center'
            size={80}
          />
        </div>
        <div className='stats-radar basis-full'>
          <p className='text-center font-mono text-3xl'>Average Rating</p>
          <AnimatedNumber
            number={averageReview}
            className='font-mono w-full text-[#0a9396] justify-center'
            size={80}
          />
        </div>
      </div>
      <section id='by-date' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Time distrubition
        </h3>
        <div className='mb-[20px] flex h-[700px] w-full justify-center max-md:h-[700px] max-xl:h-[500px]'>
          <NivoBar
            data={timeDistribution}
            keys={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            indexBy='date'
            colors={colors.map((el) => `${el}bf`).reverse()}
            labelTextColor='#fff'
            margin={{ left: 80, bottom: 150, top: 20 }}
            mobileMargin={{ left: 60, bottom: 50 }}
            mobileLayout='horizontal'
            layout='vertical'
            legend={[]}
            xtickRotation={90}
            borderWidth={3}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 1.6]],
            }}
            xFormat='date'
            groupMode='stacked'
          />
        </div>
      </section>
      <section id='tag-cloud' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Most used words
        </h3>
        <div className='w-full h-auto flex-row py-4 max-lg:overflow-scroll text-center'>
          <TagCloud data={cloudTag}></TagCloud>
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#0a9396] font-bold'
          href='https://www.kaggle.com/datasets/forgetabhi/dune-part-two-imdb-reviewss'
          rel='noopener noreferrer'
          target='_blank'
        >
          Kaggle.com
        </a>
      </p>
    </>
  );
};

export default Page76;
