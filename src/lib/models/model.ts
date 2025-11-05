
export type richText = {
  title?: string
  slug?: string
  text: string
  image?: ImageMedia[]
}

export type ImageMedia = {
  url: string // public path like "/projects/project1.jpg"
  name?: string
  width?: number
  height?: number
}

export function mapImageMedia(image: ImageMedia): ImageMedia {
  const isAbsolute = /^https?:\/\//i.test(image.url)
  const url = isAbsolute ? image.url : image.url.startsWith("/") ? image.url : `/${image.url}`
  return { ...image, url }
}

export function makePublicImage(url: string, name?: string, width?: number, height?: number): ImageMedia {
  const safeUrl = url.startsWith("/") ? url : `/${url}`
  return { url: safeUrl, name, width, height }
}

