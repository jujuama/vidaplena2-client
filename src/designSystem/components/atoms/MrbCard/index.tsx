'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { MrbCardBody } from '../MrbCardBody'
import { MrbCardFooter } from '../MrbCardFooter'
import { MrbCardHeader } from '../MrbCardHeader'
import { PropsHTML, Size, Styled } from './styled'

/**
 * @component MrbCard
 * @example example.txt
 * @description Simple rectangular container. A card can be used to display content related to a single subject.
 * @prop {ReactNode} children - The content of the card
 * @prop {'small' | 'medium' | 'large' | 'full-width'} size - The size of the card, default full-width
 * @prop {() => void} onClick - The function to execute when the card is clicked.
 * @subcomponent MrbCard.Header
 * @subcomponent MrbCard.Body
 * @subcomponent MrbCard.Footer
 */

interface Props extends PropsHTML {
  children: ReactNode
  size?: Size
}

const { Wrapper } = Styled

export const MrbCard: MrbComponent<Props, typeof Styled> & {
  Header: typeof MrbCardHeader
  Body: typeof MrbCardBody
  Footer: typeof MrbCardFooter
} = ({ children, size = 'full-width', onClick, ...props }) => {
  const isClickable = !!onClick

  const handleClick = event => {
    if (isClickable) {
      onClick(event)
    }
  }

  return (
    <Wrapper
      {...props}
      onClick={handleClick}
      $isClickable={isClickable}
      $size={size}
    >
      {children}
    </Wrapper>
  )
}

MrbCard.Styled = Styled
MrbCard.Header = MrbCardHeader
MrbCard.Body = MrbCardBody
MrbCard.Footer = MrbCardFooter
