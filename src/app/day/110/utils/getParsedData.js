import dayjs from 'dayjs';

import rawCHE from '../data/CHE.json';
import rawEUR from '../data/EUR.json';
import rawIND from '../data/IND.json';
import rawUK from '../data/UK.json';
import rawUSD from '../data/USD.json';

export const euVSusa = [
  {
    id: 'USD M1',
    data: rawUSD.map((curr) => {
      const formattedDate = dayjs(`${curr.DATE}`, 'YYYY-MM-DD', true);
      const formattedValue = curr.WM1NS * 1000000000;
      return {
        x: new Date(formattedDate),
        y: formattedValue,
      };
    }),
  },
  {
    id: 'EUR M1',
    data: rawEUR.map((curr) => {
      const formattedDate = dayjs(`${curr.DATE}`, 'YYYY-MM-DD', true);
      const formattedValue = curr.MANMM101EZM189S;
      return {
        x: new Date(formattedDate),
        y: formattedValue,
      };
    }),
  },
];

export const states = [
  {
    id: 'United Kingdom M1',
    data: rawUK.map((curr) => {
      const formattedDate = dayjs(`${curr.DATE}`, 'YYYY-MM-DD', true);
      const formattedValue = curr.MANMM101GBM189S;
      return {
        x: new Date(formattedDate),
        y: formattedValue,
      };
    }),
  },
  {
    id: 'India M1',
    data: rawIND.map((curr) => {
      const formattedDate = dayjs(`${curr.DATE}`, 'YYYY-MM-DD', true);
      const formattedValue = curr.MANMM101INM189S;
      return {
        x: new Date(formattedDate),
        y: formattedValue,
      };
    }),
  },
  {
    id: 'Switzerland M1',
    data: rawCHE.map((curr) => {
      const formattedDate = dayjs(`${curr.DATE}`, 'YYYY-MM-DD', true);
      const formattedValue = curr.MANMM101CHM189N;
      return {
        x: new Date(formattedDate),
        y: formattedValue,
      };
    }),
  },
];

export const markers = [
  {
    axis: 'x',
    value: new Date('2001-03-05'),
    lineStyle: { stroke: '#dee2ffbf', strokeWidth: 20 },
    legend: 'Dot-com bubble',
    legendOrientation: 'vertical',
    textStyle: { fill: '#4895ef', fontSize: 12 },
  },
  {
    axis: 'x',
    value: new Date('2007-12-03'),
    lineStyle: { stroke: '#dee2ffbf', strokeWidth: 50 },
    legend: 'Subprime crisis',
    textStyle: { fill: '#4895ef', fontSize: 12 },
    legendOrientation: 'vertical',
    textStyle: { fill: '#4895ef', fontSize: 12 },
  },
  {
    axis: 'x',
    value: new Date('2020-03-02'),
    lineStyle: { stroke: '#dee2ffbf', strokeWidth: 20 },
    legend: 'Covid-19',
    legendOrientation: 'vertical',
    textStyle: { fill: '#4895ef', fontSize: 12 },
  },
];
