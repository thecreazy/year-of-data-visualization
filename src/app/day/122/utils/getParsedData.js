import rawData from '../data/values.json';

export const totals = rawData.length;
export const totalParks = new Set(rawData.map((el) => el['Park Name'])).size;

export const mapMarkers = rawData.map((el) => {
  return {
    position: [el['Location Lat'], el['Location Lng']],
    tooltip: `Name: ${el['Activity Name']} - ${el['Activity Type']}`,
    key: el.name,
    radius: 6,
    color: el['Activity Type'] === 'Attraction' ? '#e63946' : '#457b9d',
  };
});

export const byType = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['Activity Type'];
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

export const byHeightRestrictions = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['Height Restrictions'];
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

export const byPark = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['Park Name'];
  const foundEntry = acc.findIndex((el) => el.Park === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry][curr['Activity Type']] += 1;
  } else {
    const newEntry = {
      Park: formattedLabel,
      Attraction: 0,
      Entertainment: 0,
    };
    newEntry[curr['Activity Type']] += 1;
    acc.push(newEntry);
  }
  return acc;
}, []);
