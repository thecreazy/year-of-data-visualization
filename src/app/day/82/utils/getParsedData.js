import rawData from '../data/values.json';

export const countries = rawData
  .map((el) => el.AreaName)
  .filter((value, index, array) => array.indexOf(value) === index)
  .map((el, index) => ({
    value: index,
    label: el,
  }));

export const distrubutionByCountry = {
  M: {},
  F: {},
  _T: {},
  _O: {},
};
rawData
  .sort((a, b) => a.Year - b.Year)
  .forEach((curr) => {
    const country = countries.find((el) => el.label === curr.AreaName);
    if (!distrubutionByCountry[curr.sexCode][country.value])
      distrubutionByCountry[curr.sexCode][country.value] = [];
    distrubutionByCountry[curr.sexCode][country.value].push({
      year: curr.Year,
      value: curr.Value,
    });
  });

export const maleMapData = rawData.reduce((acc, curr) => {
  if (curr.sexCode !== 'M') return acc;
  acc.push({
    id: curr.ISO3,
    value: Number(curr.Value),
    label: curr.AreaName,
  });
  return acc;
}, []);

export const femaleMapData = rawData.reduce((acc, curr) => {
  if (curr.sexCode !== 'F') return acc;
  acc.push({
    id: curr.ISO3,
    value: Number(curr.Value),
    label: curr.AreaName,
  });
  return acc;
}, []);

export const ratio = [
  {
    id: 'Male',
    data: rawData.reduce((acc, curr) => {
      if (curr.sexCode !== 'M') return acc;
      acc.push({
        y: Number(curr.Value),
        x: curr.AreaName,
      });
      return acc;
    }, []),
  },
  {
    id: 'Female',
    data: rawData.reduce((acc, curr) => {
      if (curr.sexCode !== 'F') return acc;
      acc.push({
        y: Number(curr.Value),
        x: curr.AreaName,
      });
      return acc;
    }, []),
  },
];
