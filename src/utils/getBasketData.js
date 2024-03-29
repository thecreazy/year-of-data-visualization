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

  const bumpValuesSeason = seasonData.reduce(
    (acc, current) => {
      acc[0].data.push({
        x: current.season,
        y: Number(current.pointPercentage),
      });
      acc[1].data.push({
        x: current.season,
        y: Number(current.freeThrowsPercentage),
      });
      acc[2].data.push({
        x: current.season,
        y: Number(current['3pointPercentage']),
      });
      return acc;
    },
    [
      { id: 'Field Goal %', data: [] },
      { id: 'Free Throw %', data: [] },
      { id: '3-Point %', data: [] },
    ]
  );

  const bumpValuesPlayoff = playoffData.reduce(
    (acc, current) => {
      acc[0].data.push({
        x: current.season,
        y: Number(current.pointPercentage),
      });
      acc[1].data.push({
        x: current.season,
        y: Number(current.freeThrowsPercentage),
      });
      acc[2].data.push({
        x: current.season,
        y: Number(current['3pointPercentage']),
      });
      return acc;
    },
    [
      { id: 'Field Goal %', data: [] },
      { id: 'Free Throw %', data: [] },
      { id: '3-Point %', data: [] },
    ]
  );

  return {
    pointsSesonData,
    pointsPlayoffData,
    radarPlayoffData,
    radarSeasonData,
    bumpValuesSeason,
    bumpValuesPlayoff,
  };
};
