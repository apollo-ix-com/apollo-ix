import { motion } from "framer-motion";

interface TooltipProps {
  content: string;
  x: number;
  y: number;
}

const Tooltip: React.FC<TooltipProps> = ({ content, x, y }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.15 }}
      style={{
        position: "absolute", // Change to absolute
        left: x,
        top: y,
        transform: "translateY(-50%)",
        padding: "8px 12px",
        background: "#333",
        color: "#fff",
        borderRadius: "6px",
        whiteSpace: "nowrap",
        zIndex: 10,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      {content}
    <div style={{
      position: 'absolute',
      left: -6,
      top: '50%',
      transform: 'translateY(-50%)',
      borderTop: '6px solid transparent',
      borderBottom: '6px solid transparent',
      borderRight: '6px solid rgba(0, 0, 0, 0.85)'
    }} />
    </motion.div>
  );
};

export default Tooltip;
