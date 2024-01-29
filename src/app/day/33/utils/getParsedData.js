import rawChemistry from '../data/chemistry.json';
import rawEconomic from '../data/economics.json';
import rawLiterature from '../data/literature.json';
import rawMedicine from '../data/medicine.json';
import rawPeace from '../data/peace.json';
import rawPhysics from '../data/physics.json';

export const totals =
  rawChemistry.length +
  rawPeace.length +
  rawEconomic.length +
  rawLiterature.length +
  rawMedicine.length +
  rawPhysics.length;

const rawData = [
  ...rawChemistry,
  ...rawPeace,
  ...rawEconomic,
  ...rawLiterature,
  ...rawMedicine,
  ...rawPhysics,
];

export const byCategory = [
  {
    id: 'Chemistry',
    label: 'Chemistry',
    value: rawChemistry.length,
  },
  {
    id: 'Peace',
    label: 'Peace',
    value: rawPeace.length,
  },
  {
    id: 'Economics',
    label: 'Economics',
    value: rawEconomic.length,
  },
  {
    id: 'Literature',
    label: 'Literature',
    value: rawLiterature.length,
  },
  {
    id: 'Medicine',
    label: 'Medicine',
    value: rawMedicine.length,
  },
  {
    id: 'Physics',
    label: 'Physics',
    value: rawPhysics.length,
  },
];

export const byGender = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.gender);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.gender,
      label: curr.gender,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byYear = rawData
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.id === Number(curr.year));
    if (foundEntry !== -1) {
      acc[foundEntry].value += 1;
    } else {
      const newEntry = {
        id: Number(curr.year),
        value: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.id - a.id);

export const byCountry = rawData
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.id === curr.citizenship);
    if (foundEntry !== -1) {
      acc[foundEntry].value += 1;
    } else {
      const newEntry = {
        id: curr.citizenship,
        value: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.value - a.value);

export let younger, senior;

export const byAge = rawData
  .reduce((acc, curr) => {
    if (curr.gender === 'Institution') return acc;
    const foundEntry = acc.findIndex(
      (el) => el.id === Number(curr.year) - Number(curr.born)
    );
    if (foundEntry !== -1) {
      acc[foundEntry].value += 1;
    } else {
      const newEntry = {
        id: Number(curr.year) - Number(curr.born),
        value: 1,
      };
      acc.push(newEntry);
    }
    if (!younger) younger = curr;
    if (!senior) senior = curr;
    if (
      !!younger &&
      Number(curr.year) - Number(curr.born) <
        Number(younger.year) - Number(younger.born)
    )
      younger = curr;
    if (
      !!senior &&
      Number(curr.year) - Number(curr.born) >
        Number(senior.year) - Number(senior.born)
    )
      senior = curr;
    return acc;
  }, [])
  .sort((a, b) => a.id - b.id);

export const byAffiliation = rawData
  .reduce((acc, curr) => {
    if (!curr.affiliation) return acc;
    const foundEntry = acc.findIndex((el) => el.id === curr.affiliation);
    if (foundEntry !== -1) {
      acc[foundEntry].value += 1;
    } else {
      const newEntry = {
        id: curr.affiliation,
        value: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.value - a.value)
  .filter((el) => el.value > 1);
