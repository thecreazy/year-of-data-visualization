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
      id: 'Golden State Warriors',
      nodeColor: '#FDB927',
    },
    {
      id: 'Seattle SuperSonics',
      nodeColor: '#FDB927',
    },
    {
      id: 'Oklahoma City Thunder',
      nodeColor: '#FDB927',
    },
    {
      id: 'Brooklyn Nets',
      nodeColor: '#FDB927',
    },
    {
      id: 'Phoenix Suns',
      nodeColor: '#FDB927',
    },
    {
      id: 'Total Scored',
      nodeColor: '#FDB927',
    },
  ];

  let totalSeasons = {
    total: 0,
    GSW: 0,
    SEA: 0,
    OKC: 0,
    BKN: 0,
    PHX: 0,
  };
  let totalPlayoff = {
    total: 0,
    GSW: 0,
    SEA: 0,
    OKC: 0,
    BKN: 0,
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
      target: 'Golden State Warriors',
      value: totalSeasons.GSW,
    },
    {
      source: 'Playoff',
      target: 'Golden State Warriors',
      value: totalPlayoff.GSW,
    },
    {
      source: 'Season',
      target: 'Seattle SuperSonics',
      value: totalSeasons.SEA,
    },
    {
      source: 'Playoff',
      target: 'Seattle SuperSonics',
      value: totalPlayoff.SEA,
    },
    {
      source: 'Season',
      target: 'Oklahoma City Thunder',
      value: totalSeasons.OKC,
    },
    {
      source: 'Playoff',
      target: 'Oklahoma City Thunder',
      value: totalPlayoff.OKC,
    },
    {
      source: 'Season',
      target: 'Brooklyn Nets',
      value: totalSeasons.BKN,
    },
    {
      source: 'Playoff',
      target: 'Brooklyn Nets',
      value: totalPlayoff.BKN,
    },
    {
      source: 'Season',
      target: 'Phoenix Suns',
      value: totalSeasons.PHX,
    },
    {
      source: 'Playoff',
      target: 'Phoenix Suns',
      value: totalPlayoff.PHX,
    },
    {
      source: 'Golden State Warriors',
      target: 'Total Scored',
      value: totalPlayoff.GSW + totalSeasons.GSW,
    },
    {
      source: 'Seattle SuperSonics',
      target: 'Total Scored',
      value: totalPlayoff.SEA + totalSeasons.SEA,
    },
    {
      source: 'Oklahoma City Thunder',
      target: 'Total Scored',
      value: totalPlayoff.OKC + totalSeasons.OKC,
    },
    {
      source: 'Brooklyn Nets',
      target: 'Total Scored',
      value: totalPlayoff.BKN + totalSeasons.BKN,
    },
    {
      source: 'Phoenix Suns',
      target: 'Total Scored',
      value: totalPlayoff.PHX + totalSeasons.PHX,
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
        ...new Array(16).fill('#FFC72C'),
        '#FF8270',
        '#D85A8A',
        '#1D428A',
        '#00653A',
        '#007AC1',
        '#000000',
        '#1D1160',
      ]}
    />
  );
};

export default MyResponsiveSankey;
