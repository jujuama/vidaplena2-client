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
 * @component MrbCard.Footer
 * @description Wraps the footer content of the card. Useful for additional details, actions, or secondary information.
 * @prop {React.ReactNode} children - The content of the footer
 */

interface Props extends PropsHTML {
  children: ReactNode
}

export const MrbCardFooter: MrbComponent<Props, typeof Styled> = ({
  children,
  ...props
}) => <Wrapper {...props}>{children}</Wrapper>

MrbCardFooter.Styled = Styled
