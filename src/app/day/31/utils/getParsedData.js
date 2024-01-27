import rawValues from '../data/values.json';

const parseNumber = (value) =>
  typeof value === 'number' ? value : Number(value.replace(/[,]/g, ''));

export const top50 = rawValues.map((curr) => {
  return {
    city: curr.City,
    [`Homicides per 100k`]: curr[`Homicides per 100000`],
  };
});

export const top50byHomicides = rawValues.map((curr) => {
  return {
    city: curr.City,
    Homicides: parseNumber(curr['Homicides']),
  };
});

export const byCountry = {
  numberOfCities: rawValues.reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.id === curr.Country);
    if (foundEntry !== -1) {
      acc[foundEntry].value += 1;
    } else {
      const newEntry = {
        id: curr.Country,
        label: curr.Country,
        value: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, []),
  byNumberOfHomicides: rawValues.reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.id === curr.Country);
    if (foundEntry !== -1) {
      acc[foundEntry].value += parseNumber(curr['Homicides']);
    } else {
      const newEntry = {
        id: curr.Country,
        label: curr.Country,
        value: parseNumber(curr['Homicides']),
      };
      acc.push(newEntry);
    }
    return acc;
  }, []),
};
