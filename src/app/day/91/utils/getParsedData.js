import { getCountryIsoCode } from '@internal/utils/mapgeo';

import rawData from '../data/values.json';

export const total = rawData.length;

export const countries = rawData
  .map((el) => el.Country)
  .filter((value, index, array) => array.indexOf(value) === index)
  .map((el, index) => ({
    value: index,
    label: el,
  }));

export const mapData = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.label === curr.Country);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    acc.push({
      id: getCountryIsoCode(curr.Country),
      value: 1,
      label: curr.Country,
    });
  }
  return acc;
}, []);

const formatYear = (year) => {
  if (!year) return;
  return `${Math.floor(year / 10) * 10}s`;
};

export const byFoundationYear = rawData
  .reduce((acc, curr) => {
    const formattedLabel = formatYear(curr['Foundation year']);
    if (!formattedLabel) return acc;
    const foundEntry = acc.findIndex((el) => el.year === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].universities += 1;
      acc[foundEntry].names.push(curr.University);
    } else {
      const newEntry = {
        year: formattedLabel,
        universities: 1,
        names: [curr.University],
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => Number(a.year.split('s')[0]) - Number(b.year.split('s')[0]));

export const topStudents = rawData
  .sort((a, b) => (b['Total students'] || 0) - (a['Total students'] || 0))
  .slice(0, 10)
  .sort((a, b) => a['Total students'] - b['Total students']);

export const topRanking = rawData
  .sort((a, b) => (a.Ranking || 0) - (b.Ranking || 0))
  .slice(0, 10)
  .sort((a, b) => b.Ranking - a.Ranking);

export const topInternational = rawData
  .map((el) => {
    const unformatted = el['International students'];
    return {
      ...el,
      internationalPercentage: Number(
        !!unformatted
          ? unformatted.includes(')')
            ? unformatted.split('(')[1].split('%)')[0]
            : unformatted.split('%')[0]
          : 0
      ),
    };
  })
  .sort((a, b) => b.internationalPercentage - a.internationalPercentage)
  .slice(0, 10)
  .sort((a, b) => a.internationalPercentage - b.internationalPercentage);
