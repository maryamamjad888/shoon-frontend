import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPrice from "@modules/products/components/product-price"
type ProductInfoProps = {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}

const ProductInfo = ({ product, variant }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col mx-auto py-8">
        <Heading level="h2" className="font-como text-2xl font-light">
          Moda In Pelle
        </Heading>

        <Heading level="h1" className="font-como text-3xl my-3">
          {product.title}
        </Heading>

        <ProductPrice product={product} variant={variant} />

        <Text className="text-xs text-gray font-light whitespace-pre-line leading-relaxed pt-6">
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
