import rawCompanies from '../data/companies.json';
import rawIndustries from '../data/industries.json';
import rawData from '../data/values.json';

export const totals = rawCompanies.length;

const formatCompanySize = (type) => {
  if (!type) return '<10 (0)';
  if (type === 1) return '11 - 50 (1)';
  if (type === 2) return '51 - 200 (2)';
  if (type === 3) return '201 - 500 (3)';
  if (type === 4) return '501 - 1000 (4)';
  if (type === 5) return '1001 - 5000 (5)';
  if (type === 6) return '5001 - 10000 (6)';
  if (type === 7) return '>10001 (7)';
  return type;
};

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
