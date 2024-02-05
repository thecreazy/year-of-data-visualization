import rawData from '../data/data.json';

const years = [
  '1999',
  '2000',
  '2001',
  '2002',
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
  '2022',
];
const infoData = {
  italy:
    rawData.data.dataSets[0].series['0:0:0:0:0:0:0:0:0:0:0:0:0'].observations,
  nord: rawData.data.dataSets[0].series['0:34:0:0:0:0:0:0:0:0:0:0:0']
    .observations,
  center:
    rawData.data.dataSets[0].series['0:64:0:0:0:0:0:0:0:0:0:0:0'].observations,
  sud: rawData.data.dataSets[0].series['0:90:0:0:0:0:0:0:0:0:0:0:0']
    .observations,
  islands:
    rawData.data.dataSets[0].series['0:121:0:0:0:0:0:0:0:0:0:0:0'].observations,
  piemonte:
    rawData.data.dataSets[0].series['0:6:0:0:0:0:0:0:0:0:0:0:0'].observations,
  valleDaosta:
    rawData.data.dataSets[0].series['0:15:0:0:0:0:0:0:0:0:0:0:0'].observations,
  liguria:
    rawData.data.dataSets[0].series['0:17:0:0:0:0:0:0:0:0:0:0:0'].observations,
  lombardia:
    rawData.data.dataSets[0].series['0:22:0:0:0:0:0:0:0:0:0:0:0'].observations,
  trentino:
    rawData.data.dataSets[0].series['0:63:0:0:0:0:0:0:0:0:0:0:0'].observations,
  veneto:
    rawData.data.dataSets[0].series['0:40:0:0:0:0:0:0:0:0:0:0:0'].observations,
  friuli:
    rawData.data.dataSets[0].series['0:48:0:0:0:0:0:0:0:0:0:0:0'].observations,
  emilia:
    rawData.data.dataSets[0].series['0:53:0:0:0:0:0:0:0:0:0:0:0'].observations,
  toscana:
    rawData.data.dataSets[0].series['0:65:0:0:0:0:0:0:0:0:0:0:0'].observations,
  umbria:
    rawData.data.dataSets[0].series['0:76:0:0:0:0:0:0:0:0:0:0:0'].observations,
  marche:
    rawData.data.dataSets[0].series['0:79:0:0:0:0:0:0:0:0:0:0:0'].observations,
  lazio:
    rawData.data.dataSets[0].series['0:84:0:0:0:0:0:0:0:0:0:0:0'].observations,
  abruzzo:
    rawData.data.dataSets[0].series['0:91:0:0:0:0:0:0:0:0:0:0:0'].observations,
  molise:
    rawData.data.dataSets[0].series['0:96:0:0:0:0:0:0:0:0:0:0:0'].observations,
  campania:
    rawData.data.dataSets[0].series['0:99:0:0:0:0:0:0:0:0:0:0:0'].observations,
  puglia:
    rawData.data.dataSets[0].series['0:105:0:0:0:0:0:0:0:0:0:0:0'].observations,
  basilicata:
    rawData.data.dataSets[0].series['0:111:0:0:0:0:0:0:0:0:0:0:0'].observations,
  calabria:
    rawData.data.dataSets[0].series['0:114:0:0:0:0:0:0:0:0:0:0:0'].observations,
  sicilia:
    rawData.data.dataSets[0].series['0:122:0:0:0:0:0:0:0:0:0:0:0'].observations,
  sardegna:
    rawData.data.dataSets[0].series['0:132:0:0:0:0:0:0:0:0:0:0:0'].observations,
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
    label: 'Nord',
    data: Object.keys(infoData.nord).map((index) => {
      return {
        date: years[index],
        value: Number(infoData.nord[index][0]),
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

export const lastYearDataByRegion = [
  {
    id: 'Piemonte',
    value: Number(infoData.piemonte['23'][0]),
  },
  {
    id: `Valle d'Aosta`,
    value: Number(infoData.valleDaosta['23'][0]),
  },
  { id: 'Liguria', value: Number(infoData.liguria['23'][0]) },
  { id: 'Lombardia', value: Number(infoData.lombardia['23'][0]) },
  {
    id: 'Trentino-Alto Adige',
    value: Number(infoData.trentino['23'][0]),
  },
  { id: 'Veneto', value: Number(infoData.veneto['23'][0]) },
  { id: 'Friuli-Venezia Giulia', value: Number(infoData.friuli['23'][0]) },
  { id: 'Emilia-Romagna', value: Number(infoData.emilia['23'][0]) },
  { id: 'Toscana', value: Number(infoData.toscana['23'][0]) },
  { id: 'Umbria', value: Number(infoData.umbria['23'][0]) },
  { id: 'Marche', value: Number(infoData.marche['23'][0]) },
  { id: 'Lazio', value: Number(infoData.lazio['23'][0]) },
  { id: 'Abruzzo', value: Number(infoData.abruzzo['23'][0]) },
  { id: 'Molise', value: Number(infoData.molise['23'][0]) },
  { id: 'Campania', value: Number(infoData.campania['23'][0]) },
  { id: 'Puglia', value: Number(infoData.puglia['23'][0]) },
  { id: 'Basilicata', value: Number(infoData.basilicata['23'][0]) },
  { id: 'Calabria', value: Number(infoData.calabria['23'][0]) },
  { id: 'Sicilia', value: Number(infoData.sicilia['23'][0]) },
  { id: 'Sardegna', value: Number(infoData.sardegna['23'][0]) },
];

export const lastYearComparisonDataByRegion = [
  {
    id: 'Piemonte',
    2022: Number(infoData.piemonte['23'][0]),
    1999: Number(infoData.piemonte['0'][0]),
  },
  {
    id: `Valle d'Aosta`,
    2022: Number(infoData.valleDaosta['23'][0]),
    1999: Number(infoData.valleDaosta['0'][0]),
  },
  {
    id: 'Liguria',
    2022: Number(infoData.liguria['23'][0]),
    1999: Number(infoData.liguria['0'][0]),
  },
  {
    id: 'Lombardia',
    2022: Number(infoData.lombardia['23'][0]),
    1999: Number(infoData.lombardia['0'][0]),
  },

  {
    id: 'Trentino-Alto Adige',
    2022: Number(infoData.trentino['23'][0]),
    1999: Number(infoData.trentino['0'][0]),
  },
  {
    id: 'Veneto',
    2022: Number(infoData.veneto['23'][0]),
    1999: Number(infoData.veneto['0'][0]),
  },
  {
    id: 'Friuli-Venezia Giulia',
    2022: Number(infoData.friuli['23'][0]),
    1999: Number(infoData.friuli['0'][0]),
  },
  {
    id: 'Emilia-Romagna',
    2022: Number(infoData.emilia['23'][0]),
    1999: Number(infoData.emilia['0'][0]),
  },
  {
    id: 'Toscana',
    2022: Number(infoData.toscana['23'][0]),
    1999: Number(infoData.toscana['0'][0]),
  },
  {
    id: 'Umbria',
    2022: Number(infoData.umbria['23'][0]),
    1999: Number(infoData.umbria['0'][0]),
  },
  {
    id: 'Marche',
    2022: Number(infoData.marche['23'][0]),
    1999: Number(infoData.marche['0'][0]),
  },
  {
    id: 'Lazio',
    2022: Number(infoData.lazio['23'][0]),
    1999: Number(infoData.lazio['0'][0]),
  },
  {
    id: 'Abruzzo',
    2022: Number(infoData.abruzzo['23'][0]),
    1999: Number(infoData.abruzzo['0'][0]),
  },
  {
    id: 'Molise',
    2022: Number(infoData.molise['23'][0]),
    1999: Number(infoData.molise['0'][0]),
  },
  {
    id: 'Campania',
    2022: Number(infoData.campania['23'][0]),
    1999: Number(infoData.campania['0'][0]),
  },
  {
    id: 'Puglia',
    2022: Number(infoData.puglia['23'][0]),
    1999: Number(infoData.puglia['0'][0]),
  },
  {
    id: 'Basilicata',
    2022: Number(infoData.basilicata['23'][0]),
    1999: Number(infoData.basilicata['0'][0]),
  },
  {
    id: 'Calabria',
    2022: Number(infoData.calabria['23'][0]),
    1999: Number(infoData.calabria['0'][0]),
  },
  {
    id: 'Sicilia',
    2022: Number(infoData.sicilia['23'][0]),
    1999: Number(infoData.sicilia['0'][0]),
  },
  {
    id: 'Sardegna',
    2022: Number(infoData.sardegna['23'][0]),
    1999: Number(infoData.sardegna['0'][0]),
  },
];
