const STRAPI_URL = 'https://stable-melody-e536e34213.strapiapp.com';
// const STRAPI_URL = 'http://localhost:1337';
export type richText = {
    title?: string;
    slug?: string;
    text: string;
    image?: ImageMedia[];
}

export type ImageMedia = {
  url: string
  name: string
  width: number
  height: number
  formats: ImageFormats
}

export type ImageFormats = {
  large?: ImageFormat
  medium?: ImageFormat
  small?: ImageFormat
  thumbnail?: ImageFormat
}

export type ImageFormat = {
  url: string
  name: string
  width: number
  height: number
}

export function mapImageMedia(image: ImageMedia): ImageMedia {
  const isAbsolute = image.url.startsWith('http');
  return {
    ...image,
    url: isAbsolute ? image.url: `${STRAPI_URL}${image.url}`,
    formats: {
      large: mapImageFormat(image.formats.large),
      medium: mapImageFormat(image.formats.medium),
      small: mapImageFormat(image.formats.small),
      thumbnail: mapImageFormat(image.formats.thumbnail),
    },
  }
}

export function mapImageFormat(format?: ImageFormat): ImageFormat | undefined {
  if (!format || !format.url) {
    return undefined
  }

  return {
    ...format,
    url: `${STRAPI_URL}${format.url}`,
  }
}

// export async function getAboutMe(): Promise<richText> {
//   try {
//     const response = await fetch(`${STRAPI_URL}/api/about-me`);
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error("Failed to fetch articles:", error);
//     return { text: "Error loading Content"};
//   }
// }

// export async function getProjects(): Promise<richText[]> {
//     try {
//         const response = await fetch(`${STRAPI_URL}/api/articles?populate=*&sort=publishedAt:desc`);
//         const data = await response.json();
//         return data.data;
//     } catch (error) {
//         console.error("Failed to fetch articles:", error);
//         return [];
//     }
// }
