export const clearFootballData = (raw) => {
  return raw.map((el) => {
    const splittedCompetition = el.competition.split('. ');
    return {
      ...el,
      country: el.country ? el.country.split(' ')[1] : undefined,
      competition:
        splittedCompetition.length > 1
          ? splittedCompetition[1]
          : splittedCompetition[0],
      minutes: Number(el.minutes.replace(/[,]/g, '')),
      goals: Number(el.goals),
      assist: Number(el.assist),
      penality: Number(el.penality),
      penalityTried: Number(el.penalityTried),
      yellow: Number(el.yellow),
      red: Number(el.red),
    };
  });
};
