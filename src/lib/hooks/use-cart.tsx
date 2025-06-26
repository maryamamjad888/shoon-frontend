import { retrieveCart } from "@lib/data/cart"

export const getCart = async () => {
  return await retrieveCart()
}
