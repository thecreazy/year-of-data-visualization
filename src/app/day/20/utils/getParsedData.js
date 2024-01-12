import rawValues from '../data/values.json';

export const totalViajerosByYear = rawValues
  .reduce((acc, curr) => {
    const structure = curr.Nombre.split('. ');
    if (structure[0] !== 'Nacional') return acc;
    if (structure[1] === 'Establecimientos hoteleros') return acc;
    curr.Data.forEach((entry) => {
      const foundEntry = acc.findIndex((el) => el.year === entry.Anyo);
      if (foundEntry !== -1) {
        if (!acc[foundEntry][structure[3]]) acc[foundEntry][structure[3]] = 0;
        acc[foundEntry][structure[3]] += entry.Valor;
      } else {
        const newEntry = {
          year: entry.Anyo,
          [structure[3]]: entry.Valor,
        };
        acc.push(newEntry);
      }
    });
    return acc;
  }, [])
  .reverse();

export const totalPernoctacionesPerYearPerCity = rawValues
  .reduce((acc, curr) => {
    const structure = curr.Nombre.split('. ');
    if (structure[0] !== 'Nacional') return acc;
    if (structure[1] !== 'Pernoctaciones') return acc;
    const fe = acc.findIndex((el) => el.id === structure[2]);
    if (fe !== -1) {
      curr.Data.forEach((cele) => {
        const f = acc[fe].data.findIndex((el) => el.x === cele.Anyo);
        acc[fe].data[f].y += cele.Valor;
      });
    } else {
      const newEntry = {
        id: structure[2],
        data: curr.Data.reduce((a, c) => {
          const foundEntry = a.findIndex((el) => el.x === c.Anyo);
          if (foundEntry !== -1) {
            a[foundEntry].y += c.Valor;
          } else {
            const entry = {
              x: c.Anyo,
              y: c.Valor,
            };
            a.push(entry);
          }
          return a;
        }, []).reverse(),
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .filter((el) =>
    [
      'Madrid',
      'Barcelona',
      'Sevilla',
      'Palma De Mallorca',
      'Granada',
      'Valencia',
    ].includes(el.id)
  );

export const madridVsBarcellona = {
  labels: [
    2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
    2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ],
  dataset: [
    {
      label: 'Barcelona - Residents in Spain',
      data: rawValues
        .reduce((acc, curr) => {
          const structure = curr.Nombre.split('. ');
          if (structure[0] !== 'Nacional') return acc;
          if (structure[2] !== 'Barcelona') return acc;
          if (structure[3] !== 'Residentes en España.') return acc;
          curr.Data.forEach((entry) => {
            const foundEntry = acc.findIndex((el) => el.year === entry.Anyo);
            if (foundEntry !== -1) {
              acc[foundEntry].value += entry.Valor;
            } else {
              const newEntry = {
                year: entry.Anyo,
                value: entry.Valor,
              };
              acc.push(newEntry);
            }
          });
          return acc;
        }, [])
        .map((el) => el.value)
        .reverse(),
      backgroundColor: '#177e89',
      stack: 'Stack 0',
    },
    {
      label: 'Barcelona - Foreign residents',
      data: rawValues
        .reduce((acc, curr) => {
          const structure = curr.Nombre.split('. ');
          if (structure[0] !== 'Nacional') return acc;
          if (structure[2] !== 'Barcelona') return acc;
          if (structure[3] !== 'Residentes en el extranjero.') return acc;
          curr.Data.forEach((entry) => {
            const foundEntry = acc.findIndex((el) => el.year === entry.Anyo);
            if (foundEntry !== -1) {
              acc[foundEntry].value += entry.Valor;
            } else {
              const newEntry = {
                year: entry.Anyo,
                value: entry.Valor,
              };
              acc.push(newEntry);
            }
          });
          return acc;
        }, [])
        .map((el) => el.value)
        .reverse(),
      backgroundColor: '#084c61',
      stack: 'Stack 0',
    },
    {
      label: 'Madrid - Residents in Spain',
      data: rawValues
        .reduce((acc, curr) => {
          const structure = curr.Nombre.split('. ');
          if (structure[0] !== 'Nacional') return acc;
          if (structure[2] !== 'Madrid') return acc;
          if (structure[3] !== 'Residentes en España.') return acc;
          curr.Data.forEach((entry) => {
            const foundEntry = acc.findIndex((el) => el.year === entry.Anyo);
            if (foundEntry !== -1) {
              acc[foundEntry].value += entry.Valor;
            } else {
              const newEntry = {
                year: entry.Anyo,
                value: entry.Valor,
              };
              acc.push(newEntry);
            }
          });
          return acc;
        }, [])
        .map((el) => el.value)
        .reverse(),
      backgroundColor: '#db3a34',
      stack: 'Stack 1',
    },
    {
      label: 'Madrid - Foreign residents',
      data: rawValues
        .reduce((acc, curr) => {
          const structure = curr.Nombre.split('. ');
          if (structure[0] !== 'Nacional') return acc;
          if (structure[2] !== 'Madrid') return acc;
          if (structure[3] !== 'Residentes en el extranjero.') return acc;
          curr.Data.forEach((entry) => {
            const foundEntry = acc.findIndex((el) => el.year === entry.Anyo);
            if (foundEntry !== -1) {
              acc[foundEntry].value += entry.Valor;
            } else {
              const newEntry = {
                year: entry.Anyo,
                value: entry.Valor,
              };
              acc.push(newEntry);
            }
          });
          return acc;
        }, [])
        .map((el) => el.value)
        .reverse(),
      backgroundColor: '#ffc857',
      stack: 'Stack 1',
    },
  ],
};

export const spanishVistiros = {
  name: 'Travelers in Spain',
  color: 'hsl(1, 70%, 50%)',
  children: rawValues.reduce((acc, curr) => {
    const structure = curr.Nombre.split('. ');
    if (structure[0] !== 'Nacional') return acc;
    if (structure[1] === 'Establecimientos hoteleros') return acc;
    const foundCity = acc.findIndex((el) => el.name === structure[2]);
    if (foundCity !== -1) {
      const index = structure[1] === 'Viajeros' ? 0 : 1;
      acc[foundCity].children[index].children.push({
        name: structure[3],
        color: 'hsl(30, 70%, 50%)',
        loc: curr.Data.reduce((a, c) => {
          a += c.Valor || 0;
          return a;
        }, 0),
      });
    } else {
      const newCity = {
        name: structure[2],
        color: 'hsl(141, 70%, 50%)',
        children: [
          { name: 'Viajeros', color: 'hsl(8, 70%, 50%)', children: [] },
          { name: 'Pernoctaciones', color: 'hsl(8, 70%, 50%)', children: [] },
        ],
      };
      const index = structure[1] === 'Viajeros' ? 0 : 1;
      newCity.children[index].children.push({
        name: structure[3],
        color: 'hsl(30, 70%, 50%)',
        loc: curr.Data.reduce((a, c) => {
          a += c.Valor || 0;
          return a;
        }, 0),
      });
      acc.push(newCity);
    }
    return acc;
  }, []),
};
