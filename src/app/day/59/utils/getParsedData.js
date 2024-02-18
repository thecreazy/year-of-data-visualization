import rawData from '../data/values.json';

export const maleByYear = rawData
  .reduce((acc, curr) => {
    if (curr.sexCode === 'F') return acc;
    const formattedLabel = curr.value;
    const foundEntry = acc.findIndex((el) => el.age === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].countries += 1;
    } else {
      const newEntry = {
        age: formattedLabel,
        countries: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.age - b.age);

export const femaleByYear = rawData
  .reduce((acc, curr) => {
    if (curr.sexCode === 'M') return acc;
    const formattedLabel = curr.value;
    const foundEntry = acc.findIndex((el) => el.age === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].countries += 1;
    } else {
      const newEntry = {
        age: formattedLabel,
        countries: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.age - b.age);

export const maleMapData = rawData.reduce((acc, curr) => {
  if (curr.sexCode === 'F') return acc;
  acc.push({
    id: curr.ISO3,
    value: Number(curr.value),
    label: curr.AreaName,
  });
  return acc;
}, []);

export const femaleMapData = rawData.reduce((acc, curr) => {
  if (curr.sexCode === 'M') return acc;
  acc.push({
    id: curr.ISO3,
    value: Number(curr.value),
    label: curr.AreaName,
  });
  return acc;
}, []);

export const ratio = [
  {
    id: 'Male',
    data: rawData.reduce((acc, curr) => {
      if (curr.sexCode === 'F') return acc;
      acc.push({
        y: Number(curr.value),
        x: curr.AreaName,
      });
      return acc;
    }, []),
  },
  {
    id: 'Female',
    data: rawData.reduce((acc, curr) => {
      if (curr.sexCode === 'M') return acc;
      acc.push({
        y: Number(curr.value),
        x: curr.AreaName,
      });
      return acc;
    }, []),
  },
];
