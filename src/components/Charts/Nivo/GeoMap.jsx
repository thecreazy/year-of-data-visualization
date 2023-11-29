'use client';
import { ResponsiveGeoMap } from '@nivo/geo';
import countries from '../../../utils/geojson/countries.json';

const NivoGeoMap = ({
  data1,
  data2,
  data3,
  colors,
  valueFormat,
  datasetNumber = 2,
}) => {
  const twoColorsFill = (el) => {
    const dt1 = data1.find((c) => c.id === el.id);
    const dt2 = data2.find((c) => c.id === el.id);
    if (!dt1 && !dt2) return '#666666';
    if (!dt1 && dt2) return colors[1];
    if (!dt2 && dt1) return colors[0];
    if (dt1.value > dt2.value) return colors[0];
    if (dt1.value < dt2.value) return colors[1];
    return colors[2];
  };

  const threeColorsFill = (el) => {
    const dt1 = data1.find((c) => c.id === el.id);
    const dt2 = data2.find((c) => c.id === el.id);
    const dt3 = data3.find((c) => c.id === el.id);
    if (!dt1 && !dt2 && !dt3) return '#666666';
    if (!dt1 && !dt2 && dt3) return colors[2];
    if (!dt1 && !dt3 && dt2) return colors[1];
    if (!dt2 && !dt3 && dt1) return colors[0];
    if (dt1 && dt2 && !dt3) {
      if (dt1.value > dt2.value) return colors[0];
      if (dt1.value < dt2.value) return colors[1];
      return colors[3];
    }
    if (dt1 && dt3 && !dt2) {
      if (dt1.value > dt3.value) return colors[0];
      if (dt1.value < dt3.value) return colors[1];
      return colors[3];
    }
    if (dt2 && dt3 && !dt1) {
      if (dt2.value > dt3.value) return colors[0];
      if (dt2.value < dt3.value) return colors[1];
      return colors[3];
    }
    if (dt1.value === dt2.value && dt2.value === dt3.value) return colors[3];
    const maxValue = Math.max(dt1.value, dt2.value, dt3.value);
    const indexes = [dt1.value, dt2.value, dt3.value].reduce((a, e, i) => {
      if (e === maxValue) a.push(i);
      return a;
    }, []);
    if (!indexes.length) return '#666666';
    if (indexes.length > 1) return colors[3];
    return colors[indexes[0]];
  };

  return (
    <ResponsiveGeoMap
      features={countries.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      fillColor={datasetNumber === 2 ? twoColorsFill : threeColorsFill}
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
