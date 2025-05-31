import { Metadata } from "next"

import FeaturedProductsCarouselWrapper from "@modules/home/featured-products-carousel-wrapper"
import Hero from "@modules/home/components/hero"
import CelebrateSection from "@modules/home/components/banners-section/banner-one"
import MiddleBanners from "@modules/home/components/banners-section/middle-banners"
import BottomBanners from "@modules/home/components/banners-section/bottom-banner"
import InfoSection from "@modules/home/components/info-section"
import InspiredSection from "@modules/home/components/be-inspired"
import WelcomeSection from "@modules/home/components/welcome-section"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"


export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <CelebrateSection />
      <MiddleBanners/>
      <BottomBanners />
      <InfoSection/>
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
        <FeaturedProductsCarouselWrapper collections={collections} region={region} />

        </ul>
      </div>
      <InspiredSection/>
      <WelcomeSection/>
    </>
  )
}
