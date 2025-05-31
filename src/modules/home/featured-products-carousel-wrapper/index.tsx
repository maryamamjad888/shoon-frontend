import { listProducts } from "@lib/data/products"
import FeaturedProductsClient from "../components/featured-products-carousel-client"
import { HttpTypes } from "@medusajs/types"

export default async function FeaturedProductsCarouselWrapper({
  collections,
  region,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
}) {
  const collectionsWithProducts = await Promise.all(
    collections.map(async (collection) => {
      const {
        response: { products },
      } = await listProducts({
        regionId: region.id,
        queryParams: {
          collection_id: collection.id,
          fields: "*variants.calculated_price",
        },
      })

      return {
        ...collection,
        products: products || [],
      }
    })
  )

  return (
    <FeaturedProductsClient collections={collectionsWithProducts} region={region} />
  )
}
