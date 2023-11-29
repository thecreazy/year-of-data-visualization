import { createColumnHelper } from '@tanstack/react-table';

import rawData from '../data/ages.json';

export const totals = {
  italy: rawData.find((el) => el.SEX === 9 && el.AGE === 'TOTAL').Value,
  male: rawData.find((el) => el.SEX === 1 && el.AGE === 'TOTAL').Value,
  female: rawData.find((el) => el.SEX === 2 && el.AGE === 'TOTAL').Value,
};

export const labels = new Array(101).fill(null).map((_, index) => {
  if (index === 1) return `1 year`;
  return `${index} years`;
});

const maleValues = rawData.filter((el) => el.SEX === 1 && el.AGE !== 'TOTAL');
const femaleValues = rawData.filter((el) => el.SEX === 2 && el.AGE !== 'TOTAL');

export const barDataset = [
  {
    label: 'Male',
    data: maleValues.map((el) => el.Value),
    backgroundColor: 'rgb(188 71 73 / 50%)',
  },
  {
    label: 'Female',
    data: femaleValues.map((el) => el.Value),
    backgroundColor: 'rgb(56 102 65 / 50%)',
  },
];

const columnHelper = createColumnHelper();

export const tableColumns = [
  columnHelper.accessor('age', {
    cell: (info) => info.getValue(),
    header: 'Age',
  }),
  columnHelper.accessor('females', {
    cell: (info) => info.getValue(),
    header: 'Females',
  }),
  columnHelper.accessor('males', {
    cell: (info) => info.getValue(),
    header: 'Males',
  }),
  columnHelper.accessor('totals', {
    cell: (info) => info.getValue(),
    header: 'Totals',
  }),
];

export const tableData = labels.map((el, index) => {
  return {
    age: el,
    males: maleValues[index].Value,
    females: femaleValues[index].Value,
    totals: maleValues[index].Value + femaleValues[index].Value,
  };
});
