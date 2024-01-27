import rawValues from '../data/values.json';

const parseNumber = (value) =>
  typeof value === 'number' ? value : Number(value.replace(/[.]/g, ''));

const total = rawValues.reduce((acc, curr, index) => {
  if (index === 0) {
    Object.keys(curr).forEach((el) => {
      if (!isNaN(Number(el))) {
        const newValue = {
          year: el,
          population: parseNumber(curr[el]),
        };
        acc.push(newValue);
      }
    });
  } else {
    Object.keys(curr).forEach((act) => {
      const exists = acc.findIndex((el) => el.year === act);
      if (exists < 0) return acc;
      acc[exists].population += parseNumber(curr[act]);
    });
  }
  return acc;
}, []);

export const totalData = [
  {
    label: 'Population',
    data: total.map((el) => ({
      date: el.year,
      value: el.population,
    })),
  },
];
export const vs2014 = {
  labels: rawValues.map((el) => el.country),
  dataset: [
    {
      label: 'vs 2014',
      data: rawValues.map(
        (el) =>
          ((parseNumber(el['2022']) - parseNumber(el['2014'])) /
            parseNumber(el['2014'])) *
          100
      ),
      backgroundColor: rawValues.map((el) => {
        const value =
          ((parseNumber(el['2022']) - parseNumber(el['2014'])) /
            parseNumber(el['2014'])) *
          100;
        return value > 0 ? '#5F8670' : '#B80000';
      }),
    },
  ],
};

export const countries = rawValues.map((el, index) => ({
  value: index,
  label: el.country,
}));

export const byCountry = {
  labels: [
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ],
  dataset: rawValues.map((el) => {
    return [
      {
        label: 'Total Population',
        data: Object.keys(el)
          .map((key) => {
            if (!isNaN(Number(key))) {
              return parseNumber(el[key]);
            } else return 0;
          })
          .slice(0, -1),
        backgroundColor:
          parseNumber(el['2022']) - parseNumber(el['2014']) > 0
            ? '#5F8670'
            : '#B80000',
      },
    ];
  }),
};
