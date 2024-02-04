import rawValues from '../data/values.json';

const parseNumber = (value) =>
  typeof value === 'number' ? value : Number(value.replace(/[.]/g, ''));

const total = rawValues.reduce((acc, curr, index) => {
  if (index === 0) {
    Object.keys(curr).forEach((el) => {
      if (!isNaN(Number(el))) {
        const newValue = {
          year: el,
          Employment: 0,
          'Unemployment rate': 0,
          Population: 0,
        };
        newValue[curr['Subject Descriptor']] = curr[el];
        acc.push(newValue);
      }
    });
  } else {
    Object.keys(curr).forEach((act) => {
      if (!isNaN(Number(act))) {
        const exists = acc.findIndex((el) => el.year === act);
        if (exists < 0) return acc;
        acc[exists][curr['Subject Descriptor']] += parseNumber(curr[act]);
      }
    });
  }
  return acc;
}, []);

const years = [
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
];

export const totalData = {
  labels: years,
  data: [
    {
      label: 'Unemployment',
      data: total.map((el) => el.Population - el.Employment),
      borderColor: '#002654',
      backgroundColor: '#002654',
      tension: 0.2,
    },
  ],
};

const getColor = (country) => {
  if (country === 'Canada') return '#D80621';
  if (country === 'France') return '#002654';
  if (country === 'Germany') return '#FFCC00';
  if (country === 'Italy') return '#008C45';
  if (country === 'Japan') return '#BC002D';
  if (country === 'United States') return '#0A3161';
  if (country === 'United Kingdom') return '#012169';
  return '#D80621';
};

export const totalDataPerCountry = {
  labels: years,
  data: rawValues.reduce((acc, curr) => {
    if (curr['Subject Descriptor'] !== 'Unemployment rate') return acc;
    acc.push({
      label: curr.Country,
      data: Object.keys(curr)
        .map((el) => {
          if (!isNaN(Number(el))) {
            return curr[el];
          } else null;
        })
        .filter((el) => el !== undefined),
      borderColor: getColor(curr.Country),
      backgroundColor: getColor(curr.Country),
      tension: 0.2,
    });
    return acc;
  }, []),
};

export const countries = totalDataPerCountry.data.map(
  (el, index) => ({
    value: index,
    label: el.label,
  }),
  []
);

export const byCountry = {
  labels: years,
  dataset: totalDataPerCountry.data.map((el) => {
    return [
      {
        label: 'Unemployment rate',
        data: el.data,
        backgroundColor:
          parseNumber(el.data[13]) - parseNumber(el.data[0]) > 0
            ? '#B80000'
            : '#5F8670',
      },
    ];
  }),
};
