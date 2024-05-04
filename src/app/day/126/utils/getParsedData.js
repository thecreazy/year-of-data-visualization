import rawData from '../data/values.json';

export const totals = rawData.length;
export const totalParks = new Set(rawData.map((el) => el['Park Name'])).size;

export const mapMarkers = rawData
  .map((el) => {
    return {
      position: [el.LAT, el.LON],
      tooltip: `Crime: ${el['Crm Cd Desc']}`,
      key: el.name,
      radius: 6,
      color: '#00215E',
    };
  })
  .splice(0, 15000);

export const bySex = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['Vict Sex'];
  if (!formattedLabel) return acc;
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

export const byWeapon = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['Weapon Desc'];
  if (!formattedLabel) return acc;
  if (formattedLabel === 'UNKNOWN WEAPON/OTHER WEAPON') return acc;
  if (formattedLabel === 'UNKNOWN FIREARM') return acc;
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

export const byArea = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['AREA NAME'];
  const foundEntry = acc.findIndex((el) => el.Area === formattedLabel);
  if (foundEntry !== -1) {
    if (curr['Vict Sex'] === 'M') {
      acc[foundEntry].Male += 1;
    } else {
      if (curr['Vict Sex'] === 'F') {
        acc[foundEntry].Female += 1;
      } else {
        acc[foundEntry].Other += 1;
      }
    }
    acc[foundEntry].Total += 1;
  } else {
    const newEntry = {
      Area: formattedLabel,
      Female: 0,
      Male: 0,
      Other: 0,
      Total: 1,
    };
    if (curr['Vict Sex'] === 'M') {
      newEntry.Male += 1;
    } else {
      if (curr['Vict Sex'] === 'F') {
        newEntry.Female += 1;
      } else {
        newEntry.Other += 1;
      }
    }
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byCrime = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr['Crm Cd Desc'];
    const foundEntry = acc.findIndex((el) => el.Crime === formattedLabel);
    if (foundEntry !== -1) {
      if (curr['Vict Sex'] === 'M') {
        acc[foundEntry].Male += 1;
      } else {
        if (curr['Vict Sex'] === 'F') {
          acc[foundEntry].Female += 1;
        } else {
          acc[foundEntry].Other += 1;
        }
      }
      acc[foundEntry].Total += 1;
    } else {
      const newEntry = {
        Crime: formattedLabel,
        Female: 0,
        Male: 0,
        Other: 0,
        Total: 1,
      };
      if (curr['Vict Sex'] === 'M') {
        newEntry.Male += 1;
      } else {
        if (curr['Vict Sex'] === 'F') {
          newEntry.Female += 1;
        } else {
          newEntry.Other += 1;
        }
      }
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.Total - a.Total)
  .splice(0, 20);
