import { clearGenderData } from '@internal/utils/crearGenderData';

import rawData from '../data/values.json';

const clearData = clearGenderData(rawData);

export const mapData = clearData
  .map((el) => {
    return {
      id: el.isocode,
      value: el.value / 100,
      label: el.country,
    };
  })
  .sort((a, b) => a.value - b.value);

export const avgRegion = clearData.reduce((acc, curr) => {
  const value = curr.value;
  const foundRegion = acc.findIndex((el) => el.Region === curr.region);
  if (foundRegion !== -1) {
    if (!value) return acc;
    acc[foundRegion].Percentage =
      (acc[foundRegion].Percentage + value / 100) / 2;
  } else {
    const newValue = {
      Region: curr.region,
      Percentage: value / 100,
    };
    acc.push(newValue);
  }
  return acc;
}, []);
