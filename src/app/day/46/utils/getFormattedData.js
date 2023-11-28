import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import montain from '../data/montain.json';
import hill from '../data/hill.json';
import seaLevel from '../data/seaLevel.json';
import filterHistoricalDataPerYear from '@internal/utils/filterHistoricalDataPerYear';

dayjs.extend(customParseFormat);

const lastYearMontainData = filterHistoricalDataPerYear(
  montain,
  2022,
  '=',
  'm'
);
const lastYearHillData = filterHistoricalDataPerYear(hill, 2022, '=', 'm');
const lastYearSeaLevelData = filterHistoricalDataPerYear(
  seaLevel,
  2022,
  '=',
  'm'
);
const lastFiveYearsMontainData = filterHistoricalDataPerYear(
  montain,
  2017,
  '>',
  'm'
);
const lastFiveYearsHillData = filterHistoricalDataPerYear(hill, 2017, '>', 'm');
const lastFiveYearsSeaLevelData = filterHistoricalDataPerYear(
  seaLevel,
  2017,
  '>',
  'm'
);

export const historical = montain.reduce((acc, curr) => {
  if (curr.TX !== -9999)
    acc.push({
      day: dayjs(`${curr.DATE}`, 'YYYYMMDD', true).format('YYYY-MM-DD'),
      value: curr.TX / 10,
    });
  return acc;
}, []);

const calculatedData = [];
Object.keys(lastYearMontainData).forEach((el) => {
  lastYearMontainData[el].values.forEach((val) => {
    calculatedData.push({
      group: el,
      subgroup: 'Montain',
      n: lastYearMontainData[el].values.length,
      value: val,
    });
  });
  lastYearHillData[el].values.forEach((val) => {
    calculatedData.push({
      group: el,
      subgroup: 'Hill',
      n: lastYearHillData[el].values.length,
      value: val,
    });
  });
  lastYearSeaLevelData[el].values.forEach((val) => {
    calculatedData.push({
      group: el,
      subgroup: 'Sea',
      n: lastYearSeaLevelData[el].values.length,
      value: val,
    });
  });
});

export const lastYearData = calculatedData;

const calculatedFiveData = [];
Object.keys(lastFiveYearsMontainData).forEach((el) => {
  calculatedFiveData.push({
    id: el,
    data: [
      {
        x: 'Montain',
        y: lastFiveYearsMontainData[el]?.avg.toFixed(2) || 0,
      },
      {
        x: 'Hill',
        y: lastFiveYearsHillData[el]?.avg.toFixed(2) || 0,
      },
      {
        x: 'Sea',
        y: lastFiveYearsSeaLevelData[el]?.avg.toFixed(2) || 0,
      },
    ],
  });
});
export const lastFiveYearsData = calculatedFiveData;
