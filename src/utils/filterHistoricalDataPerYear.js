import dayjs from 'dayjs';

const filterHistoricalDataPerYear = (dataSet, year, operator, aggregate) => {
  let finalDataset = dataSet.filter((curr) => {
    if (curr.TX === -9999) return false;
    const currYear = dayjs(`${curr.DATE}`, 'YYYYMMDD', true).format('YYYY');
    switch (operator) {
      case '=': {
        return `${year}` === currYear;
      }
      case '>': {
        return year <= Number(currYear);
      }
      case '<': {
        return year >= Number(currYear);
      }
      default:
        return false;
    }
  });

  if (aggregate && aggregate === 'm') {
    finalDataset = finalDataset.reduce((acc, curr) => {
      const currYear = dayjs(`${curr.DATE}`, 'YYYYMMDD', true).format(
        'YYYY-MM'
      );
      if (!acc[currYear]) acc[currYear] = { values: [] };
      acc[currYear].values.push(curr.TX);
      return acc;
    }, {});
    const finalJson = {};
    Object.keys(finalDataset).forEach((el) => {
      finalJson[el] = {
        min: Math.min(...finalDataset[el].values) / 10,
        max: Math.max(...finalDataset[el].values) / 10,
        avg:
          finalDataset[el].values.reduce((a, b) => a + b, 0) /
          finalDataset[el].values.length /
          10,
        values: finalDataset[el].values.map((el) => el / 10),
      };
    });
    return finalJson;
  }
  return finalDataset;
};

export default filterHistoricalDataPerYear;
