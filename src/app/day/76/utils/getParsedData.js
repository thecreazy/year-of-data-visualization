import dayjs from 'dayjs';
import keywordExtractor from 'keyword-extractor';

import rawValues from '../data/values.json';

export const total = rawValues.length;
export const averageReview = (
  rawValues.reduce((acc, curr) => acc + Number(curr['User Rating']), 0) / total
).toFixed(1);

export const timeDistribution = rawValues
  .reduce((acc, curr) => {
    const formattedValue = dayjs(
      dayjs(curr['Review Date'], 'YYYY-MM-DD')
    ).toDate();
    const formattedRating = Math.trunc(Number(curr['User Rating']));
    const foundEntry = acc.findIndex(
      (el) => el.date.getTime() === formattedValue.getTime()
    );
    if (foundEntry !== -1) {
      acc[foundEntry][formattedRating] += 1;
    } else {
      const newEntry = {
        date: formattedValue,
        0: formattedRating === 0 ? 1 : 0,
        1: formattedRating === 1 ? 1 : 0,
        2: formattedRating === 2 ? 1 : 0,
        3: formattedRating === 3 ? 1 : 0,
        4: formattedRating === 4 ? 1 : 0,
        5: formattedRating === 5 ? 1 : 0,
        6: formattedRating === 6 ? 1 : 0,
        7: formattedRating === 7 ? 1 : 0,
        8: formattedRating === 8 ? 1 : 0,
        9: formattedRating === 9 ? 1 : 0,
        10: formattedRating === 10 ? 1 : 0,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));

export const colors = [
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
    if (!curr['Review Content']) return acc;
    const tags = keywordExtractor.extract(curr['Review Content'], {
      language: 'english',
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: false,
    });
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
  .filter((el) => el.count > 10 && el.count < 800)
  .sort((a, b) => b.count - a.count);
