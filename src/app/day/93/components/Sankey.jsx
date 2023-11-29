'use client';

import { ResponsiveSankey } from '@nivo/sankey';

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
    {
      id: 'Philadelphia 76ers',
      nodeColor: '#FDB927',
    },
    {
      id: 'Denver Nuggets',
      nodeColor: '#FDB927',
    },
    {
      id: 'Detroit Pistons',
      nodeColor: '#FDB927',
    },
    {
      id: 'Total Scored',
      nodeColor: '#FDB927',
    },
  ];

  let totalSeasons = {
    total: 0,
    PHI: 0,
    DEN: 0,
    DET: 0,
  };
  let totalPlayoff = {
    total: 0,
    PHI: 0,
    DEN: 0,
    DET: 0,
  };
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
    {
      source: 'Season',
      target: 'Philadelphia 76ers',
      value: totalSeasons.PHI,
    },
    {
      source: 'Playoff',
      target: 'Philadelphia 76ers',
      value: totalPlayoff.PHI,
    },
    {
      source: 'Season',
      target: 'Denver Nuggets',
      value: totalSeasons.DEN,
    },
    {
      source: 'Playoff',
      target: 'Denver Nuggets',
      value: totalPlayoff.DEN,
    },
    {
      source: 'Season',
      target: 'Detroit Pistons',
      value: totalSeasons.DET,
    },
    {
      source: 'Playoff',
      target: 'Detroit Pistons',
      value: totalPlayoff.DET,
    },
    {
      source: 'Philadelphia 76ers',
      target: 'Total Scored',
      value: totalPlayoff.PHI + totalSeasons.PHI,
    },
    {
      source: 'Denver Nuggets',
      target: 'Total Scored',
      value: totalPlayoff.DEN + totalSeasons.DEN,
    },
    {
      source: 'Detroit Pistons',
      target: 'Total Scored',
      value: totalPlayoff.DET + totalSeasons.DET,
    },
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
        ...new Array(14).fill('#FFC72C'),
        '#FF8270',
        '#D85A8A',
        '#006BB6',
        '#0E2240',
        '#C8102E',
      ]}
    />
  );
};

export default MyResponsiveSankey;
