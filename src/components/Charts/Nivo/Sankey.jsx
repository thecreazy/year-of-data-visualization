'use client';

import { ResponsiveSankey } from '@nivo/sankey';

const NivoSankey = ({ nodes, links, colors }) => {
  return (
    <ResponsiveSankey
      data={{
        nodes,
        links,
      }}
      align='center'
      margin={{ left: 50 }}
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
      colors={colors}
    />
  );
};

export default NivoSankey;
