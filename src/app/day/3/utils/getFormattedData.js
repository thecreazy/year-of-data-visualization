import dayjs from 'dayjs';

import rawData from '../data/aapl.json';
import rawProduct from '../data/product.json';
import rawRevenuesData from '../data/revenues.json';

export const lineData = [
  {
    id: 'price',
    data: rawData.map((el) => ({
      x: new Date(dayjs(`${el.Date}`, 'YYYY-DD-MM', true)),
      y: el.Close,
    })),
  },
];

export const revenueData = rawRevenuesData.map((el) => ({
  year: el.Year,
  americas: Number(el.Americas),
  europe: Number(el.Europe),
  china: Number(el.China),
  japan: Number(el.Japan),
  asia: Number(el['Rest of Asia Pacific']),
}));

export const productData = rawProduct;
