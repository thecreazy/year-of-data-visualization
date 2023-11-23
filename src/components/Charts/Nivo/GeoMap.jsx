'use client';
import { ResponsiveGeoMap } from '@nivo/geo';
import countries from '../../../utils/countries.json';

const NivoGeoMap = ({ data1, data2, colors, valueFormat }) => {
  return (
    <ResponsiveGeoMap
      features={countries.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      fillColor={(el) => {
        const dt1 = data1.find((c) => c.id === el.id);
        const dt2 = data2.find((c) => c.id === el.id);
        if (!dt1 && !dt2) return '#666666';
        if (!dt1 && dt2) return colors[1];
        if (!dt2 && dt1) return colors[0];
        if (dt1.value > dt2.value) return colors[0];
        if (dt1.value < dt2.value) return colors[1];
        return colors[2];
      }}
      label='properties.name'
      valueFormat={valueFormat}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor='#dddddd'
      borderWidth={0.5}
      borderColor='#152538'
    />
  );
};

export default NivoGeoMap;
