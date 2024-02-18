import rawData from '../data/data.json';

export const total =
  rawData.reduce((acc, curr) => {
    return acc + curr['Gallons of Ethanol per Capita'];
  }, 0) / rawData.length;

export const totalByState = rawData.map((curr) => {
  return {
    id: curr['State Abbreviations'],
    value: curr['Gallons of Ethanol per Capita'],
  };
});

export const totalDrivingFatalities = rawData.map((curr) => {
  return {
    id: curr['State Abbreviations'],
    value: curr['Driving Fatalities Involving Alcohol (Percentage)'] / 100,
  };
});

export const totalExcessiveDrinking = rawData.map((curr) => {
  return {
    id: curr['State Abbreviations'],
    value: curr['Excessive Drinking rate (Percentage)'] / 100,
  };
});

export const ratio = [
  {
    id: 'Driving Fatalities Involving Alcohol',
    data: rawData.map((curr) => {
      return {
        x: curr['State Name'],
        y: curr['Driving Fatalities Involving Alcohol (Percentage)'],
      };
    }),
  },
  {
    id: 'Excessive Drinking rate',
    data: rawData.map((curr) => {
      return {
        x: curr['State Name'],
        y: curr['Excessive Drinking rate (Percentage)'],
      };
    }),
  },
];
