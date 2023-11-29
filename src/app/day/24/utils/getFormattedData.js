import rawData from '../data/medianIncome.json';
import rawFamilyData from '../data/splitbyfamilytype.json';

const years = [
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
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
];
const infoData = {
  italy:
    rawData.data.dataSets[0].series['0:0:0:0:0:0:0:0:0:0:0:0:0:0'].observations,
  center:
    rawData.data.dataSets[0].series['0:3:0:0:0:0:0:5:0:0:0:0:0:0'].observations,
  sud: rawData.data.dataSets[0].series['0:4:0:0:0:0:0:5:0:0:0:0:0:0']
    .observations,
  islands:
    rawData.data.dataSets[0].series['0:5:0:0:0:0:0:5:0:0:0:0:0:0'].observations,
  nordovest:
    rawData.data.dataSets[0].series['0:1:0:0:0:0:0:5:0:0:0:0:0:0'].observations,
  nordest:
    rawData.data.dataSets[0].series['0:2:0:0:0:0:0:5:0:0:0:0:0:0'].observations,
};
const infoFamilyData = {
  singleUnder65:
    rawFamilyData.data.dataSets[0].series['0:0:0:0:0:0:0:5:0:0:0:0:0:0']
      .observations,
  other:
    rawFamilyData.data.dataSets[0].series['0:0:0:0:0:0:0:6:0:0:0:0:0:0']
      .observations,
  singleOver65:
    rawFamilyData.data.dataSets[0].series['0:0:0:0:0:0:0:7:0:0:0:0:0:0']
      .observations,
  coupleWithChildren:
    rawFamilyData.data.dataSets[0].series['0:0:0:0:0:0:0:1:0:0:0:0:0:0']
      .observations,
  coupleWithAdultSons:
    rawFamilyData.data.dataSets[0].series['0:0:0:0:0:0:0:2:0:0:0:0:0:0']
      .observations,
  singleWithChildren:
    rawFamilyData.data.dataSets[0].series['0:0:0:0:0:0:0:3:0:0:0:0:0:0']
      .observations,
  singleWithAdultSons:
    rawFamilyData.data.dataSets[0].series['0:0:0:0:0:0:0:4:0:0:0:0:0:0']
      .observations,
};

export const italyTotalData = [
  {
    label: 'Italy',
    data: Object.keys(infoData.italy).map((index) => {
      return {
        date: years[index],
        value: Number(infoData.italy[index][0]),
      };
    }),
  },
];

export const zoneTotalData = [
  {
    label: 'Nord Ovest',
    data: Object.keys(infoData.nordovest).map((index) => {
      return {
        date: years[index],
        value: Number(infoData.nordovest[index][0]),
      };
    }),
  },
  {
    label: 'Nord Est',
    data: Object.keys(infoData.nordest).map((index) => {
      return {
        date: years[index],
        value: Number(infoData.nordest[index][0]),
      };
    }),
  },
  {
    label: 'Center',
    data: Object.keys(infoData.center).map((index) => {
      return {
        date: years[index],
        value: Number(infoData.center[index][0]),
      };
    }),
  },
  {
    label: 'Sud',
    data: Object.keys(infoData.sud).map((index) => {
      return {
        date: years[index],
        value: Number(infoData.sud[index][0]),
      };
    }),
  },
  {
    label: 'Islands',
    data: Object.keys(infoData.islands).map((index) => {
      return {
        date: years[index],
        value: Number(infoData.islands[index][0]),
      };
    }),
  },
];

export const splitByFamilyType = years.map((year, index) => {
  return {
    year: year,
    'Single Under 65': Number(infoFamilyData.singleUnder65[index][0]),
    'Single Over 65': Number(infoFamilyData.singleOver65[index][0]),
    'Single With Children': Number(infoFamilyData.singleWithChildren[index][0]),
    'Single With Adult Sons': Number(
      infoFamilyData.singleWithAdultSons[index][0]
    ),
    'Couple With Children': Number(infoFamilyData.coupleWithChildren[index][0]),
    'Couple With Adult Sons': Number(
      infoFamilyData.coupleWithAdultSons[index][0]
    ),
  };
});

export const lastYearComparisonDataByRegion = [
  {
    id: 'Single Under 65',
    2021: Number(infoFamilyData.singleUnder65['18'][0]),
    2003: Number(infoFamilyData.singleUnder65[0][0]),
  },
  {
    id: 'Single Over 65',
    2021: Number(infoFamilyData.singleOver65['18'][0]),
    2003: Number(infoFamilyData.singleOver65[0][0]),
  },
  {
    id: 'Single With Children',
    2021: Number(infoFamilyData.singleWithChildren['18'][0]),
    2003: Number(infoFamilyData.singleWithChildren[0][0]),
  },
  {
    id: 'Single With Adult Sons',
    2021: Number(infoFamilyData.singleWithAdultSons['18'][0]),
    2003: Number(infoFamilyData.singleWithAdultSons[0][0]),
  },
  {
    id: 'Couple With Children',
    2021: Number(infoFamilyData.coupleWithChildren['18'][0]),
    2003: Number(infoFamilyData.coupleWithChildren[0][0]),
  },
  {
    id: 'Couple With Adult Sons',
    2021: Number(infoFamilyData.coupleWithAdultSons['18'][0]),
    2003: Number(infoFamilyData.coupleWithAdultSons[0][0]),
  },
  {
    id: 'Other',
    2021: Number(infoFamilyData.other['18'][0]),
    2003: Number(infoFamilyData.other[0][0]),
  },
].reverse();
