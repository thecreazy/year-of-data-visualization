import rawValues from '../data/values.json';

export const palette = [
  '#FFAE00',
  '#F2B807',
  '#F08605',
  '#C32104',
  '#6F0301',
  '#478A67',
  '#FFB13D',
  '#B54A26',
  '#8F2800',
];

export const splitByQuarter = rawValues.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.quarter === curr.q);
  if (foundEntry !== -1) {
    acc[foundEntry][curr.category] = curr.data;
  } else {
    const newEntry = {
      quarter: curr.q,
      [curr.category]: curr.data,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const labels = [
  '2018 - Q1',
  '2018 - Q2',
  '2018 - Q3',
  '2018 - Q4',
  '2019 - Q1',
  '2019 - Q2',
  '2019 - Q3',
  '2019 - Q4',
  '2020 - Q1',
  '2020 - Q2',
  '2020 - Q3',
  '2020 - Q4',
  '2021 - Q1',
  '2021 - Q2',
  '2021 - Q3',
  '2021 - Q4',
];

export const valuesPerCategory = {
  labels,
  data: [
    {
      label: '0km-10km',
      data: rawValues.reduce((acc, curr) => {
        if (curr.category !== '0km-10km') return acc;
        acc.push(curr.data);
        return acc;
      }, []),
      borderColor: palette[0],
      backgroundColor: palette[0],
    },
    {
      label: '10km-20km',
      data: rawValues.reduce((acc, curr) => {
        if (curr.category !== '10km-20km') return acc;
        acc.push(curr.data);
        return acc;
      }, []),
      borderColor: palette[1],
      backgroundColor: palette[1],
    },
    {
      label: '20km-30km',
      data: rawValues.reduce((acc, curr) => {
        if (curr.category !== '20km-30km') return acc;
        acc.push(curr.data);
        return acc;
      }, []),
      borderColor: palette[2],
      backgroundColor: palette[2],
    },
    {
      label: '30km-40km',
      data: rawValues.reduce((acc, curr) => {
        if (curr.category !== '30km-40km') return acc;
        acc.push(curr.data);
        return acc;
      }, []),
      borderColor: palette[3],
      backgroundColor: palette[3],
    },
    {
      label: '40km-50km',
      data: rawValues.reduce((acc, curr) => {
        if (curr.category !== '40km-50km') return acc;
        acc.push(curr.data);
        return acc;
      }, []),
      borderColor: palette[4],
      backgroundColor: palette[4],
    },
    {
      label: '50km-60km',
      data: rawValues.reduce((acc, curr) => {
        if (curr.category !== '50km-60km') return acc;
        acc.push(curr.data);
        return acc;
      }, []),
      borderColor: palette[5],
      backgroundColor: palette[5],
    },
    {
      label: '60km-70km',
      data: rawValues.reduce((acc, curr) => {
        if (curr.category !== '60km-70km') return acc;
        acc.push(curr.data);
        return acc;
      }, []),
      borderColor: palette[6],
      backgroundColor: palette[6],
    },
    {
      label: '70km-80km',
      data: rawValues.reduce((acc, curr) => {
        if (curr.category !== '70km-80km') return acc;
        acc.push(curr.data);
        return acc;
      }, []),
      borderColor: palette[7],
      backgroundColor: palette[7],
    },
    {
      label: '80km-',
      data: rawValues.reduce((acc, curr) => {
        if (curr.category !== '80km-') return acc;
        acc.push(curr.data);
        return acc;
      }, []),
      borderColor: palette[8],
      backgroundColor: palette[8],
    },
  ],
};

export const totalData = {
  labels: labels,
  data: [
    {
      label: 'Employees',
      data: rawValues
        .reduce((acc, curr) => {
          const foundEntry = acc.findIndex((el) => el.quarter === curr.q);
          if (foundEntry !== -1) {
            acc[foundEntry].value += curr.data;
          } else {
            const newEntry = {
              quarter: curr.q,
              value: curr.data,
            };
            acc.push(newEntry);
          }
          return acc;
        }, [])
        .map((el) => el.value),
      borderColor: '#8f2800',
      backgroundColor: '#8f2800',
    },
  ],
};
