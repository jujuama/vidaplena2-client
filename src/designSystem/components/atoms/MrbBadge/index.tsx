'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled, Variant } from './styled'

/**
 * @component MrbBadge
 * @example example.txt
 * @description The Badge component is a visual indicator for numeric values such as tallies and scores.
 * @prop {ReactNode} children - The content of the Tag @required
 * @prop {'default' | 'primary' | 'success' | 'warning' | 'danger' | 'secondary'} variant - The variant of the badge
 */
interface Props extends PropsHTML {
  content?: ReactNode
  variant?: Variant
}

const { Wrapper, Badge } = Styled

export const MrbBadge: MrbComponent<Props, typeof Styled> = ({
  children,
  content,
  variant = 'default',
  ...props
}) => {
  const isBadgeHidden = typeof content === 'number' && content === 0

  return (
    <Wrapper {...props} $variant={variant}>
      {!isBadgeHidden && <Badge>{content}</Badge>}
      {children}
    </Wrapper>
  )
}

MrbBadge.Styled = Styled
