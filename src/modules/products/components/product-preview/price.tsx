import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) return null


  const parsePrice = (value: string | undefined) => {
    if (!value) return 0
    const num = parseFloat(value.replace(/[^0-9.-]/g, ''))
    return isNaN(num) ? 0 : num
  }

  const original = parsePrice(price.original_price)
  const calculated = parsePrice(price.calculated_price)
  const isSale = price.price_type === "sale" && original > 0

  // Calculate discount only if valid sale
  const discountAmount = isSale ? (original - calculated).toFixed(2) : "0.00"
  const discountPercentage = isSale ? Math.round(((original - calculated) / original) * 100) : 0

  return (
    <div className="flex flex-col mx-auto">

      <Text
        className={clx("text-black font-medium text-base mt-3", {
          "": isSale,
        })}
      >
        Now {price.calculated_price}
      </Text>


      {isSale && (
        <div className="flex items-center gap-2 mt-1">
          <Text className="text-xs font-light text-center">
            Was {price.original_price}
          </Text>

          <div className="h-3 w-px bg-ui-fg-muted" />

          <Text className="text-xs font-light text-center">
            Save £{discountAmount} ({discountPercentage}%)
          </Text>
        </div>

      )}
      <div className="flex items-center mx-auto mt-3 gap-x-1">
        {[...Array(4)].map((_, i) => (
          <i key={i} className="las la-star text-black text-md"></i>
        ))}
        <i className="las la-star text-gray-400 text-md"></i>
        <Text className="text-sm text-black">24 Reviews</Text>
      </div>
    </div>
  )
}