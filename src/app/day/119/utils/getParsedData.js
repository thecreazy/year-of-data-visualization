import rawData from '../data/values.json';

export const total = rawData.length;

export const byIndustry = rawData
  .reduce((acc, curr) => {
    const formattedValue = curr.Industry;
    const foundEntry = acc.findIndex((el) => el.industry === formattedValue);
    if (foundEntry !== -1) {
      acc[foundEntry].companies += 1;
    } else {
      const newEntry = {
        industry: curr.Industry,
        companies: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .filter((curr) => curr.companies > 10);

export const byGender = rawData.reduce((acc, curr) => {
  const formattedLabel = curr['Ceo gender'] || 'Unknown';
  const foundEntry = acc.findIndex((el) => el.id === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formattedLabel,
      label: formattedLabel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatEmployees = (employee) => {
  if (employee < 50) return '<50';
  if (employee < 100) return '<100';
  if (employee < 500) return '<500';
  if (employee < 1000) return '<1000';
  if (employee < 10000) return '<10000';
  return '>10000';
};

export const byEmployees = rawData.reduce((acc, curr) => {
  const formatteLabels = formatEmployees(curr.Employees);
  const foundEntry = acc.findIndex((el) => el.id === formatteLabels);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: formatteLabels,
      label: formatteLabels,
      value: 1,
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
          x: el.Revenues,
          y: el.Profits,
          company: el.Company,
        };
      })
      .filter((el) => el.y !== '' && el.y !== 'New'),
  },
];
