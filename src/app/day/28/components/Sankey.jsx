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
      id: 'Cleveland',
      nodeColor: '#FDB927',
    },
    {
      id: 'Miami',
      nodeColor: '#FDB927',
    },
    {
      id: 'Lakers',
      nodeColor: '#FDB927',
    },
    {
      id: 'Orlando',
      nodeColor: '#FDB927',
    },
    {
      id: 'Phoenix',
      nodeColor: '#FDB927',
    },
    {
      id: 'Boston',
      nodeColor: '#FDB927',
    },
    {
      id: 'Total Scored',
      nodeColor: '#FDB927',
    },
  ];

  let totalSeasons = {
    total: 0,
    CLE: 0,
    MIA: 0,
    LAL: 0,
    ORL: 0,
    BOS: 0,
    PHX: 0,
  };
  let totalPlayoff = {
    total: 0,
    CLE: 0,
    MIA: 0,
    LAL: 0,
    ORL: 0,
    BOS: 0,
    PHX: 0,
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
      target: 'Cleveland',
      value: totalSeasons.CLE,
    },
    {
      source: 'Season',
      target: 'Miami',
      value: totalSeasons.MIA,
    },
    {
      source: 'Season',
      target: 'Lakers',
      value: totalSeasons.LAL,
    },
    {
      source: 'Season',
      target: 'Orlando',
      value: totalSeasons.ORL,
    },
    {
      source: 'Season',
      target: 'Phoenix',
      value: totalSeasons.PHX,
    },
    {
      source: 'Season',
      target: 'Boston',
      value: totalSeasons.BOS,
    },
    {
      source: 'Playoff',
      target: 'Cleveland',
      value: totalPlayoff.CLE,
    },
    {
      source: 'Playoff',
      target: 'Miami',
      value: totalPlayoff.MIA,
    },
    {
      source: 'Playoff',
      target: 'Lakers',
      value: totalPlayoff.LAL,
    },
    {
      source: 'Playoff',
      target: 'Orlando',
      value: totalPlayoff.ORL,
    },
    {
      source: 'Playoff',
      target: 'Phoenix',
      value: totalPlayoff.PHX,
    },
    {
      source: 'Playoff',
      target: 'Boston',
      value: totalPlayoff.BOS,
    },
    {
      source: 'Cleveland',
      target: 'Total Scored',
      value: totalPlayoff.CLE + totalSeasons.CLE,
    },
    {
      source: 'Miami',
      target: 'Total Scored',
      value: totalPlayoff.MIA + totalSeasons.MIA,
    },
    {
      source: 'Lakers',
      target: 'Total Scored',
      value: totalPlayoff.LAL + totalSeasons.LAL,
    },
    {
      source: 'Orlando',
      target: 'Total Scored',
      value: totalPlayoff.ORL + totalSeasons.ORL,
    },
    {
      source: 'Phoenix',
      target: 'Total Scored',
      value: totalPlayoff.PHX + totalSeasons.PHX,
    },
    {
      source: 'Boston',
      target: 'Total Scored',
      value: totalPlayoff.BOS + totalSeasons.BOS,
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
        ...new Array(19).fill('rgb(255, 194, 8)'),
        'rgb(122,88,171)',
        'rgb(185,187,230)',
        '#860038',
        '#98002E',
        '#552583',
        '#0077C0',
        '#1D1160',
        '#007A33',
      ]}
    />
  );
};

export default MyResponsiveSankey;
