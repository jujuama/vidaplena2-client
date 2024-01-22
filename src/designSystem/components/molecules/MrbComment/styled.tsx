import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

type PropsStyle = {}

const getGrid = () => {
  return ``
}

const Wrapper = styled.div<PropsStyle>`
  ${getGrid}
`

export const Styled = {
  Wrapper,
}
