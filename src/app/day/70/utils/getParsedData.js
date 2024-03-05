import rawData from '../data/values.json';

export const total = rawData.length;

export const byGender = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.gender;
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

export const bySurvived = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.survived ? 'Survivors' : 'Victims';
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

export const byEmbarked = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.embarked;
  if (!formattedLabel) return acc;
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

export const byClass = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.pclass;
  if (!formattedLabel) return acc;
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

export const ageDistrubution = rawData
  .reduce((acc, curr) => {
    if (curr.age === 'NA') return acc;
    const foundEntry = acc.findIndex((el) => el.age === curr.age);
    if (foundEntry !== -1) {
      acc[foundEntry].passengers += 1;
    } else {
      const newEntry = {
        age: curr.age,
        passengers: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.age - b.age);

export const ageSurvived = rawData
  .reduce((acc, curr) => {
    if (curr.age === 'NA') return acc;
    const foundEntry = acc.findIndex((el) => el.age === curr.age);
    if (foundEntry !== -1) {
      acc[foundEntry].Survivors += curr.survived;
      acc[foundEntry].Victims += !curr.survived ? 1 : 0;
    } else {
      const newEntry = {
        age: curr.age,
        Survivors: curr.survived,
        Victims: !curr.survived ? 1 : 0,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.age - b.age);

export const classSurvived = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.class === curr.pclass);
  if (foundEntry !== -1) {
    acc[foundEntry].Survivors += curr.survived;
    acc[foundEntry].Victims += !curr.survived ? 1 : 0;
  } else {
    const newEntry = {
      class: curr.pclass,
      Survivors: curr.survived,
      Victims: !curr.survived ? 1 : 0,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
