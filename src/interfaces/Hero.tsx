export type Hero = {
  comics?: {
    available?: number,
    collectionURI?: string,
    items?: { name?: string }[],
    returned?: number,
  },
  description?: string,
  events?: {
    available?: number,
    collectionURI?: string,
    items?: { name?: string }[],
    returned?: number,
  },
  id: number,
  modified?: string,
  name?: string,
  resourceURI?: string,
  series?: {
    available: number,
    collectionURI: string,
    items?: { name?: string }[],
    returned?: number,
  },
  stories?: {
    available?: number,
    collectionURI?: string,
    items?: { name?: string }[],
    returned?: number,
  },
  thumbnail?: {
    extension?: string,
    path?: string
  },
  urls?: {
    type?: string,
    url?: string
  }
}