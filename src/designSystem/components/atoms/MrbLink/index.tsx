'use client'

import React from 'react'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled, Variant } from './styled'

/**
 * @component MrbLink
 * @description A link component
 * @example example.txt
 * @prop {React.ReactNode} children - The content of the link @required
 * @prop {string} to - Url to redirect on click @required
 * @prop {boolean} newWindow - If true, opens the link in a new window
 * @prop {'default' | 'primary'} variant - The style of link
 */

interface Props extends PropsHTML {
  children: React.ReactNode
  to: string
  newWindow?: boolean
  variant?: Variant
}

const { Wrapper } = Styled

export const MrbLink: MrbComponent<Props, typeof Styled> = ({
  children,
  to,
  newWindow = false,
  variant = 'default',
  ...props
}) => {
  const target = newWindow ? '_blank' : undefined

  return (
    <Wrapper {...props} href={to} target={target} $variant={variant}>
      {children}
    </Wrapper>
  )
}

MrbLink.Styled = Styled
