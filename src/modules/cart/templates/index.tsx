import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"
import PaymentCards from "@modules/products/components/payment-cards"
import CheckoutSteps from "@modules/checkout/components/checkout-steps"


const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="py-12">
      <div className="content-container" data-testid="cart-container">
        {cart?.items?.length ? (
          <div className="grid gap-x-40">
            <div className="flex flex-col bg-white py-6 gap-y-6">
              {/* {!customer && (
                <>
                  <SignInPrompt />
                  <Divider />
                </>
              )} */}
              <CheckoutSteps/>
              <ItemsTemplate cart={cart} />

              <div className="flex flex-col bg-white py-6 gap-y-6">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="w-full lg:w-2/3">
                    <PaymentCards />
                  </div>
                  <div className="w-full lg:w-1/3">
                    <Summary cart={cart as any} />
                  </div>
                </div>
              </div>

            </div>
            <div className="relative">
              <div className="flex flex-col gap-y-8 sticky top-12">
                {/* {cart && cart.region && (
                  <>
                    <div className="bg-white py-6">
                      <Summary cart={cart as any} />
                    </div>
                  </>
                )} */}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate
