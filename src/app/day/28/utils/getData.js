export const getData = (seasonData, playoffData) => {
  const pointsSesonData = seasonData
    .map((el) => {
      return {
        id: el.season,
        Points: Number(el.points),
      };
    })
    .reverse();
  const pointsPlayoffData = playoffData
    .map((el) => {
      return {
        id: el.season,
        Points: Number(el.points),
      };
    })
    .reverse();

  return {
    pointsSesonData,
    pointsPlayoffData,
  };
};
