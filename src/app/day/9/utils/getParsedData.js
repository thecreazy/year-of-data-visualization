import { clearGenderData } from '@internal/utils/crearGenderData';

import rawData from '../data/values.json';

const clearData = clearGenderData(rawData);

export const yearData = {};
export const listYears = [];

clearData.forEach((el) => {
  if (!yearData[el.year]) {
    yearData[el.year] = [];
    listYears.push({
      value: el.year,
      label: el.year,
    });
  }
  yearData[el.year].push(el);
});
export const years = listYears.sort((a, b) => a.value - b.value);

export const countryData = {};
const listCountries = [];

clearData.forEach((el) => {
  if (!countryData[el.isocode]) {
    countryData[el.isocode] = [];
    listCountries.push({
      value: el.isocode,
      label: el.country,
    });
  }
  countryData[el.isocode].push(el);
});

export const countries = listCountries;
