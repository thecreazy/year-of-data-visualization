import rawValues from '../data/values.json';

export const totalAccident = rawValues.length;
export const totalInjured = rawValues.reduce((acc, curr) => {
  return acc + Number(curr.NUM_FERITI);
}, 0);
export const totalDeaths = rawValues.reduce((acc, curr) => {
  return acc + Number(curr.NUM_MORTI);
}, 0);

const formatTypeOfAccident = (val) => {
  if (!val) return 'Other';
  if (val === 'Veicolo in marcia contro veicoli in sosta')
    return 'Vs parked vehicles';
  if (val === 'Scontro frontale/laterale SX fra veicoli in marcia')
    return 'Frontal/left side collision';
  if (val === 'Tamponamento') return 'Collision';
  if (val === 'Investimento di pedone') return 'Pedestrian hit';
  if (val === 'Veicolo in marcia contro ostacolo fisso')
    return 'Vs fixed obstacle';
  if (val === 'Scontro laterale fra veicoli in marcia') return 'Side collision';
  if (val === 'Veicolo in marcia contro veicolo in sosta')
    return 'Vs parked vehicle';
  if (val === 'Veicolo in marcia contro veicolo fermo')
    return 'Vs stationary vehicle';
  if (val === 'Veicolo in marcia contro ostacolo accidentale')
    return 'Vs accidental obstacle';

  if (val === 'Scontro frontale fra veicoli in marcia')
    return 'Head-on collision ';
  if (val === 'Fuoriuscita dalla sede stradale') return 'Leaving the roadway';
  if (val === 'Tamponamento Multiplo') return 'Multiple Infill';
  if (val === 'Scontro frontale/laterale DX fra veicoli in marcia')
    return 'Frontal/right side collision';
  if (val === 'Ribaltamento senza urto contro ostacolo fisso')
    return 'Overturning';
  if (val === 'Infortunio per caduta del veicolo') return 'Vehicle falling';
  if (val === 'Infortunio per sola frenata improvvisa') return 'Sudden braking';
  if (val === 'Veicolo in marcia contro veicolo arresto')
    return 'Vs vehicle stopping';
  if (val === 'Veicolo in marcia contro veicoli in arresto')
    return 'Vs vehicles stopping';
  return val;
};

export const byTypeOfAccident = rawValues.reduce((acc, curr) => {
  const formattedValue = formatTypeOfAccident(curr.NaturaIncidente);
  const foundEntry = acc.findIndex((el) => el.type === formattedValue);
  if (foundEntry !== -1) {
    acc[foundEntry].accidents += 1;
  } else {
    const newEntry = {
      type: formattedValue,
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
  if (val === 'Bagnato (umidità in atto)') return 'Humidity';
  if (val === 'Bagnato (pioggia)') return 'Rain';
  if (val === 'Bagnato (brina)') return 'Frost';
  if (val === 'Sdrucciolevole (pietrisco)') return 'Crushed Stone';
  if (val === 'Sdrucciolevole (fango)') return 'Mud';
  if (val === 'Viscido da liquidi oleosi') return 'Oily';
  return val;
};

export const byRoadFund = rawValues.reduce((acc, curr) => {
  const formattedValue = formatRoadFund(curr.FondoStradale);
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
  if (val === 'Due carreggiate') return 'Two ways';
  if (val === 'Una carreggiata a doppio senso') return 'A two-way roadway';
  if (val === 'Una carreggiata a senso unico di marcia')
    return 'A one-way roadway';
  if (val === 'Più di due carreggiate') return 'More than two lanes';
  if (val === 'Una carreggiata a senso unico alternato')
    return 'An alternating one-way carriageway';
  return val;
};

export const byStreetType = rawValues.reduce((acc, curr) => {
  const formattedValue = formatStreetType(curr.TipoStrada);
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

const formatLighting = (val) => {
  if (!val) return 'Other';
  if (val === 'Ore Diurne') return 'Daytime hours';
  if (val === 'Sufficiente') return 'Sufficient';
  if (val === 'Insufficiente') return 'Insufficient';
  if (val === 'Inesistente') return 'Inexistent';
  return val;
};

export const byLighting = rawValues.reduce((acc, curr) => {
  const formattedValue = formatLighting(curr.Illuminazione);
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
  const formattedValue = formatAtmosphericCondition(curr.CondizioneAtmosferica);
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
