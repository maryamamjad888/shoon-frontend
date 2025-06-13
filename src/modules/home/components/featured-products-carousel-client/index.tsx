'use client'

import { useState, useRef } from "react"
import ProductCarousel from "../collection-slider"
import { HttpTypes } from "@medusajs/types"
import dynamic from 'next/dynamic'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = dynamic(() => import('react-slick'), { ssr: false })

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
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (current: number) => setActiveIndex(current),
  }
  
  return (
    <div className="content-container collection-sec py-12 small:py-24">
      <div className="text-center mb-10 section-2">
        <h2 className="text-xl font-bold mb-4">Browse Our Collections</h2>
        <p className="text-gray-600">
          Discover our stunning collection of shoes, boots, bags and accessories, designed with love and crafted with care for the ultimate in style and comfort.
        </p>
      </div>
      <div className="hidden justify-center items-center mb-6 space-x-4 sm:flex">
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
      <div className="sm:hidden mb-6 relative">
        <Slider {...settings} className="coll mobcollection px-8">
          {collections.map((collection, index) => (
            <div key={index} className="text-center text-lg px-4">
              {collection.title}
            </div>
          ))}
        </Slider>
      </div>
      <ProductCarousel products={activeCollection.products} region={region} />
    </div>
  )
}