"use client"

import { useEffect, useState } from "react"
import CartDropdown from "../cart-dropdown"
import { getCart } from "@lib/hooks/use-cart"
import type { StoreCart } from "@medusajs/types" // optional, for TS

export default function CartButton() {
  const [cart, setCart] = useState<StoreCart | null>(null)

  useEffect(() => {
    getCart().then(setCart).catch(() => setCart(null))
  }, [])

  return <CartDropdown cart={cart} />
}
