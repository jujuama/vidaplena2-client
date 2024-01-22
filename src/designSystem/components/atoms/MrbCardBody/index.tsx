'use client'

import { MrbComponent } from '@/designSystem/helpers/common'
import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div``

const Styled = {
  Wrapper,
}

/**
 * @component MrbCard.Body
 * @description Wraps the main content of the card. This can contain any detailed information or content you want to present.
 * @prop {ReactNode} children - The content of the card
 */

interface Props extends PropsHTML {
  children: ReactNode
}

export const MrbCardBody: MrbComponent<Props, typeof Styled> = ({
  children,
  ...props
}) => {
  return <Wrapper {...props}> {children}</Wrapper>
}

MrbCardBody.Styled = Styled
