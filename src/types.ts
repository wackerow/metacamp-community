export interface CamperQuote {
  author: string
  association: string
  imageSrc: string
  quote: string
  area: string
}

export interface Community {
  name: string
  href: string
  imageSrc: string
}

export type Photos = string[]

export interface PhotoProps {
  photos: Photos
}
