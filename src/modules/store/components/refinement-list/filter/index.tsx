"use client"
import React, { useState } from "react"

const filters = {
  "Select Size": [
    "UK 2 / EU 35", "UK 3 / EU 36", "UK 4 / EU 37", "UK 5 / EU 38",
    "UK 6 / EU 39", "UK 7 / EU 40", "UK 8 / EU 41", "UK 9 / EU 42"
  ],
  "Select Department": [
    "Sale Sandals", "Sale Trainers", "Sale Boots", "Sale Shoes", "Sale Bags", "Sale Accessories"
  ],
  "Select Color": [
    "Black", "White", "Grey", "Red", "Green", "Blue", "Yellow", "Pink", "Brown", "Beige", "Purple"
  ],
  "Select Material": [
    "Adidas", "Polycarbonate", "Patent Leather", "Leather", "Print Pony", "Metallic Leather", "Snake Print Leather", "Textile"
  ],
  
}

const FilterSection = ({
  title,
  options,
}: {
  title: string
  options: string[]
}) => {
  const [selected, setSelected] = useState<string[]>([])
  const [showAll, setShowAll] = useState(false)

  const toggleOption = (value: string) => {
    setSelected(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    )
  }

  const visibleOptions = showAll ? options : options.slice(0, 6)

  return (
    <div className="w-full max-w-xs">
      <div className="flex items-center justify-between mb-2 bg-gray-100 px-4 py-2">
        <h1 className="text-black text-sm font-semibold">{title}</h1>
        <span className="cursor-pointer text-xl leading-none">−</span>
      </div>
      <div className="space-y-4 px-6 py-4">
        {visibleOptions.map(option => (
          <label key={option} className="flex items-center gap-2 text-gray-500 text-left text-xs font-light">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggleOption(option)}
              className="accent-black"
            />
            {option}
          </label>
        ))}
        {options.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-semibold text-black mt-1"
          >
            {showAll ? "- Show Less" : "+ Show More"}
          </button>
        )}
      </div>
    </div>
  )
}

const Filter: React.FC = () => {
  return (
    <>
      {Object.entries(filters).map(([title, options]) => (
        <FilterSection key={title} title={title} options={options} />
      ))}
    </>
  )
}

export default Filter
