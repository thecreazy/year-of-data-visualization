import dayjs from 'dayjs';

import rawData from '../data/values.json';

export const total = rawData.length;

export const byAlbum = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.album_title;
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

export const top10Album = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr.album_title;
    const foundEntry = acc.findIndex((el) => el.album === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].views += curr.song_page_views;
    } else {
      const newEntry = {
        album: formattedLabel,
        views: curr.song_page_views,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.views - a.views)
  .slice(0, 10);

export const top10Songs = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr.song_title;
    const foundEntry = acc.findIndex((el) => el.song === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].views += curr.song_page_views;
    } else {
      const newEntry = {
        song: formattedLabel,
        views: curr.song_page_views,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.views - a.views)
  .slice(0, 10);

export const bySongArtists = rawData.reduce((acc, curr) => {
  const formattedLabel = JSON.parse(
    curr.song_artists.replace(/[']/g, '"')
  ).length;
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

export const topSongArtists = rawData
  .reduce((acc, curr) => {
    const collaborations = JSON.parse(curr.song_artists.replace(/[']/g, '"'));
    collaborations.forEach((element) => {
      const foundEntry = acc.findIndex((el) => el.artist === element);
      if (element !== 'Lana Del Rey') {
        if (foundEntry !== -1) {
          acc[foundEntry].songs += 1;
        } else {
          const newEntry = {
            artist: element,
            songs: 1,
          };
          acc.push(newEntry);
        }
      }
    });

    return acc;
  }, [])
  .sort((a, b) => b.songs - a.songs)
  .slice(0, 20);

export const ratio = [
  {
    id: 'Views per song year',
    data: rawData
      .map((el) => {
        return {
          x: dayjs(`${el.song_release_date}`, 'YYYY-MM-DD', true).year(),
          y: el.song_page_views,
          title: el.song_title,
        };
      })
      .sort((a, b) => a.x - b.x),
  },
];

export const totalByYear = [
  {
    id: 'Songs released:',
    data: rawData
      .reduce((acc, curr) => {
        const formattedYear = dayjs(
          `${curr.song_release_date}`,
          'YYYY-MM-DD',
          true
        ).year();
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

export const cloudTag = rawData
  .reduce((acc, curr) => {
    let tags = [];
    try {
      tags = JSON.parse(
        curr.song_tags.replace(/[']/g, '"').replace(/"s/g, "'s")
      );
    } catch (e) {
      console.log(curr.song_tags, curr.song_tags.replace(/[']/g, '"'));
    }

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
