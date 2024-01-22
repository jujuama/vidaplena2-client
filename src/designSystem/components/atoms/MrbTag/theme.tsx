export interface MrbTagTheme {
  textSize?: string
  padding?: string
  variantDefault?: MrbTagVariantTheme
  variantPrimary?: MrbTagVariantTheme
  variantSuccess?: MrbTagVariantTheme
  variantWarning?: MrbTagVariantTheme
  variantSecondary?: MrbTagVariantTheme
  variantDanger?: MrbTagVariantTheme
}

export interface MrbTagVariantTheme {
  background?: string
  color?: string
  border?: string
}
