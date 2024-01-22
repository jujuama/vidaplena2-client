import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeCard = Theme.components.card

export type Size = 'small' | 'medium' | 'large' | 'full-width'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div<{
  $size: Size
  $isClickable: boolean
}>`
  display: flex;
  flex-direction: column;
  gap: ${Theme.space_3};
  padding: ${Theme.space_3} ${Theme.space_3} ${Theme.space_3} ${Theme.space_3};
  color: ${Theme.textPrimary};
  background: ${ThemeCard.background};
  border-radius: ${Theme.borderRadius};
  border: ${ThemeCard.border};
  box-shadow: ${ThemeCard.boxShadow};

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `width: 200px;`
      case 'medium':
        return `width: 348px;`
      case 'large':
        return `width: 500px;`
      default:
        return `width: 100%;`
    }
  }}

  ${({ $isClickable }) =>
    $isClickable &&
    `
      cursor: pointer;
      
      &:hover {
        background: ${ThemeCard.hover?.background ?? ThemeCard.background};
      }
    `}
`

export const Styled = {
  Wrapper,
}
