import dayjs from 'dayjs';

import rawData from '../data/values.json';

const { womens, mens } = rawData;

export const womensRating = womens
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.id === curr.name);
    if (foundEntry !== -1) {
      acc[foundEntry].data.push({
        x: dayjs(curr.month).format('YYYY-MM'),
        y: curr.rating,
      });
    } else {
      const newEntry = {
        id: curr.name,
        data: [
          {
            x: dayjs(curr.month).format('YYYY-MM'),
            y: curr.rating,
          },
        ],
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .map((curr) => {
    return {
      id: curr.id,
      data: [
        {
          x: '2023-04',
          y: curr.data.find((el) => el.x === '2023-04')?.y || null,
        },
        {
          x: '2023-05',
          y: curr.data.find((el) => el.x === '2023-05')?.y || null,
        },
        {
          x: '2023-06',
          y: curr.data.find((el) => el.x === '2023-06')?.y || null,
        },
        {
          x: '2023-07',
          y: curr.data.find((el) => el.x === '2023-07')?.y || null,
        },
        {
          x: '2023-08',
          y: curr.data.find((el) => el.x === '2023-08')?.y || null,
        },
        {
          x: '2023-09',
          y: curr.data.find((el) => el.x === '2023-09')?.y || null,
        },
        {
          x: '2023-10',
          y: curr.data.find((el) => el.x === '2023-10')?.y || null,
        },
        {
          x: '2023-11',
          y: curr.data.find((el) => el.x === '2023-11')?.y || null,
        },
        {
          x: '2023-12',
          y: curr.data.find((el) => el.x === '2023-12')?.y || null,
        },
        {
          x: '2024-01',
          y: curr.data.find((el) => el.x === '2024-01')?.y || null,
        },
        {
          x: '2024-02',
          y: curr.data.find((el) => el.x === '2024-02')?.y || null,
        },
        {
          x: '2024-03',
          y: curr.data.find((el) => el.x === '2024-03')?.y || null,
        },
      ],
    };
  });

export const mensRating = mens
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.id === curr.name);
    if (foundEntry !== -1) {
      acc[foundEntry].data.push({
        x: dayjs(curr.month).format('YYYY-MM'),
        y: curr.rating,
      });
    } else {
      const newEntry = {
        id: curr.name,
        data: [
          {
            x: dayjs(curr.month).format('YYYY-MM'),
            y: curr.rating,
          },
        ],
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .map((curr) => {
    return {
      id: curr.id,
      data: [
        {
          x: '2023-04',
          y: curr.data.find((el) => el.x === '2023-04')?.y || null,
        },
        {
          x: '2023-05',
          y: curr.data.find((el) => el.x === '2023-05')?.y || null,
        },
        {
          x: '2023-06',
          y: curr.data.find((el) => el.x === '2023-06')?.y || null,
        },
        {
          x: '2023-07',
          y: curr.data.find((el) => el.x === '2023-07')?.y || null,
        },
        {
          x: '2023-08',
          y: curr.data.find((el) => el.x === '2023-08')?.y || null,
        },
        {
          x: '2023-09',
          y: curr.data.find((el) => el.x === '2023-09')?.y || null,
        },
        {
          x: '2023-10',
          y: curr.data.find((el) => el.x === '2023-10')?.y || null,
        },
        {
          x: '2023-11',
          y: curr.data.find((el) => el.x === '2023-11')?.y || null,
        },
        {
          x: '2023-12',
          y: curr.data.find((el) => el.x === '2023-12')?.y || null,
        },
        {
          x: '2024-01',
          y: curr.data.find((el) => el.x === '2024-01')?.y || null,
        },
        {
          x: '2024-02',
          y: curr.data.find((el) => el.x === '2024-02')?.y || null,
        },
        {
          x: '2024-03',
          y: curr.data.find((el) => el.x === '2024-03')?.y || null,
        },
      ],
    };
  });
