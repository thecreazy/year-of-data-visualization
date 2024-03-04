import { getRegionNameFromProvince } from '@internal/utils/mapgeo';

import rawData from '../data/data.json';

export const total = rawData.reduce(
  (acc, curr) => acc + curr.DOCENTITITOLARIMASCHI + curr.DOCENTITITOLARIFEMMINE,
  0
);

const formatSchoolGrade = (type) => {
  if (type === 'SCUOLA PRIMARIA') return 'Primary School';
  if (type === 'SCUOLA SECONDARIA I GRADO') return 'Middle School';
  if (type === 'SCUOLA SECONDARIA II GRADO') return 'Secondary School';
  if (type === 'SCUOLA INFANZIA') return 'Kindergarten';
  return 'Unknown';
};

export const totalBySchoolGrade = rawData.reduce((acc, curr) => {
  const formattedLabel = formatSchoolGrade(curr.ORDINESCUOLA);
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value +=
      curr.DOCENTITITOLARIMASCHI + curr.DOCENTITITOLARIFEMMINE;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: curr.DOCENTITITOLARIMASCHI + curr.DOCENTITITOLARIFEMMINE,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const totalByGender = rawData.reduce((acc, curr, index) => {
  if (index === 0) {
    acc.push({
      id: 'Male',
      label: 'Male',
      value: curr.DOCENTITITOLARIMASCHI,
    });
    acc.push({
      id: 'Female',
      label: 'Female',
      value: curr.DOCENTITITOLARIFEMMINE,
    });
  } else {
    acc[0].value += curr.DOCENTITITOLARIMASCHI;
    acc[1].value += curr.DOCENTITITOLARIFEMMINE;
  }
  return acc;
}, []);

const formatTypology = (type) => {
  if (type === 'SOSTEGNO') return 'Special Educational Needs ';
  if (type === 'NORMALE') return 'Normal';
  return 'Unknown';
};

export const totalByTypology = rawData.reduce((acc, curr) => {
  const formattedLabel = formatTypology(curr.TIPOPOSTO);
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value +=
      curr.DOCENTITITOLARIMASCHI + curr.DOCENTITITOLARIFEMMINE;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: curr.DOCENTITITOLARIMASCHI + curr.DOCENTITITOLARIFEMMINE,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const totalByRegion = rawData.reduce((acc, curr) => {
  const formattedLabel = getRegionNameFromProvince(
    curr.PROVINCIA.toLowerCase()
  );
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value +=
      curr.DOCENTITITOLARIMASCHI + curr.DOCENTITITOLARIFEMMINE;
  } else {
    const newEntry = {
      id: formattedLabel,
      value: curr.DOCENTITITOLARIMASCHI + curr.DOCENTITITOLARIFEMMINE,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const citizenByRegion = rawData.reduce((acc, curr) => {
  const formattedLabel = getRegionNameFromProvince(
    curr.PROVINCIA.toLowerCase()
  );
  const foundEntry = acc.findIndex((el) => el.region === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].Male += curr.DOCENTITITOLARIMASCHI;
    acc[foundEntry].Female += curr.DOCENTITITOLARIFEMMINE;
  } else {
    const newEntry = {
      region: formattedLabel,
      Male: curr.DOCENTITITOLARIMASCHI,
      Female: curr.DOCENTITITOLARIFEMMINE,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const mapNormal = rawData.reduce((acc, curr) => {
  if (curr.TIPOPOSTO !== 'NORMALE') return acc;
  const formattedLabel = getRegionNameFromProvince(
    curr.PROVINCIA.toLowerCase()
  );
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value +=
      curr.DOCENTITITOLARIMASCHI + curr.DOCENTITITOLARIFEMMINE;
  } else {
    const newEntry = {
      id: formattedLabel,
      value: curr.DOCENTITITOLARIMASCHI + curr.DOCENTITITOLARIFEMMINE,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const mapSpecial = rawData.reduce((acc, curr) => {
  if (curr.TIPOPOSTO !== 'SOSTEGNO') return acc;
  const formattedLabel = getRegionNameFromProvince(
    curr.PROVINCIA.toLowerCase()
  );
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value +=
      curr.DOCENTITITOLARIMASCHI + curr.DOCENTITITOLARIFEMMINE;
  } else {
    const newEntry = {
      id: formattedLabel,
      value: curr.DOCENTITITOLARIMASCHI + curr.DOCENTITITOLARIFEMMINE,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
