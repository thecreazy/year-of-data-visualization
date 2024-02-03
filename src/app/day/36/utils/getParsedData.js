import rawBenefits from '../data/benefits.json';
import rawJobSkill from '../data/jobSkill.json';
import rawSkill from '../data/skills.json';
import rawData from '../data/values.json';

export const totals = rawData.length;

export const byWorkType = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.formatted_work_type);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.formatted_work_type,
      label: curr.formatted_work_type,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byExperienceLevel = rawData.reduce((acc, curr) => {
  const explevel = curr.formatted_experience_level || 'Unknown';
  const foundEntry = acc.findIndex((el) => el.id === explevel);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: explevel,
      label: explevel,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byRemote = rawData.reduce((acc, curr) => {
  const removeFriendly = curr.remote_allowed ? 'Yes' : 'No';
  const foundEntry = acc.findIndex((el) => el.id === removeFriendly);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: removeFriendly,
      label: removeFriendly,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatSalary = (salary, period) => {
  if (period !== 'MONTHLY' && period !== 'YEARLY') return null;
  const calculatedSalary = period === 'MONTHLY' ? salary * 12 : salary;
  if (calculatedSalary < 12000) return { label: '<12k', order: 0 };
  if (calculatedSalary < 30000) return { label: '<30k', order: 1 };
  if (calculatedSalary < 50000) return { label: '<50k', order: 2 };
  if (calculatedSalary < 80000) return { label: '<80k', order: 3 };
  if (calculatedSalary < 100000) return { label: '<100k', order: 4 };
  if (calculatedSalary < 150000) return { label: '<150k', order: 5 };
  if (calculatedSalary < 200000) return { label: '<200k', order: 6 };
  return { label: '200k+', order: 7 };
};

export const bySalary = rawData
  .reduce((acc, curr) => {
    const formattedSalary = formatSalary(curr.max_salary, curr.pay_period);
    if (!formattedSalary) return acc;
    const foundEntry = acc.findIndex(
      (el) => el.range === formattedSalary.label
    );
    if (foundEntry !== -1) {
      acc[foundEntry].value += 1;
    } else {
      const newEntry = {
        range: formattedSalary.label,
        order: formattedSalary.order,
        value: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.order - b.order);

export const byBenefits = rawBenefits.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.benefit === curr.type);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      benefit: curr.type,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

const formatSkill = (skill) => {
  const foundSkill = rawSkill.find((el) => el.skill_abr === skill);
  if (!foundSkill) return null;
  return foundSkill.skill_name;
};

export const bySkills = rawJobSkill
  .reduce((acc, curr) => {
    const formattedSkill = formatSkill(curr.skill_abr);
    if (!formattedSkill) return acc;
    const foundEntry = acc.findIndex((el) => el.category === formattedSkill);
    if (foundEntry !== -1) {
      acc[foundEntry].value += 1;
    } else {
      const newEntry = {
        category: formattedSkill,
        value: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.value - b.value);
