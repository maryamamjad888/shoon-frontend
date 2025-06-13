

import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import SmoothSlider from "../smoothslider"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function SimilarProductsWrapper({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) return null

  const queryParams: HttpTypes.StoreProductParams = {}
  if (region?.id) queryParams.region_id = region.id
  if (product.collection_id) queryParams.collection_id = [product.collection_id]
  if (product.tags) {
    queryParams.tag_id = product.tags
      .map((t) => t.id)
      .filter(Boolean) as string[]
  }
  queryParams.is_giftcard = false

  const products = await listProducts({ queryParams, countryCode }).then(
    ({ response }) => response.products.filter(p => p.id !== product.id)
  ) 

  if (!products.length) return null

  return (
<div className="product-page-constraint my-6">
  <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
    <li className="col-span-full medium:col-span-4">
      <div className="flex items-center md:justify-center bg-white border border-gray-200 px-6 py-4 overflow-hidden  size-class">
        <div className="flex flex-col justify-center w-2/3 sm:w-1/3 pr-4 view">
          <div className="flex items-center max-sm:gap-1 sm:gap-3 mb-4">
            <div className="border border-black rounded p-2">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4.5 4.5h15v15h-15z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">View Visually</p>
              <p className="text-sm font-semibold leading-tight">Similar Products</p>
              
            </div>
          </div>
          <button className="bg-black text-white px-5 py-2 font-medium text-sm hover:bg-gray-800 transition">
            Explore Now ›
          </button>
        </div>

  
        <div className="w-2/3 overflow-hidden">
          <SmoothSlider images={products.slice(0, 10).map(p => p.thumbnail || p.images?.[0]?.url)} />
        </div>


      </div>
    </li>

    
  </ul>
</div>


  )
}
