import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"

const HeaderRight = () => {
  return (
    <div className="header-right flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
      <div className="hidden small:flex items-center gap-x-6 h-full">
        <div className="icon-group flex text-black">
          <LocalizedClientLink
            className="marker-size"
            href="/account"
            data-testid="nav-account-link"
          >
            <i className="fas fa-map-marker-alt cursor-pointer"></i>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/account"
            data-testid="nav-account-link"
          >
            <i className="lar la-user"></i>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/cart"
            data-testid="nav-cart-link"
          >
            <i className="lar la-heart"></i>
          </LocalizedClientLink>
          <div className="relative currency-wrapper currency-icon-container">
            <div className="flex items-center justify-center text-black cursor-pointer group">
              <i className="las la-pound-sign"></i>
              <div className="currency-dropdown drop absolute left-1/2 top-full transform -translate-x-1/2 mt-2 w-20 bg-white border border-gray-300 rounded shadow-md z-50 opacity-0 invisible transition-all duration-200">
              
                <div className="py-2 hover:bg-gray-100 flex items-center justify-center gap-2">
                  <span>USD(<i className="las la-dollar-sign"></i>)</span>
                </div>
                <div className="py-2 hover:bg-gray-100 flex items-center justify-center gap-2">
                  <span>EUR(<i className="las la-euro-sign"></i>)</span>
                </div>
                <div className="py-2 hover:bg-gray-100 flex items-center justify-center gap-2">
                  <span>AUD(<i className="las la-dollar-sign"></i>)</span>
                </div>
                <div className="py-2 hover:bg-gray-100 flex items-center justify-center gap-2">
                  <span>GBP(<i className="las la-pound-sign"></i>)</span>
                </div>
              </div>
            </div>
          </div>
          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:text-ui-fg-base flex gap-2"
                href="/cart"
                data-testid="nav-cart-link"
              >
                (0)
              </LocalizedClientLink>
            }
          >
            <CartButton/>
          </Suspense>
        </div>
        <button className="checkout ml-4 px-4 py-2 border border-black text-white hover:bg-white hover:text-black transition-colors duration-200 uppercase">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default HeaderRight;