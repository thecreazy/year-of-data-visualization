import rawValues from '../data/values.json';

export const totalAccident = rawValues.length;
export const totalPlugin = rawValues.reduce((acc, curr) => {
  if (curr['Electric Vehicle Type'] === 'Battery Electric Vehicle (BEV)')
    return acc;
  return acc + 1;
}, 0);
export const totalElectric = rawValues.reduce((acc, curr) => {
  if (curr['Electric Vehicle Type'] !== 'Battery Electric Vehicle (BEV)')
    return acc;
  return acc + 1;
}, 0);

export const byManufacturer = rawValues
  .reduce((acc, curr) => {
    const formattedValue = curr.Make;
    const foundEntry = acc.findIndex(
      (el) => el.Manufacturer === formattedValue
    );
    if (foundEntry !== -1) {
      acc[foundEntry].Vehicles += 1;
    } else {
      const newEntry = {
        Manufacturer: formattedValue,
        Vehicles: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.Vehicles - a.Vehicles)
  .splice(0, 20);

export const byCounty = rawValues
  .reduce((acc, curr) => {
    const formattedValue = curr.County;
    const foundEntry = acc.findIndex((el) => el.County === formattedValue);
    if (foundEntry !== -1) {
      acc[foundEntry].Vehicles += 1;
    } else {
      const newEntry = {
        County: formattedValue,
        Vehicles: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.Vehicles - a.Vehicles)
  .splice(0, 20);

export const byYear = [
  {
    id: 'Model Year',
    data: rawValues
      .reduce((acc, curr) => {
        const formattedValue = Number(curr['Model Year']);
        const foundYear = acc.findIndex((el) => el.x === formattedValue);
        if (foundYear !== -1) {
          acc[foundYear].y += 1;
        } else {
          const newYear = {
            x: formattedValue,
            y: 1,
          };
          acc.push(newYear);
        }
        return acc;
      }, [])
      .sort((a, b) => a.x - b.x),
  },
];

export const ratio = [
  {
    id: 'Electric Range / Model',
    data: rawValues
      .map((el) => {
        return {
          x: el['Model Year'],
          y: Number(el['Electric Range']),
          model: el.Model,
        };
      })
      .filter((el) => !!el.y),
  },
];
