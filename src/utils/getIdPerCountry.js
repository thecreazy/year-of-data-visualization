import countries from './geojson/countries.json';

export const getIDPerCountry = (country) => {
  const found = countries.features.find((el) => {
    return (
      el.properties.name === country || el.properties.other_name === country
    );
  });
  if (!!found) return found.id;
  else return country;
};
