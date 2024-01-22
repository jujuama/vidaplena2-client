import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'
import { MrbButtonVariantTheme } from './theme'

const ThemeButton = Theme.components.button

export type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'plain'

export type Size = 'small' | 'medium' | 'large'

export interface PropsHTML extends ButtonHTMLAttributes<HTMLButtonElement> {}

interface PropsStyle {
  $variant: Variant
  $size: Size
  $noPadding: boolean
  $isLoading: boolean
  $fullWidth: boolean
}

const Content = styled.div`
  position: relative;
`

const Loader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center:
`

const Children = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${Theme.space_1};
  line-height: ${Theme.textSize_md};
`
/* -------------------------------- VARIANTS -------------------------------- */
const getVariant = ({ $variant }: PropsStyle): string => {
  switch ($variant) {
    default:
      return getVariantStyle(ThemeButton.variantDefault)
    case 'primary':
      return getVariantStyle(ThemeButton.variantPrimary)
    case 'secondary':
      return getVariantStyle(ThemeButton.variantSecondary)
    case 'success':
      return getVariantStyle(ThemeButton.variantSuccess)
    case 'danger':
      return getVariantStyle(ThemeButton.variantDanger)
    case 'warning':
      return getVariantStyle(ThemeButton.variantWarning)
    case 'plain':
      return getVariantStyle(ThemeButton.variantPlain)
  }
}

const getVariantStyle = (variant: MrbButtonVariantTheme): string => {
  if (!variant) {
    return ''
  }
  return `
  background: ${variant.background};
  color: ${variant.color};
  border: ${variant.border};
  box-shadow: ${variant.boxShadow};
  &:hover {
    background: ${variant.hover?.background};
    color: ${variant.hover?.color};
    border: ${variant.hover?.border};
  }

  &:active {
    background: ${variant.active?.background};
    color: ${variant.active?.color};
    border: ${variant.active?.border};
  }
`
}

/* ---------------------------- CONDITIONAL PROPS --------------------------- */
const getPadding = ({ $noPadding }: PropsStyle) => {
  if ($noPadding) {
    return `padding: 0;`
  }
}

const getLoading = ({ $isLoading }: PropsStyle) => {
  if ($isLoading) {
    return `
    & ${Children} {
      opacity: 0;
    }
  `
  }
}

const getFullWidth = ({ $fullWidth }: PropsStyle) => {
  if ($fullWidth) {
    return `width: 100%;`
  }
}

const getSize = ({ $size }: PropsStyle) => {
  switch ($size) {
    default:
      return `padding: ${Theme.space_1} ${Theme.space_3} ${Theme.space_1} ${Theme.space_3};`
    case 'small':
      return `padding: 0.25rem ${Theme.space_2} 0.25rem ${Theme.space_2};`
    case 'large':
      return `padding: ${Theme.space_2} ${Theme.space_4} ${Theme.space_2} ${Theme.space_4};`
  }
}

const getFontSize = ({ $size }: PropsStyle) => {
  switch ($size) {
    default:
      return `& ${Children}{ font-size: ${Theme.textSize_md}; }`
    case 'small':
      return `& ${Children}{ font-size: ${Theme.textSize_sm};}`
    case 'large':
      return `& ${Children}{ font-size: ${Theme.textSize_lg};}`
  }
}
/* --------------------------------- WRAPPER -------------------------------- */
const Button = styled.button<PropsStyle>`
  border-radius: ${Theme.borderRadius};

  cursor: pointer;

  border: none;

  ${getFullWidth}
  ${getLoading}
  ${getVariant}
  ${getFontSize}
  ${getSize}
  ${getPadding}
  &:disabled {
    cursor: not-allowed;
    ${getVariantStyle(ThemeButton.variantDisabled)}

    $:hover {
      ${getVariantStyle(ThemeButton.variantDisabled)}
    }

    $:active {
      ${getVariantStyle(ThemeButton.variantDisabled)}
    }
  }
`

export const Styled = {
  Button,
  Content,
  Loader,
  Children,
}
