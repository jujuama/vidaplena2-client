import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'
import { MrbBadgeVariantTheme } from './theme'

const ThemeBadge = Theme.components.badge

export type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'

interface PropsStyle {
  $variant: Variant
}

export interface PropsHTML
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {}

/* -------------------------------- VARIANTS -------------------------------- */
const getVariant = ({ $variant }: PropsStyle): string => {
  switch ($variant) {
    default:
      return getVariantStyle(ThemeBadge?.variantDefault)
    case 'primary':
      return getVariantStyle(ThemeBadge?.variantPrimary)
    case 'secondary':
      return getVariantStyle(ThemeBadge?.variantSecondary)
    case 'success':
      return getVariantStyle(ThemeBadge?.variantSuccess)
    case 'warning':
      return getVariantStyle(ThemeBadge?.variantWarning)
    case 'danger':
      return getVariantStyle(ThemeBadge?.variantDanger)
  }
}

const getVariantStyle = (variant: MrbBadgeVariantTheme): string => {
  return `
    background: ${variant?.background};
    color: ${variant?.color};
    border: ${variant?.border};
  `
}

/* ---------------------------------- BADGE --------------------------------- */
const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  min-height: 20px;
  border-radius: 10px;
  font-size: ${Theme.textSize_xs};
  position: absolute;
  z-index: 1;
  left: calc(100% - 10px);
  bottom: calc(100% - 10px);
`

/* --------------------------------- WRAPPER -------------------------------- */
const Wrapper = styled.div<PropsStyle>`
  position: relative;
  display: inline-flex;

  & ${Badge} {
    ${getVariant}
  }
`

export const Styled = {
  Badge,
  Wrapper,
}
