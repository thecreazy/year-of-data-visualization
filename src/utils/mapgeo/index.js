import italianProvince from './italianProvince.json';
import countries from './map.json';

export const getCountryIsoCode = (country) => {
  const found = countries.find(
    (el) => el.name === country || el['second-name'] === country
  );
  if (found) return found['alpha-3'];
  return null;
};

export const getProvinceName = (code) => {
  const found = italianProvince.find((el) => el.sigla === code);
  if (found) return found.nome;
  return null;
};

export const getRegionNameFromProvince = (code) => {
  const found = italianProvince.find((el) => el.sigla === code);
  if (found) return found.regione;
  return null;
};
