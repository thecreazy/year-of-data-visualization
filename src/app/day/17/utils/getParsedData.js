import dayjs from 'dayjs';

import rawValues from '../data/values.json';

export const topSongs = rawValues
  .sort((a, b) => b.streams - a.streams)
  .slice(0, 30)
  .map((el) => {
    return {
      name: el.track_name,
      Streams: el.streams,
    };
  })
  .reverse();

export const byReleaseYear = rawValues
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.year === curr.released_year);
    if (foundEntry !== -1) {
      acc[foundEntry].Songs += 1;
    } else {
      const newEntry = {
        year: curr.released_year,
        Songs: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.year - b.year);

export const weightedYearByStream = rawValues.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.released_year);
  if (foundEntry !== -1) {
    acc[foundEntry].value += curr.streams;
  } else {
    const newEntry = {
      id: curr.released_year,
      label: curr.released_year,
      value: curr.streams,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byReleaseMonth = rawValues
  .reduce((acc, curr) => {
    const month = dayjs(`2023-${curr.released_month}-25`).format('MMMM');
    console.log(month);
    const foundEntry = acc.findIndex((el) => el.month === month);
    if (foundEntry !== -1) {
      acc[foundEntry].Total += 1;
    } else {
      const newEntry = {
        month: month,
        Total: 1,
        monthDay: curr.released_month,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.monthDay - b.monthDay);

export const byArtistNumber = rawValues
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.artists === curr.artist_count);
    if (foundEntry !== -1) {
      acc[foundEntry].Total += 1;
    } else {
      const newEntry = {
        artists: curr.artist_count,
        Total: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.artists - b.artists);
