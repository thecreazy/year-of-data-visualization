import rawData from '../data/values.json';

export const total = rawData.find(
  (el) => el.Causa === 'Totale' && el.Sesso === 'Totale'
).Osservazione;
export const maleTotal = rawData.find(
  (el) => el.Causa === 'Totale' && el.SEX === 1
).Osservazione;
export const femaleTotal = rawData.find(
  (el) => el.Causa === 'Totale' && el.SEX === 2
).Osservazione;

const formatMacroCategories = (label) => {
  if (label === 'Covid-19') return 'Covid-19';
  if (label === 'Tumori') return 'Tumors';
  if (label === 'Cause esterne di traumatismo e avvelenamento')
    return 'Trauma and poisoning';
  if (label === 'Malformazioni congenite ed anomalie cromosomiche')
    return 'Malformations and Chromosomal anomalies';
  if (
    label ===
    'Alcune condizioni morbose che hanno origine nel periodo perinatale'
  )
    return 'Morbid condition in perinatal period';
  if (label === 'Malattie del sistema respiratorio')
    return 'Respiratory system';
  if (label === 'Malattie del sistema circolatorio')
    return 'Circulatory system';
  if (label === 'Malattie del sistema nervoso e degli organi di s')
    return 'Nervous system and sense organs';
  if (label === 'Sintomi segni risultati anomali e cause mal definite')
    return 'Unknown';
  if (label === 'Complicazioni della gravidanza  del parto e del puerperio')
    return 'Pregnancy, childbirth and the puerperium';
  if (label === 'Alcune malattie infettive e parassitarie')
    return 'Infectious and Parasitic';
  if (label === "Malattie dell'apparato genitourinario")
    return 'Genitourinary system';
  if (label === 'Malattie del sistema osteomuscolare e del tessuto connettivo')
    return 'Osteomuscular system and connective tissue';
  if (label === "Malattie dell'apparato digerente") return 'Digestive system';
  if (label === 'Malattie della cute e del tessuto sottocutaneo')
    return 'Skin and subcutaneous tissue';
  if (label === 'Malattie del sistema nervoso e degli organi di senso')
    return 'Nervous system and sense organs';
  if (label === 'Disturbi psichici e comportamentali')
    return 'Mental and behavioral disorders';
  if (label === 'Malattie endocrine nutrizionali e metaboliche')
    return 'Nutritional and metabolic endocrine';
  if (
    label ===
    'Malattie del sangue e degli organi ematopoietici ed alcuni disturbi del sistema immunitario'
  )
    return 'Blood and haemopoietic organs ';

  return label;
};

export const byMacroCategories = rawData.reduce((acc, curr) => {
  if (curr.SEX === 9) return acc;
  if (curr.Causa === 'Totale') return acc;
  if (isNaN(Number(curr.UNDERLY_DEATH_EUSL))) return acc;
  const formattedLabel = formatMacroCategories(curr.Causa);
  const foundEntry = acc.findIndex((el) => el.category === formattedLabel);
  if (foundEntry !== -1) {
    if (curr.SEX === 1) acc[foundEntry].male += curr.Osservazione;
    if (curr.SEX === 2) acc[foundEntry].female += curr.Osservazione;
  } else {
    const newEntry = {
      category: formattedLabel,
      male: curr.SEX === 1 ? curr.Osservazione : 0,
      female: curr.SEX === 2 ? curr.Osservazione : 0,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const totalTumors = rawData.find(
  (el) => el.Causa === 'Tumori' && el.Sesso === 'Totale'
).Osservazione;
export const maleTotalTumors = rawData.find(
  (el) => el.Causa === 'Tumori' && el.SEX === 1
).Osservazione;
export const femaleTotalTumors = rawData.find(
  (el) => el.Causa === 'Tumori' && el.SEX === 2
).Osservazione;

const formatTumorCategories = (label) => {
  if (label === 'Di cui altri tumori maligni') return 'Others';
  if (
    label === 'Di cui altri tumori maligni del tessuto linfatico/ematopoietico'
  )
    return 'Lymphatic/hematopoietic tissue';
  if (label === 'Di cui leucemia') return 'Leukemia';
  if (label === 'Di cui morbo di hodgkin e linfomi')
    return "Hodgkin's disease and lymphomas";
  if (label === 'Di cui tumori maligni della tiroide') return 'Thyroid';
  if (
    label ===
    'Di cui tumori maligni del cervello e del sistema nervoso centrale'
  )
    return 'Brain';
  if (label === 'Di cui tumori maligni della vescica') return 'Bladder';
  if (label === 'Di cui tumori maligni del rene') return 'Kidney';
  if (label === "Di cui tumori maligni dell'ovaio") return 'Ovary';
  if (label === "Di cui tumori maligni di altre parti dell'utero")
    return 'Other parts of the uterus';
  if (label === 'Di cui tumori maligni della cervice uterina')
    return 'Uterine cervix';
  if (label === 'Di cui tumori maligni del seno') return 'Breast';
  if (label === 'Di cui melanomi maligni della cute') return 'Skin';
  if (label === 'Di cui tumori maligni della laringe') return 'Larynx';
  if (label === 'Di cui tumori maligni del pancreas') return 'Pancreas';
  if (label === 'Di cui tumori maligni dello stomaco') return 'Stomach';
  if (label === "Di cui tumori maligni dell'esofago") return 'Esophagus';
  if (label === 'Di cui tumori maligni della prostata') return 'Prostate';
  if (label === 'Di cui tumori maligni del pancreas') return 'Pancreas';
  if (label === 'Di cui tumori maligni della trachea dei bronchi e dei polmoni')
    return 'Trachea, bronchi and lungs';
  if (
    label ===
    'Di cui tumori maligni del fegato e dei dotti biliari intraepatici'
  )
    return 'Liver';
  if (label === 'Di cui tumori maligni delle labbra cavità orale e faringe')
    return 'Lips, oral cavity and pharynx';
  if (label === "Di cui tumori maligni del colon del retto e dell'ano")
    return 'Colon, rectum and anus';

  return label;
};

export const byTumorsCategories = rawData.reduce((acc, curr) => {
  if (curr.SEX === 9) return acc;
  if (!`${curr.UNDERLY_DEATH_EUSL}`.startsWith('2_1_')) return acc;
  const formattedLabel = formatTumorCategories(curr.Causa);
  const foundEntry = acc.findIndex((el) => el.category === formattedLabel);
  if (foundEntry !== -1) {
    if (curr.SEX === 1) acc[foundEntry].male += curr.Osservazione;
    if (curr.SEX === 2) acc[foundEntry].female += curr.Osservazione;
  } else {
    const newEntry = {
      category: formattedLabel,
      male: curr.SEX === 1 ? curr.Osservazione : 0,
      female: curr.SEX === 2 ? curr.Osservazione : 0,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const totalCirculatory = rawData.find(
  (el) =>
    el.Causa === 'Malattie del sistema circolatorio' && el.Sesso === 'Totale'
).Osservazione;
export const maleTotalCirculatory = rawData.find(
  (el) => el.Causa === 'Malattie del sistema circolatorio' && el.SEX === 1
).Osservazione;
export const femaleTotalCirculatory = rawData.find(
  (el) => el.Causa === 'Malattie del sistema circolatorio' && el.SEX === 2
).Osservazione;

const formatCiculatoryCategories = (label) => {
  if (label === 'Malattie cerebrovascolari') return 'Cerebrovascular';
  if (label === 'Altre malattie del cuore') return 'Other heart';
  if (label === 'Altre malattie del sistema circolatorio')
    return 'Other circulatory system';
  if (label === 'Malattie ischemiche del cuore') return 'Ischemic heart';
  return label;
};

export const byCirculatoryCategories = rawData.reduce((acc, curr) => {
  if (curr.SEX === 9) return acc;
  if (!`${curr.UNDERLY_DEATH_EUSL}`.startsWith('7_')) return acc;
  if (`${curr.UNDERLY_DEATH_EUSL}`.startsWith('7_1_')) return acc;
  const formattedLabel = formatCiculatoryCategories(curr.Causa);
  const foundEntry = acc.findIndex((el) => el.category === formattedLabel);
  if (foundEntry !== -1) {
    if (curr.SEX === 1) acc[foundEntry].male += curr.Osservazione;
    if (curr.SEX === 2) acc[foundEntry].female += curr.Osservazione;
  } else {
    const newEntry = {
      category: formattedLabel,
      male: curr.SEX === 1 ? curr.Osservazione : 0,
      female: curr.SEX === 2 ? curr.Osservazione : 0,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const totalCovid = rawData.find(
  (el) => el.Causa === 'Covid-19' && el.Sesso === 'Totale'
).Osservazione;
export const maleTotalCovid = rawData.find(
  (el) => el.Causa === 'Covid-19' && el.SEX === 1
).Osservazione;
export const femaleTotalCovid = rawData.find(
  (el) => el.Causa === 'Covid-19' && el.SEX === 2
).Osservazione;

const formatCovidCategories = (label) => {
  if (label === 'Covid-19 altro') return 'Other';
  if (label === 'Covid-19 virus identificato') return 'Virus identified';
  if (label === 'Covid-19 virus non identificato')
    return 'Virus not identified';
  return label;
};

export const byCovidCategories = rawData.reduce((acc, curr) => {
  if (curr.SEX === 9) return acc;
  if (!`${curr.UNDERLY_DEATH_EUSL}`.startsWith('20_')) return acc;
  const formattedLabel = formatCovidCategories(curr.Causa);
  const foundEntry = acc.findIndex((el) => el.category === formattedLabel);
  if (foundEntry !== -1) {
    if (curr.SEX === 1) acc[foundEntry].male += curr.Osservazione;
    if (curr.SEX === 2) acc[foundEntry].female += curr.Osservazione;
  } else {
    const newEntry = {
      category: formattedLabel,
      male: curr.SEX === 1 ? curr.Osservazione : 0,
      female: curr.SEX === 2 ? curr.Osservazione : 0,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
