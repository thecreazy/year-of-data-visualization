const fs = require('fs');

const countries = require('../src/utils/geojson/countries.json');
const data = require('./data.json');

const fixedName = (country) => {
  if (country === 'Czechia') return 'Czech Republic';
  if (country === 'Bahamas') return 'The Bahamas';
  if (country === 'United Kingdom') return 'UK';
  if (country === 'Bosnia & Herzegovina') return 'Bosnia and Herzegovina';
  return country;
};

const finalData = data.reduce((acc, curr) => {
  const realValue = countries.features.find(
    (el) => el.properties.name === fixedName(curr.id)
  );
  if (realValue && curr.value)
    acc.push({
      id: realValue.id,
      value: curr.value,
      name: curr.id,
    });
  return acc;
}, []);

fs.writeFileSync('result.json', JSON.stringify(finalData), 'utf-8');
