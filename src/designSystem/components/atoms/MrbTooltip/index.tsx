'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { Placement, PropsHTML, Styled } from './styled'

/**
 * @component MrbTooltip
 * @example example.txt
 * @description A tooltip component
 * @prop {string} content - The content of the tooltip @required
 * @prop {ReactNode} children - The content of the trigger of the tooltip @required
 * @prop {'top' | 'bottom' | 'left' | 'right'} placement - The position of the tooltip
 */
interface Props extends PropsHTML {
  children: ReactNode
  content: string
  placement?: Placement
}

const { Wrapper, Target, Content } = Styled

export const MrbTooltip: MrbComponent<Props, typeof Styled> = ({
  children,
  placement = 'top',
  content,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Target>
        {children}
        <Content $placement={placement}>{content}</Content>
      </Target>
    </Wrapper>
  )
}

MrbTooltip.Styled = Styled
