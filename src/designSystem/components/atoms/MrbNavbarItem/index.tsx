'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbNavbar.Item
 * @description A navigation bar tab component to navigate through the application.
 * @prop {ReactNode} children - The link's content to be displayed.
 * @prop {string} to - The relative path to navigate to.
 */
interface Props extends PropsHTML {
  children: ReactNode
}

const { Wrapper, Content } = Styled

export const MrbNavbarItem: MrbComponent<Props> = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  )
}

MrbNavbarItem.Styled = Styled
