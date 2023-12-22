import rawValues from '../data/values.json';

export const totalData = [
  {
    id: 'Total',
    data: rawValues
      .reduce((acc, curr) => {
        if (curr.age !== 'Total') return acc;
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
      .map((el) => ({ x: el.x, y: Math.round(el.y) }))
      .reverse(),
  },
];

export const bySex = rawValues
  .reduce((acc, curr) => {
    if (curr.age === 'Total') return acc;
    const foundYear = acc.findIndex((el) => el.year === curr.year);
    if (foundYear !== -1) {
      if (!acc[foundYear][curr.sex]) acc[foundYear][curr.sex] = 0;
      acc[foundYear][curr.sex] += Math.round(
        Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
      );
    } else {
      const newYear = {
        year: curr.year,
        [curr.sex]: Math.round(
          Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
        ),
      };
      acc.push(newYear);
    }
    return acc;
  }, [])
  .reverse();

export const byRegion = rawValues
  .reduce((acc, curr) => {
    if (curr.age === 'Total') return acc;
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
  }, [])
  .reverse();

export const byAge = rawValues
  .reduce((acc, curr) => {
    if (curr.age === 'Total') return acc;
    const foundYear = acc.findIndex((el) => el.year === curr.year);
    if (foundYear !== -1) {
      if (!acc[foundYear][curr.age]) acc[foundYear][curr.age] = 0;
      acc[foundYear][curr.age] += Math.round(
        Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
      );
    } else {
      const newYear = {
        year: curr.year,
        [curr.age]: Math.round(
          Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
        ),
      };
      acc.push(newYear);
    }
    return acc;
  }, [])
  .reverse();

export const bySexAndAge = {
  Female: rawValues
    .reduce((acc, curr) => {
      if (curr.age === 'Total' || curr.sex !== 'Female') return acc;
      const foundEntry = acc.findIndex((el) => el.id === curr.age);
      if (foundEntry !== -1) {
        acc[foundEntry].value += Math.round(
          Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
        );
      } else {
        const newEntry = {
          id: curr.age,
          label: curr.age,
          value: Math.round(
            Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
          ),
        };
        acc.push(newEntry);
      }
      return acc;
    }, [])
    .reverse(),
  Male: rawValues
    .reduce((acc, curr) => {
      if (curr.age === 'Total' || curr.sex !== 'Male') return acc;
      const foundEntry = acc.findIndex((el) => el.id === curr.age);
      if (foundEntry !== -1) {
        acc[foundEntry].value += Math.round(
          Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
        );
      } else {
        const newEntry = {
          id: curr.age,
          label: curr.age,
          value: Math.round(
            Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
          ),
        };
        acc.push(newEntry);
      }
      return acc;
    }, [])
    .reverse(),
};

export const byRegionAndAge = {
  Americas: rawValues
    .reduce((acc, curr) => {
      if (curr.age === 'Total' || curr.region !== 'Americas') return acc;
      const foundEntry = acc.findIndex((el) => el.id === curr.age);
      if (foundEntry !== -1) {
        acc[foundEntry].value += Math.round(
          Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
        );
      } else {
        const newEntry = {
          id: curr.age,
          label: curr.age,
          value: Math.round(
            Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
          ),
        };
        acc.push(newEntry);
      }
      return acc;
    }, [])
    .reverse(),
  Europe: rawValues
    .reduce((acc, curr) => {
      if (curr.age === 'Total' || curr.region !== 'Europe') return acc;
      const foundEntry = acc.findIndex((el) => el.id === curr.age);
      if (foundEntry !== -1) {
        acc[foundEntry].value += Math.round(
          Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
        );
      } else {
        const newEntry = {
          id: curr.age,
          label: curr.age,
          value: Math.round(
            Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
          ),
        };
        acc.push(newEntry);
      }
      return acc;
    }, [])
    .reverse(),
  Asia: rawValues
    .reduce((acc, curr) => {
      if (curr.age === 'Total' || curr.region !== 'Asia') return acc;
      const foundEntry = acc.findIndex((el) => el.id === curr.age);
      if (foundEntry !== -1) {
        acc[foundEntry].value += Math.round(
          Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
        );
      } else {
        const newEntry = {
          id: curr.age,
          label: curr.age,
          value: Math.round(
            Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
          ),
        };
        acc.push(newEntry);
      }
      return acc;
    }, [])
    .reverse(),
  Oceania: rawValues
    .reduce((acc, curr) => {
      if (curr.age === 'Total' || curr.region !== 'Oceania') return acc;
      const foundEntry = acc.findIndex((el) => el.id === curr.age);
      if (foundEntry !== -1) {
        acc[foundEntry].value += Math.round(
          Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
        );
      } else {
        const newEntry = {
          id: curr.age,
          label: curr.age,
          value: Math.round(
            Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
          ),
        };
        acc.push(newEntry);
      }
      return acc;
    }, [])
    .reverse(),
  Africa: rawValues
    .reduce((acc, curr) => {
      if (curr.age === 'Total' || curr.region !== 'Africa') return acc;
      const foundEntry = acc.findIndex((el) => el.id === curr.age);
      if (foundEntry !== -1) {
        acc[foundEntry].value += Math.round(
          Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
        );
      } else {
        const newEntry = {
          id: curr.age,
          label: curr.age,
          value: Math.round(
            Number(curr.value ? `${curr.value}`.replace(/[,]/g, '.') : 0)
          ),
        };
        acc.push(newEntry);
      }
      return acc;
    }, [])
    .reverse(),
};
