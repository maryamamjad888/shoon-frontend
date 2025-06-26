'use client'

import { useEffect, useState } from 'react'
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SearchBar from "@modules/layout/components/search-bar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-regular-svg-icons"
import dynamic from "next/dynamic"
import 'bootstrap-icons/font/bootstrap-icons.css'


const CategoryDropdown = dynamic(() =>
  import("../cat-dropdown"), { ssr: false }
)


interface Category {
  id: string
  handle: string
  name: string
}

interface MobNavProps {
  topCategories: Category[]
}

export default function MobNav({ topCategories }: MobNavProps) {
  const [isSticky, setIsSticky] = useState(false)
useEffect(() => {
  const handleScroll = () => {
    const offset = window.scrollY
    setIsSticky(offset > 40)  
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [])
  const [activePanel, setActivePanel] = useState<'menu' | 'search' | null>(null)

  return (

<header
  className={`mobnav w-full bg-white border-ui-border-base sm:hidden z-50 transition-all duration-300 ease-in-out ${
    isSticky ? 'fixed top-0 translate-y-0 shadow-md' : 'relative transform -translate-y-1'
  }`}
>
  

    {/* Scrollable Navbar Container */}
<div className="max-h-screen overflow-y-auto">
  {/* Logo */}
  <div className="flex items-center mob w-full justify-center">
    <LocalizedClientLink
      href="/"
      className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
      data-testid="nav-store-link"
    >
      <img src="/moblogo.webp" alt="Logo" className="mob -translate-y-2" />
    </LocalizedClientLink>
  </div>

  <hr className="custom-hairline -mt-3" />

  {/* Top Icon Bar */}
  <div className="flex justify-center mobban gap-12 py-1 h-12">
    {/* Menu */}
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={() => setActivePanel(activePanel === 'menu' ? null : 'menu')}
    >
      <FontAwesomeIcon
        icon={activePanel ? faXmark : faBars}
        size="2x"
        className="text-black text-2xl transform scale-x-120 scale-y-90"
      />
      <span className="text-sm font-medium text-black mobtop">Menu</span>
    </div>

    {/* Search */}
    <div
      className="flex flex-col items-center"
      onClick={() => setActivePanel(activePanel === 'search' ? null : 'search')}
    >
      <i className="bi bi-search"></i>
      <span className="text-sm font-medium text-black mobtop">Search</span>
    </div>

    {/* Sale */}
    <div className="flex flex-col items-center">
      <i className="bi bi-tag" />
      <span className="text-sm font-medium text-black mobtop">Sale</span>
    </div>

    {/* Login */}
    <div className="flex flex-col items-center">
      <FontAwesomeIcon icon={faUser} className="scale-[0.9] mt-1" />
      <span className="text-sm font-medium text-black mobtop">Login</span>
    </div>

    {/* My Bag */}
    <div className="flex flex-col items-center">
      <i className="las la-shopping-bag" style={{ fontSize: '19px' }} />
      <span className="text-sm font-medium text-black mobtop">My Bag</span>
    </div>
  </div>

  {/* Menu / Search Panel (Scrollable too if content overflows) */}
  {(activePanel === 'menu' || activePanel === 'search') && (
    <div className="content-container nav-bar flex flex-col items-start gap-y-4 p-4 text-small-regular bg-white border-t border-gray-300 max-h-[100vh] overflow-y-auto">
      <div className="flex-1 basis-0 h-full flex items-center">
        <div className="h-full">
          <SearchBar />
        </div>
      </div>

      {topCategories.map((cat, index) => (
        <CategoryDropdown key={cat.id} category={cat} index={index} />
      ))}
    </div>
  )}
</div> 
    </header>

  )
}