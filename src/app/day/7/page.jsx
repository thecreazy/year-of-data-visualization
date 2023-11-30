import './page.css';

import { infos } from './config';

const Page1 = () => {
  return (
    <>
      <section id='infos'>
        <h1 className='py-2 font-mono text-4xl font-bold'>{infos.title}</h1>
        <p className='py-2 font-mono text-lg'>{infos.description}</p>
        <p className='py-2 font-mono text-lg font-bold'>
          <span>Awards:</span>
        </p>
        <ul className='list-disc py-2'>
          {infos.awards.map((type) => {
            return (
              <li key={type.title}>
                <span className='font-bold'>{type.title}</span>
                <ul className='list-disc py-2 pl-4'>
                  {type.data.map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>
      <p className='text-center text-xs'>
        All data are updated at the end of the 2023 and taken from the{' '}
        <a
          className='text-[#552583]'
          href='https://www.nba.com/stats/player/977/career'
          rel='noopener noreferrer'
          target='_blank'
        >
          offical NBA stats
        </a>
      </p>
    </>
  );
};

export default Page1;
