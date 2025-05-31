"use client"

import { Button, Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"


type SummaryProps = {
  cart: HttpTypes.StoreCart & {
    promotions: HttpTypes.StorePromotion[]
  }
}

function getCheckoutStep(cart: HttpTypes.StoreCart) {
  if (!cart?.shipping_address?.address_1 || !cart.email) {
    return "address"
  } else if (cart?.shipping_methods?.length === 0) {
    return "delivery"
  } else {
    return "payment"
  }
}

const Summary = ({ cart }: SummaryProps) => {
  const step = getCheckoutStep(cart)

  return (
    <div className="flex justify-end">
  <div className="flex flex-col gap-y-4 items-end">
    <CartTotals totals={cart} />
    <DiscountCode cart={cart} />
    <LocalizedClientLink
      href={"/checkout?step=" + step}
      data-testid="checkout-button"
    >
      <button className="w-[200px] h-10 uppercase bg-black text-white text-sm">
        Proceed to Payment
      </button>
    </LocalizedClientLink>
  </div>
</div>

  )
}

export default Summary
