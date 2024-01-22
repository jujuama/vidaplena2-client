import NavLink from 'next/link'
import { ComponentProps } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'
import { MrbLinkV2VariantTheme } from './theme'

const ThemeLink = Theme.components.link

export interface PropsHTML
  extends Omit<ComponentProps<typeof NavLink>, 'href'> {}

export type Variant = 'default' | 'primary'

interface PropsStyle {
  $variant: Variant
}

/* -------------------------------- VARIANTS -------------------------------- */

const getVariant = ({ $variant }: PropsStyle): string => {
  switch ($variant) {
    default:
      return getVariantStyle(ThemeLink?.variantDefault)
    case 'primary':
      return getVariantStyle(ThemeLink?.variantPrimary)
  }
}

const getVariantStyle = (variant: MrbLinkV2VariantTheme): string => {
  return `
    color: ${variant?.color};
    text-decoration-color: ${variant?.borderColor};
    font-size: inherit;
    text-underline-offset: 5px;
    &:hover {
      color: ${variant?.hover?.color};
      text-decoration-color: ${variant?.hover?.borderColor};
    }
  `
}

/* --------------------------------- WRAPPER -------------------------------- */

const Wrapper = styled(NavLink)<PropsStyle>`
  ${getVariant}
`

export const Styled = { Wrapper }
