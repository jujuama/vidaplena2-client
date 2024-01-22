'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { Horizontal, PropsHTML, Styled, Variant } from './styled'

/**
 * @component MrbTypography
 * @example example.txt
 * @description A typography component.
 * @prop {'h1' | 'h2' | 'h3' | 'primary' | 'secondary' | 'caption'} variant - The style of the text.
 */

const {
  WrapperH1,
  WrapperH2,
  WrapperH3,
  WrapperPrimary,
  WrapperSecondary,
  WrapperCaption,
  WrapperDanger,
} = Styled

interface Props extends PropsHTML {
  children: ReactNode
  horizontal?: Horizontal
  variant?: Variant
  lines?: number
}

export const MrbTypography: MrbComponent<Props, typeof Styled> = ({
  variant = 'primary',
  horizontal = 'left',
  children,
  lines,
  ...props
}: Props) => {
  switch (variant) {
    case 'h1':
      return (
        <WrapperH1 $horizontal={horizontal} $lines={lines} {...props}>
          {children}
        </WrapperH1>
      )
    case 'h2':
      return (
        <WrapperH2 $horizontal={horizontal} $lines={lines} {...props}>
          {children}
        </WrapperH2>
      )
    case 'h3':
      return (
        <WrapperH3 $horizontal={horizontal} $lines={lines} {...props}>
          {children}
        </WrapperH3>
      )
    case 'secondary':
      return (
        <WrapperSecondary $horizontal={horizontal} $lines={lines} {...props}>
          {children}
        </WrapperSecondary>
      )
    case 'caption':
      return (
        <WrapperCaption $horizontal={horizontal} $lines={lines} {...props}>
          {children}
        </WrapperCaption>
      )
    case 'danger':
      return (
        <WrapperDanger $horizontal={horizontal} $lines={lines} {...props}>
          {children}
        </WrapperDanger>
      )
    default:
      return (
        <WrapperPrimary $horizontal={horizontal} $lines={lines} {...props}>
          {children}
        </WrapperPrimary>
      )
  }
}

MrbTypography.Styled = Styled
