import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'
import { MrbTagVariantTheme } from './theme'

const ThemeTag = Theme.components.tag

export type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'

interface PropsStyle {
  $variant: Variant
  $isClickable: boolean
}

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

/* -------------------------------- VARIANTS -------------------------------- */
const getVariant = ({ $variant }: PropsStyle): string => {
  switch ($variant) {
    default:
      return getVariantStyle(ThemeTag?.variantDefault)
    case 'primary':
      return getVariantStyle(ThemeTag?.variantPrimary)
    case 'secondary':
      return getVariantStyle(ThemeTag?.variantSecondary)
    case 'success':
      return getVariantStyle(ThemeTag?.variantSuccess)
    case 'warning':
      return getVariantStyle(ThemeTag?.variantWarning)
    case 'danger':
      return getVariantStyle(ThemeTag?.variantDanger)
  }
}

const getVariantStyle = (variant: MrbTagVariantTheme): string => {
  return `
    background: ${variant?.background};
    color: ${variant?.color};
    border: ${variant?.border};
  `
}

/* --------------------------------- WRAPPER -------------------------------- */
const Wrapper = styled.div<PropsStyle>`
  border-radius: ${Theme.borderRadius};
  font-weight: 400;
  font-size: ${ThemeTag?.textSize ?? Theme.textSize_sm};
  line-height: ${ThemeTag?.textSize ?? Theme.textSize_sm};
  padding: ${ThemeTag?.padding ?? `0px ${Theme.space_1} 0px ${Theme.space_1}`};
  display: inline;
  ${getVariant}
  ${({ $isClickable }) => $isClickable && `cursor: pointer;`}
`

export const Styled = {
  Wrapper,
}
