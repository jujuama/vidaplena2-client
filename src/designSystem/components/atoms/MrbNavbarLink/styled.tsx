import NavLink from 'next/link'
import { ComponentProps } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeLink = Theme.components?.navbarLink

interface PropsStyle {
  $isActive: boolean
}

export interface PropsHTML
  extends Omit<ComponentProps<typeof NavLink>, 'href'> {}

const getBorderBottom = (value: string) => {
  if (!value) {
    return ``
  }

  return `
    border-bottom: ${value};
  `
}

const getActive = ({ $isActive }: PropsStyle) => {
  if ($isActive) {
    return `
      font-weight: 500;
      color: ${ThemeLink?.active?.color};
      background: ${ThemeLink?.active?.background};
      border: ${ThemeLink?.active?.border};
      ${getBorderBottom(ThemeLink?.active?.borderBottom)}
    `
  }
}

const Wrapper = styled(NavLink)<PropsStyle>`
  display: inline-block;
  text-decoration: none;
  border-radius: ${Theme.borderRadius};
  padding: ${Theme.space_1} ${Theme.space_2} ${Theme.space_1} ${Theme.space_2};

  color: ${ThemeLink?.color};
  background: ${ThemeLink?.background};
  border: ${ThemeLink?.border};
  ${getBorderBottom(ThemeLink?.borderBottom)}

  &:hover {
    color: ${ThemeLink?.hover?.color};
    background: ${ThemeLink?.hover?.background};
    border: ${ThemeLink?.hover?.border};
    text-decoration: none;
    ${getBorderBottom(ThemeLink?.hover?.borderBottom)}
  }

  ${getActive}
`

const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: ${ThemeLink.fontSize || 'inherit'};
  > img {
    max-height: 30px;
  }
`

export const Styled = { Wrapper, Content }
