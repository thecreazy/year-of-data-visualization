import { clearGenderData } from '@internal/utils/crearGenderData';

import rawData from '../data/values.json';

const clearData = clearGenderData(rawData);

export const mapData = clearData
  .map((el) => {
    return {
      id: el.isocode,
      value: el.value,
      label: el.country,
    };
  })
  .sort((a, b) => a.value - b.value);
