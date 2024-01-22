'use client'

import { MrbComponent } from '../../../helpers/common'
import { MrbListItem } from '../MrbListItem'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbList
 * @example example.txt
 * @description A list component to display items vertically
 * @prop {MrbList.Item[]} children - Array of MrbList.Item components
 * @prop {boolean} divider - Show or hide the divider between items
 * @prop {'small' | 'medium' | 'large'} size - Determines the density of the list

 */

interface Props extends PropsHTML {
  children: React.ReactNode
  divider?: boolean
  size?: 'small' | 'medium' | 'large'
  noPadding?: boolean
}

const { Wrapper } = Styled

export const MrbList: MrbComponent<Props, typeof Styled> & {
  Item: typeof MrbListItem
} = ({
  children,
  size = 'medium',
  divider = true,
  noPadding = false,
  ...props
}) => {
  return (
    <Wrapper {...props} $divider={divider} $size={size} $noPadding={noPadding}>
      {children}
    </Wrapper>
  )
}

MrbList.Item = MrbListItem
MrbList.Styled = Styled
