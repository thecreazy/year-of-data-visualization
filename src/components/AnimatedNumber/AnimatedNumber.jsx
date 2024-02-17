'use client';

import AnimatedNumbers from 'react-animated-numbers';

import { useScreenDetect } from '@internal/hooks/useScreenDetect';

const AnimatedNumber = ({
  number,
  className = '',
  size = 50,
  mobileSize,
  tabletSize,
}) => {
  const { isSmallScreen, isMediumScreen } = useScreenDetect();
  console.log(isMediumScreen);
  const getFontSize = () => {
    if (isSmallScreen && !!mobileSize) return mobileSize;
    if (isMediumScreen && !!tabletSize) return tabletSize;
    return size;
  };
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
        fontSize: getFontSize(),
        textAlign: 'center',
      }}
    />
  );
};
export default AnimatedNumber;
