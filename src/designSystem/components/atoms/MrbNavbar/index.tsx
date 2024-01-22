'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { MrbNavbarAvatar } from '../MrbNavbarAvatar'
import { MrbNavbarDropdown } from '../MrbNavbarDropdown'
import { MrbNavbarItem } from '../MrbNavbarItem'
import { MrbNavbarLink } from '../MrbNavbarLink'
import { MrbNavbarLogo } from '../MrbNavbarLogo'
import { Direction, PropsHTML, Styled } from './styled'

/**
 * @component MrbNavbar
 * @description A navigation bar component for the top of the page.
 * @prop {ReactNode} children - The links to be displayed on the navbar.
 * @subcomponent MrbNavbar.Avatar
 * @subcomponent MrbNavbar.Dropdown
 * @subcomponent MrbNavbar.Link
 * @subcomponent MrbNavbar.Logo
 * @subcomponent MrbNavbar.Item
 */
interface Props extends PropsHTML {
  children?: ReactNode
  direction?: Direction
}

const { Wrapper, Content } = Styled

export const MrbNavbar: MrbComponent<Props, typeof Styled> & {
  Avatar: typeof MrbNavbarAvatar
  Dropdown: typeof MrbNavbarDropdown
  Link: typeof MrbNavbarLink
  Logo: typeof MrbNavbarLogo
  Item: typeof MrbNavbarItem
} = ({ children, direction = 'horizontal', ...props }) => {
  return (
    <Wrapper {...props} $direction={direction}>
      <Content>{children}</Content>
    </Wrapper>
  )
}

MrbNavbar.Styled = Styled
MrbNavbar.Avatar = MrbNavbarAvatar
MrbNavbar.Link = MrbNavbarLink
MrbNavbar.Dropdown = MrbNavbarDropdown
MrbNavbar.Logo = MrbNavbarLogo
MrbNavbar.Item = MrbNavbarItem
