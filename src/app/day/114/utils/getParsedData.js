import rawValues from '../data/values.json';

export const totalData = [
  {
    id: 'Total',
    data: rawValues
      .reduce((acc, curr) => {
        if (curr.year < 2011) return acc;
        const foundYear = acc.findIndex((el) => el.x === curr.year);
        if (foundYear !== -1) {
          acc[foundYear].y += Number(
            curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0
          );
        } else {
          const newYear = {
            x: curr.year,
            y: Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0),
          };
          acc.push(newYear);
        }
        return acc;
      }, [])
      .map((el) => ({ x: el.x, y: Math.round(el.y) })),
  },
];

export const byRegion = rawValues.reduce((acc, curr) => {
  if (curr.year < 2011) return acc;
  const foundYear = acc.findIndex((el) => el.year === curr.year);
  if (foundYear !== -1) {
    if (!acc[foundYear][curr.region]) acc[foundYear][curr.region] = 0;
    acc[foundYear][curr.region] += Math.round(
      Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
    );
  } else {
    const newYear = {
      year: curr.year,
      [curr.region]: Math.round(
        Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
      ),
    };
    acc.push(newYear);
  }
  return acc;
}, []);

export const totalByRegion = rawValues.reduce((acc, curr) => {
  if (curr.year < 2011) return acc;
  const foundEntry = acc.findIndex((el) => el.region === curr.region);
  if (foundEntry !== -1) {
    acc[foundEntry].value += Math.round(
      Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
    );
  } else {
    const newEntry = {
      region: curr.region,
      value: Math.round(
        Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
      ),
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
export const byCountry = rawValues.reduce((acc, curr) => {
  if (curr.year < 2011) return acc;
  const foundEntry = acc.findIndex((el) => el.id === curr.isocode);
  if (foundEntry !== -1) {
    acc[foundEntry].value += Math.round(
      Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
    );
  } else {
    const newEntry = {
      id: curr.isocode,
      value: Math.round(
        Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
      ),
      label: curr.country,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
