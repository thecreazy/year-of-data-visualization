import { getCountryIsoCode } from '@internal/utils/mapgeo';

import rawValues from '../data/values.json';

export const totalData = [
  {
    id: 'Total',
    data: rawValues
      .reduce((acc, curr) => {
        const value =
          Number(curr.Best ? `${curr.Best}`.replace(/[,]/g, '.') : 0) / 100;
        const foundYear = acc.findIndex((el) => el.x === curr.Year);
        if (foundYear !== -1) {
          if (!value) return acc;
          acc[foundYear].y = (acc[foundYear].y + value) / 2;
        } else {
          const newYear = {
            x: curr.Year,
            y: value,
          };
          acc.push(newYear);
        }
        return acc;
      }, [])
      .sort((a, b) => a.x - b.x),
  },
  {
    id: 'Female',
    data: rawValues
      .reduce((acc, curr) => {
        const value =
          Number(curr.Female ? `${curr.Female}`.replace(/[,]/g, '.') : 0) / 100;
        const foundYear = acc.findIndex((el) => el.x === curr.Year);
        if (foundYear !== -1) {
          if (!value) return acc;
          acc[foundYear].y = (acc[foundYear].y + value) / 2;
        } else {
          const newYear = {
            x: curr.Year,
            y: value,
          };
          acc.push(newYear);
        }
        return acc;
      }, [])
      .sort((a, b) => a.x - b.x),
  },
  {
    id: 'Male',
    data: rawValues
      .reduce((acc, curr) => {
        const value =
          Number(curr.Male ? `${curr.Male}`.replace(/[,]/g, '.') : 0) / 100;
        const foundYear = acc.findIndex((el) => el.x === curr.Year);

        if (foundYear !== -1) {
          if (!value) return acc;
          acc[foundYear].y = (acc[foundYear].y + value) / 2;
        } else {
          const newYear = {
            x: curr.Year,
            y: value,
          };
          acc.push(newYear);
        }
        return acc;
      }, [])
      .sort((a, b) => a.x - b.x),
  },
];

export const totalByRegion = rawValues
  .sort((a, b) => a.Year - b.Year)
  .reduce((acc, curr) => {
    const value =
      Number(curr.Best ? `${curr.Best}`.replace(/[,]/g, '.') : 0) / 100;
    const foundYear = acc.findIndex((el) => el.Region === curr.Region);
    if (foundYear !== -1) {
      if (!value) return acc;
      acc[foundYear].Percentage = (acc[foundYear].Percentage + value) / 2;
    } else {
      const newValue = {
        Region: curr.Region,
        Percentage: value,
      };
      acc.push(newValue);
    }
    return acc;
  }, []);

export const byCountry = rawValues
  .sort((a, b) => a.Year - b.Year)
  .reduce((acc, curr) => {
    const value =
      Number(curr.Best ? `${curr.Best}`.replace(/[,]/g, '.') : 0) / 100;
    const country = curr['Country/Territory'];
    const foundYear = acc.findIndex((el) => el.label === country);
    if (foundYear !== -1) {
      if (!value) return acc;
      acc[foundYear].value = value;
    } else {
      const newValue = {
        id: getCountryIsoCode(country),
        label: country,
        value: value,
      };
      acc.push(newValue);
    }
    return acc;
  }, []);

export const maleMapData = rawValues
  .sort((a, b) => a.Year - b.Year)
  .reduce((acc, curr) => {
    const value =
      Number(curr.Male ? `${curr.Male}`.replace(/[,]/g, '.') : 0) / 100;
    const country = curr['Country/Territory'];
    const foundYear = acc.findIndex((el) => el.label === country);
    if (foundYear !== -1) {
      if (!value) return acc;
      acc[foundYear].value = value;
    } else {
      const newValue = {
        id: getCountryIsoCode(country),
        label: country,
        value: value,
      };
      acc.push(newValue);
    }
    return acc;
  }, []);

export const femaleMapData = rawValues
  .sort((a, b) => a.Year - b.Year)
  .reduce((acc, curr) => {
    const value =
      Number(curr.Female ? `${curr.Female}`.replace(/[,]/g, '.') : 0) / 100;
    const country = curr['Country/Territory'];
    const foundYear = acc.findIndex((el) => el.label === country);
    if (foundYear !== -1) {
      if (!value) return acc;
      acc[foundYear].value = value;
    } else {
      const newValue = {
        id: getCountryIsoCode(country),
        label: country,
        value: value,
      };
      acc.push(newValue);
    }
    return acc;
  }, []);
