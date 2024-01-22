export interface MrbInputTheme {
  fontSize?: string
  padding?: string
  lineHeight?: string
  variantDefault: MrbInputVariantTheme
}

export interface MrbInputVariantTheme {
  color: string
  background: string
  border: string

  placeholder?: {
    color?: string
  }

  hover?: {
    color?: string
    background?: string
    border?: string
  }

  focus?: {
    outline?: string
    border?: string
  }
}
