import { getIDPerCountry } from '@internal/utils/getIdPerCountry';

import rawValues from '../data/values.json';

const capitalize = (s) => {
  const words = s.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }

  return words.join(' ');
};

export const years = rawValues.map((el, index) => ({
  value: index,
  label: el.year,
}));

export const yearValues = rawValues.map((el) => ({
  year: el.year,
  data: el.data
    .map((y) => {
      if (y['COUNTRY/REGION'].toLowerCase() === 'total') return null;
      return {
        country: y['COUNTRY/REGION'],
        cars: Number(y['CARS'].replace(/[,]/g, '')) || 0,
        commercial: Number(y['COMMERCIAL VEHICLES'].replace(/[,]/g, '')) || 0,
        total: Number(y['TOTAL'].replace(/[,]/g, '')),
        change: Number(y['TOTAL'].replace(/[%]/g, '')),
      };
    })
    .filter((el) => !!el)
    .sort((a, b) => a.cars - b.cars),
  mapCar: el.data
    .map((y) => {
      if (y['COUNTRY/REGION'].toLowerCase() === 'total') return null;
      return {
        id: getIDPerCountry(capitalize(y['COUNTRY/REGION'])),
        value: Number(y['CARS'].replace(/[,]/g, '')) || 0,
        label: capitalize(y['COUNTRY/REGION']),
      };
    })
    .filter((el) => !!el),
  mapCommercial: el.data
    .map((y) => {
      if (y['COUNTRY/REGION'].toLowerCase() === 'total') return null;
      return {
        id: getIDPerCountry(capitalize(y['COUNTRY/REGION'])),
        value: Number(y['COMMERCIAL VEHICLES'].replace(/[,]/g, '')) || 0,
        label: capitalize(y['COUNTRY/REGION']),
      };
    })
    .filter((el) => !!el),
}));

export const totalVelicleData = [
  {
    label: 'Car',
    data: rawValues.reduce((acc, c) => {
      const totalValue = c.data.find(
        (el) => el['COUNTRY/REGION'].toLowerCase() === 'total'
      );
      acc.push({
        date: c.year,
        value: Number(totalValue['CARS'].replace(/[,]/g, '')) || 0,
      });
      return acc;
    }, []),
  },
  {
    label: 'Commercial Vehicles',
    data: rawValues.reduce((acc, c) => {
      const totalValue = c.data.find(
        (el) => el['COUNTRY/REGION'].toLowerCase() === 'total'
      );
      acc.push({
        date: c.year,
        value:
          Number(totalValue['COMMERCIAL VEHICLES'].replace(/[,]/g, '')) || 0,
      });
      return acc;
    }, []),
  },
];
