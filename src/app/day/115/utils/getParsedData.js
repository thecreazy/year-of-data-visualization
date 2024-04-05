import rawData from '../data/values.json';

export const totals = rawData.length;

export const byYear = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr['Anno inserimento'];
    const foundEntry = acc.findIndex((el) => el.year === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].stations += 1;
    } else {
      const newEntry = {
        year: formattedLabel,
        stations: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.year - b.year);

export const byCountry = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['Country'];
  const foundEntry = acc.findIndex((el) => el.region === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].unicorns += 1;
  } else {
    const newEntry = {
      region: formattedLabel,
      unicorns: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatValutation = (val) => {
  const realNumber = Number(val.split('$')[1]);

  return {
    formatted: `< ${Math.floor(realNumber / 1) * 1 + 1}B$`,
    real: realNumber,
  };
};

export const byValutation = rawData
  .reduce((acc, curr) => {
    const formattedLabel = formatValutation(curr['Valuation ($B)']);
    if (formattedLabel === 'ALTRO') return acc;
    const foundEntry = acc.findIndex(
      (el) => el.valutation === formattedLabel.formatted
    );
    if (foundEntry !== -1) {
      acc[foundEntry].unicorns += 1;
    } else {
      const newEntry = {
        valutation: formattedLabel.formatted,
        unicorns: 1,
        real: formattedLabel.real,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.real - b.real);

export const byIndustries = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['Industry'];
  const foundEntry = acc.findIndex((el) => el.industry === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].unicorns += 1;
  } else {
    const newEntry = {
      industry: formattedLabel,
      unicorns: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const ratio = [
  {
    id: 'Companies',
    data: rawData
      .map((el) => {
        return {
          x: el['Date Joined'].split('/')[2],
          y: Number(el['Valuation ($B)'].split('$')[1]) * 1000000000,
          company: el.Company,
        };
      })
      .filter((el) => el.y !== '' && el.y !== 'New'),
  },
];
