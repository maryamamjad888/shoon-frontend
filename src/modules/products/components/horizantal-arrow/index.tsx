import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type: "left" | "right";
};

const CustomHorizontalArrow: React.FC<ArrowProps> = ({
  className = "",
  style,
  onClick,
  type,
}) => {
  return (
    <div
      className={`custom-arrow ${type === "left" ? "left-arrow" : "right-arrow"} ${className}`}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        [type === "left" ? "left" : "right"]: "-20px",
        cursor: "pointer",
      }}
    >
      {type === "left" ? <ChevronLeft size={40} /> : <ChevronRight size={40} />}
    </div>
  );
};

export default CustomHorizontalArrow;
