import rawData from '../data/data.json';

export const total = rawData.length;

export const totalByRegion = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.nome_regione);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.nome_regione,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatProcedureType = (type) => {
  if (type === 'Procedimento Penale') return 'Criminal proceedings';
  if (type === 'Misure di Prevenzione') return 'Prevention measures';
  return 'Unknown';
};

export const totalByProcedureType = rawData.reduce((acc, curr) => {
  const formattedLabel = formatProcedureType(curr.tipologia_procedura);
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatJudicialOffice = (type) => {
  if (type === 'Tribunale') return 'Curt';
  if (type === 'Procura della Repubblica') return "Prosecutor's office";
  if (type === 'Corte di Appello') return 'Court of Appeal';
  if (type === 'Corte di Cassazione') return 'Court of Cassation';
  if (type === "Corte d'Assise d'Appello") return 'Court of Assizes of Appeal';
  if (type === "Corte d'Assise") return 'Court of Assizes';
  return 'Unknown';
};

export const totalByJudicialOffice = rawData.reduce((acc, curr) => {
  const formattedLabel = formatJudicialOffice(curr.ufficio_giudiziario);
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatMesaure = (type) => {
  if (type === 'Confisca I') return 'First Degree confiscation';
  if (type === 'Confisca II') return 'Second Degree confiscation';
  if (type === 'Rinvio') return 'Postponementn';
  if (type === 'Impugnazione') return 'Appeal';
  if (type === 'Confisca def.') return 'Defined confiscation';
  if (type === 'Confisca def. parziale') return 'Partial defined confiscation';
  if (type === 'Revoca Seq.') return 'Revocation of seizure';
  if (type === 'Sequestro') return 'Seizure';
  if (type === 'Revoca Sequ. parziale') return 'Partial Revocation of seizure';
  if (type === 'Revoca Conf.') return 'Revocation of confiscation';
  if (type === 'Revoca Conf. parziale')
    return 'Partial Revocation of confiscation';
  return 'Unknown';
};

export const byMesaure = rawData.reduce((acc, curr) => {
  const formattedLabel = formatMesaure(curr.provvedimento);
  const foundEntry = acc.findIndex((el) => el.mesaure === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].assets += 1;
  } else {
    const newEntry = {
      mesaure: formattedLabel,
      assets: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatCategory = (type) => {
  if (type === 'Albergo, Pensione') return 'Hotel';
  if (type === 'Villa') return 'Villa';
  if (type === 'Opificio') return 'Factory';
  if (type === 'Box, garage, autorimessa, posto auto') return 'Garage';
  if (type === 'Negozio, Bottega') return 'Shop';
  if (type === 'Abitazione indipendente') return 'Independent House';
  if (type === 'Terreno agricolo') return 'Farmland';
  if (type === 'Ufficio pubblico') return 'Public office';
  if (type === 'Appartamento in condominio') return 'Apartment in condominium';
  if (type === 'Magazzino, Locale di deposito') return 'Warehouse';
  if (type === 'Altro') return 'Other';
  if (type === 'Fabbricato industriale') return 'Industrial building';
  if (type === 'Terreno con fabbricato rurale')
    return 'Land with rural building';
  if (type === 'Ex fabbricato rurale') return 'Rural building';
  if (type === 'Terreno - non definito') return 'Land';
  if (type === 'Terreno edificabile') return 'Land';
  if (type === 'Stalla, scuderia') return 'Stable';
  if (type === 'Tettoia chiusa o aperta') return 'Canopy';
  if (type === 'Laboratorio per arti e mestieri') return 'Workshop';
  if (type === 'Fabbricato in corso di costruzione indivisibile')
    return 'Building Under construction';
  if (type === 'Altra unit immobil. - non definito') return 'Real Estate';
  if (type === 'Unit uso abit. e assimil. - non definito') return 'Real Estate';
  if (type === 'Unit per allog. e usi coll. - non definito')
    return 'Real Estate';
  if (type === 'Unit a dest. comm. e ind.') return 'Building';
  if (type === 'Unit a dest. comm. e ind. - non definito') return 'Building';
  if (type === 'Fabbricato annesso a speciali esigenze commerciali')
    return 'Building';
  if (type === 'Fabbricato/Locale per esercizi sportivi')
    return 'Building for sports exercises';
  if (type === 'Scuola, Laboratorio Scientifico') return 'School';
  if (
    type ===
    'Collegio e Convitto,Educandato,Ricovero, Orfanotrofio,Ospizio,Convento,Seminario'
  )
    return 'College';
  if (type === 'Palazzo di pregio artistico e storico, Castello')
    return 'Castle';
  if (type === 'Cappella, Oratorio') return 'Chapel';
  if (type === 'Stabilimento balneare, Stabilimento di acque curative')
    return 'Bathhouse';
  if (type === 'Teatro, Cinematografo, Sala per concerti, spettacoli e simili')
    return 'Theatre';
  return 'Other';
};

export const byCategory = rawData.reduce((acc, curr) => {
  const formattedLabel = formatCategory(curr.sottocategoria);
  const foundEntry = acc.findIndex((el) => el.category === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].assets += 1;
  } else {
    const newEntry = {
      category: formattedLabel,
      assets: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
