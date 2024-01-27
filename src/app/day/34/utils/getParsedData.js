import rawValues from '../data/values.json';

const parseNumber = (value) =>
  typeof value === 'number' ? value : Number(value.replace(/[,]/g, '.'));

const total = rawValues.reduce((acc, curr, index) => {
  if (index === 0) {
    Object.keys(curr).forEach((el) => {
      if (el !== 'country') {
        const newValue = {
          year: el,
          value: parseNumber(curr[el]),
        };
        acc.push(newValue);
      }
    });
  } else {
    Object.keys(curr).forEach((act) => {
      const exists = acc.findIndex((el) => el.year === act);
      if (exists < 0) return acc;
      acc[exists].value += parseNumber(curr[act]);
    });
  }
  return acc;
}, []);

export const totalData = [
  {
    label: 'Average % of dept',
    data: total
      .map((el) => ({
        date: el.year,
        value: el.value / rawValues.length,
      }))
      .reverse(),
  },
];

export const vs2013 = {
  labels: rawValues.map((el) => el.country),
  dataset: [
    {
      label: 'vs 2013-Q3',
      data: rawValues.map(
        (el) =>
          ((parseNumber(el['2023-Q3']) - parseNumber(el['2013-Q3'])) /
            parseNumber(el['2013-Q3'])) *
          100
      ),
      backgroundColor: rawValues.map((el) => {
        const value =
          ((parseNumber(el['2023-Q3']) - parseNumber(el['2013-Q3'])) /
            parseNumber(el['2013-Q3'])) *
          100;
        return value > 0 ? '#B80000' : '#176B87';
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
    '2023-Q3',
    '2023-Q2',
    '2023-Q1',
    '2022-Q4',
    '2022-Q3',
    '2022-Q2',
    '2022-Q1',
    '2021-Q4',
    '2021-Q3',
    '2021-Q2',
    '2021-Q1',
    '2020-Q4',
    '2020-Q3',
    '2020-Q2',
    '2020-Q1',
    '2019-Q4',
    '2019-Q3',
    '2019-Q2',
    '2019-Q1',
    '2018-Q4',
    '2018-Q3',
    '2018-Q2',
    '2018-Q1',
    '2017-Q4',
    '2017-Q3',
    '2017-Q2',
    '2017-Q1',
    '2016-Q4',
    '2016-Q3',
    '2016-Q2',
    '2016-Q1',
    '2015-Q4',
    '2015-Q3',
    '2015-Q2',
    '2015-Q1',
    '2014-Q4',
    '2014-Q3',
    '2014-Q2',
    '2014-Q1',
    '2013-Q4',
    '2013-Q3',
  ].reverse(),
  dataset: rawValues.map((el) => {
    return [
      {
        label: '% of dept',
        data: Object.keys(el)
          .map((key) => {
            if (key !== 'country') {
              return parseNumber(el[key]);
            } else return 0;
          })
          .reverse()
          .slice(0, -1),
        backgroundColor:
          parseNumber(el['2023-Q3']) - parseNumber(el['2013-Q3']) > 0
            ? '#B80000'
            : '#176B87',
      },
    ];
  }),
};
