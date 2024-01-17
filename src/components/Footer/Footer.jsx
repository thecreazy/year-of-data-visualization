import './style.css';

const Footer = () => {
  const divs = 23;
  return (
    <footer>
      <div className='f-container' style={{ marginTop: '-23px' }}>
        {new Array(divs).fill(0).map((_, index) => {
          return (
            <div
              className='bg-primary'
              key={`footer-div-${index}`}
              style={{ marginTop: `${index}px`, height: `${23 - index}px` }}
            />
          );
        })}
      </div>
      <section className='infos text-center pt-4 pb-4'>
        <p>
          <a href='https://yodv.canellariccardo.it' rel='noopener noreferrer'>
            YODV{' '}
          </a>
          a project of{' '}
          <a
            href='https://canellariccardo.it'
            target='_blank'
            rel='noopener noreferrer'
          >
            Riccardo Canella
          </a>
        </p>
        <p>
          Check the opensource code on{' '}
          <a
            href='https://github.com/thecreazy/year-of-data-visualization'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
