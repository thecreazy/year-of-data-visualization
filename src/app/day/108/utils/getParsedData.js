import rawData from '../data/values.json';

export const totals = rawData.length;

export const mapMarkers = rawData
  .map((el) => {
    return {
      position: [el.reclat, el.reclong],
      tooltip: `Name: ${el.name} - ${el['mass (g)']}g`,
      key: el.name,
      radius: 6,
      color: '#453F78',
    };
  })
  .slice(0, 10000);

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

const formatYear = (year) => {
  if (!year) return;
  return { formatted: `${Math.floor(year / 10) * 10}s`, value: year };
};

export const byFallYear = rawData
  .reduce((acc, curr) => {
    if (!curr.year) return acc;
    if (curr.year > 2024) return acc;
    const formattedLabel = formatYear(curr.year);
    const foundEntry = acc.findIndex(
      (el) => el.year === formattedLabel.formatted
    );
    if (foundEntry !== -1) {
      acc[foundEntry].meteorite += 1;
    } else {
      const newEntry = {
        year: formattedLabel.formatted,
        meteorite: 1,
        real: formattedLabel.value,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.real - b.real);

const formatMass = (mass) => {
  if (!mass) return;
  return {
    formatted: `< ${Math.floor(mass / 10000) * 10000 + 10000} g`,
    value: mass,
  };
};

export const byMass = rawData
  .reduce((acc, curr) => {
    if (!curr['mass (g)']) return acc;
    if (curr['mass (g)'] < 10000) return acc;
    const formattedLabel = formatMass(curr['mass (g)']);
    const foundEntry = acc.findIndex(
      (el) => el.mass === formattedLabel.formatted
    );
    if (foundEntry !== -1) {
      acc[foundEntry].meteorite += 1;
    } else {
      const newEntry = {
        mass: formattedLabel.formatted,
        meteorite: 1,
        real: formattedLabel.value,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.real - b.real);
