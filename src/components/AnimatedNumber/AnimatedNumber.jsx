'use client';

import AnimatedNumbers from 'react-animated-numbers';

const AnimatedNumber = ({ number, className = '', size = 50 }) => {
  return (
    <AnimatedNumbers
      includeComma
      className={className}
      transitions={(index) => ({
        type: 'spring',
        duration: index + 0.3,
      })}
      animateToNumber={number}
      fontStyle={{
        fontSize: size,
        textAlign: 'center',
      }}
    />
  );
};
export default AnimatedNumber;
