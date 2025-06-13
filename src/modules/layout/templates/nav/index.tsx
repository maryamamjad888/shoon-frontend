import { Suspense } from "react"
import { listCategories } from "@lib/data/categories"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import TopBar from "@modules/layout/components/sales-bar"
import SearchBar from "@modules/layout/components/search-bar"
import HeaderRight from "@modules/layout/components/header-right"
import BottomBar from "@modules/layout/components/bottom-bar"
import MobNav from "@modules/layout/components/mobile-nav"



export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)
  const productCategories = await listCategories()

  const topCategories = productCategories?.filter((cat) => !cat.parent_category)

  return (
    <div className="top-0 inset-x-0 z-50 group">
      <TopBar />
      <header className="relative mx-auto border-b duration-200 bg-white border-ui-border-base hidden sm:block">

        <nav className="content-container txt-xsmall-plus my-3 text-ui-fg-subtle flex items-center justify-between w-full h-16 text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SearchBar />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <img src="/logo.webp" alt="Logo" className="h-14 w-auto" />
            </LocalizedClientLink>
          </div>

          {/* <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
        <div className="hidden small:flex items-center gap-x-6 h-full">
         
          <LocalizedClientLink
            className="hover:text-ui-fg-base"
            href="/account"
            data-testid="nav-account-link"
          >
            Account
          </LocalizedClientLink>
        </div>

       
        <Suspense
          fallback={
            <LocalizedClientLink
              className="hover:text-ui-fg-base flex gap-2"
              href="/cart"
              data-testid="nav-cart-link"
            >
              Cart (0)
            </LocalizedClientLink>
          }
        >
          <CartButton />
        </Suspense>
      </div> */}
          <HeaderRight/>
        </nav>

        <div className="content-container nav-bar hidden md:-mt-2 sm:flex md:gap-x-2 !md:text-[19px] items-center lg:gap-x-6 h-12 text-small-regular justify-evenly">
          {topCategories.map((cat, index) => {
            const children = cat.category_children || [];
            const categoryImage = `/category/${cat.handle}.webp`;

            return (
              <div key={cat.id} className="relative group/category">
                <LocalizedClientLink
                  href={`/categories/${cat.handle}`}  
                  className={`hover:text-ui-fg-base relative whitespace-nowrap z-10 py-6 ${index === 0 ? 'text-red-500' : ''}`}
                >
                  {cat.name}
                </LocalizedClientLink>

                {children.length > 0 && (
                  <div className="sub-cat fixed mt-4 right-10 left-10 bg-white shadow-lg z-20 hidden group-hover/category:block transition-all duration-200 ease-in-out">
                    <div className="flex">
                      <div className="w-2/3 py-10 px-10 flex gap-10">
                        {Array.from({ length: Math.ceil(children.length / 8) }).map((_, columnIndex) => (
                          <ul key={columnIndex} className="flex flex-col gap-6 text-sm">
                            {children.slice(columnIndex * 8, columnIndex * 8 + 8).map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  href={`/categories/${child.handle}`}
                                  className="hover:text-ui-fg-base "
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>

                      <div className="justify-end">
                        <img
                          src={categoryImage}
                          alt={`${cat.name} category`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </header>
      
      <MobNav topCategories={topCategories} />
      <BottomBar />
    </div>

  )
}
