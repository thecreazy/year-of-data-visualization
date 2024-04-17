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

export const femaleMapData = rawData
  .sort((a, b) => b.Year - a.Year)
  .reduce((acc, curr) => {
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
    id: 'Female',
    data: rawData.reduce((acc, curr) => {
      if (curr.sexCode !== 'F') return acc;
      acc.push({
        y: Number(curr.Value),
        x: curr.AreaName,
        title: `${curr.AreaName} ${curr.Year}`,
      });
      return acc;
    }, []),
  },
];
