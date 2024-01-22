import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

type PropsStyle = {
  $isClickable: boolean
}

const ThemeListitem = Theme.components?.list?.item

const getClickable = ({ $isClickable }: PropsStyle): string => {
  if ($isClickable) {
    return `
      cursor: pointer;

      &:hover {
        background: ${ThemeListitem?.hover?.background};
      }
    `
  } else {
    return ``
  }
}

const Wrapper = styled.div<PropsStyle>`
  width: 100%;
  display: flex;

  ${getClickable}
`

export const Styled = {
  Wrapper,
}
