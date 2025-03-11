"use client";

import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline,
  CircleMarker,
  FeatureGroup,
} from "react-leaflet";
import { locations } from "@/data/locationsData";
import styles from "./MapPopup.module.css";
import FilterControl, { typeColors } from "./FilterControl";

interface MapProps {
  height?: string;
}

const Map: React.FC<MapProps> = ({height = '53vh'}) => {
  const [filter, setFilter] = useState<string>("all");
  const filteredLocations =
    filter === "all"
      ? locations
      : locations.filter(
          (loc) =>
            loc.type === filter ||
            (filter === "interconnect" && loc.interconnect)
        );

  return (
    <div style={{ position: "relative", width: "100%", height: "58vh" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <MapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          maxZoom={10}
          style={{ height: height, width: "100%", overflow: "hidden" }}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          dragging={true}
        >
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
          <FilterControl setFilter={setFilter} />
          <FeatureGroup>
            {filteredLocations.map(
              (loc) =>
                loc.interconnect &&
                locations.find((l) => l.id === loc.interconnect) && (
                  <Polyline
                    key={`polyline-${loc.id}`}
                    positions={[
                      [loc.lat, loc.lng],
                      [
                        locations.find((l) => l.id === loc.interconnect)!.lat,
                        locations.find((l) => l.id === loc.interconnect)!.lng,
                      ],
                    ]}
                    pathOptions={{
                      color: typeColors.interconnect,
                      weight: 3,
                      dashArray: "5, 5",
                    }}
                  />
                )
            )}

            {filteredLocations.map((loc) => (
              <CircleMarker
                key={loc.id}
                center={[loc.lat, loc.lng]}
                radius={3}
                pathOptions={{
                  fillColor: typeColors[loc.type],
                  color: typeColors[loc.type],
                  fillOpacity: 1,
                  weight: 12,
                }}
                eventHandlers={{
                  mouseover: (e) => e.target.openPopup(),
                  mouseout: (e) => e.target.closePopup(),
                }}
              >
                <Popup>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.popupContainer}>
                      {/* Header Section */}
                      <div
                        className={styles.popupHeader}
                        style={{ backgroundColor: typeColors[loc.type] }}
                      >
                        <span>{loc.name}</span>
                        <p>
                          {loc.type.charAt(0).toUpperCase() + loc.type.slice(1)}{" "}
                          Locations
                        </p>
                      </div>

                      {/* Content Section */}
                      {(loc.organizations || loc.facilities || loc.networks || loc.exchanges) && (
                     <table className={styles.dataTable}>
                     <tbody>
                       {[
                         { label: 'Organizations', value: loc.organizations },
                         { label: 'Facilities', value: loc.facilities },
                         { label: 'Networks', value: loc.networks },
                         { label: 'Exchanges', value: loc.exchanges },
                       ].map(
                         (item) =>
                           item.value && (
                             <tr key={item.label}>
                               <td className={styles.dataLabel}>{item.label}</td>
                               <td className={styles.dataValue}>{item.value}</td>
                             </tr>
                           )
                       )}
                     </tbody>
                   </table>
                   
                    )}

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
