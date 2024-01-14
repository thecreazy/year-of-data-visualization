import dayjs from 'dayjs';

import rawExecuted from '../data/executed.json';
import rawValues from '../data/values.json';

export const byGender = rawValues.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.Gender);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.Gender,
      label: curr.Gender,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byRace = rawValues.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.Race);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.Race,
      label: curr.Race,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byCounty = rawValues.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.county === curr.County);
  if (foundEntry !== -1) {
    acc[foundEntry].inmates += 1;
  } else {
    const newEntry = {
      county: curr.County,
      inmates: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const executedByYear = rawExecuted
  .reduce((acc, curr) => {
    const year = dayjs(`${curr.date}`, 'MM-DD-YYYY', true).format('YYYY');
    const foundEntry = acc.findIndex((el) => el.year === year);
    if (foundEntry !== -1) {
      acc[foundEntry].inmates += 1;
    } else {
      const newEntry = {
        year: year,
        inmates: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.year - b.year);

export const executedByCounty = rawExecuted.reduce((acc, curr) => {
  const cleanCounty = curr.county.replace(/ /g, '');
  const foundEntry = acc.findIndex((el) => el.county === cleanCounty);
  if (foundEntry !== -1) {
    acc[foundEntry].inmates += 1;
  } else {
    const newEntry = {
      county: cleanCounty,
      inmates: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const executedByRace = rawExecuted.reduce((acc, curr) => {
  const cleanRace = curr.race.replace(/ /g, '');
  const foundEntry = acc.findIndex((el) => el.id === cleanRace);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: cleanRace,
      label: cleanRace,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const getAgeRange = (val) => {
  const base = Math.floor(val / 10);
  return `${base}0-${base + 1}0`;
};

export const byArrestAge = rawValues.reduce((acc, curr) => {
  const bday = dayjs(
    `${curr['Date ofBirth'].split('T')[0]}`,
    'YYY-MM-DD',
    true
  );
  const arrestDay = dayjs(
    `${curr['DateReceived'].split('T')[0]}`,
    'YYY-MM-DD',
    true
  );
  const years = arrestDay.diff(bday, 'year');
  const range = getAgeRange(Number(years));
  const foundEntry = acc.findIndex((el) => el.id === range);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: range,
      label: range,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const executedByAge = rawExecuted.reduce((acc, curr) => {
  const clearAge = curr.age.replace(/ /g, '');
  const range = getAgeRange(Number(clearAge));
  const foundEntry = acc.findIndex((el) => el.id === range);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: range,
      label: range,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
