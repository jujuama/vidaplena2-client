import NavLink from 'next/link'
import { ComponentProps } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'
import { MrbAvatar } from '../MrbAvatar'

export interface PropsHTML
  extends Omit<ComponentProps<typeof NavLink>, 'href'> {}

const Wrapper = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: ${Theme.space_1} ${Theme.space_2} ${Theme.space_1} ${Theme.space_2};

  &:hover ${MrbAvatar.Styled.Wrapper} {
    filter: brightness(1.1);
  }
`

export const Styled = { Wrapper }
