import rawValues from '../data/values.json';

export const totalData = [
  {
    id: 'Total Km',
    data: rawValues.reduce((acc, curr) => {
      if (curr['Country Type'] !== 'World') return acc;
      Object.keys(curr).map((key) => {
        if (!isNaN(key) && !!curr[key]) {
          acc.push({
            x: Number(key),
            y: curr[key],
          });
        }
      });
      return acc;
    }, []),
  },
];

const continentData = rawValues.filter(
  (el) => el['Country Type'] === 'Continent'
);

export const vs1990 = {
  labels: continentData.map((el) => el['Country Name']),
  dataset: [
    {
      label: 'vs 1990',
      data: continentData.map(
        (el) => ((el['2021'] - el['1990']) / el['2021']) * 100
      ),
      backgroundColor: rawValues.map((el) => {
        const value = ((el['2021'] - el['1990']) / el['2021']) * 100;
        return value > 0 ? '#3a5a40' : '#bc4749';
      }),
    },
  ],
};

const incomeData = rawValues.filter((el) => el['Country Type'] === 'Specific');

export const vs1990Income = {
  labels: incomeData.map((el) => el['Country Name']),
  dataset: [
    {
      label: 'vs 1990',
      data: incomeData.map(
        (el) => ((el['2021'] - el['1990']) / el['2021']) * 100
      ),
      backgroundColor: incomeData.map((el) => {
        const value = ((el['2021'] - el['1990']) / el['2021']) * 100;
        return value > 0 ? '#3a5a40' : '#bc4749';
      }),
    },
  ],
};

const countryData = rawValues.filter((el) => el['Country Type'] === 'Country');
const years = Object.keys(countryData[0]).filter((key) => !isNaN(Number(key)));

export const mapData = years.map((key) => {
  return {
    year: key,
    data: countryData.map((el) => {
      return {
        id: el['Country Code'],
        value: el[`${key}`],
        label: el['Country Name'],
      };
    }),
  };
});
