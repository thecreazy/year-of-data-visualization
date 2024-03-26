const formatCountry = (el) => {
  if (el === 'Russian Federation') return 'Russia';
  if (el === 'Republic of Moldova') return 'Moldova';
  if (el === 'United States of America') return 'USA';
  if (el === 'China, Hong Kong Special Administrative Region') return 'China';
  if (el === 'Bolivia (Plurinational State of)') return 'Bolivia';
  if (el === 'Iran (Islamic Republic of)') return 'Iran';
  if (el === 'United Arab Emirates') return 'Arab Emirates';
  if (el === 'State of Palestine') return 'Palestine';
  if (el === 'United Kingdom of Great Britain and Northern Ireland')
    return 'UK';
  if (el === 'Bosnia and Herzegovina') return 'Bosnia';
  if (el === 'Venezuela (Bolivarian Republic of)') return 'Venezuela';
  if (el === 'Democratic Republic of the Congo') return 'Congo';
  if (el === "Lao People's Democratic Republic") return 'Lao';
  if (el === 'Micronesia (Federated States of)') return 'Micronesia';
  if (el === 'United Republic of Tanzania') return 'Tanzania';
  return el;
};

export const clearGenderData = (raw) => {
  return raw.map((el) => {
    return {
      id: el.id,
      areaCode: el['area code'],
      country: formatCountry(el.country),
      isocode: el.isocode,
      year: Number(`${el.year}`.replace(/[,]/g, '')),
      value: Number(el.value),
      source: el.source,
      region: el.region,
    };
  });
};
