import rawData from '../data/values.json';

export const total2022 = rawData.length;

export const totalByTeam = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.team === curr.team_abbreviation);
  if (foundEntry !== -1) {
    acc[foundEntry].players += 1;
  } else {
    const newEntry = {
      team: curr.team_abbreviation,
      players: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byCollege = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.college);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.college,
      label: curr.college,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byCountry = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.country);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.country,
      label: curr.country,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byDraftRound = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.draft_round);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.draft_round,
      label: curr.draft_round,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byDraftYear = rawData
  .reduce((acc, curr) => {
    if (curr.draft_year === 'Undrafted') return acc;
    const foundEntry = acc.findIndex((el) => el.year === curr.draft_year);
    if (foundEntry !== -1) {
      acc[foundEntry].players += 1;
    } else {
      const newEntry = {
        year: curr.draft_year,
        players: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.year - b.year);

export const totalByAge = rawData
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.age === curr.age);
    if (foundEntry !== -1) {
      acc[foundEntry].players += 1;
    } else {
      const newEntry = {
        age: curr.age,
        players: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.age - b.age);

export let tallest, shortest;

export const totalByHeight = rawData
  .reduce((acc, curr) => {
    const formattedHeight = Math.floor(curr.player_height);
    const foundEntry = acc.findIndex((el) => el.height === formattedHeight);
    if (foundEntry !== -1) {
      acc[foundEntry].players += 1;
    } else {
      const newEntry = {
        height: formattedHeight,
        players: 1,
      };
      acc.push(newEntry);
    }
    if (!tallest) tallest = curr;
    if (!shortest) shortest = curr;
    if (!!shortest && formattedHeight < shortest.player_height) shortest = curr;
    if (!!tallest && formattedHeight > tallest.player_height) tallest = curr;
    return acc;
  }, [])
  .sort((a, b) => a.height - b.height);
