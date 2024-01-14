import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';

import rawData from '../data/AMZN.json';
import rawCountry from '../data/bycountry.json';
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

export const countryData = rawCountry.map((el) => ({
  country: el.country,
  y2020: (Number(el['2020']) / 1000000000).toFixed(1),
  y2021: (Number(el['2021']) / 1000000000).toFixed(1),
  y2022: (Number(el['2022']) / 1000000000).toFixed(1),
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
  }),
  columnHelper.accessor('profit', {
    header: 'Profit',
  }),
];
export const tableColumnsCountry = [
  columnHelper.accessor('year', {
    header: 'Year',
  }),
  columnHelper.accessor('2020', {
    header: '2020',
  }),
  columnHelper.accessor('2021', {
    header: '2021',
  }),
  columnHelper.accessor('2022', {
    header: '2022',
  }),
];

export const countriesData = rawCountry.map((el) => ({
  year: el.country,
  2020: `${el['2020']}$`,
  2021: `${el['2021']}$`,
  2022: `${el['2022']}$`,
}));

export const revenuesData = rawRevenuesData.map((el) => ({
  year: el.year,
  revenue: `${el.revenue}$`,
  profit: el.profit ? `${el.profit}$` : '-',
}));
