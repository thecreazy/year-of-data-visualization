import './page.css';

import ChartJSLine from '@internal/components/Charts/ChartJS/Line';
import NivoBar from '@internal/components/Charts/Nivo/Bar';

import { infos } from './config';
import {
  palette,
  splitByQuarter,
  totalData,
  valuesPerCategory,
} from './utils/getParsedData';

const Page18 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold page-title'>
          {infos.title}
        </h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
      </section>
      <section id='by-quarter' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Split by quarter
        </h3>
        <div className='mb-[20px] flex h-[600px] w-full justify-center max-md:h-[400px] max-xl:h-[500px]'>
          <NivoBar
            data={splitByQuarter}
            keys={Object.keys(splitByQuarter[0]).slice(1)}
            indexBy='quarter'
            colors={palette}
            labelTextColor='#fff'
            margin={{ left: 40, bottom: 50, top: 20 }}
            mobileMargin={{ left: 40, bottom: 50 }}
            mobileLayout='vertical'
            layout='vertical'
            legend={[]}
            groupMode='stacked'
          />
        </div>
      </section>
      <section id='by-quarter-trend' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Trend by quarter
        </h3>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[400px] max-xl:h-[400px]'>
          <ChartJSLine
            data={valuesPerCategory.data}
            labels={valuesPerCategory.labels}
            animation
            legend='bottom'
            noAspectRation
          />
        </div>
      </section>
      <section id='per-year-total' className='mt-10'>
        <h3 className='py-2 font-mono text-3xl max-md:text-2xl text-center flex max-md:flex-col justify-center items-center'>
          Total Trend by quarter
        </h3>
        <div className='mt-[20px] mb-[20px] flex h-[650px] w-full justify-center max-md:h-[400px] max-xl:h-[400px]'>
          <ChartJSLine
            data={totalData.data}
            labels={totalData.labels}
            animation
            legend='bottom'
            noAspectRation
          />
        </div>
      </section>
      <p className='text-center text-xs'>
        All data are updated at 01/2024 and taken from{' '}
        <a
          className='text-[#478A67] font-bold'
          href='https://opendata.infrabel.be/explore/dataset/data_hr_d07_afstand-huis-werk/export/?disjunctive.q&disjunctive.category&sort=-q&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJsaW5lIiwiZnVuYyI6IkNPVU5UIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiIzAyQkNGMCIsInlBeGlzIjoiZGF0YSJ9XSwieEF4aXMiOiJjYXRlZ29yeSIsIm1heHBvaW50cyI6IiIsInRpbWVzY2FsZSI6IiIsInNvcnQiOiIiLCJzZXJpZXNCcmVha2Rvd24iOiIiLCJzZXJpZXNCcmVha2Rvd25UaW1lc2NhbGUiOiIiLCJjb25maWciOnsiZGF0YXNldCI6ImRhdGFfaHJfZDA3X2Fmc3RhbmQtaHVpcy13ZXJrIiwib3B0aW9ucyI6eyJkaXNqdW5jdGl2ZS5xIjp0cnVlLCJkaXNqdW5jdGl2ZS5jYXRlZ29yeSI6dHJ1ZSwic29ydCI6Ii1xIn19fV0sImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWUsInRpbWVzY2FsZSI6IiJ9'
          rel='noopener noreferrer'
          target='_blank'
        >
          data.gov.be
        </a>
      </p>
    </>
  );
};

export default Page18;
