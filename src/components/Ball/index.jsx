import './index.css';

const Ball = () => {
  return (
    <div className='ball-container absolute'>
      <div className='ball'>
        <div className='basketball-stripes'></div>
        <div className='basketball-stripes horizontal'></div>
        <div className='sidestripe-left'></div>
        <div className='sidestripe-right'></div>
      </div>
      <div className='shadow'></div>
    </div>
  );
};

export default Ball;
