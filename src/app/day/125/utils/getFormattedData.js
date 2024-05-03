import rawData from '../data/data.json';

const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
const infoData = {
  italy:
    rawData.data.dataSets[0].series['0:0:2:0:0:0:0:0:0:0:0:0:0'].observations,
  nordOvest:
    rawData.data.dataSets[0].series['0:1:2:0:0:0:0:0:0:0:0:0:0'].observations,
  nordEst:
    rawData.data.dataSets[0].series['0:6:2:0:0:0:0:0:0:0:0:0:0'].observations,
  center:
    rawData.data.dataSets[0].series['0:13:2:0:0:0:0:0:0:0:0:0:0'].observations,
  sud: rawData.data.dataSets[0].series['0:18:2:0:0:0:0:0:0:0:0:0:0']
    .observations,
  islands:
    rawData.data.dataSets[0].series['0:25:2:0:0:0:0:0:0:0:0:0:0'].observations,
  piemonte:
    rawData.data.dataSets[0].series['0:2:2:0:0:0:0:0:0:0:0:0:0'].observations,
  valleDaosta:
    rawData.data.dataSets[0].series['0:3:2:0:0:0:0:0:0:0:0:0:0'].observations,
  liguria:
    rawData.data.dataSets[0].series['0:4:2:0:0:0:0:0:0:0:0:0:0'].observations,
  lombardia:
    rawData.data.dataSets[0].series['0:5:2:0:0:0:0:0:0:0:0:0:0'].observations,
  trentino:
    rawData.data.dataSets[0].series['0:12:2:0:0:0:0:0:0:0:0:0:0'].observations,
  veneto:
    rawData.data.dataSets[0].series['0:9:2:0:0:0:0:0:0:0:0:0:0'].observations,
  friuli:
    rawData.data.dataSets[0].series['0:10:2:0:0:0:0:0:0:0:0:0:0'].observations,
  emilia:
    rawData.data.dataSets[0].series['0:11:2:0:0:0:0:0:0:0:0:0:0'].observations,
  toscana:
    rawData.data.dataSets[0].series['0:14:2:0:0:0:0:0:0:0:0:0:0'].observations,
  umbria:
    rawData.data.dataSets[0].series['0:15:2:0:0:0:0:0:0:0:0:0:0'].observations,
  marche:
    rawData.data.dataSets[0].series['0:16:2:0:0:0:0:0:0:0:0:0:0'].observations,
  lazio:
    rawData.data.dataSets[0].series['0:17:2:0:0:0:0:0:0:0:0:0:0'].observations,
  abruzzo:
    rawData.data.dataSets[0].series['0:19:2:0:0:0:0:0:0:0:0:0:0'].observations,
  molise:
    rawData.data.dataSets[0].series['0:20:2:0:0:0:0:0:0:0:0:0:0'].observations,
  campania:
    rawData.data.dataSets[0].series['0:21:2:0:0:0:0:0:0:0:0:0:0'].observations,
  puglia:
    rawData.data.dataSets[0].series['0:22:2:0:0:0:0:0:0:0:0:0:0'].observations,
  basilicata:
    rawData.data.dataSets[0].series['0:23:2:0:0:0:0:0:0:0:0:0:0'].observations,
  calabria:
    rawData.data.dataSets[0].series['0:24:2:0:0:0:0:0:0:0:0:0:0'].observations,
  sicilia:
    rawData.data.dataSets[0].series['0:26:2:0:0:0:0:0:0:0:0:0:0'].observations,
  sardegna:
    rawData.data.dataSets[0].series['0:27:2:0:0:0:0:0:0:0:0:0:0'].observations,
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
    data: Object.keys(infoData.nordOvest).map((index) => {
      return {
        date: years[index],
        value:
          Number(infoData.nordOvest[index][0]) +
          Number(infoData.nordEst[index][0]),
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
    value: Number(infoData.piemonte['6'][0]),
  },
  {
    id: `Valle d'Aosta`,
    value: Number(infoData.valleDaosta['6'][0]),
  },
  { id: 'Liguria', value: Number(infoData.liguria['6'][0]) },
  { id: 'Lombardia', value: Number(infoData.lombardia['6'][0]) },
  {
    id: 'Trentino-Alto Adige',
    value: Number(infoData.trentino['6'][0]),
  },
  { id: 'Veneto', value: Number(infoData.veneto['6'][0]) },
  { id: 'Friuli-Venezia Giulia', value: Number(infoData.friuli['6'][0]) },
  { id: 'Emilia-Romagna', value: Number(infoData.emilia['6'][0]) },
  { id: 'Toscana', value: Number(infoData.toscana['6'][0]) },
  { id: 'Umbria', value: Number(infoData.umbria['6'][0]) },
  { id: 'Marche', value: Number(infoData.marche['6'][0]) },
  { id: 'Lazio', value: Number(infoData.lazio['6'][0]) },
  { id: 'Abruzzo', value: Number(infoData.abruzzo['6'][0]) },
  { id: 'Molise', value: Number(infoData.molise['6'][0]) },
  { id: 'Campania', value: Number(infoData.campania['6'][0]) },
  { id: 'Puglia', value: Number(infoData.puglia['6'][0]) },
  { id: 'Basilicata', value: Number(infoData.basilicata['6'][0]) },
  { id: 'Calabria', value: Number(infoData.calabria['6'][0]) },
  { id: 'Sicilia', value: Number(infoData.sicilia['6'][0]) },
  { id: 'Sardegna', value: Number(infoData.sardegna['6'][0]) },
];

export const lastYearComparisonDataByRegion = [
  {
    id: 'Piemonte',
    2021: Number(infoData.piemonte['6'][0]),
    2015: Number(infoData.piemonte['0'][0]),
  },
  {
    id: `Valle d'Aosta`,
    2021: Number(infoData.valleDaosta['6'][0]),
    2015: Number(infoData.valleDaosta['0'][0]),
  },
  {
    id: 'Liguria',
    2021: Number(infoData.liguria['6'][0]),
    2015: Number(infoData.liguria['0'][0]),
  },
  {
    id: 'Lombardia',
    2021: Number(infoData.lombardia['6'][0]),
    2015: Number(infoData.lombardia['0'][0]),
  },

  {
    id: 'Trentino-Alto Adige',
    2021: Number(infoData.trentino['6'][0]),
    2015: Number(infoData.trentino['0'][0]),
  },
  {
    id: 'Veneto',
    2021: Number(infoData.veneto['6'][0]),
    2015: Number(infoData.veneto['0'][0]),
  },
  {
    id: 'Friuli-Venezia Giulia',
    2021: Number(infoData.friuli['6'][0]),
    2015: Number(infoData.friuli['0'][0]),
  },
  {
    id: 'Emilia-Romagna',
    2021: Number(infoData.emilia['6'][0]),
    2015: Number(infoData.emilia['0'][0]),
  },
  {
    id: 'Toscana',
    2021: Number(infoData.toscana['6'][0]),
    2015: Number(infoData.toscana['0'][0]),
  },
  {
    id: 'Umbria',
    2021: Number(infoData.umbria['6'][0]),
    2015: Number(infoData.umbria['0'][0]),
  },
  {
    id: 'Marche',
    2021: Number(infoData.marche['6'][0]),
    2015: Number(infoData.marche['0'][0]),
  },
  {
    id: 'Lazio',
    2021: Number(infoData.lazio['6'][0]),
    2015: Number(infoData.lazio['0'][0]),
  },
  {
    id: 'Abruzzo',
    2021: Number(infoData.abruzzo['6'][0]),
    2015: Number(infoData.abruzzo['0'][0]),
  },
  {
    id: 'Molise',
    2021: Number(infoData.molise['6'][0]),
    2015: Number(infoData.molise['0'][0]),
  },
  {
    id: 'Campania',
    2021: Number(infoData.campania['6'][0]),
    2015: Number(infoData.campania['0'][0]),
  },
  {
    id: 'Puglia',
    2021: Number(infoData.puglia['6'][0]),
    2015: Number(infoData.puglia['0'][0]),
  },
  {
    id: 'Basilicata',
    2021: Number(infoData.basilicata['6'][0]),
    2015: Number(infoData.basilicata['0'][0]),
  },
  {
    id: 'Calabria',
    2021: Number(infoData.calabria['6'][0]),
    2015: Number(infoData.calabria['0'][0]),
  },
  {
    id: 'Sicilia',
    2021: Number(infoData.sicilia['6'][0]),
    2015: Number(infoData.sicilia['0'][0]),
  },
  {
    id: 'Sardegna',
    2021: Number(infoData.sardegna['6'][0]),
    2015: Number(infoData.sardegna['0'][0]),
  },
];
