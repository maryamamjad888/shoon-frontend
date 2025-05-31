"use client";

import { useState } from "react";

export default function TopBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="top-bar text-white text-center relative flex items-center justify-center uppercase">
          <span>PINK20 - 20% OFF ALL FULL PRICE STYLES</span>
      <button
        className="absolute right-4 text-white text-lg"
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
}
