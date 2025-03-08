"use client"

import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Popup, Polyline, CircleMarker, FeatureGroup } from 'react-leaflet';
import { locations } from '@/data/locationsData';
import FilterControl, { typeColors } from './FilterControl';

const Map: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const filteredLocations = filter === 'all'
    ? locations
    : locations.filter(loc => loc.type === filter || (filter === 'interconnect' && loc.interconnect));

  return (
    <div style={{ position: 'relative', width: '100%', height: '53vh', }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <MapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          maxZoom={10}
          style={{ height: '500px', width: '100%', overflow: 'hidden',}}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          dragging={true}
        >
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
          <FilterControl setFilter={setFilter} />
          <FeatureGroup>
            {filteredLocations.map(loc => (
              loc.interconnect && locations.find(l => l.id === loc.interconnect) && (
                <Polyline
                  key={`polyline-${loc.id}`}
                  positions={[
                    [loc.lat, loc.lng],
                    [locations.find(l => l.id === loc.interconnect)!.lat, locations.find(l => l.id === loc.interconnect)!.lng]
                  ]}
                  pathOptions={{
                    color: typeColors.interconnect,
                    weight: 3,
                    dashArray: '5, 5'
                  }}
                />
              )
            ))}

            {filteredLocations.map(loc => (
              <CircleMarker 
                key={loc.id}
                center={[loc.lat, loc.lng]}
                radius={3}
                pathOptions={{
                  fillColor: typeColors[loc.type],
                  color: typeColors[loc.type], 
                  fillOpacity: 1,
                  weight: 12
                }}
              >
                <Popup>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      style={{
                        maxWidth: '250px',
                        backdropFilter: 'blur(8px)',
                        border: 'none',
                        borderRadius: '2px',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: typeColors[loc.type],
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                          textAlign: 'center',
                          padding: '6px',
                        }}
                      >
                        <span>{loc.name}</span>
                        <p style={{ fontSize: '0.7rem', margin: '1px', textTransform: 'none' }}>{loc.type.charAt(0).toUpperCase() + loc.type.slice(1)} Locations</p>
                      </div>
                      <div style={{ padding: '12px', backgroundColor: '#f9f9f9' }}>
                        <div style={{ display: 'grid', gap: '10px', fontSize: '0.8rem', color: '#333' }}>
                          {loc.organizations !== undefined && <div>Organizations: {loc.organizations}</div>}
                          {loc.facilities !== undefined && <div>Facilities: {loc.facilities}</div>}
                          {loc.networks !== undefined && <div>Networks: {loc.networks}</div>}
                          {loc.exchanges !== undefined && <div>Exchanges: {loc.exchanges}</div>}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Popup>
              </CircleMarker>
            ))}
          </FeatureGroup>
        </MapContainer>
      </motion.div>
    </div>
  );
};

export default Map;
