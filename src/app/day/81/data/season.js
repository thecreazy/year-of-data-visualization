const seasonData = [
  {
    season: '2007-08',
    team: 'SEA',
    gamePlayed: '80',
    minutes: '2768',
    pointMade: '587',
    pointPercentage: '43.0',
    '3pointMade': '59',
    '3pointPercentage': '28.8',
    freeThrows: '391',
    freeThrowsPercentage: '87.3',
    rebounds: '348',
    assists: '192',
    points: '1624',
  },
  {
    season: '2008-09',
    team: 'OKC',
    gamePlayed: '74',
    minutes: '2885',
    pointMade: '661',
    pointPercentage: '47.6',
    '3pointMade': '97',
    '3pointPercentage': '42.2',
    freeThrows: '452',
    freeThrowsPercentage: '86.3',
    rebounds: '482',
    assists: '205',
    points: '1871',
  },
  {
    season: '2009-10',
    team: 'OKC',
    gamePlayed: '82',
    minutes: '3239',
    pointMade: '794',
    pointPercentage: '47.6',
    '3pointMade': '128',
    '3pointPercentage': '36.5',
    freeThrows: '756',
    freeThrowsPercentage: '90.0',
    rebounds: '623',
    assists: '231',
    points: '2472',
  },
  {
    season: '2010-11',
    team: 'OKC',
    gamePlayed: '78',
    minutes: '3038',
    pointMade: '711',
    pointPercentage: '46.2',
    '3pointMade': '145',
    '3pointPercentage': '35.0',
    freeThrows: '594',
    freeThrowsPercentage: '88.0',
    rebounds: '533',
    assists: '214',
    points: '2161',
  },
  {
    season: '2011-12',
    team: 'OKC',
    gamePlayed: '66',
    minutes: '2546',
    pointMade: '643',
    pointPercentage: '49.6',
    '3pointMade': '133',
    '3pointPercentage': '38.7',
    freeThrows: '431',
    freeThrowsPercentage: '86.0',
    rebounds: '527',
    assists: '231',
    points: '1850',
  },
  {
    season: '2012-13',
    team: 'OKC',
    gamePlayed: '81',
    minutes: '3119',
    pointMade: '731',
    pointPercentage: '51.0',
    '3pointMade': '139',
    '3pointPercentage': '41.6',
    freeThrows: '679',
    freeThrowsPercentage: '90.5',
    rebounds: '640',
    assists: '374',
    points: '2280',
  },
  {
    season: '2013-14',
    team: 'OKC',
    gamePlayed: '81',
    minutes: '3122',
    pointMade: '849',
    pointPercentage: '50.3',
    '3pointMade': '192',
    '3pointPercentage': '39.1',
    freeThrows: '703',
    freeThrowsPercentage: '87.3',
    rebounds: '598',
    assists: '445',
    points: '2593',
  },
  {
    season: '2014-15',
    team: 'OKC',
    gamePlayed: '27',
    minutes: '913',
    pointMade: '238',
    pointPercentage: '51.0',
    '3pointMade': '64',
    '3pointPercentage': '40.3',
    freeThrows: '146',
    freeThrowsPercentage: '85.4',
    rebounds: '178',
    assists: '110',
    points: '686',
  },
  {
    season: '2015-16',
    team: 'OKC',
    gamePlayed: '72',
    minutes: '2578',
    pointMade: '698',
    pointPercentage: '50.5',
    '3pointMade': '186',
    '3pointPercentage': '38.7',
    freeThrows: '447',
    freeThrowsPercentage: '89.8',
    rebounds: '589',
    assists: '361',
    points: '2029',
  },
  {
    season: '2016-17',
    team: 'GSW',
    gamePlayed: '62',
    minutes: '2070',
    pointMade: '551',
    pointPercentage: '53.7',
    '3pointMade': '117',
    '3pointPercentage': '37.5',
    freeThrows: '336',
    freeThrowsPercentage: '87.5',
    rebounds: '513',
    assists: '300',
    points: '1555',
  },
  {
    season: '2017-18',
    team: 'GSW',
    gamePlayed: '68',
    minutes: '2325',
    pointMade: '630',
    pointPercentage: '51.6',
    '3pointMade': '173',
    '3pointPercentage': '41.9',
    freeThrows: '359',
    freeThrowsPercentage: '88.9',
    rebounds: '464',
    assists: '366',
    points: '1792',
  },
  {
    season: '2018-19',
    team: 'GSW',
    gamePlayed: '78',
    minutes: '2702',
    pointMade: '721',
    pointPercentage: '52.1',
    '3pointMade': '137',
    '3pointPercentage': '35.3',
    freeThrows: '448',
    freeThrowsPercentage: '88.5',
    rebounds: '497',
    assists: '457',
    points: '2027',
  },
  {
    season: '2020-21',
    team: 'BKN',
    gamePlayed: '35',
    minutes: '1157',
    pointMade: '324',
    pointPercentage: '53.7',
    '3pointMade': '85',
    '3pointPercentage': '45.0',
    freeThrows: '210',
    freeThrowsPercentage: '88.2',
    rebounds: '247',
    assists: '195',
    points: '943',
  },
  {
    season: '2021-22',
    team: 'BKN',
    gamePlayed: '55',
    minutes: '2047',
    pointMade: '578',
    pointPercentage: '51.8',
    '3pointMade': '115',
    '3pointPercentage': '38.3',
    freeThrows: '372',
    freeThrowsPercentage: '91.0',
    rebounds: '407',
    assists: '351',
    points: '1643',
  },
  {
    season: '2022-23',
    team: 'PHX',
    gamePlayed: '47',
    minutes: '1672',
    pointMade: '483',
    pointPercentage: '56.0',
    '3pointMade': '93',
    '3pointPercentage': '40.4',
    freeThrows: '307',
    freeThrowsPercentage: '91.9',
    rebounds: '313',
    assists: '235',
    points: '1366',
  },
  {
    season: '2023-24',
    team: 'PHX',
    gamePlayed: '14',
    minutes: '520',
    pointMade: '154',
    pointPercentage: '53.5',
    '3pointMade': '32',
    '3pointPercentage': '50.8',
    freeThrows: '99',
    freeThrowsPercentage: '87.6',
    rebounds: '98',
    assists: '80',
    points: '439',
  },
];

export default seasonData;
