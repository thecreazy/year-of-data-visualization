import rawData from '../data/values.json';

export const totals = rawData.length;

export const byGenre = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['Genre 1'];
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

export const byDuration = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.Duration;
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

export const byReleaseYear = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr.Year;
    const foundEntry = acc.findIndex((el) => el.year === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].movies += 1;
    } else {
      const newEntry = {
        year: formattedLabel,
        movies: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.year - b.year);

export const byDirector = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr['Director'];
    const foundEntry = acc.findIndex((el) => el.year === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].movies += 1;
    } else {
      const newEntry = {
        year: formattedLabel,
        movies: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.year - b.year);

const cleanMoney = (money) => {
  return Number(money.split('$')[1]);
};

export const revenuesbyDirector = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr['Director'];
    const foundEntry = acc.findIndex((el) => el.year === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].revenues += cleanMoney(curr.Revenue);
    } else {
      const newEntry = {
        year: formattedLabel,
        revenues: cleanMoney(curr.Revenue),
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.year - b.year);

export const budgetvsBoxOffice = rawData.map((el) => {
  return {
    id: el.Name,
    data: [
      {
        x: cleanMoney(el.Budget),
        y: cleanMoney(el.Revenue),
      },
    ],
  };
});
