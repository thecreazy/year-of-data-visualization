import rawData from '../data/values.json';

export const total2022 = rawData.reduce((acc, curr) => {
  if (curr.anno !== '2022') return acc;
  else return acc + curr.iscritti_immigrati_e_iscritti_d_ufficio;
}, 0);

export const totalByYear = [
  {
    id: 'Detainees',
    data: rawData
      .reduce((acc, curr) => {
        const foundEntry = acc.findIndex((el) => el.x === curr.anno);
        if (foundEntry !== -1) {
          acc[foundEntry].y += curr.iscritti_immigrati_e_iscritti_d_ufficio;
        } else {
          const newEntry = {
            x: curr.anno,
            y: curr.iscritti_immigrati_e_iscritti_d_ufficio,
          };
          acc.push(newEntry);
        }
        return acc;
      }, [])
      .sort((a, b) => a.x - b.x),
  },
];

export const zones = rawData
  .map((el) => el.zone)
  .filter((value, index, array) => array.indexOf(value) === index);

export const splitByZone = rawData
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex((el) => el.year === curr.anno);
    if (foundEntry !== -1) {
      acc[foundEntry][`${curr.zone}`] =
        curr.iscritti_immigrati_e_iscritti_d_ufficio;
    } else {
      const newEntry = {
        year: curr.anno,
        [`${curr.zone}`]: curr.iscritti_immigrati_e_iscritti_d_ufficio,
        'Non attribuito': 0,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.year - b.year);

export const lastYearZone = rawData.reduce((acc, curr) => {
  if (curr.anno !== '2022') return acc;
  const newEntry = {
    id: curr.zone,
    value: curr.iscritti_immigrati_e_iscritti_d_ufficio,
  };
  acc.push(newEntry);
  return acc;
}, []);
