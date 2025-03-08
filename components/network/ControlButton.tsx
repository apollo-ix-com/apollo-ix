"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tooltip from "./Tooltip";

interface ControlButtonProps {
  icon: string;
  onClick: () => void;
  color?: string;
  tooltip: string;
  isActive?: boolean;
}

const ControlButton: React.FC<ControlButtonProps> = ({
  icon,
  onClick,
  color = "",
  tooltip,
  isActive = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }} // Add relative parent
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        style={{
          backgroundColor: isActive ? `${color}15` : "transparent",
          border: `2px solid ${color}`,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        <i
          className={icon}
          style={{
            color: isActive ? color : `${color}`,
            fontSize: "20px",
            transition: "color 0.2s ease",
          }}
        />
      </motion.button>

      <AnimatePresence>
        {isHovered && (
          <Tooltip content={tooltip} x={45} y={0} /> // Static offset
        )}
      </AnimatePresence>
    </div>
  );
};

export default ControlButton;
