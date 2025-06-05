'use client'

import { useState } from "react"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductPrice } from "@lib/util/get-product-price"
import { Heart } from "lucide-react"
import { getImageUrl } from "@lib/util/get-image-url"

export default function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({ product })
  const [isLiked, setIsLiked] = useState(false)

  const sizeOption = product.options?.find(
    (option) => option.title.toLowerCase() === "size"
  )

  const sizes = Array.from(
    new Set(
      product.variants?.flatMap((variant) =>
        variant.options
          ?.filter((opt) => opt.option_id === sizeOption?.id)
          .map((opt) => opt.value)
      ).filter((val): val is string => !!val)
    )
  )

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div
        data-testid="product-wrapper"
        className="transition-all border border-transparent group-hover:border-gray-200 p-2 relative"
      >
        <Thumbnail
          thumbnail={getImageUrl(product.thumbnail)}
          images={product.images?.map((img) => ({
            ...img,
            url: getImageUrl(img.url),
          }))}
          size="full"
          isFeatured={isFeatured}
        />


        {cheapestPrice?.price_type === "sale" && (
          <div className="relative h-8 my-8 w-full">
            <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
              <div className="sale-button text-white text-xs px-6 py-2">
                Sale
              </div>
            </div>

            <button
              className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray"
              onClick={(e) => {
                e.preventDefault()
                setIsLiked(!isLiked)
              }}
            >
              <Heart
                size={18}
                className={`transition-colors ${isLiked ? "text-red-500 fill-red-500" : "text-gray-500"
                  }`}
              />
            </button>
          </div>
        )}

        <div
          className="absolute top-0 right-0 px-2 py-1 text-[10px] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div className="font-medium text-gray-700 text-right mb-1">Sizes</div>
          <div className="flex flex-col gap-1 items-start">
            {sizes.map((size, idx) => (
              <span key={idx} className="px-2 py-0.5 text-gray-800">
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="pro-title txt-compact-medium mt-2 text-center justify-between">
          <Text data-testid="product-title">{product.title}</Text>
          <div className="flex items-center gap-x-2 justify-center">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
