import { shuffle } from '@internal/utils/shuffleArray';
import { transparentize } from '@internal/utils/trasparentize';

import rawValues from '../data/values.json';

export const totalByYear = [
  {
    id: 'Detainees',
    data: rawValues
      .reduce((acc, curr) => {
        const foundEntry = acc.findIndex(
          (el) => el.x === curr.anno_rilevazione_detenuti
        );
        if (foundEntry !== -1) {
          acc[foundEntry].y += curr.detenuti;
        } else {
          const newEntry = {
            x: curr.anno_rilevazione_detenuti,
            y: curr.detenuti,
          };
          acc.push(newEntry);
        }
        return acc;
      }, [])
      .reverse(),
  },
];

const colors = shuffle([
  '#0B2732',
  '#0B4447',
  '#095D4E',
  '#057647',
  '#008F32',
  '#00A313',
  '#15B800',
  '#47CC00',
  '#83E000',
  '#C8F500',
  '#FFF30A',
  '#FFBF1F',
  '#FF9633',
  '#FF7547',
  '#FF5F5C',
  '#FF708D',
  '#FF85BA',
  '#FF99DD',
  '#FFADF7',
  '#F7C2FF',
  '#F0D6FF',
]);

export const splitByPrison = (prison) => {
  let index = 0;
  return rawValues.reduce((acc, curr) => {
    if (curr['casa circondariale'] !== prison) return acc;
    const foundEntry = acc.findIndex(
      (el) => el.id === curr.detenuti_regione_nascita
    );
    if (foundEntry !== -1) {
      acc[foundEntry].data.push(curr.detenuti);
    } else {
      const newEntry = {
        id: curr.detenuti_regione_nascita,
        label: `${curr['casa circondariale']} - ${curr.detenuti_regione_nascita}`,
        data: [curr.detenuti],
        stack: curr['casa circondariale'],
        backgroundColor: transparentize(colors[index], 0.5),
        borderColor: colors[index],
        borderWidth: 2,
      };
      acc.push(newEntry);
    }
    index++;
    return acc;
  }, []);
};

export const splitByRegionAndPrison = {
  labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
  dataset: [
    ...splitByPrison('Casa di Reclusione Opera'),
    ...splitByPrison('Casa Circondariale S.Vittore'),
    ...splitByPrison('Casa di Reclusione Bollate'),
  ],
};
