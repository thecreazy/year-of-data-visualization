import './index.css';

const Ball = () => {
  return (
    <div className='ball-container absolute'>
      <div className='ball'>
        <div class='basketball-stripes'></div>
        <div class='basketball-stripes horizontal'></div>
        <div class='sidestripe-left'></div>
        <div class='sidestripe-right'></div>
      </div>
      <div className='shadow'></div>
    </div>
  );
};

export default Ball;
