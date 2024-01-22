'use client'

import { MrbComponent } from '../../../helpers/common'
import { MrbTabsItem } from '../MrbTabsItem'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbTabs
 * @description A list component to display tabs
 * @prop {MrbTabs.Item[]} children - Array of MrbTabs.Item components

 */

interface Props extends PropsHTML {
  children: React.ReactNode
  orientation?: 'horizontal' | 'vertical'
}

const { Wrapper } = Styled

export const MrbTabs: MrbComponent<Props, typeof Styled> & {
  Item: typeof MrbTabsItem
} = ({ children, orientation = 'horizontal', ...props }) => {
  return (
    <Wrapper {...props} $orientation={orientation}>
      {children}
    </Wrapper>
  )
}

MrbTabs.Item = MrbTabsItem
MrbTabs.Styled = Styled
