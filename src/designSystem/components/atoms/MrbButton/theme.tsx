export interface MrbButtonTheme {
  fontWeight?: string

  variantDefault: MrbButtonVariantTheme
  variantPrimary: MrbButtonVariantTheme
  variantSecondary: MrbButtonVariantTheme
  variantSuccess: MrbButtonVariantTheme
  variantDanger: MrbButtonVariantTheme
  variantWarning: MrbButtonVariantTheme
  variantDisabled: MrbButtonVariantTheme
  variantPlain?: MrbButtonVariantTheme
}

export interface MrbButtonVariantTheme {
  color: string
  background: string
  border: string
  boxShadow?: string
  hover?: {
    color?: string
    background?: string
    border?: string
  }

  active?: {
    color?: string
    background?: string
    border?: string
  }
}
