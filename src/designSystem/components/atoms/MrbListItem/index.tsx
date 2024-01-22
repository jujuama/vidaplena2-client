'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbList.Item
 * @description A list item component for an MrbList component
 * @prop {ReactNode} children - The content of the list item
 * @prop {() => void} onClick - The function to execute when the list item is clicked
 */

interface Props extends PropsHTML {
  children: ReactNode
}

const { Wrapper } = Styled

export const MrbListItem: MrbComponent<Props, typeof Styled> = ({
  children,
  onClick,
  ...props
}) => {
  const isClickable = !!onClick

  return (
    <Wrapper {...props} onClick={onClick} $isClickable={isClickable}>
      {children}
    </Wrapper>
  )
}

MrbListItem.Styled = Styled
