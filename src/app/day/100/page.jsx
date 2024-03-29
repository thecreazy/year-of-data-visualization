import './page.css';

import NivoBar from '@internal/components/Charts/Nivo/Bar';
import NivoBump from '@internal/components/Charts/Nivo/Bump';

import { infos } from './config';
import { mensRating, womensRating } from './utils/getParsedData';

const Page100 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title text-center'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg text-center pt-5'>
          {infos.description}
        </p>
      </section>
      <section id='woman-cess' className='mt-2'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Top ten women players
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[400px] max-xl:h-[600px]'>
          <NivoBump
            showPointValue
            values={womensRating}
            colors={[
              '#577590',
              '#43aa8b',
              '#90be6d',
              '#f8961e',
              '#f9c74f',
              '#f3722c',
              '#f94144',
              '#6a4c93',
              '#390099',
              '#ff0054',
            ]}
            lineWidth={16}
            mobileLineWidth={6}
            activeLineWidth={6}
            inactiveLineWidth={9}
            pointSize={9}
            mobilePointSize={2}
            startLabel
            axisTop={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: '',
              legendPosition: 'middle',
              legendOffset: -36,
              color: 'white',
            }}
            yOuterPadding={1.1}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: '',
              legendPosition: 'middle',
              legendOffset: 32,
            }}
            margin={{ top: 40, right: 150, bottom: 40, left: 150 }}
            mobileMargin={{ top: 40, right: 100, bottom: 40, left: 10 }}
            theme={{
              grid: {
                line: { stroke: 'white' },
                annotations: { text: { stroke: 'red' } },
                labels: { text: { fill: 'red' } },
                text: { color: 'red' },
              },
            }}
          />
        </div>
      </section>
      <section id='men-cess' className='pb-20'>
        <h3 className='py-10 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center mt-10'>
          Top ten men players
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[400px] max-xl:h-[600px]'>
          <NivoBump
            showPointValue
            values={mensRating}
            colors={[
              '#577590',
              '#43aa8b',
              '#90be6d',
              '#f8961e',
              '#f9c74f',
              '#f3722c',
              '#f94144',
              '#6a4c93',
              '#390099',
              '#ff0054',
            ]}
            lineWidth={16}
            mobileLineWidth={6}
            activeLineWidth={6}
            inactiveLineWidth={9}
            pointSize={9}
            mobilePointSize={2}
            startLabel
            axisTop={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: '',
              legendPosition: 'middle',
              legendOffset: -36,
              color: 'white',
            }}
            yOuterPadding={1.1}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: '',
              legendPosition: 'middle',
              legendOffset: 32,
            }}
            margin={{ top: 40, right: 150, bottom: 40, left: 150 }}
            mobileMargin={{ top: 40, right: 100, bottom: 40, left: 10 }}
            theme={{
              grid: {
                line: { stroke: 'white' },
                annotations: { text: { stroke: 'red' } },
                labels: { text: { fill: 'red' } },
                text: { color: 'red' },
              },
            }}
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 03/2024 and taken from{' '}
        <a
          className='text-[#2055a5] font-bold'
          href='https://ratings.fide.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          International Chess Federation
        </a>
      </p>
    </>
  );
};

export default Page100;
