import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

interface PropsStyle {}

const Wrapper = styled.div``

export const Styled = {
  Wrapper,
}
