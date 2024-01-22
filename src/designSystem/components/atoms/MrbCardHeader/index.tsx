'use client'

import { HTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'
import { MrbComponent } from '../../../helpers/common'

interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div`
  position: relative;
`

const Styled = {
  Wrapper,
}

/**
 * @component MrbCard.Header
 * @description Wraps the header content of the card. Typically used for titles or primary information.
 * @prop {React.ReactNode} children - The content of the header
 */

interface Props extends PropsHTML {
  children: ReactNode
}

export const MrbCardHeader: MrbComponent<Props, typeof Styled> = ({
  children,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

MrbCardHeader.Styled = Styled
