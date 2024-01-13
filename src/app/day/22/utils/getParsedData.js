import rawValues from '../data/values.json';

export const total = rawValues.length;

export const byYearOfFoundation = rawValues
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.year === curr.foundation_year);
    if (foundEntry !== -1) {
      acc[foundEntry].Companies += 1;
    } else {
      const newEntry = {
        year: curr.foundation_year,
        Companies: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.year - b.year);

export const byNumberOfEmployee = rawValues.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.employees);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.employees,
      label: curr.employees,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byIndustry = rawValues.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.industry);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.industry,
      label: curr.industry,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const averageTurnoverByIndusty = rawValues
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.industry === curr.industry);
    const avgTurnover = curr.turnover_in_czk
      .split('-')
      .reduce((turn, el, index) => {
        if (!!el.includes('1500mil.avíce')) return 1500;
        if (!!el.includes('<0,2mil.')) return 0.1;
        if (index === 0) turn += Number(el.replace(',', '.'));
        if (index === 1) {
          turn += Number(el.split('mil.')[0].replace(',', '.'));
          turn /= 2;
        }
        return turn;
      }, 0);
    if (avgTurnover === 0) return acc;
    if (foundEntry !== -1) {
      acc[foundEntry].turnover += avgTurnover;
    } else {
      const newEntry = {
        industry: curr.industry,
        turnover: avgTurnover,
      };

      acc.push(newEntry);
    }
    return acc;
  }, [])
  .map((el) => ({
    industry: el.industry,
    turnover: el.turnover.toFixed(2),
  }));
