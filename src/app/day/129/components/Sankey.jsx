'use client';

import { ResponsiveSankey } from '@nivo/sankey';

const teams = [
  { name: 'Utah Jazz', id: 'UTA', color: '#552582' },
  { name: 'Los Angeles Lakers', id: 'LAL', color: '#702F8A' },
];

const MyResponsiveSankey = ({ dt1, dt2 }) => {
  const yearKeys = dt1.map((el) => el.season);
  const nodes = [
    ...yearKeys.map((el) => {
      return {
        id: el,
        nodeColor: 'red',
      };
    }),
    {
      id: 'Season',
      nodeColor: '#FDB927',
    },
    {
      id: 'Playoff',
      nodeColor: '#FDB927',
    },
    ...teams.map((el) => ({
      id: el.name,
      nodeColor: '#FDB927',
    })),
    {
      id: 'Total Scored',
      nodeColor: '#FDB927',
    },
  ];

  let totalSeasons = teams.reduce(
    (acc, curr) => {
      acc[curr.id] = 0;
      return acc;
    },
    { total: 0 }
  );
  let totalPlayoff = teams.reduce(
    (acc, curr) => {
      acc[curr.id] = 0;
      return acc;
    },
    { total: 0 }
  );
  const seasonLinks = dt1.map((el) => {
    totalSeasons.total += Number(el.points);
    totalSeasons[el.team] += Number(el.points);
    return {
      source: el.season,
      target: 'Season',
      value: Number(el.points),
    };
  });

  const playoffLinks = dt2.map((el) => {
    totalPlayoff.total += Number(el.points);
    totalPlayoff[el.team] += Number(el.points);
    return {
      source: el.season,
      target: 'Playoff',
      value: Number(el.points),
    };
  });

  const links = [
    ...seasonLinks,
    ...playoffLinks,
    ...teams.reduce((acc, curr) => {
      acc.push({
        source: 'Season',
        target: curr.name,
        value: totalSeasons[curr.id],
      });
      acc.push({
        source: 'Playoff',
        target: curr.name,
        value: totalPlayoff[curr.id],
      });
      return acc;
    }, []),
    ...teams.map((el) => ({
      source: el.name,
      target: 'Total Scored',
      value: totalPlayoff[el.id] + totalSeasons[el.id],
    })),
  ];

  return (
    <ResponsiveSankey
      data={{
        nodes,
        links,
      }}
      margin={{ left: 50 }}
      sort='ascending'
      nodeOpacity={1}
      nodeHoverOthersOpacity={0.35}
      nodeThickness={18}
      nodeSpacing={24}
      nodeBorderWidth={0}
      nodeBorderRadius={3}
      linkOpacity={0.8}
      linkHoverOthersOpacity={0.1}
      linkContract={3}
      enableLinkGradient={true}
      labelPosition='inside'
      labelOrientation='vertical'
      labelPadding={16}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1]],
      }}
      label={(dt) => {
        return `${dt.id} (${dt.value})`;
      }}
      legends={[]}
      theme={{
        text: {
          fill: '#fff',
          fontWeight: 600,
        },
        tooltip: {
          container: { color: '#000' },
        },
      }}
      layout='vertical'
      colors={[
        ...new Array(20).fill('#FFC72C'),
        '#FF8270',
        '#D85A8A',
        ...teams.map((el) => el.color),
        '#C8102E',
      ]}
    />
  );
};

export default MyResponsiveSankey;
