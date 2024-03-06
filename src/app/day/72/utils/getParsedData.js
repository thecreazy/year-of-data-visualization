import rawData from '../data/values.json';

export const total = rawData.reduce(
  (acc, curr) => (curr.Status === 'Winner' ? acc + 1 : acc),
  0
);

export const byCategory = rawData.reduce((acc, curr) => {
  if (curr.Status !== 'Winner') return acc;
  const formattedLabel = curr.Category.split('(')[0];
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

export const winnerVSNomenee = [
  {
    id: 'Nominees',
    label: 'Nominees',
    value: rawData.reduce((acc, curr) => {
      if (curr.Status !== 'Nominee') return acc;
      const formattedLabel = curr.Film;
      const foundEntry = acc.findIndex((el) => el === formattedLabel);
      if (foundEntry === -1) acc.push(formattedLabel);
      return acc;
    }, []).length,
  },
  {
    id: 'Winners',
    label: 'Winners',
    value: rawData.reduce((acc, curr) => {
      if (curr.Status !== 'Winner') return acc;
      const formattedLabel = curr.Film;
      const foundEntry = acc.findIndex((el) => el === formattedLabel);
      if (foundEntry === -1) acc.push(formattedLabel);
      return acc;
    }, []).length,
  },
];

export const yearCategory = rawData.reduce((acc, curr) => {
  if (curr.Status !== 'Winner') return acc;
  const formattedLabel = curr.Category.split('(')[0];
  const foundEntry = acc.findIndex((el) => el.year === curr['Film Year']);
  if (foundEntry !== -1) {
    if (!acc[foundEntry][formattedLabel]) acc[foundEntry][formattedLabel] = 0;
    acc[foundEntry][formattedLabel] += 1;
  } else {
    const newEntry = {
      year: curr['Film Year'],
      [formattedLabel]: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
export const categories = Object.keys(
  yearCategory.reduce((result, obj) => Object.assign(result, obj), {})
).slice(1);

export const top20Films = rawData
  .reduce((acc, curr) => {
    if (curr.Status !== 'Winner') return acc;
    const formattedLabel = curr.Film;
    if (!formattedLabel) return acc;
    const foundEntry = acc.findIndex((el) => el.film === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].wins += 1;
    } else {
      const newEntry = {
        film: formattedLabel,
        wins: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.wins - a.wins)
  .slice(0, 21);

export const top20Music = rawData
  .reduce((acc, curr) => {
    if (curr.Status !== 'Winner' || curr.Category.split('(')[0] !== 'MUSIC ')
      return acc;
    const formattedLabel = curr.Name.split(';')[0];
    const foundEntry = acc.findIndex((el) => el.name === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].wins += 1;
      acc[foundEntry].why.push(curr.Category);
    } else {
      const newEntry = {
        name: formattedLabel,
        wins: 1,
        why: [curr.Category],
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.wins - a.wins)
  .slice(0, 20);

export const top20Country = rawData
  .reduce((acc, curr) => {
    if (
      curr.Status !== 'Winner' ||
      curr.Category.split('(')[0] !== 'FOREIGN LANGUAGE FILM'
    )
      return acc;
    const formattedLabel = curr.Name.split(';')[0];
    const foundEntry = acc.findIndex((el) => el.name === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].wins += 1;
      acc[foundEntry].why.push(curr.Category);
    } else {
      const newEntry = {
        name: formattedLabel,
        wins: 1,
        why: [curr.Category],
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.wins - a.wins)
  .slice(0, 20);

export const top20Directing = rawData
  .reduce((acc, curr) => {
    if (curr.Status !== 'Winner' || curr.Category.split('(')[0] !== 'DIRECTING')
      return acc;
    const formattedLabel = curr.Name.split(';')[0];
    const foundEntry = acc.findIndex((el) => el.name === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].wins += 1;
      acc[foundEntry].why.push(curr.Category);
    } else {
      const newEntry = {
        name: formattedLabel,
        wins: 1,
        why: [curr.Category],
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.wins - a.wins)
  .slice(0, 20);

export const top20Actors = rawData
  .reduce((acc, curr) => {
    if (
      curr.Status !== 'Winner' ||
      (curr.Category.split('(')[0] !== 'ACTRESS' &&
        curr.Category.split('(')[0] !== 'ACTOR' &&
        curr.Category.split(' ')[0] !== 'ACTRESS' &&
        curr.Category.split(' ')[0] !== 'ACTOR')
    )
      return acc;
    const formattedLabel = curr.Name.split(';')[0];
    const foundEntry = acc.findIndex((el) => el.name === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].wins += 1;
      acc[foundEntry].why.push(curr.Category);
    } else {
      const newEntry = {
        name: formattedLabel,
        wins: 1,
        why: [curr.Category],
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.wins - a.wins)
  .slice(0, 20);

export const top20Nominee = rawData
  .reduce((acc, curr) => {
    if (
      curr.Category.split('(')[0] !== 'ACTRESS' &&
      curr.Category.split('(')[0] !== 'ACTOR' &&
      curr.Category.split(' ')[0] !== 'ACTRESS' &&
      curr.Category.split(' ')[0] !== 'ACTOR'
    )
      return acc;
    const formattedLabel = curr.Name.split(';')[0];
    const foundEntry = acc.findIndex((el) => el.name === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].wins += 1;
      acc[foundEntry].why.push(curr.Category);
    } else {
      const newEntry = {
        name: formattedLabel,
        wins: 1,
        why: [curr.Category],
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.wins - a.wins)
  .slice(0, 20);

export const totalPrizes = [
  {
    id: 'Prizes',
    data: rawData
      .reduce((acc, curr) => {
        if (curr.Status !== 'Winner') return acc;
        const formattedYear = curr['Film Year'];
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
