import rawData from '../data/values.json';

export const countries = rawData
  .map((el) => el.Country)
  .filter((value, index, array) => array.indexOf(value) === index)
  .map((el, index) => ({
    value: index,
    label: el,
  }));

export const distrubutionByCountry = {};

rawData
  .sort((a, b) => a.Date - b.Date)
  .forEach((curr) => {
    const country = countries.find((el) => el.label === curr.Country);

    if (!distrubutionByCountry[country.value])
      distrubutionByCountry[country.value] = [];

    const foundYear = distrubutionByCountry[country.value].findIndex(
      (el) => el.year === curr.Year
    );
    if (foundYear === -1) {
      distrubutionByCountry[country.value].push({
        year: curr.Date,
        age: curr['Life expectancy at birth'],
      });
    } else {
      distrubutionByCountry[country.value][foundYear].age =
        curr['Life expectancy at birth'];
    }
  });

export const mapData = rawData.reduce((acc, curr) => {
  if (curr.Date !== 2021) return acc;
  acc.push({
    id: curr['Country code 3'],
    value: curr['Life expectancy at birth'],
    label: curr.Country,
  });
  return acc;
}, []);

export const ratio = [
  {
    id: 'Life expectancy vs Birth Rate',
    data: rawData.reduce((acc, curr) => {
      if (!curr['Life expectancy at birth']) return acc;
      if (!curr['Birth Rate']) return acc;
      if (curr.Date !== 2021) return acc;
      acc.push({
        y: curr['Birth Rate'],
        x: curr['Life expectancy at birth'],
        country: curr.Country,
      });
      return acc;
    }, []),
  },
];

export const byContinent = rawData
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.year === curr.Date);
    if (!curr['Life expectancy at birth']) return acc;
    if (foundEntry !== -1) {
      if (!acc[foundEntry][curr.Continent])
        acc[foundEntry][curr.Continent] = curr['Life expectancy at birth'];
      else
        acc[foundEntry][curr.Continent] = Math.ceil(
          (curr['Life expectancy at birth'] + acc[foundEntry][curr.Continent]) /
            2
        );
    } else {
      const newEntry = {
        year: curr.Date,
        [curr.Continent]: curr['Life expectancy at birth'],
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.year - a.year)
  .slice(0, 15)
  .reverse();
