import rawData from '../data/values.json';

export const totals = rawData.length;

export const mapMarkers = rawData.map((el) => {
  return {
    position: [el.Latitudine, el.Longitudine],
    tooltip: `Name: ${el.Nome}`,
    key: el.Nome,
    radius: 6,
    color: '#fcca46',
  };
});

export const byYear = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr['Anno inserimento'];
    const foundEntry = acc.findIndex((el) => el.year === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].stations += 1;
    } else {
      const newEntry = {
        year: formattedLabel,
        stations: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.year - b.year);

export const byRegion = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['Regione'];
  if (formattedLabel === 'ALTRO') return acc;
  const foundEntry = acc.findIndex((el) => el.region === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].stations += 1;
  } else {
    const newEntry = {
      region: formattedLabel,
      stations: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byProvince = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr['Provincia'].replace(
      "CITTA' METROPOLITANA DI",
      ''
    );
    if (formattedLabel === 'ALTRO') return acc;
    const foundEntry = acc.findIndex((el) => el.province === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].stations += 1;
    } else {
      const newEntry = {
        province: formattedLabel,
        stations: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.stations - a.stations)
  .splice(0, 20);

export const byMunicipality = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr['Comune'];
    if (formattedLabel === 'ALTRO') return acc;
    const foundEntry = acc.findIndex(
      (el) => el.municipality === formattedLabel
    );
    if (foundEntry !== -1) {
      acc[foundEntry].stations += 1;
    } else {
      const newEntry = {
        municipality: formattedLabel,
        stations: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.stations - a.stations)
  .splice(0, 20);
