import rawData from '../data/values.json';

export const total = rawData.length;
export const totalNetWorth = rawData.reduce((acc, curr) => {
  acc += curr.finalWorth * 1000000000;
  return acc;
}, 0);

export const byGender = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.gender === 'M' ? 'Male' : 'Female';
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

export const byTypology = rawData.reduce((acc, curr) => {
  const formattedLabel =
    curr.selfMade === 'FALSE' ? 'Not Self-Made' : 'Self-Made';
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

export const byIndustries = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.category);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.category,
      label: curr.category,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const totalByIndustries = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.industry === curr.category);
  if (foundEntry !== -1) {
    acc[foundEntry].value += curr.finalWorth;
  } else {
    const newEntry = {
      industry: curr.category,
      value: curr.finalWorth,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const ratio = [
  {
    id: 'Billioners',
    data: rawData
      .map((el) => {
        return {
          x: el.age,
          y: el.finalWorth,
        };
      })
      .filter((el) => !!el.x),
  },
];

export const totalByCountries = rawData
  .reduce((acc, curr) => {
    const foundCountry = acc.findIndex((el) => el.country === curr.country);
    if (foundCountry !== -1) {
      acc[foundCountry].Residence += 1;
    } else {
      const newEntry = {
        country: curr.country,
        Residence: 1,
        Citizenship: 0,
      };
      acc.push(newEntry);
    }
    const foundCitizenship = acc.findIndex(
      (el) => el.country === curr.countryOfCitizenship
    );
    if (foundCitizenship !== -1) {
      acc[foundCitizenship].Citizenship += 1;
    } else {
      const newEntry = {
        country: curr.country,
        Residence: 0,
        Citizenship: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .filter((el) => el.Residence > 10 || el.Citizenship > 10);

export const totalByOrganization = rawData
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex(
      (el) => el.organization === curr.organization
    );
    if (foundEntry !== -1) {
      acc[foundEntry].value += curr.finalWorth;
    } else {
      const newEntry = {
        organization: curr.organization,
        value: curr.finalWorth,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .filter((el) => !!el.organization)
  .sort((a, b) => b.value - a.value)
  .slice(0, 20);
