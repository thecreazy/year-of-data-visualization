import { getCountryIsoCode } from '@internal/utils/mapCountries';

import rawValues from '../data/values.json';

export const globalAvg = rawValues.reduce((acc, el) => {
  const { year, ...coutries } = el;
  const entries = Object.keys(coutries)
    .map((country) => {
      if (el[country] === '') return null;
      return {
        group: year,
        subgroup: 'Global',
        n: Object.keys(coutries).filter((curr) => coutries[curr] !== '').length,
        value: el[country],
      };
    })
    .filter((curr) => !!curr);
  acc.push(...entries);
  return acc;
}, []);

export const years = rawValues.map((el) => el.year);

export const mapData = years.map((key) => {
  const foundYear = rawValues.findIndex((el) => el.year === key);
  const { year, ...countries } = rawValues[foundYear];
  return {
    year: key,
    data: Object.keys(countries)
      .map((country) => {
        if (rawValues[foundYear][country] === '') return null;
        return {
          id: getCountryIsoCode(country),
          value: rawValues[foundYear][country],
          label: country,
        };
      })
      .filter((curr) => !!curr),
  };
});

const { year, ...others } = rawValues[0];
export const countries = Object.keys(others).map((el, index) => ({
  value: index,
  label: el,
}));

export const byCountry = {
  dataset: countries.map((country) => {
    return [
      {
        label: 'Inflation Rate',
        data: rawValues.map((el) => el[country.label] || 0),
        backgroundColor: rawValues.map((el) =>
          (el[country.label] || 0) > 0 ? '#d04848' : '#219C90'
        ),
      },
    ];
  }),
};
