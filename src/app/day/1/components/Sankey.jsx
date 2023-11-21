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
      id: 'Total Scored',
      nodeColor: '#FDB927',
    },
  ];

  let totalSeasons = 0;
  let totalPlayoff = 0;
  const seasonLinks = dt1.map((el) => {
    totalSeasons += Number(el.points);
    return {
      source: el.season,
      target: 'Season',
      value: Number(el.points),
    };
  });

  const playoffLinks = dt2.map((el) => {
    totalPlayoff += Number(el.points);
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
      target: 'Total Scored',
      value: totalSeasons,
    },
    {
      source: 'Playoff',
      target: 'Total Scored',
      value: totalPlayoff,
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
        console.log(dt);
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
        ...new Array(20).fill('rgb(255, 194, 8)'),
        'rgb(252, 82, 117)',
        '#7A58AB',
        '#B9BBE6',
      ]}
    />
  );
};

export default MyResponsiveSankey;
