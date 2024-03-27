import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';

import rawData from '../data/TSLA.json';
import rawEmployees from '../data/employees.json';
import rawRevenuesData from '../data/revenues.json';

export const lineData = [
  {
    id: 'price',
    data: rawData.map((el) => ({
      x: new Date(dayjs(`${el.Date}`, 'YYYY-MM-DD', true)),
      y: el.Close,
    })),
  },
];

export const employeesDataYear = rawEmployees.map((el) => ({
  year: el.year,
  Employees: el.Employees,
}));
export const revenueData = rawRevenuesData.map((el) => ({
  year: el.year,
  revenue: (Number(el.revenue) / 1000000000).toFixed(1),
  profit: el.profit ? (Number(el.profit) / 1000000000).toFixed(1) : 0,
}));

const columnHelper = createColumnHelper();
export const tableColumns = [
  columnHelper.accessor('year', {
    header: 'Year',
  }),
  columnHelper.accessor('revenue', {
    header: 'Revenues',
    align: 'right',
  }),
  columnHelper.accessor('profit', {
    header: 'Profit',
    align: 'right',
  }),
];
export const tableColumnsEmployees = [
  columnHelper.accessor('year', {
    header: 'Year',
  }),
  columnHelper.accessor('Employees', {
    header: 'Employees',
    align: 'right',
  }),
  columnHelper.accessor('delta', {
    header: 'Delta',
    align: 'right',
  }),
];

export const employeesData = rawEmployees;

export const revenuesData = rawRevenuesData.map((el) => ({
  year: el.year,
  revenue: `${el.revenue}$`,
  profit: el.profit ? `${el.profit}$` : '-',
}));
