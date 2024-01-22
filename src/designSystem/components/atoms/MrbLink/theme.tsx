export interface MrbLinkTheme {
  variantDefault: MrbLinkV2VariantTheme
  variantPrimary: MrbLinkV2VariantTheme
}

export interface MrbLinkV2VariantTheme {
  color: string
  borderColor: string

  hover?: {
    color?: string
    borderColor?: string
  }
}
