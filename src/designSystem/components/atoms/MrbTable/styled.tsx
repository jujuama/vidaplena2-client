import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'
import { MrbTableRow } from '../MrbTableRow'

const ThemeTable = Theme.components.table

export interface PropsHTML extends HTMLAttributes<HTMLTableElement> {}

export type Variant = 'shadow' | 'inner'

const Wrapper = styled.table<{
  $variant: Variant
  $isHover: boolean
}>`
  display: table;
  border-collapse: collapse;
  width: 100%;
  border-radius: ${Theme.borderRadius};
  background: ${ThemeTable.background};
  border: ${ThemeTable?.border};
  border-spacing: ${ThemeTable?.borderSpacing};
  box-shadow: ${ThemeTable?.boxShadow};
  ${({ $isHover }) =>
    $isHover &&
    `
      & ${MrbTableRow.Styled.Wrapper}:hover {
        background: ${ThemeTable?.hover?.background};
        color: ${ThemeTable?.hover?.color};
        border: ${ThemeTable?.hover?.border};
      }
    `};
`

export const Styled = { Wrapper }
