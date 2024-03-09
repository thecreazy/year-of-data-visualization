const csvFilePath = './values.csv';
const csv = require('csvtojson');
const fs = require('fs');

csv({
  delimiter: ';',
})
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFileSync('result.json', JSON.stringify(jsonObj), 'utf-8');
  });
