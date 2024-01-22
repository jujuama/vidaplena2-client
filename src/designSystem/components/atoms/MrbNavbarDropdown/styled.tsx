import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeNavbarDropdown = Theme.components.navbarDropdown

export interface PropsHTML
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {}

const Content = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;

  top: 100%;
  min-width: 100%;
  background: ${ThemeNavbarDropdown?.background};
  border-radius: ${Theme.borderRadius};
  border: ${ThemeNavbarDropdown?.border};
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover ${Content} {
    display: flex;
  }
`

export const Styled = { Wrapper, Content }
