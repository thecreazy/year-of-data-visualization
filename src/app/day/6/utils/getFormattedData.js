import rawArpu from '../data/arpu.json';
import rawDaily from '../data/dailyusers.json';
import rawMonthly from '../data/montlyusers.json';

export const dailyUsers = rawDaily;
export const monthlyUsers = rawMonthly;
export const arpu = rawArpu;
export const totalArpu = [
  {
    time: "Q3'22",
    wordwide: rawArpu.wordwide[0].value,
    usa: rawArpu.usa[0].value,
    europe: rawArpu.europe[0].value,
    asia: rawArpu.asia[0].value,
    rest: rawArpu.rest[0].value,
  },
  {
    time: "Q1'23",
    wordwide: rawArpu.wordwide[1].value,
    usa: rawArpu.usa[1].value,
    europe: rawArpu.europe[1].value,
    asia: rawArpu.asia[1].value,
    rest: rawArpu.rest[1].value,
  },
  {
    time: "Q2'23",
    wordwide: rawArpu.wordwide[2].value,
    usa: rawArpu.usa[2].value,
    europe: rawArpu.europe[2].value,
    asia: rawArpu.asia[2].value,
    rest: rawArpu.rest[2].value,
  },
  {
    time: "Q3'23",
    wordwide: rawArpu.wordwide[3].value,
    usa: rawArpu.usa[3].value,
    europe: rawArpu.europe[3].value,
    asia: rawArpu.asia[3].value,
    rest: rawArpu.rest[3].value,
  },
];

export const weightedbyARPU = totalArpu.map((el, index) => {
  return {
    time: el.time,
    usa: Number((el.usa * rawMonthly[index].usa).toFixed(1)),
    europe: Number((el.europe * rawMonthly[index].europe).toFixed(1)),
    asia: Number((el.asia * rawMonthly[index].asia).toFixed(1)),
    rest: Number((el.rest * rawMonthly[index].rest).toFixed(1)),
  };
});
