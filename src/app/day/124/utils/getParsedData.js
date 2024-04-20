import rawData from '../data/values.json';

export const totals = rawData.length;

const getTypology = (type) => {
  if (type === 'Chiusa al traffico') return 'Closed to traffic';
  if (type === 'Incompiuta') return 'Unfinished';
  return 'Route variant';
};

export const mapMarkers = rawData.reduce((acc, curr) => {
  if (!curr.Geolocalizzazione) return acc;
  const formattedLabel = getTypology(curr.Tipologia);

  const [lat, lng] = curr.Geolocalizzazione.split(',').map(Number);
  acc.push({
    position: [lat, lng],
    tooltip: `Name: ${curr.nome} // ${formattedLabel}`,
    key: curr.nome,
    radius: 6,
    color:
      formattedLabel === 'Closed to traffic'
        ? '#f72585'
        : formattedLabel === 'Unfinished'
          ? '#4cc9f0'
          : '#3a0ca3',
  });
  return acc;
}, []);

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

const formatStatus = (status) => {
  if (status === 'Abbandonato') return 'Abandoned';
  if (status === 'Riqualificato') return 'Retrained';
  if (status === 'Misto') return 'Combined';
  return 'Unknown';
};

export const byStatus = rawData.reduce((acc, curr) => {
  const formattedLabel = formatStatus(curr['Stato']);
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

export const byTypology = rawData.reduce((acc, curr) => {
  const formattedLabel = getTypology(curr['Tipologia']);
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
