import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type: "up" | "down";
};

const CustomVerticalArrow: React.FC<ArrowProps> = ({
  className = "",
  style,
  onClick,
  type,
}) => {
  return (
    <div
      className={`custom-arrow ${type === "up" ? "top-arrow" : "bottom-arrow"} ${className}`}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",   
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1,
        top: type === "up" ? "-20px" : "100%",
        
      }}
    >
      {type === "up" ? <ChevronUp size={35} /> : <ChevronDown size={35} />}
    </div>
  );
};

export default CustomVerticalArrow;
