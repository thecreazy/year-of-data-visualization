import italianProvince from './italianProvince.json';
import countries from './map.json';

export const getCountryIsoCode = (country) => {
  const found = countries.find((el) =>
    [el.name, el['second-name'], el['third-name']].includes(country)
  );
  if (found) return found['alpha-3'];
  return null;
};

export const getProvinceName = (code) => {
  const found = italianProvince.find((el) =>
    [el.sigla, el.alternative].includes(code)
  );
  if (found) return found.nome;
  return null;
};

export const getRegionNameFromProvince = (code) => {
  const found = italianProvince.find((el) =>
    [
      el.sigla,
      el.alternative,
      el.nome.toLowerCase(),
      (el.secondName || '').toLowerCase(),
    ].includes(code)
  );

  if (found) return found.regione;
  return null;
};
