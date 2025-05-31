import { clx } from "@medusajs/ui"
import Image from "next/image"
import React from "react"

import PlaceholderImage from "@modules/common/icons/placeholder-image"

type ThumbnailProps = {
  thumbnail?: string | null
  images?: any[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
  "data-testid"?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
  isFeatured,
  className,
  "data-testid": dataTestid,
}) => {
  const firstImage = thumbnail || images?.[0]?.url
  const secondImage = images?.[1]?.url

  return (
    <div
      className={clx("relative group w-full overflow-hidden", className)}
      data-testid={dataTestid}
    >
      {firstImage ? (
        <>
          <Image
            src={firstImage}
            alt="Product image"
            draggable={false}
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
            className="transition-opacity duration-300 group-hover:opacity-0"
          />
          {secondImage && (
            <Image
              src={secondImage}
              alt="Product hover image"
              draggable={false}
              width={400}
              height={400}
              style={{ width: "100%", height: "auto" }}
              className="absolute top-0 left-0 w-full h-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <PlaceholderImage size={size === "small" ? 16 : 24} />
        </div>
      )}
    </div>
  )
}

export default Thumbnail
