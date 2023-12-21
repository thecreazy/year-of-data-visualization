import rawSplit from '../data/split.json';
import rawTotals from '../data/totals.json';

export const totalsData = rawTotals;
export const revenuesRegionData = [
  {
    year: 2020,
    UCAN: rawSplit.UCAN[0].revenues,
    EMEA: rawSplit.EMEA[0].revenues,
    LATAM: rawSplit.LATAM[0].revenues,
    APAC: rawSplit.APAC[0].revenues,
  },
  {
    year: 2021,
    UCAN: rawSplit.UCAN[1].revenues,
    EMEA: rawSplit.EMEA[1].revenues,
    LATAM: rawSplit.LATAM[1].revenues,
    APAC: rawSplit.APAC[1].revenues,
  },
  {
    year: 2022,
    UCAN: rawSplit.UCAN[2].revenues,
    EMEA: rawSplit.EMEA[2].revenues,
    LATAM: rawSplit.LATAM[2].revenues,
    APAC: rawSplit.APAC[2].revenues,
  },
];
export const membershipRegionData = [
  {
    year: 2020,
    UCAN: rawSplit.UCAN[0].membership,
    EMEA: rawSplit.EMEA[0].membership,
    LATAM: rawSplit.LATAM[0].membership,
    APAC: rawSplit.APAC[0].membership,
  },
  {
    year: 2021,
    UCAN: rawSplit.UCAN[1].membership,
    EMEA: rawSplit.EMEA[1].membership,
    LATAM: rawSplit.LATAM[1].membership,
    APAC: rawSplit.APAC[1].membership,
  },
  {
    year: 2022,
    UCAN: rawSplit.UCAN[2].membership,
    EMEA: rawSplit.EMEA[2].membership,
    LATAM: rawSplit.LATAM[2].membership,
    APAC: rawSplit.APAC[2].membership,
  },
];
export const costRegionData = [
  {
    year: 2020,
    UCAN: rawSplit.UCAN[0].avgPayment,
    EMEA: rawSplit.EMEA[0].avgPayment,
    LATAM: rawSplit.LATAM[0].avgPayment,
    APAC: rawSplit.APAC[0].avgPayment,
  },
  {
    year: 2021,
    UCAN: rawSplit.UCAN[1].avgPayment,
    EMEA: rawSplit.EMEA[1].avgPayment,
    LATAM: rawSplit.LATAM[1].avgPayment,
    APAC: rawSplit.APAC[1].avgPayment,
  },
  {
    year: 2022,
    UCAN: rawSplit.UCAN[2].avgPayment,
    EMEA: rawSplit.EMEA[2].avgPayment,
    LATAM: rawSplit.LATAM[2].avgPayment,
    APAC: rawSplit.APAC[2].avgPayment,
  },
];

export const tableColumns = [
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Revenues',
    dataIndex: 'revenues',
    key: 'revenues',
    align: 'right',
  },
  {
    title: 'Membership',
    dataIndex: 'membership',
    key: 'membership',
    align: 'right',
  },
  {
    title: 'Avg Membership Cost',
    dataIndex: 'avgPayment',
    key: 'avgPayment',
    align: 'right',
  },
];

const UCANData = rawSplit.UCAN.reduce(
  (acc, curr, index) => {
    if (index == 2) {
      acc.region = 'UCAN';
      acc.year = curr.year;
      acc.revenues = curr.revenues;
      acc.membership = curr.membership;
      acc.avgPayment = `${curr.avgPayment}$`;
      acc.children = acc.children.reverse();
    } else {
      acc.children.push({
        region: 'UCAN',
        year: curr.year,
        revenues: curr.revenues,
        membership: curr.membership,
        avgPayment: `${curr.avgPayment}$`,
      });
    }
    return acc;
  },
  { children: [] }
);
const EMEAData = rawSplit.EMEA.reduce(
  (acc, curr, index) => {
    if (index == 2) {
      acc.region = 'EMEA';
      acc.year = curr.year;
      acc.revenues = curr.revenues;
      acc.membership = curr.membership;
      acc.avgPayment = `${curr.avgPayment}$`;
      acc.children = acc.children.reverse();
    } else {
      acc.children.push({
        region: 'EMEA',
        year: curr.year,
        revenues: curr.revenues,
        membership: curr.membership,
        avgPayment: `${curr.avgPayment}$`,
      });
    }
    return acc;
  },
  { children: [] }
);
const LATAMData = rawSplit.LATAM.reduce(
  (acc, curr, index) => {
    if (index == 2) {
      acc.region = 'LATAM';
      acc.year = curr.year;
      acc.revenues = curr.revenues;
      acc.membership = curr.membership;
      acc.avgPayment = `${curr.avgPayment}$`;
      acc.children = acc.children.reverse();
    } else {
      acc.children.push({
        region: 'LATAM',
        year: curr.year,
        revenues: curr.revenues,
        membership: curr.membership,
        avgPayment: `${curr.avgPayment}$`,
      });
    }
    return acc;
  },
  { children: [] }
);
const APACData = rawSplit.APAC.reduce(
  (acc, curr, index) => {
    if (index == 2) {
      acc.region = 'APAC';
      acc.year = curr.year;
      acc.revenues = curr.revenues;
      acc.membership = curr.membership;
      acc.avgPayment = `${curr.avgPayment}$`;
      acc.children = acc.children.reverse();
    } else {
      acc.children.push({
        region: 'APAC',
        year: curr.year,
        revenues: curr.revenues,
        membership: curr.membership,
        avgPayment: `${curr.avgPayment}$`,
      });
    }
    return acc;
  },
  { children: [] }
);
export const tableData = [UCANData, EMEAData, LATAMData, APACData];
