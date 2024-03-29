import rawData from '../data/values.json';

const formatNumber = (val) => {
  if (!val) return 0;
  const values = val.split(' ');
  return (
    Number(values[0].replace(/[,]/g, '')) *
    (values[1] === 'M' ? 1000000 : 1000000000)
  );
};

const formatPrice = (price) => {
  if (!price) return;
  const real = Math.floor(price / 1000000000) * 1000000000;
  return { formatted: real === 0 ? `<1B` : `${real}B`, real };
};

export const byProfit = rawData
  .reduce((acc, curr) => {
    if (!curr.Profit) return acc;
    const formattedValue = formatPrice(formatNumber(curr.Profit));
    const foundEntry = acc.findIndex(
      (el) => el.profit === formattedValue.formatted
    );
    if (foundEntry !== -1) {
      acc[foundEntry].companies += 1;
    } else {
      const newEntry = {
        profit: formattedValue.formatted,
        companies: 1,
        profitReal: formattedValue.real,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.profitReal - b.profitReal);

export const byCountry = rawData
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.Country === curr.Country);
    if (foundEntry !== -1) {
      acc[foundEntry].value += 1;
    } else {
      const newEntry = {
        Country: curr.Country,
        value: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.value - a.value);

export const ratio = [
  {
    id: ' Market Value vs Profit',
    data: rawData
      .map((curr) => {
        return {
          x: formatNumber(curr.Profit),
          y: formatNumber(curr['Market Value']),
          company: curr['Company Name'],
        };
      })
      .filter((curr) => !!curr.x),
  },
];
