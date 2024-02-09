import rawData from '../data/values.json';

export const totals = rawData.length;

export const byOwnership = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.Ownership;
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

export const byPhase = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.Phase ? curr.Phase : 'No Phase';
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
    const formattedLabel = curr['Release Year'];
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

export const scorebyDirector = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr['Director'];
    const foundEntry = acc.findIndex((el) => el.year === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].avgScore = Number(
        ((acc[foundEntry].avgScore + curr['IMDb Score']) / 2).toFixed(1)
      );
    } else {
      const newEntry = {
        year: formattedLabel,
        avgScore: curr['IMDb Score'],
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.year - b.year);

export const yearImdb = rawData
  .map((el) => {
    return {
      id: el.Movie,
      data: [
        {
          x: el['Release Year'],
          y: el['IMDb Score'],
        },
      ],
    };
  })
  .sort((a, b) => a.data[0].x - b.data[0].x);

export const yearMeta = rawData
  .map((el) => {
    return {
      id: el.Movie,
      data: [
        {
          x: el['Release Year'],
          y: el['Meta Score'],
        },
      ],
    };
  })
  .sort((a, b) => a.data[0].x - b.data[0].x);

export const yearTomatometer = rawData
  .map((el) => {
    return {
      id: el.Movie,
      data: [
        {
          x: el['Release Year'],
          y: el['Tomatometer'],
        },
      ],
    };
  })
  .sort((a, b) => a.data[0].x - b.data[0].x);

export const yearRotten = rawData
  .map((el) => {
    return {
      id: el.Movie,
      data: [
        {
          x: el['Release Year'],
          y: el['Rotten Tomato Audience Score'],
        },
      ],
    };
  })
  .sort((a, b) => a.data[0].x - b.data[0].x);

export const budgetvsBoxOffice = rawData.map((el) => {
  return {
    id: el.Movie,
    data: [
      {
        x: el['Budget'],
        y: el['Worldwide Box Office'],
      },
    ],
  };
});
