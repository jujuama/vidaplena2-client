'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbNavbar.Logo
 * @description A navigation bar tab component to navigate through the application.
 * @prop {ReactNode} children - The link's content to be displayed.
 * @prop {string} to - The relative path to navigate to.
 */
interface Props extends PropsHTML {
  children: ReactNode
  to: string
  urlLogo?: string
}

const { Wrapper, Content, Logo } = Styled

export const MrbNavbarLogo: MrbComponent<Props, typeof Styled> = ({
  children,
  to,
  urlLogo,
  ...props
}) => {
  return (
    <Wrapper {...props} href={to}>
      {!urlLogo && <Content>{children}</Content>}
      {urlLogo && <Logo src={urlLogo} alt="Website logo" />}
    </Wrapper>
  )
}

MrbNavbarLogo.Styled = Styled
