import rawData from '../data/values.json';

export const total = rawData.length;

export const byWeightClass = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.Weight_Class;
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byRound = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.Round;
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byClassOutcome = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex(
    (el) => el.weightClass === curr.Weight_Class
  );
  if (foundEntry !== -1) {
    if (!acc[foundEntry][curr.Method]) acc[foundEntry][curr.Method] = 0;
    acc[foundEntry][curr.Method] += 1;
  } else {
    const newEntry = {
      weightClass: curr.Weight_Class,
      [curr.Method]: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
export const outcomes = Object.keys(
  byClassOutcome.reduce((result, obj) => Object.assign(result, obj), {})
).slice(1);

export const top20Fighters = rawData
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.fighter === curr.Winner);
    if (foundEntry !== -1) {
      acc[foundEntry].wins += 1;
    } else {
      const newEntry = {
        fighter: curr.Winner,
        wins: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.wins - a.wins)
  .slice(0, 21);

export const ratio = [
  {
    id: 'Fighter 1 vs Fighter 2',
    data: rawData.map((el) => {
      return {
        x: el.Fighter_1_STR,
        y: el.Fighter_2_STR,
      };
    }),
  },
];

export const total20Locations = rawData
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.location === curr.Location);
    if (foundEntry !== -1) {
      acc[foundEntry].matches += 1;
    } else {
      const newEntry = {
        location: curr.Location,
        matches: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.matches - a.matches)
  .slice(0, 20);

export const totalMatchPerYear = [
  {
    id: 'Matches',
    data: rawData
      .reduce((acc, curr) => {
        const year = curr.Date.split('-')[2];
        const formattedYear = Number(year) > 23 ? `19${year}` : `20${year}`;
        const foundEntry = acc.findIndex((el) => el.x === formattedYear);
        if (foundEntry !== -1) {
          acc[foundEntry].y += 1;
        } else {
          const newEntry = {
            x: formattedYear,
            y: 1,
          };
          acc.push(newEntry);
        }
        return acc;
      }, [])
      .sort((a, b) => a.x - b.x),
  },
];
