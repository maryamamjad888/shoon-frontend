"use client"

import { useEffect, useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import TopBar from "@modules/layout/components/sales-bar"
import SearchBar from "@modules/layout/components/search-bar"
import HeaderRight from "@modules/layout/components/header-right"
import BottomBar from "@modules/layout/components/bottom-bar"
import MobNav from "@modules/layout/components/mobile-nav"

interface Category {
  id: string
  name: string
  handle: string
  category_children?: Category[]
}

interface NavClientProps {
  topCategories: Category[]
}

export default function NavClient({ topCategories }: NavClientProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      setActiveDropdown(null)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="top-0 inset-x-0 z-50">
      <TopBar />
      <header className="relative mx-auto border-b duration-200 bg-white border-ui-border-base hidden sm:block">
        <nav className="content-container txt-xsmall-plus my-3 text-ui-fg-subtle flex items-center justify-between w-full h-16 text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <SearchBar />
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
          <HeaderRight />
        </nav>

        <div className="content-container nav-bar hidden md:-mt-2 sm:flex md:gap-x-2 !md:text-[19px] items-center lg:gap-x-6 h-12 text-small-regular justify-evenly">
          {topCategories.map((cat, index) => {
            const children = cat.category_children || []
            const categoryImage = `/category/${cat.handle}.webp`

            return (
              <div
                key={cat.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(cat.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <LocalizedClientLink
                  href={`/categories/${cat.handle}`}
                  className={`hover:text-ui-fg-base relative whitespace-nowrap z-10 py-6 ${index === 0 ? "text-red-500" : ""}`}
                >
                  {cat.name}
                </LocalizedClientLink>

                {children.length > 0 && activeDropdown === cat.id && (
                  <div className="sub-cat fixed mt-4 right-10 left-10 bg-white shadow-lg z-50 transition-all duration-200 ease-in-out max-h-[80vh] overflow-y-auto">
                    <div className="flex">
                      <div className="w-2/3 py-10 px-10 flex gap-10">
                        {Array.from({ length: Math.ceil(children.length / 8) }).map((_, columnIndex) => (
                          <ul key={columnIndex} className="flex flex-col gap-6 text-sm">
                            {children
                              .slice(columnIndex * 8, columnIndex * 8 + 8)
                              .map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    href={`/categories/${child.handle}`}
                                    className="hover:text-ui-fg-base"
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
            )
          })}
        </div>
      </header>
      <MobNav topCategories={topCategories} />
      <BottomBar />
    </div>
  )
}
