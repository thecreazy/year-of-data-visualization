import rawValues from '../data/values.json';

export const totalAccident = rawValues.length;
export const totalInjuries = rawValues.reduce((acc, curr) => {
  if (curr['Incidente con lesioni'] === 'no') return acc;
  else return (acc += 1);
}, 0);
export const totalDamage = rawValues.reduce((acc, curr) => {
  if (curr['Danni a cose'] === 'no') return acc;
  else return (acc += 1);
}, 0);

export const byMonthOfAccident = rawValues.reduce((acc, curr) => {
  const formattedValue = curr['Data incidente'].split('/')[1];
  const foundEntry = acc.findIndex((el) => el.month === formattedValue);
  if (foundEntry !== -1) {
    acc[foundEntry].accidents += 1;
  } else {
    const newEntry = {
      month: formattedValue,
      accidents: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatRoadFund = (val) => {
  if (!val) return 'Other';
  if (val === 'Asciutto') return 'Dry';
  if (val === 'Ghiacciato') return 'Frozen';
  if (val === `Bagnato (umidita' in atto)`) return 'Humidity';
  if (val === 'Bagnato (pioggia)') return 'Rain';
  if (val === 'Bagnato (brina)') return 'Frost';
  if (val === 'Sdrucciolevole (pietrisco)') return 'Crushed Stone';
  if (val === 'Sdrucciolevole (fango)') return 'Mud';
  if (val === 'Sdrucciolevole (sabbia)') return 'Sand';
  if (val === 'Viscido da liquidi oleosi') return 'Oily';
  return val;
};

export const byRoadFund = rawValues.reduce((acc, curr) => {
  const formattedValue = formatRoadFund(curr['Stato fondo stradale']);
  const foundEntry = acc.findIndex((el) => el.id === formattedValue);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedValue,
      label: formattedValue,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatStreetType = (val) => {
  if (!val) return 'Other';
  if (val === 'Altra strada') return 'Other';
  if (val === 'Strada Urbana') return 'Urban street';
  if (val === 'Statale') return 'State street';
  if (val === `Statale entro l'abitato`) return 'State road within the town';
  if (val === `Provinciale entro l'abitato`)
    return 'Provincial road within the town';
  if (val === 'Provinciale') return 'Provincial road';
  if (val === 'Comunale extraurbana') return 'Extra-urban municipal';
  return val;
};

export const byStreetType = rawValues.reduce((acc, curr) => {
  const formattedValue = formatStreetType(curr['Tipo di strada']);
  const foundEntry = acc.findIndex((el) => el.id === formattedValue);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedValue,
      label: formattedValue,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatFlooringType = (val) => {
  if (!val) return 'Other';
  if (val === 'Asfaltata') return 'Asphalted';
  if (val === 'Lastricata') return 'Paved';
  if (val === 'Strada pavimentata dissestata') return 'Bumpy paved road';
  if (val === 'In conglomerato cementizio') return 'Cement conglomerate';
  if (val === 'Con buche') return 'Potholes';
  if (val === 'Inghiaiata') return 'Graveled';
  if (val === 'Sterrata') return 'Dirt or gravel road';
  if (val === 'In cubetti di porfido') return 'In porphyry cubes';
  return val;
};

export const byFlooringType = rawValues.reduce((acc, curr) => {
  const formattedValue = formatFlooringType(curr['Tipo pavimentazione']);
  const foundEntry = acc.findIndex((el) => el.id === formattedValue);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedValue,
      label: formattedValue,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatAtmosphericCondition = (val) => {
  if (!val) return 'Other';
  if (val === 'Sereno') return 'Clear';
  if (val === 'Nuvoloso') return 'Cloudy';
  if (val === 'Strong wind') return 'Vento forte';
  if (val === 'Nebbia') return 'Fog';
  if (val === 'Pioggia in atto') return 'Rain';
  if (val === 'Vento forte') return 'Strong wind';
  if (val === 'Grandine') return 'Hail';
  if (val === 'Sole radente') return 'Grazing sun';
  return val;
};

export const byAtmosphericCondition = rawValues.reduce((acc, curr) => {
  const formattedValue = formatAtmosphericCondition(curr['Condizioni meteo']);
  const foundEntry = acc.findIndex((el) => el.id === formattedValue);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedValue,
      label: formattedValue,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
