'use client'

import Slider from "react-slick"
import ProductPreview from "../../product-preview"
import { HttpTypes } from "@medusajs/types"

export default function ProductSlider({
  products,
  region,
}: {
  products: HttpTypes.StoreProduct[]
  region: HttpTypes.StoreRegion
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="product-carousel px-4">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <ProductPreview product={product} region={region} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
