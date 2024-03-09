import rawValues from '../data/values.json';

export const totalAccident = rawValues.length;
export const totalInjured = rawValues.reduce((acc, curr) => {
  return acc + Number(curr.qtde_feridosilesos);
}, 0);
export const totalDeaths = rawValues.reduce((acc, curr) => {
  return acc + Number(curr.qtde_obitos);
}, 0);

const formatTypeOfAccident = (val) => {
  if (val === 'DESCONHECIDO') return 'Unknow';
  if (val === 'COLISAO') return 'Collision';
  if (val === 'CHOQUE') return 'Shock';
  if (val === 'ATROPELAMENTO COM ANIMAIS') return 'With Animals';
  if (val === 'CAPOTAMENTO') return 'Rollover';
  if (val === 'TOMBAMENTO') return 'Overturning';
  if (val === 'ATROPELAMENTO COM PEDESTRE') return 'With Pedestrian';
  return val;
};

export const byTypeOfAccident = rawValues.reduce((acc, curr) => {
  const formattedValue = formatTypeOfAccident(curr.tp_acidente);
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
  if (val === 'SECA') return 'Dry';
  if (val === 'ESCORREGADIA') return 'Slippery';
  if (val === 'MOLHADA') return 'Wet';
  return val;
};

export const byRoadFund = rawValues.reduce((acc, curr) => {
  if (curr.cond_pista === 'NAO INFORMADO') return acc;
  const formattedValue = formatRoadFund(curr.cond_pista);
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
  if (val === 'MUNICIPAL') return 'Municipal';
  if (val === 'FEDERAL') return 'Federal';
  if (val === 'ESTADUAL') return 'State';
  return val;
};

export const byStreetType = rawValues.reduce((acc, curr) => {
  const formattedValue = formatStreetType(curr.tp_rodovia);
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
  if (val === 'MANHA') return 'Daytime';
  if (val === 'TARDE') return 'Afternoon';
  if (val === 'NOITE') return 'Night';
  if (val === 'MADRUGADA') return 'Sunrise';
  return val;
};

export const byLighting = rawValues.reduce((acc, curr) => {
  const formattedValue = formatLighting(curr.fase_dia);
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
  if (val === 'CLARO') return 'Clear';
  if (val === 'NUBLADO') return 'Cloudy';
  if (val === 'NEVOEIRO  NEVOA OU FUMACA') return 'Fog';
  if (val === 'GAROACHUVISCO') return 'Strong Rain';
  if (val === 'CHUVA') return 'Rain';
  return val;
};

export const byAtmosphericCondition = rawValues.reduce((acc, curr) => {
  if (curr.cond_meteorologica === 'OUTRAS CONDICOES') return acc;
  const formattedValue = formatAtmosphericCondition(curr.cond_meteorologica);
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
