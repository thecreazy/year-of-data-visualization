import { createColumnHelper } from '@tanstack/react-table';

import { clearFootballData } from '@internal/utils/clearFootballData';

import rawInternational from '../data/international.json';
import rawSeason from '../data/season.json';

export const clearSeasonData = clearFootballData(rawSeason);
export const clearIntarnationalData = clearFootballData(rawInternational);

export const seasonTotals = clearSeasonData.reduce(
  (acc, curr) => {
    acc.mins += curr.minutes;
    acc.goals += curr.goals;
    acc.assists += curr.assist;
    acc.cards += curr.yellow + curr.red;
    return acc;
  },
  {
    mins: 0,
    goals: 0,
    assists: 0,
    cards: 0,
  }
);
export const internationalTotals = clearIntarnationalData.reduce(
  (acc, curr) => {
    acc.mins += curr.minutes;
    acc.goals += curr.goals;
    acc.assists += curr.assist;
    acc.cards += curr.yellow + curr.red;
    return acc;
  },
  {
    mins: 0,
    goals: 0,
    assists: 0,
    cards: 0,
  }
);

const yearKeys = [...clearSeasonData, ...clearIntarnationalData]
  .map((el) => el.year)
  .filter((value, index, array) => array.indexOf(value) === index);

export const seasonValuesBar = clearSeasonData
  .reduce((acc, curr) => {
    const exists = acc.findIndex((el) => el.id === curr.year);
    if (exists > 0) {
      acc[exists].goals += curr.goals;
      acc[exists].assists += curr.assist;
    } else {
      acc.push({
        id: curr.year,
        goals: curr.goals,
        assists: curr.assist,
      });
    }
    return acc;
  }, [])
  .reverse();
export const internationalValuesBar = clearIntarnationalData
  .reduce((acc, curr) => {
    const exists = acc.findIndex((el) => el.id === curr.year);
    if (exists > 0) {
      acc[exists].goals += curr.goals;
      acc[exists].assists += curr.assist;
    } else {
      acc.push({
        id: curr.year,
        goals: curr.goals,
        assists: curr.assist,
      });
    }
    return acc;
  }, [])
  .reverse();

export const seasonValuesLine = {
  labels: clearSeasonData.map((el) => el.year),
  data: [
    {
      label: 'Minutes',
      data: clearSeasonData.map((el) => el.minutes),

      borderColor: '#012169',
      backgroundColor: '#012169',
    },
  ],
};
export const internationalValuesLine = {
  labels: clearIntarnationalData.map((el) => el.year),
  data: [
    {
      label: 'Minutes',
      data: clearIntarnationalData.map((el) => el.minutes),
      borderColor: '#012169',
      backgroundColor: '#012169',
    },
  ],
};

const columnHelper = createColumnHelper();
export const tableColumns = [
  columnHelper.accessor('year', {
    header: 'Season',
  }),
  columnHelper.accessor('team', {
    header: 'Team',
  }),
  columnHelper.accessor('competition', {
    header: 'Competition',
  }),
  columnHelper.accessor('country', {
    header: 'Country',
  }),
  columnHelper.accessor('mp', {
    header: 'Match',
  }),
  columnHelper.accessor('minutes', {
    header: 'Mins',
  }),
  columnHelper.accessor('goals', {
    header: 'goals',
  }),
  columnHelper.accessor('assist', {
    header: 'Assists',
  }),
  columnHelper.accessor('yellow', {
    header: 'Yellow C',
  }),
  columnHelper.accessor('red', {
    header: 'Red C',
  }),
];
export const tableColumnsOthers = [
  columnHelper.accessor('year', {
    header: 'Season',
  }),
  columnHelper.accessor('team', {
    header: 'Team',
  }),
  columnHelper.accessor('competition', {
    header: 'Competition',
  }),
  columnHelper.accessor('mp', {
    header: 'Match',
  }),
  columnHelper.accessor('minutes', {
    header: 'Mins',
  }),
  columnHelper.accessor('goals', {
    header: 'goals',
  }),
  columnHelper.accessor('assist', {
    header: 'Assists',
  }),
  columnHelper.accessor('yellow', {
    header: 'Yellow C',
  }),
  columnHelper.accessor('red', {
    header: 'Red C',
  }),
];

const teamsKeys = [...clearSeasonData, ...clearIntarnationalData]
  .map((el) => el.team)
  .filter((value, index, array) => array.indexOf(value) === index);

export const sankeyNodes = [
  ...yearKeys.map((el) => ({ id: el })),
  {
    id: 'Domestic Leagues',
  },
  {
    id: 'International',
  },
  ...teamsKeys.map((el) => ({ id: el })),
  {
    id: 'Total Goals',
  },
];

const totals = {
  international: {
    total: 0,
  },
  season: {
    total: 0,
  },
};

const seasonLinks = clearSeasonData.map((el) => {
  totals.season.total += el.goals;
  if (!totals.season[el.team]) totals.season[el.team] = 0;
  totals.season[el.team] += el.goals;
  return {
    source: el.year,
    target: 'Domestic Leagues',
    value: el.goals,
  };
});
const internationalLinks = clearIntarnationalData.map((el) => {
  totals.international.total += el.goals;
  if (!totals.international[el.team]) totals.international[el.team] = 0;
  totals.international[el.team] += el.goals;
  return {
    source: el.year,
    target: 'International',
    value: el.goals,
  };
});

const seasonTotalLink = Object.keys(totals.season).reduce((acc, curr) => {
  if (curr === 'total') return acc;
  acc.push({
    source: 'Domestic Leagues',
    target: curr,
    value: totals.season[curr],
  });
  return acc;
}, []);
const internationalTotalLink = Object.keys(totals.international).reduce(
  (acc, curr) => {
    if (curr === 'total') return acc;
    acc.push({
      source: 'International',
      target: curr,
      value: totals.international[curr],
    });
    return acc;
  },
  []
);

const finalLinks = teamsKeys.map((el) => {
  return {
    source: el,
    target: 'Total Goals',
    value: (totals.season[el] || 0) + (totals.international[el] || 0),
  };
});

export const sankeyLinks = [
  ...seasonLinks,
  ...internationalLinks,
  ...seasonTotalLink,
  ...internationalTotalLink,
  ...finalLinks,
];
