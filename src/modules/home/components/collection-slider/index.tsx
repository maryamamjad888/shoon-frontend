'use client'

import dynamic from "next/dynamic"
import ProductPreview from "@modules/products/components/product-preview"
import { HttpTypes } from "@medusajs/types"

const Slider = dynamic(() => import("react-slick"), { ssr: false })

export default function ProductCarousel({
  products,
  region,
}: {
  products: HttpTypes.StoreProduct[]
  region: HttpTypes.StoreRegion
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings} className="slick-slider">
      {products.map((product) => (
        <div key={product.id} className="px-2">
          <ProductPreview
            product={product}
            region={region}
          />
        </div>
      ))}
    </Slider>
  )
}
