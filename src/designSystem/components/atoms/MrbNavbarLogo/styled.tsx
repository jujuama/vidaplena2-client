import NavLink from 'next/link'
import { ComponentProps } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

export interface PropsHTML
  extends Omit<ComponentProps<typeof NavLink>, 'href'> {}

const ThemeNavbarLogo = Theme.components?.navbarLogo

const getBorderRadius = () => {
  const borderRadius = ThemeNavbarLogo?.borderRadius ?? Theme.borderRadius

  if (borderRadius) {
    return `border-radius: ${borderRadius};`
  }

  return ``
}

const Logo = styled.img`
  height: 50px;
  width: auto;
`

const Content = styled.div`
  background: ${ThemeNavbarLogo?.background};
  color: ${ThemeNavbarLogo?.color};
  box-shadow: 2px 2px 10px ${ThemeNavbarLogo?.shadowColor};
  min-width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Leckerli One', cursive;
  padding-left: ${Theme.space_1};
  padding-right: ${Theme.space_1};
  font-size: 2em;
  ${getBorderRadius()}
`

const Wrapper = styled(NavLink)`
  display: inline-block;
  text-decoration: none;

  &:hover ${Logo}, &:hover ${Content} {
    filter: brightness(1.1);
  }
`

export const Styled = {
  Wrapper,
  Content,
  Logo,
}
