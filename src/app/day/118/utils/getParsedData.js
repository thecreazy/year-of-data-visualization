import { getCountryNameFromIso2 } from '@internal/utils/mapgeo';

import rawValues from '../data/values.json';

const eurData = rawValues
  .reduce((acc, curr) => {
    if (curr.geo !== 'EU27_2020') return acc;
    acc.push({
      x: curr.TIME_PERIOD,
      y: Number(curr.OBS_VALUE) / 100,
    });
    return acc;
  }, [])
  .map((el) => ({ x: el.x, y: parseFloat(el.y.toFixed(3)) }));

export const totalData = [
  {
    id: 'Rate',
    data: eurData,
  },
];

const dataset2023 = rawValues.reduce((acc, curr) => {
  if (curr.TIME_PERIOD !== 2023) return acc;
  if (curr.geo === 'EU27_2020') return acc;
  acc.push({
    x: getCountryNameFromIso2(curr.geo),
    y: Number(curr.OBS_VALUE),
    geo: curr.geo,
  });
  return acc;
}, []);
export const countries = dataset2023.map((el) => el.x);
export const countriesSelect = dataset2023.map((el) => ({
  label: el.x,
  value: el.geo,
}));
export const data2023 = [
  {
    label: 'GDP growth rate',
    data: dataset2023,
    backgroundColor: dataset2023.map((el) =>
      el.y < 0 ? '#954e4c' : '#00471b'
    ),
  },
];

export const countryData = countriesSelect.reduce((acc, country) => {
  acc[country.value] = [
    {
      id: 'Europe',
      data: eurData,
    },
    {
      id: country.label,
      data: rawValues
        .reduce((acc, curr) => {
          if (curr.geo !== country.value) return acc;
          acc.push({
            x: curr.TIME_PERIOD,
            y: Number(curr.OBS_VALUE) / 100,
          });
          return acc;
        }, [])
        .map((el) => ({ x: el.x, y: parseFloat(el.y.toFixed(3)) })),
    },
  ];
  return acc;
}, {});
