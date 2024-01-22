import NavLink from 'next/link'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'
export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

type PropsStyle = {
  $isActive?: boolean
}

const getActive = ({ $isActive }: PropsStyle): string => {
  if ($isActive) {
    return `
      font-weight: ${ThemeTabsItem?.active?.fontWeight ?? 'normal'};
      background: ${ThemeTabsItem?.active?.background ?? 'transparent'};
      color: ${ThemeTabsItem?.active?.color ?? 'inherit'};

      &:hover {
        font-weight: ${ThemeTabsItem?.active?.fontWeight ?? 'normal'};
        background: ${ThemeTabsItem?.active?.background ?? 'transparent'};
        color: ${ThemeTabsItem?.active?.color ?? 'inherit'};
      }
    `
  } else {
    return `
    `
  }
}

const getMainCss = ({ $isActive }: PropsStyle): string => {
  return `
  text-decoration: none;
  cursor: pointer;
  border-radius: ${Theme.borderRadius};
  background: ${ThemeTabsItem?.background ?? 'transparent'};
  font-weight: ${ThemeTabsItem?.fontWeight ?? 'normal'};
  padding: ${ThemeTabsItem?.padding ?? '0'};
  color: ${ThemeTabsItem?.color ?? 'inherit'};
  &:hover {
    font-weight: ${ThemeTabsItem?.hover?.fontWeight ?? 'normal'};
    background: ${ThemeTabsItem?.hover?.background ?? 'transparent'};
    color: ${ThemeTabsItem?.hover?.color ?? 'inherit'};
  }

  ${getActive({ $isActive })}
`
}

const ThemeTabsItem = Theme.components?.tabs?.item

const Wrapper = styled.div<PropsStyle>`
  ${getMainCss}
`

const WrapperLink = styled(NavLink)<PropsStyle>`
  ${getMainCss}
`

export const Styled = {
  Wrapper,
  WrapperLink,
}
