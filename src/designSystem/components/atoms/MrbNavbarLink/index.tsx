'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { LinkHelper } from '../../../helpers/link'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbNavbar.Link
 * @description A navigation bar tab component to navigate through the application.
 * @prop {ReactNode} children - The link's content to be displayed.
 * @prop {string} to - The relative path to navigate to.
 */
interface Props extends PropsHTML {
  children: ReactNode
  to: string
  newWindow?: boolean
}

const { Wrapper, Content } = Styled

export const MrbNavbarLink: MrbComponent<Props> = ({
  children,
  to,
  newWindow = false,
  ...props
}) => {
  const { isActive } = LinkHelper.usePathActive(to)
  const target = newWindow ? '_blank' : undefined
  return (
    <Wrapper {...props} href={to} target={target} $isActive={isActive}>
      <Content>{children}</Content>
    </Wrapper>
  )
}

MrbNavbarLink.Styled = Styled
