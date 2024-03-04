import rawData from '../data/values.json';

export const total = rawData.length;

const formatPrice = (value) => {
  const baseValue = (value / 10).toFixed(0);
  return {
    formatted: `${baseValue * 10}-${baseValue * 10 + 9}€`,
    baseValue: baseValue,
  };
};

export const byPrice = rawData
  .reduce((acc, curr) => {
    if (!curr.price) return acc;
    const formattedValue = formatPrice(curr.price);
    const foundEntry = acc.findIndex(
      (el) => el.price === formattedValue.formatted
    );
    if (foundEntry !== -1) {
      acc[foundEntry].properties += 1;
    } else {
      const newEntry = {
        price: formattedValue.formatted,
        properties: 1,
        basePrice: formattedValue.baseValue,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => a.basePrice - b.basePrice)
  .filter((curr) => curr.properties > 2);

export const byRoomType = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.room_type);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.room_type,
      label: curr.room_type,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
export const byBedrooms = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.bedrooms);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.bedrooms,
      label: curr.bedrooms,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

export const byNeighbourhood = rawData
  .reduce((acc, curr) => {
    const foundEntry = acc.findIndex(
      (el) => el.neighbourhood === curr.neighbourhood
    );
    if (foundEntry !== -1) {
      acc[foundEntry].value += 1;
    } else {
      const newEntry = {
        neighbourhood: curr.neighbourhood,
        value: 1,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.value - a.value)
  .slice(0, 20);

export const ratio = [
  {
    id: 'Properties',
    data: rawData
      .map((el) => {
        return {
          x: el.price,
          y: el.ratings,
        };
      })
      .filter((el) => el.y !== '' && el.y !== 'New'),
  },
];

export const byZone = rawData.reduce((acc, curr) => {
  const foundEntry = acc.findIndex((el) => el.id === curr.neighbourhood_group);
  if (foundEntry !== -1) {
    acc[foundEntry].value += 1;
  } else {
    const newEntry = {
      id: curr.neighbourhood_group,
      label: curr.neighbourhood_group,
      value: 1,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);
