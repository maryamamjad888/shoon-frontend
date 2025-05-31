import { clx } from "@medusajs/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  const isOnSale = selectedPrice.price_type === "sale"
  const priceDiff = (
    selectedPrice.original_price_number - selectedPrice.calculated_price_number
  ).toFixed(2)

  return (
    <div className="flex flex-col text-sm space-y-1">
      {isOnSale ? (
        <>
          <div className="text-red-600 text-xl font-semibold">
            <span>Now </span>
            <span
              data-testid="product-price"
              data-value={selectedPrice.calculated_price_number}
            >
              {selectedPrice.calculated_price}
            </span>
          </div>
          <div className="font-sans text-sm font-light text-gray-500">
            <span className="line-through mr-1" data-testid="original-product-price">
              Was {selectedPrice.original_price}
            </span>
            |
            <span className="ml-1">
              Save {priceDiff} ({selectedPrice.percentage_diff}%)
            </span>
          </div>
        </>
      ) : (
        <div
          className="text-black text-xl font-semibold"
          data-testid="product-price"
          data-value={selectedPrice.calculated_price_number}
        >
          {selectedPrice.calculated_price}
        </div>
      )}
    </div>
  )
}
