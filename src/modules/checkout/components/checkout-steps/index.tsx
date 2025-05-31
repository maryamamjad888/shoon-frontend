"use client"

import { useSearchParams } from "next/navigation"
import clsx from "clsx"

const steps = ["my-bag", "address", "delivery", "payment"]

const stepTitles: Record<string, string> = {
  "my-bag": "My Bag",
  "address": "Details",
  "delivery": "Delivery",
  "payment": "Payment",
}

const CheckoutSteps = () => {
  const searchParams = useSearchParams()
  const currentStep = searchParams.get("step") || "my-bag"
  const currentIndex = steps.indexOf(currentStep)

  return (
    <div className="flex justify-center gap-10 mb-6 mt-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={clsx(
              "w-11 h-11 flex items-center justify-center rounded-full text-white text-sm",
              index === currentIndex
                ? "bg-black"
                : "bg-gray-custom"
            )}
          >
            {index + 1}
          </div>
          <span
            className={clsx(
              "mt-1 text-sm",
              index === currentIndex ? "ml-3 text-black" : "ml-3 text-gray-500"
            )}
          >
            {stepTitles[step]}
          </span>
        </div>
      ))}
    </div>
  )
}

export default CheckoutSteps
