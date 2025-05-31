'use client'

import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"

export default function ProductPreview({
  product,
  isFeatured,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
}) {
  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div className="transition-all p-2">
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />
      </div>
    </LocalizedClientLink>
  )
}