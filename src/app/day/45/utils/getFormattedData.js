import dayjs from 'dayjs';

import rawData from '../data/data.json';

export const total = rawData.length;

export const totalByState = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.State);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.State,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatFuelType = (type) => {
  if (type === 'CNG') return 'Compressed Natural Gas';
  if (type === 'LPG') return 'Liquefied Petroleum Gas';
  if (type === 'ELEC') return 'Electric';
  if (type === 'E85') return 'Ethanol';
  if (type === 'BD') return 'Biodiesel';
  if (type === 'LNG') return 'Liquefied Natural Gas';
  if (type === 'HY') return 'Hydrogen';
  return type;
};

export const byFuelType = rawData.reduce((acc, curr) => {
  const formattedLabel = formatFuelType(curr.Fuel_Type);
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatOwnerType = (type) => {
  if (type === 'FG') return 'Federal Government Owned';
  if (type === 'J') return 'Jointly Owned';
  if (type === 'LG') return 'Local Government Owned';
  if (type === 'P') return 'Privately Owned';
  if (type === 'SG') return 'State Government Owned';
  if (type === 'T') return 'Utility Owned';
  return type;
};

export const totalByOwnerType = rawData.reduce((acc, curr) => {
  const formattedLabel = formatOwnerType(curr.Owner_Type);
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byOpenYear = rawData
  .reduce((acc, curr) => {
    const year = dayjs(`${curr.Open_Date}`).format('YYYY');
    if (year === 'Invalid Date') return acc;
    const foundEntry = acc.findIndex((el) => el.year === year);
    if (foundEntry !== -1) {
      acc[foundEntry].stations += 1;
    } else {
      const newEntry = {
        year: year,
        stations: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => Number(a.year) - Number(b.year));
