import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeLink = Theme.components?.navbarLink

interface PropsStyle {}

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div<PropsStyle>`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: ${Theme.borderRadius};
  padding: ${Theme.space_1} ${Theme.space_2} ${Theme.space_1} ${Theme.space_2};

  color: ${ThemeLink?.color};
  background: ${ThemeLink?.background};
  border: ${ThemeLink?.border};

  &:hover {
    color: ${ThemeLink?.hover?.color};
    background: ${ThemeLink?.hover?.background};
    border: ${ThemeLink?.hover?.border};
    text-decoration: none;
  }
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
