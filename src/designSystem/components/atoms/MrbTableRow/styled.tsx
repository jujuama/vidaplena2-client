import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeTable = Theme.components.table

export interface PropsHTML extends HTMLAttributes<HTMLTableRowElement> {}

interface PropsStyle {
  $isClickable: boolean
}

const getClickable = ({ $isClickable }: PropsStyle) => {
  if ($isClickable) {
    return `
      cursor: pointer;

      &:hover {
        background: ${ThemeTable?.hover?.background};
        color: ${ThemeTable?.hover?.color};
        border: ${ThemeTable?.hover?.border};
      }
    `
  }

  return ``
}

export const Wrapper = styled.tr<PropsStyle>`
  ${getClickable}
`

export const Styled = { Wrapper }
