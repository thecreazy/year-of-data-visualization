import { getRegionNameFromProvince } from '@internal/utils/mapgeo';

import rawData from '../data/data.json';

export const total = rawData.reduce((acc, curr) => acc + curr.ALUNNI, 0);

const formatSchoolGrade = (type) => {
  if (type === 'SCUOLA PRIMARIA') return 'Primary School';
  if (type === 'SCUOLA SECONDARIA I GRADO') return 'Middle School';
  if (type === 'SCUOLA SECONDARIA II GRADO') return 'Secondary School';
  return 'Unknown';
};

export const totalBySchoolGrade = rawData.reduce((acc, curr) => {
  const formattedLabel = formatSchoolGrade(curr.ORDINESCUOLA);
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += curr.ALUNNI;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: curr.ALUNNI,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const totalByCitizenship = rawData.reduce((acc, curr, index) => {
  if (index === 0) {
    acc.push({
      id: 'Italian',
      label: 'Italian',
      value: curr.ALUNNICITTADINANZAITALIANA,
    });
    acc.push({
      id: 'UE Citizen',
      label: 'UE Citizen',
      value: curr.ALUNNICITTADINANZANONITALIANAPAESIUE,
    });
    acc.push({
      id: 'Extra UE Citizen',
      label: 'Extra UE Citizen',
      value: curr.ALUNNICITTADINANZANONITALIANAPAESINONUE,
    });
  } else {
    acc[0].value += curr.ALUNNICITTADINANZAITALIANA;
    acc[1].value += curr.ALUNNICITTADINANZANONITALIANAPAESIUE;
    acc[2].value += curr.ALUNNICITTADINANZANONITALIANAPAESINONUE;
  }
  return acc;
}, []);

export const totalByRegion = rawData.reduce((acc, curr) => {
  const formattedLabel = getRegionNameFromProvince(
    curr.CODICESCUOLA.slice(0, 2)
  );
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += curr.ALUNNI;
  } else {
    const newEntry = {
      id: formattedLabel,
      value: curr.ALUNNI,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const citizenByRegion = rawData.reduce((acc, curr) => {
  const formattedLabel = getRegionNameFromProvince(
    curr.CODICESCUOLA.slice(0, 2)
  );
  const foundEntry = acc.findIndex((el) => el.region === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].italian += curr.ALUNNICITTADINANZAITALIANA;
    acc[foundEntry].UECitizen += curr.ALUNNICITTADINANZANONITALIANAPAESIUE;
    acc[foundEntry].ExtraUECitizen +=
      curr.ALUNNICITTADINANZANONITALIANAPAESINONUE;
  } else {
    const newEntry = {
      region: formattedLabel,
      italian: curr.ALUNNICITTADINANZAITALIANA,
      UECitizen: curr.ALUNNICITTADINANZANONITALIANAPAESIUE,
      ExtraUECitizen: curr.ALUNNICITTADINANZANONITALIANAPAESINONUE,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const mapUE = rawData.reduce((acc, curr) => {
  const formattedLabel = getRegionNameFromProvince(
    curr.CODICESCUOLA.slice(0, 2)
  );
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += curr.ALUNNICITTADINANZANONITALIANAPAESIUE;
  } else {
    const newEntry = {
      id: formattedLabel,
      value: curr.ALUNNICITTADINANZANONITALIANAPAESIUE,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const mapExtraUE = rawData.reduce((acc, curr) => {
  const formattedLabel = getRegionNameFromProvince(
    curr.CODICESCUOLA.slice(0, 2)
  );
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += curr.ALUNNICITTADINANZANONITALIANAPAESINONUE;
  } else {
    const newEntry = {
      id: formattedLabel,
      value: curr.ALUNNICITTADINANZANONITALIANAPAESINONUE,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
