export interface MrbThemeBadge {
  variantDefault?: MrbBadgeVariantTheme
  variantPrimary?: MrbBadgeVariantTheme
  variantSuccess?: MrbBadgeVariantTheme
  variantWarning?: MrbBadgeVariantTheme
  variantSecondary?: MrbBadgeVariantTheme
  variantDanger?: MrbBadgeVariantTheme
}

export interface MrbBadgeVariantTheme {
  background?: string
  color?: string
  border?: string
}
