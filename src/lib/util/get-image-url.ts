
export const getImageUrl = (url: string | null | undefined): string | undefined => {
    if (!url) return undefined
    if (/^https?:\/\//i.test(url)) return url
    const baseUrl = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
    return `${baseUrl}${url.startsWith("/") ? url : `/${url}`}`
  }
  