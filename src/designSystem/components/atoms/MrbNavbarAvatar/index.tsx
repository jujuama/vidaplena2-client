'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbNavbar.Avatar
 * @description A navigation bar avatar.
 * @prop {ReactNode} children - The avatar to be displayed.
 * @prop {string} to - The relative path to navigate to.
 */
interface Props extends PropsHTML {
  children: ReactNode
  to: string
}

const { Wrapper } = Styled

export const MrbNavbarAvatar: MrbComponent<Props, typeof Styled> = ({
  children,
  to,
}) => {
  return <Wrapper href={to}>{children}</Wrapper>
}

MrbNavbarAvatar.Styled = Styled
