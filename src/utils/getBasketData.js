export const getBasketData = (seasonData, playoffData) => {
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

  const radarSeasonData = seasonData.map((el) => {
    return {
      season: el.season,
      'Field Goal': Number(el.pointPercentage),
      '3 Point': Number(el['3pointPercentage']),
      'Free Throw': Number(el.freeThrowsPercentage),
    };
  });

  const radarPlayoffData = playoffData.map((el) => {
    return {
      season: el.season,
      'Field Goal': Number(el.pointPercentage),
      '3 Point': Number(el['3pointPercentage']),
      'Free Throw': Number(el.freeThrowsPercentage),
    };
  });

  return {
    pointsSesonData,
    pointsPlayoffData,
    radarPlayoffData,
    radarSeasonData,
  };
};
