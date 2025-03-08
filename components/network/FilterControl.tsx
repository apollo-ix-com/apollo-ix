"use client";

import { useState } from "react";
import { useMap } from "react-leaflet";
import ControlButton from "./ControlButton";

export const typeColors: Record<string, string> = {
  own: "#202942",
  partner: "#FFA725",
  enabled: "#89AC46",
  interconnect: "#202942",
};

export const controlStyle = {
  background: "rgba(255, 255, 255, 0.95)",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  minWidth: "40px",
  // position: 'absolute',
  top: "20px",
  left: "20px",
  zIndex: 1000,
};

const FilterControl: React.FC<{ setFilter: (filter: string) => void }> = ({
  setFilter,
}) => {
  const map = useMap();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    {
      name: "All Locations",
      value: "all",
      icon: "mdi mdi-earth",
      color: "#6c757d",
    },
    {
      name: "Own Locations",
      value: "own",
      icon: "mdi mdi-domain",
      color: typeColors.own,
    },
    {
      name: "Partner Locations",
      value: "partner",
      icon: "mdi mdi-handshake",
      color: typeColors.partner,
    },
    {
      name: "Enabled Locations",
      value: "enabled",
      icon: "mdi mdi-check-circle",
      color: typeColors.enabled,
    },
    {
      name: "Interconnect Locations",
      value: "interconnect",
      icon: "mdi mdi-vector-line",
      color: typeColors.interconnect,
    },
  ];

  const handleFilterClick = (filterValue: string) => {
    setFilter(filterValue);
    setActiveFilter(filterValue);
    map.invalidateSize();
  };

  return (
    <div style={{ ...controlStyle, position: "absolute" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <ControlButton
          icon="mdi mdi-plus"
          onClick={() => map.zoomIn()}
          tooltip="Zoom In"
          color="#6c757d"
        />
        <ControlButton
          icon="mdi mdi-minus"
          onClick={() => map.zoomOut()}
          tooltip="Zoom Out"
          color="#6c757d"
        />
        {filters.map((filter) => (
          <ControlButton
            key={filter.value}
            icon={filter.icon}
            onClick={() => handleFilterClick(filter.value)}
            color={filter.color}
            tooltip={filter.name}
            isActive={activeFilter === filter.value}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterControl;
