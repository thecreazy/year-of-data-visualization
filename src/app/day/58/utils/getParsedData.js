import rawData from '../data/values.json';

export const total = rawData.length;
export const totalFrames = rawData.reduce((acc, curr) => {
  acc += curr.imgCount;
  return acc;
}, 0);

export const byType = rawData.reduce((acc, curr) => {
  const formattedLabel = curr.Movie === 1 ? 'Movie' : 'TV Show';
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

const formattedProduct = (element) => {
  if (element.iPhone === 1) return 'iPhone';
  if (element.iPad === 1) return 'iPad';
  if (element.iMac === 1) return 'iMac';
  if (element.MacBook === 1) return 'MacBook';
  if (element.macOS === 1) return 'macOS';
  if (element.AirPods === 1) return 'AirPods';
  if (element['Apple Watch'] === 1) return 'Apple Watch';
  return 'Unknown';
};

export const byAppleProduct = rawData.reduce((acc, curr) => {
  const formattedLabel = formattedProduct(curr);
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

export const byTitle = rawData
  .reduce((acc, curr) => {
    const formattedLabel = curr.Title;
    const foundEntry = acc.findIndex((el) => el.title === formattedLabel);
    if (foundEntry !== -1) {
      acc[foundEntry].frames += curr.imgCount;
    } else {
      const newEntry = {
        title: formattedLabel,
        frames: curr.imgCount,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.frames - a.frames)
  .slice(0, 20);

export const ratio = [
  {
    id: 'Sponsored Frames per movie year',
    data: rawData
      .map((el) => {
        return {
          x: el.startYear,
          y: el.imgCount,
        };
      })
      .sort((a, b) => a.x - b.x),
  },
];

export const totalFramesPerYear = [
  {
    id: 'Sponsored Frames',
    data: rawData
      .reduce((acc, curr) => {
        const formattedYear = curr.startYear;
        const foundEntry = acc.findIndex((el) => el.x === formattedYear);
        if (foundEntry !== -1) {
          acc[foundEntry].y += curr.imgCount;
        } else {
          const newEntry = {
            x: formattedYear,
            y: curr.imgCount,
          };
          acc.push(newEntry);
        }
        return acc;
      }, [])
      .sort((a, b) => a.x - b.x),
  },
];
