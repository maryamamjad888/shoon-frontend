"use client"

import { useState, useRef, useEffect } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { FaMinus, FaPlus } from "react-icons/fa"

type Category = {
  id: string
  name: string
  handle: string
  category_children?: Category[]
}

type Props = {
  category: Category
  index: number
}

const CategoryDropdown = ({ category, index }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const children = category.category_children || []
  const categoryImage = `/category/${category.handle}.webp`

  const contentRef = useRef<HTMLDivElement>(null)

  return (
  <div className="flex flex-col w-full border-b border-gray-200">
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className={`flex items-center justify-between w-full py-2 px-2 border-b border-gray-200 transition-colors duration-200 ${
        index === 0 ? "text-red-500" : "text-gray-800 hover:text-ui-fg-base"
      }`}
    >
      <span className="cat">{category.name}</span>
      <span className="ml-2">
        {isOpen ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
      </span>
    </button>

    <div
      ref={contentRef}
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="w-full bg-white px-2 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <span className="cat-child  !inline-block px-2 py-1">View All {category.name}</span>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {children.map((child) => (
              <LocalizedClientLink
                key={child.id}
                href={`/categories/${child.handle}`}
                className="hover:text-ui-fg-base cat-child px-2 py-1"
              >
                {child.name}
              </LocalizedClientLink>
            ))}
          </div>

          <div className="md:col-span-3 mt-6 flex justify-center">
            <img
              src={categoryImage}
              alt={`${category.name} category`}
              className="max-w-full max-h-[200px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default CategoryDropdown
