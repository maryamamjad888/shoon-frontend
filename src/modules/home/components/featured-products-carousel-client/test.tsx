// components/ShoeSizeDisplay.tsx
import { HttpTypes } from "@medusajs/types"
import React from "react"

type ShoeSizeDisplayProps = {
  option: HttpTypes.StoreProductOption
}

const ShoeSizeDisplay: React.FC<ShoeSizeDisplayProps> = ({ option }) => {
  const sizes = (option.values ?? []).map((v) => v.value)

  if (!sizes.length) return null
  console.log("ShoeSizeDisplay rendered with sizes:", sizes) // Debugging line to check the sizes being displayed
  return (
    <div className="bg-white border border-gray-300 text-sm p-2 rounded shadow-lg whitespace-nowrap">
      <span className="font-medium mr-1">Sizes:</span>
      {sizes.join(", ")}
    </div>
    
  )
}

export default ShoeSizeDisplay
