import map from './map.json';

export const getCountryIsoCode = (country) => {
  const found = map.find(
    (el) => el.name === country || el['second-name'] === country
  );
  if (found) return found['alpha-3'];
  else {
    console.log('cazzo', country);
    return null;
  }
};
