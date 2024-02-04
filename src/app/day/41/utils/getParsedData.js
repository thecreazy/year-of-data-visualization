import rawValues from '../data/values.json';

export const totalPlayers = rawValues.length;
export const totalTeams = rawValues
  .map((el) => el.Club)
  .filter((value, index, array) => array.indexOf(value) === index).length;

export const byFoot = rawValues.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.foot);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.foot,
      label: curr.foot,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const getPosition = (pos) => {
  if (pos === 'GK') return 'Goal Keeper';
  if (pos === 'LB') return 'Left Back';
  if (pos === 'CB') return 'Central Defender';
  if (pos === 'RB') return 'Right Back';
  if (pos === 'CM') return 'Central Midfielder';
  if (pos === 'CDM') return 'Defensive Midfielder';
  if (pos === 'CAM') return 'Central Attacking Midfielde';
  if (pos === 'LM') return 'Left Midfielder';
  if (pos === 'RM') return 'Right Midfielder';
  if (pos === 'LW') return 'Left Winger';
  if (pos === 'RW') return 'Right Winger';
  if (pos === 'CF') return 'Centre Forward';
  if (pos === 'ST') return 'Second Striker';
  if (pos === 'RWB') return 'Right Wing Back';
  if (pos === 'LWB') return 'Left Wing Back';
  return 'Unknown';
};

export const byBestPosition = rawValues.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === getPosition(curr.BP));
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: getPosition(curr.BP),
      label: getPosition(curr.BP),
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const totalByAge = rawValues
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.age === curr.Age);
    if (foundEntry !== -1) {
      acc[foundEntry].players += 1;
    } else {
      const newEntry = {
        age: curr.Age,
        players: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.age - b.age);

export let tallest, shortest;

const formatHeight = (val) => {
  const formatted = val.replace(/[']/g, '.').replace(/["]/g, '');
  const values = formatted.split('.');
  return (Number(values[0]) * 12 + Number(values[1])) * 2.54;
};

export const totalByHeight = rawValues
  .reduce((acc, curr) => {
    const formattedHeight = formatHeight(curr.Height);
    const foundEntry = acc.findIndex((el) => el.height === curr.Height);
    if (foundEntry !== -1) {
      acc[foundEntry].players += 1;
    } else {
      const newEntry = {
        height: curr.Height,
        players: 1,
        cmHeight: formatHeight(curr.Height),
      };
      acc.push(newEntry);
    }
    if (!tallest) tallest = curr;
    if (!shortest) shortest = curr;
    if (!!shortest && formattedHeight < formatHeight(shortest.Height))
      shortest = curr;
    if (!!tallest && formattedHeight > formatHeight(tallest.Height))
      tallest = curr;
    return acc;
  }, [])
  .sort((a, b) => a.cmHeight - b.cmHeight);

export let best, worst;

export const byRating = rawValues
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.OVA === curr.OVA);
    if (foundEntry !== -1) {
      acc[foundEntry].players += 1;
    } else {
      const newEntry = {
        OVA: curr.OVA,
        players: 1,
      };
      acc.push(newEntry);
    }
    if (!best) best = curr;
    if (!worst) worst = curr;
    if (!!worst && curr.OVA < worst.OVA) worst = curr;
    if (!!tallest && curr.OVA > best.OVA) best = curr;
    return acc;
  }, [])
  .sort((a, b) => a.OVA - b.OVA);

export const totalByNationality = rawValues
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.age === curr.Nationality);
    if (foundEntry !== -1) {
      acc[foundEntry].players += 1;
    } else {
      const newEntry = {
        age: curr.Nationality,
        players: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.players - a.players)
  .slice(0, 15);
