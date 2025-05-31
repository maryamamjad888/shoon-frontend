'use client'

import { useState } from "react"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductCarousel from "../collection-slider"
import { HttpTypes } from "@medusajs/types"

interface CollectionWithProducts extends HttpTypes.StoreCollection {
  products: HttpTypes.StoreProduct[]
}

export default function FeaturedProductsClient({
  collections,
  region,
}: {
  collections: CollectionWithProducts[]
  region: HttpTypes.StoreRegion
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCollection = collections[activeIndex]

  return (
    <div className="content-container collection-sec py-12 small:py-24">
      <div className="text-center mb-10 section-2">
        <h2 className="text-xl font-bold mb-4">Browse Our Collections</h2>
        <p className="text-gray-600">
          Discover our stunning collection of shoes, boots, bags and accessories, designed with love and crafted with care for the ultimate in style and comfort.
        </p>
      </div>
      <div className="flex justify-center items-center mb-6 space-x-4">
        {collections.map((collection, index) => (
          <span
            key={collection.id}
            className={`cursor-pointer px-4 text-lg ${index === activeIndex ? "underline" : "text-gray"
              } ${index !== 0 ? "border-l border-gray-300 pl-4" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {collection.title}
          </span>
        ))}
      </div>


      {/* <div className="flex justify-between items-center mb-4">
        <Text className="txt-xlarge">{activeCollection.title}</Text>
        <InteractiveLink href={`/collections/${activeCollection.handle}`}>
          View all
        </InteractiveLink>
      </div> */}

      <ProductCarousel products={activeCollection.products} region={region} />
    </div>
  )
}