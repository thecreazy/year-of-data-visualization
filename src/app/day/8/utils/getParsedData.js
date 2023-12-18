import rawTotals from '../data/totals.json';
import rawYears from '../data/year.json';

export const totalsValues = {
  labels: rawTotals.map((el) => el.year).reverse(),
  data: [
    {
      label: 'Prizes',
      data: rawTotals.map((el) => el.prizeMoney).reverse(),
      borderColor: '#db3a34',
      backgroundColor: '#db3a34',
    },
  ],
};
export const tournamentsData = {
  labels: rawTotals.map((el) => el.year).reverse(),
  data: [
    {
      label: 'Tournaments',
      data: rawTotals.map((el) => el.tournaments).reverse(),
      borderColor: '#db3a34',
      backgroundColor: '#db3a34',
    },
    {
      label: 'Players',
      data: rawTotals.map((el) => el.players).reverse(),
      borderColor: '#ffc857',
      backgroundColor: '#ffc857',
    },
  ],
};

export const years = rawYears.map((el, index) => ({
  label: el.year,
  value: index,
}));
export const yearsData = rawYears;

export const dotaPrizesValue = {
  labels: rawYears.map((el) => el.year).reverse(),
  data: [
    {
      label: 'Dota Prizes',
      data: rawYears
        .map((el) => {
          const dotaData = el.data.find((c) => c.name === 'Dota 2');
          return dotaData.prizes;
        })
        .reverse(),
      borderColor: '#ffc857',
      backgroundColor: '#ffc857',
    },
  ],
};

export const dotaPlayersValue = rawYears.map((el) => {
  const dotaData = el.data.find((c) => c.name === 'Dota 2');
  return { year: el.year, players: dotaData.players };
});
export const dotaTournamentsValue = rawYears.map((el) => {
  const dotaData = el.data.find((c) => c.name === 'Dota 2');
  return { year: el.year, tournaments: dotaData.tournaments };
});
