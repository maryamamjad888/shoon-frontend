import { notFound } from "next/navigation"
import { Suspense } from "react"

import InteractiveLink from "@modules/common/components/interactive-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import Filter from "@modules/store/components/refinement-list/filter"

export default function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!category || !countryCode) notFound()

  const parents = [] as HttpTypes.StoreProductCategory[]

  const getParents = (category: HttpTypes.StoreProductCategory) => {
    if (category.parent_category) {
      parents.push(category.parent_category)
      getParents(category.parent_category)
    }
  }

  getParents(category)

  return (
    <div>
      {category.description && (
        <div className="inner-desc text-base-regular px-10 py-10 font-light">
          <p>{category.description}</p>
        </div>
      )}
      <div className="flex flex-col small:flex-row gap-6 w-full" data-testid="category-container">

        <div className="flex flex-col w-full small:w-[300px] shrink-0 gap-4 px-10 mt-8">
          <div className="left-info">
            <div className="bg-gray-100 px-4 py-2 mb-2">
              <h1 className="text-black text-sm font-semibold" data-testid="category-page-title">
                Your Selection
              </h1>
            </div>
            <p className="text-gray-500 text-left text-xs px-6 py-4 font-light">Style: {category.name}</p>
          </div>

          {/* <RefinementList sortBy={sort} data-testid="sort-by-container" /> */}
          <Filter/>
        </div>

       
        <div className="w-full">
          {/* <div className="flex flex-row mb-8 text-2xl-semi gap-4">
            {parents.map((parent) => (
              <span key={parent.id} className="text-ui-fg-subtle">
                <LocalizedClientLink
                  className="mr-4 hover:text-black"
                  href={`/categories/${parent.handle}`}
                  data-testid="sort-by-link"
                >
                  {parent.name}
                </LocalizedClientLink>
                /
              </span>
            ))}
          </div> */}

          <Suspense
            fallback={
              <SkeletonProductGrid numberOfProducts={category.products?.length ?? 8} />
            }
          >
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              categoryId={category.id}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>

    </div>

  )
}
