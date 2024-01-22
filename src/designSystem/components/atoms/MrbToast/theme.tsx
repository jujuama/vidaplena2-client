export interface MrbToastTheme {
  boxShadow?: string

  variantInfo?: MrbToastVariantTheme
  variantSuccess?: MrbToastVariantTheme
  variantDanger?: MrbToastVariantTheme
  variantWarning?: MrbToastVariantTheme
}

export interface MrbToastVariantTheme {
  color?: string
  background?: string
  border?: string
}
