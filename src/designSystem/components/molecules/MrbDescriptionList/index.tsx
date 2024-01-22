'use client'

import { ReactNode } from 'react'
import { MrbDescription } from '../..'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbDescriptionList
 * @example example.txt
 * @description A description list component for listing MrbDescription components. This is a great component to use for displaying data.
 * @prop {ReactNode} children - Wrap the all the MrbDescription components.
 * @prop {'horizontal' | 'vertical'} orientation - The orientation of the description list
 * @prop {number} columns - If in horzontal orientation, the number of columns to display
 */

interface Props extends PropsHTML {
  children: ReactNode
  columns?: number
  orientation?: 'horizontal' | 'vertical'
}

const { Wrapper } = Styled

export const MrbDescriptionList: MrbComponent<Props, typeof Styled> & {
  Item: typeof MrbDescription
} = ({ children, columns = 3, orientation = 'horizontal', ...props }) => {
  return (
    <Wrapper {...props} $columns={columns} $orientation={orientation}>
      {children}
    </Wrapper>
  )
}

MrbDescriptionList.Styled = Styled
MrbDescriptionList.Item = MrbDescription
