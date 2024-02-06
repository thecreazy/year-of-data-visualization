const fs = require('fs');
const data = require('./data.json');

// const finalJson = data.reduce((acc, curr) => {
//   const foundEntry = acc.findIndex((el) => el.anno === curr.anno);
//   if (foundEntry !== -1) {
//     acc[foundEntry].residenti += curr.residenti;
//   } else {
//     const newEntry = {
//       anno: curr.anno,
//       residenti: curr.residenti,
//     };
//     acc.push(newEntry);
//   }
//   return acc;
// }, []);

// const finalJson = data.reduce((acc, curr) => {
//   const foundEntry = acc.findIndex((el) => el.anno === curr.anno);
//   if (foundEntry !== -1) {
//     acc[foundEntry][curr.sesso] += curr.residenti;
//   } else {
//     const newEntry = {
//       anno: curr.anno,
//       Femmine: 0,
//       Maschi: 0,
//     };
//     newEntry[curr.sesso] = curr.residenti;
//     acc.push(newEntry);
//   }
//   return acc;
// }, []);

// const finalJson = data.reduce((acc, curr) => {
//   const foundEntry = acc.findIndex((el) => el.anno === curr.anno);
//   if (foundEntry !== -1) {
//     if (!acc[foundEntry][curr.zona]) acc[foundEntry][curr.zona] = 0;
//     acc[foundEntry][curr.zona] += curr.residenti;
//   } else {
//     const newEntry = {
//       anno: curr.anno,
//       [curr.zona]: curr.residenti,
//     };
//     acc.push(newEntry);
//   }
//   return acc;
// }, []);

const finalJson = data.reduce((acc, curr) => {
  if (curr.anno !== '2022') return acc;
  const foundEntry = acc.findIndex(
    (el) => el.cittadinanza === curr.cittadinanza
  );
  if (foundEntry !== -1) {
    acc[foundEntry].residenti += curr.residenti;
  } else {
    const newEntry = {
      cittadinanza: curr.cittadinanza,
      residenti: curr.residenti,
    };
    acc.push(newEntry);
  }
  return acc;
}, []);

fs.writeFileSync('result.json', JSON.stringify(finalJson), 'utf-8');
