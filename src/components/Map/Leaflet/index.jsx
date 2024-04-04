'use client';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  CircleMarker,
  FeatureGroup,
  LayersControl,
  MapContainer,
  Popup,
  TileLayer,
} from 'react-leaflet';

import './style.css';

const Leaflet = ({ markers = [], center = [51.505, -0.09], zoom = 3 }) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      preferCanvas={true}
      renderer={L.canvas()}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />
      {markers.map((el) => {
        return (
          <FeatureGroup pathOptions={{ color: el.color }} key={el.key}>
            <Popup>{el.tooltip}</Popup>
            <CircleMarker center={el.position} radius={el.radius} />
          </FeatureGroup>
        );
      })}
    </MapContainer>
  );
};

export default Leaflet;
