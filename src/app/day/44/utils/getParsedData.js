import rawAge from '../data/age.json';
import rawCitizenship from '../data/citizenship.json';
import rawGender from '../data/gender.json';
import rawData from '../data/values.json';
import rawZones from '../data/zone.json';

export const totalByYear = [
  {
    label: 'Residents',
    data: rawData
      .reduce((acc, curr) => {
        const foundEntry = acc.findIndex((el) => el.date === curr.anno);
        if (foundEntry !== -1) {
          acc[foundEntry].value += curr.residenti;
        } else {
          const newEntry = {
            date: curr.anno,
            value: curr.residenti,
          };
          acc.push(newEntry);
        }
        return acc;
      }, [])
      .sort((a, b) => a.date - b.date),
  },
];

export const totalByGender = rawGender
  .map((el) => {
    return {
      year: el.anno,
      F: el.Femmine,
      M: el.Maschi,
    };
  })
  .sort((a, b) => a.year - b.year);

export const zones = Object.keys(rawZones[0]).slice(1);

export const splitByZone = rawZones
  .map(({ anno, ...rest }) => {
    return {
      year: anno,
      ...rest,
    };
  })
  .sort((a, b) => a.year - b.year);

const zones2022 = splitByZone.filter((el) => el.year === '2022')[0];
const gender2022 = totalByGender.filter((el) => el.year === '2022')[0];

export const lastYearZone = Object.keys(zones2022)
  .slice(1)
  .map((el) => {
    return {
      id: el,
      residents: zones2022[el],
    };
  });

export const byGender = Object.keys(gender2022)
  .slice(1)
  .map((el) => {
    return {
      id: el,
      label: el,
      value: gender2022[el],
    };
  });

export const byAge = rawAge.map((el) => {
  return {
    age: el.eta,
    residents: el.residenti,
  };
});

export const byCitizenship = rawCitizenship.map((el) => {
  return {
    id: el.cittadinanza,
    label: el.cittadinanza,
    value: el.residenti,
  };
});
