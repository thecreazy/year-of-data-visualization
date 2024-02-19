import rawData from '../data/values.json';

export const byMaxGames = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr.max_players;
    const foundEntry = acc.findIndex(
      (el) => el['Max Players'] === formattedLabel
    );
    if (foundEntry !== -1) {
      acc[foundEntry].games += 1;
    } else {
      const newEntry = {
        ['Max Players']: formattedLabel,
        games: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a['Max Players'] - b['Max Players']);

export const byMinAge = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr.min_age;
    const foundEntry = acc.findIndex((el) => el['Min Age'] === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].games += 1;
    } else {
      const newEntry = {
        ['Min Age']: formattedLabel,
        games: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a['Min Age'] - b['Min Age']);

export const byDesigner = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr.designer;
    if (formattedLabel === '(Uncredited)') return acc;
    if (formattedLabel === 'NA') return acc;
    const foundEntry = acc.findIndex((el) => el.name === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].games += 1;
    } else {
      const newEntry = {
        name: formattedLabel,
        games: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.games - a.games)
  .slice(0, 20);

export const ratio = [
  {
    id: 'Rating vs Min Play Time',
    data: rawData
      .map((el) => {
        return {
          x: el.min_playtime,
          y: el.average_rating,
        };
      })
      .sort((a, b) => a.x - b.x),
  },
];

export const totalGamesPerYear = [
  {
    id: 'Board Games',
    data: rawData
      .reduce((acc, curr) => {
        const formattedYear = curr.year_published;
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

export const byCategory = rawData
  .reduce((acc, curr) => {
    const categories = `${curr.category}`.split(',');
    categories.map((category) => {
      const foundEntry = acc.findIndex((el) => el.category === category);
      if (foundEntry !== -1) {
        acc[foundEntry].games += 1;
      } else {
        const newEntry = {
          category: category,
          games: 1,
        };
        acc.push(newEntry);
      }
    });
    return acc;
  }, [])
  .filter((el) => el.games > 100);

const colors = [
  '#001219',
  '#005f73',
  '#0a9396',
  '#9d0208',
  '#ca6702',
  '#bb3e03',
  '#ae2012',
  '#9b2226',
  '#03071e',
  '#370617',
];

export const cloudTag = rawData
  .reduce((acc, curr) => {
    const tags = `${curr.name}`.split(' ');
    tags.map((tag) => {
      const foundEntry = acc.findIndex((el) => el.value === tag.toLowerCase());
      if (foundEntry !== -1) {
        acc[foundEntry].count += 1;
      } else {
        const newEntry = {
          value: tag.toLowerCase(),
          count: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
        acc.push(newEntry);
      }
    });
    return acc;
  }, [])
  .filter((el) => el.count > 5);
