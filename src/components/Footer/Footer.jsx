import './style.css';

const Footer = () => {
  const divs = 23;
  return (
    <footer>
      <div style={{ marginTop: '-23px', backgroundColor: '#191919' }}>
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
    </footer>
  );
};

export default Footer;
