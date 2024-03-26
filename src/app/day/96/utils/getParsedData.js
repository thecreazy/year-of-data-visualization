import raw2018 from '../data/2018.json';
import raw2019 from '../data/2019.json';
import raw2020 from '../data/2020.json';
import raw2021 from '../data/2021.json';
import raw2022 from '../data/2022.json';
import rawData from '../data/values.json';

export const total = rawData.reduce((acc, curr) => acc + curr.IMPORTO, 0);
const total2018 = raw2018.reduce((acc, curr) => acc + Number(curr.IMPORTO), 0);
const total2019 = raw2019.reduce((acc, curr) => acc + Number(curr.IMPORTO), 0);
const total2020 = raw2020.reduce((acc, curr) => acc + Number(curr.IMPORTO), 0);
const total2021 = raw2021.reduce((acc, curr) => acc + Number(curr.IMPORTO), 0);
const total2022 = raw2022.reduce((acc, curr) => acc + Number(curr.IMPORTO), 0);

const formattedCategory = (cat) => {
  if (cat === 'SERVIZIO RIFIUTI, IGIENE PUBBLICA AMBIENTALE E DEL TERRITORIO')
    return 'WASTE, ENVIRONMENTAL PUBLIC HYGIENE';
  if (cat === 'SERVIZIO SOCIALE AMMINISTRATIVO') return 'SOCIAL ADMINISTRATIVE';
  if (cat === 'SERVIZIO VIABILITA') return 'ROAD SERVICE';
  if (cat === 'SERVIZIO GESTIONE TRAMVIA') return 'TRAMV MANAGEMENT';
  if (cat === 'SERVIZIO GESTIONE E MANUTENZIONE')
    return 'MANAGEMENT AND MAINTENANCE';
  if (cat === 'SERVIZIO SUPPORTO SCUOLA') return 'SCHOOL SUPPORT';
  if (cat === 'SERVIZIO CASA') return 'HOME SERVICE';
  if (cat === 'DIREZIONE CORPO POLIZIA MUNICIPALE')
    return 'MUNICIPAL POLICE CORPS';
  if (cat === 'DIREZIONE SERVIZI TECNICI')
    return 'TECHNICAL SERVICES DIRECTORATE';
  if (cat === 'SERV. GEST. E MAN. - UTENZE') return 'MANAGEMENT UTILITIES';
  if (cat === 'SERVIZIO SUPPORTO TECNICO QUARTIERI E IMPIANTI SPORTIVI')
    return 'DISTRICTS AND SPORTS FACILITIES';
  if (cat === 'DIREZIONE SISTEMA TRAMVIARIO METROPOLITANO')
    return 'TRAM SYSTEM DIRECTORATE';
  if (cat === 'SERVIZIO MUSEI BIBLIOTECHE ARCHIVI')
    return 'MUSEUMS LIBRARIES ARCHIV.';
  if (cat === 'DIREZIONE GENERALE') return 'GENERAL DIRECTION';
  if (cat === 'SERVIZIO NIDI E COORDINAMENTO PEDAGOGICO')
    return 'NURSERY SERVICE AND PEDAGOGICAL';
  if (cat === 'SERVIZIO PARCHI, GIARDINI E AREE VERDI')
    return 'PARKS, GARDENS AND GREEN AREAS';
  if (cat === 'SERVIZIO BELLE ARTI E FABBRICA DI PALAZZO VECCHIO')
    return 'FINE ARTS AND PALAZZO VECCHIO';
  if (
    cat ===
    "SERVIZIO SOSTENIBILITA', VALUTAZIONE AMBIENTALE GEOLOGICA E BONIFICHE"
  )
    return 'SUSTAINABILITY SERVIC, GEOLOGY';
  if (cat === "SERVIZIO MOBILITA'") return 'MOBILITY SERVICE';
  if (cat === "SERVIZIO PROGRAMMAZIONE MOBILITA' E PISTE CICLABILI")
    return 'MOBILITY AND CYCLE PATH';
  return cat;
};

export const top20Categories = rawData
  .reduce((acc, curr) => {
    const formattedValue = formattedCategory(curr.DIREZIONE_SERVIZIO_RESP_PROC);
    const foundEntry = acc.findIndex((el) => el.category === formattedValue);
    if (foundEntry !== -1) {
      acc[foundEntry].amount += curr.IMPORTO;
    } else {
      const newEntry = {
        category: formattedValue,
        amount: curr.IMPORTO,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.amount - a.amount)
  .splice(0, 20);

export const top20Beneficiaries = rawData
  .reduce((acc, curr) => {
    const formattedValue = curr.BENEFICIARIO;
    const foundEntry = acc.findIndex((el) => el.beneficiary === formattedValue);
    if (foundEntry !== -1) {
      acc[foundEntry].amount += curr.IMPORTO;
    } else {
      const newEntry = {
        beneficiary: curr.BENEFICIARIO,
        amount: curr.IMPORTO,
      };
      acc.push(newEntry);
    }
    return acc;
  }, [])
  .sort((a, b) => b.amount - a.amount)
  .splice(0, 20);

export const totalByYear = [
  {
    id: 'Amount spent',
    data: [
      { x: 2018, y: total2018 },
      { x: 2019, y: total2019 },
      { x: 2020, y: total2020 },
      { x: 2021, y: total2021 },
      { x: 2022, y: total2022 },
      { x: 2023, y: total },
    ],
  },
];
