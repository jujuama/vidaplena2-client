'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled, Variant } from './styled'

/**
 * @component MrbTag
 * @example example.txt
 * @description Tags are used to highlight an item's status for quick recognition.
 * @prop {ReactNode} children - The content of the Tag @required
 * @prop {'default' | 'primary' | 'success' | 'warning' | 'danger' | 'secondary'} variant - The variant of the tag
 */
interface Props extends PropsHTML {
  children: ReactNode
  variant?: Variant
}

const { Wrapper } = Styled

export const MrbTag: MrbComponent<Props, typeof Styled> = ({
  children,
  variant = 'default',
  onClick,
  ...props
}) => {
  const isClickable = !!onClick

  const handleClick = event => {
    if (isClickable) {
      onClick(event)
    }
  }
  return (
    <Wrapper
      {...props}
      $variant={variant}
      onClick={handleClick}
      $isClickable={isClickable}
    >
      {children}
    </Wrapper>
  )
}

MrbTag.Styled = Styled
