import rawValues from '../data/values.json';

export const total = rawValues.length;
export const totalHours = rawValues.reduce((acc, curr) => {
  return acc + curr['Hours Viewed'];
}, 0);

export const byRating = rawValues
  .reduce((acc, curr) => {
    if (!curr.Rating) return acc;
    const foundEntry = acc.findIndex((el) => el.rating === curr.Rating);
    if (foundEntry !== -1) {
      acc[foundEntry].total += 1;
    } else {
      const newEntry = {
        rating: curr.Rating,
        total: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.rating - b.rating);

export const mostViewedShows = rawValues
  .sort((a, b) => b['Hours Viewed'] - a['Hours Viewed'])
  .slice(0, 20)
  .map((el) => {
    const Genre = (
      !!el.Genre ? JSON.parse(el.Genre.replace(/'/g, '"')) : []
    ).map((el) => `${el} `);
    return {
      ...el,
      Genre,
    };
  });

export const topViewedShow = {
  data: mostViewedShows,
  columns: [
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Available Globally?',
      dataIndex: 'Available Globally?',
      key: 'Available Globally?',
    },
    {
      title: 'Release Date',
      dataIndex: 'Release Date',
      key: 'Release Date',
      align: 'right',
    },
    {
      title: 'Hours Viewed',
      dataIndex: 'Hours Viewed',
      key: 'Hours Viewed',
      align: 'right',
    },
    {
      title: 'Rating',
      dataIndex: 'Rating',
      key: 'Rating',
      align: 'right',
    },
    {
      title: 'Categories',
      dataIndex: 'Genre',
      key: 'Genre',
    },
  ],
};

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

export const cloudTag = rawValues
  .reduce((acc, curr) => {
    if (!curr['Key Words']) return acc;
    const tags = curr['Key Words'].split(',');
    tags.map((tag) => {
      const foundEntry = acc.findIndex((el) => el.value === tag);
      if (foundEntry !== -1) {
        acc[foundEntry].count += 1;
      } else {
        const newEntry = {
          value: tag,
          count: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
        acc.push(newEntry);
      }
    });
    return acc;
  }, [])
  .filter((el) => el.count > 5);
