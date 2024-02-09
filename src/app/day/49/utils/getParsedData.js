import rawCompanies from '../data/companies.json';
import rawIndustries from '../data/industries.json';
import rawData from '../data/values.json';

export const totals = rawCompanies.length;

const formatCompanySize = (type) => type;

export const byCompanySize = rawCompanies.reduce((acc, curr) => {
  const formattedLabel = formatCompanySize(curr.company_size);
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

export const byIndustry = rawIndustries
  .reduce((acc, curr) => {
    const formattedLabel = curr.industry;
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
  }, [])
  .sort((a, b) => b.value - a.value)
  .slice(0, 20);

export const sizeJobsRatio = rawCompanies.map((el) => {
  return {
    id: el.name,
    data: [
      {
        x: el.company_size,
        y: rawData.filter((curr) => curr.company_id === el.company_id).length,
      },
    ],
  };
});

const formatSalary = (salary, period) => {
  if (period !== 'MONTHLY' && period !== 'YEARLY') return null;
  const calculatedSalary = period === 'MONTHLY' ? salary * 12 : salary;
  return calculatedSalary;
};

export const salarySizeRatio = rawCompanies.map((el) => {
  return {
    id: el.name,
    data: [
      {
        y: el.company_size,
        x: rawData.reduce((acc, curr, index) => {
          if (curr.company_id !== el.company_id) return acc;
          const formattedSalary = formatSalary(
            curr.max_salary,
            curr.pay_period
          );
          if (index === 0) return formattedSalary;
          else return (acc + formattedSalary) / 2;
        }, 0),
      },
    ],
  };
});

export const byCountry = rawCompanies.reduce((acc, curr) => {
  const formattedLabel = curr.country;
  const foundEntry = acc.findIndex((el) => el.country === formattedLabel);
  if (foundEntry !== -1) {
    acc[foundEntry].companies += 1;
  } else {
    const newEntry = {
      country: formattedLabel,
      companies: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
