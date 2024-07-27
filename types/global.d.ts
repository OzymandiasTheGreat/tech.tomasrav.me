declare module "*.svg" {
  const content: any
  export default content
}

declare module "*.md" {
  const content: string
  export default content
}

declare interface Error {
  code?: number
}
