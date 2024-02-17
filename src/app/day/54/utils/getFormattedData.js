import {
  getProvinceName,
  getRegionNameFromProvince,
} from '@internal/utils/mapgeo';

import totalData from '../data/data.json';

const rawData = totalData['@graph'];

export const total = rawData.length;

export const byPrivateVeichles = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['miur:MEZZIPRIVATI'] === 'SI' ? 'Yes' : 'No';
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const bySchoolBus = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['miur:SCUOLABUS'] === 'SI' ? 'Yes' : 'No';
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byRailTransport = rawData.reduce((acc, curr) => {
  const formattedLabel =
    curr['miur:TRASPORTIFERROVIARI'] === 'SI' ? 'Yes' : 'No';
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byExtraUrbanPublicTransport = rawData.reduce((acc, curr) => {
  const formattedLabel =
    curr['miur:TRASPORTIPUBBLICIINTERURBANI'] === 'SI' ? 'Yes' : 'No';
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byUrbanPublicTransport = rawData.reduce((acc, curr) => {
  const formattedLabel =
    curr['miur:TRASPORTIPUBBLICIURBANI'] === 'SI' ? 'Yes' : 'No';
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const forDisableStudents = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['miur:TRASPORTODISABILI'] === 'SI' ? 'Yes' : 'No';
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const regionsData = rawData.reduce((acc, curr) => {
  const formattedLabel = getRegionNameFromProvince(
    curr['miur:CODICESCUOLA'].slice(0, 2)
  );
  const foundEntry = acc.findIndex((el) => el.province === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].total += 1;
    if (curr['miur:MEZZIPRIVATI'] === 'SI')
      acc[foundEntry].byPrivateVeichles += 1;
    if (curr['miur:SCUOLABUS'] === 'SI') acc[foundEntry].bySchoolBus += 1;
    if (curr['miur:TRASPORTIFERROVIARI'] === 'SI')
      acc[foundEntry].byRailTransport += 1;
    if (curr['miur:TRASPORTIPUBBLICIINTERURBANI'] === 'SI')
      acc[foundEntry].byExtraUrbanPublicTransport += 1;
    if (curr['miur:TRASPORTIPUBBLICIURBANI'] === 'SI')
      acc[foundEntry].byUrbanPublicTransport += 1;
    if (curr['miur:TRASPORTODISABILI'] === 'SI')
      acc[foundEntry].forDisableStudents += 1;
  } else {
    const newEntry = {
      province: formattedLabel,
      total: 1,
      byPrivateVeichles: curr['miur:MEZZIPRIVATI'] === 'SI' ? 1 : 0,
      bySchoolBus: curr['miur:SCUOLABUS'] === 'SI' ? 1 : 0,
      byRailTransport: curr['miur:TRASPORTIFERROVIARI'] === 'SI' ? 1 : 0,
      byExtraUrbanPublicTransport:
        curr['miur:TRASPORTIPUBBLICIINTERURBANI'] === 'SI' ? 1 : 0,
      byUrbanPublicTransport:
        curr['miur:TRASPORTIPUBBLICIURBANI'] === 'SI' ? 1 : 0,
      forDisableStudents: curr['miur:TRASPORTODISABILI'] === 'SI' ? 1 : 0,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatLabel = (type) => {
  if (type === 'total') return 'School Buildings';
  if (type === 'byPrivateVeichles') return 'Private cars';
  if (type === 'bySchoolBus') return 'School bus';
  if (type === 'byRailTransport') return 'Rail transport';
  if (type === 'byExtraUrbanPublicTransport') return 'Urban public transport';
  if (type === 'byUrbanPublicTransport') return 'Extra-urban public transport';
  if (type === 'forDisableStudents') return 'Services for disable students';
  return null;
};

export const heatMapRegions = regionsData.map((el) => {
  const { province, ...others } = el;
  return {
    id: province,
    data: Object.keys(others).map((curr) => ({
      x: formatLabel(curr),
      y: others[curr],
    })),
  };
});

const provinceData = rawData.reduce((acc, curr) => {
  const formattedLabel = getProvinceName(curr['miur:CODICESCUOLA'].slice(0, 2));
  const foundEntry = acc.findIndex((el) => el.province === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].total += 1;
    if (curr['miur:MEZZIPRIVATI'] === 'SI')
      acc[foundEntry].byPrivateVeichles += 1;
    if (curr['miur:SCUOLABUS'] === 'SI') acc[foundEntry].bySchoolBus += 1;
    if (curr['miur:TRASPORTIFERROVIARI'] === 'SI')
      acc[foundEntry].byRailTransport += 1;
    if (curr['miur:TRASPORTIPUBBLICIINTERURBANI'] === 'SI')
      acc[foundEntry].byExtraUrbanPublicTransport += 1;
    if (curr['miur:TRASPORTIPUBBLICIURBANI'] === 'SI')
      acc[foundEntry].byUrbanPublicTransport += 1;
    if (curr['miur:TRASPORTODISABILI'] === 'SI')
      acc[foundEntry].forDisableStudents += 1;
  } else {
    const newEntry = {
      province: formattedLabel,
      total: 1,
      byPrivateVeichles: curr['miur:MEZZIPRIVATI'] === 'SI' ? 1 : 0,
      bySchoolBus: curr['miur:SCUOLABUS'] === 'SI' ? 1 : 0,
      byRailTransport: curr['miur:TRASPORTIFERROVIARI'] === 'SI' ? 1 : 0,
      byExtraUrbanPublicTransport:
        curr['miur:TRASPORTIPUBBLICIINTERURBANI'] === 'SI' ? 1 : 0,
      byUrbanPublicTransport:
        curr['miur:TRASPORTIPUBBLICIURBANI'] === 'SI' ? 1 : 0,
      forDisableStudents: curr['miur:TRASPORTODISABILI'] === 'SI' ? 1 : 0,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const perProvince = {
  data: provinceData,
  columns: [
    {
      title: 'Province',
      dataIndex: 'province',
      key: 'province',
    },
    {
      title: formatLabel('total'),
      dataIndex: 'total',
      key: 'total',
      align: 'right',
    },
    {
      title: formatLabel('byPrivateVeichles'),
      dataIndex: 'byPrivateVeichles',
      key: 'byPrivateVeichles',
      align: 'right',
    },
    {
      title: formatLabel('bySchoolBus'),
      dataIndex: 'bySchoolBus',
      key: 'bySchoolBus',
      align: 'right',
    },
    {
      title: formatLabel('byRailTransport'),
      dataIndex: 'byRailTransport',
      key: 'byRailTransport',
      align: 'right',
    },
    {
      title: formatLabel('byExtraUrbanPublicTransport'),
      dataIndex: 'byExtraUrbanPublicTransport',
      key: 'byExtraUrbanPublicTransport',
      align: 'right',
    },
    {
      title: formatLabel('byUrbanPublicTransport'),
      dataIndex: 'byUrbanPublicTransport',
      key: 'byUrbanPublicTransport',
      align: 'right',
    },
    {
      title: formatLabel('forDisableStudents'),
      dataIndex: 'forDisableStudents',
      key: 'forDisableStudents',
      align: 'right',
    },
  ],
};
