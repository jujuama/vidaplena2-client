'use client'

import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import { MrbComponent } from '../../../helpers/common'
import { Theme } from '../../../theme'

const ThemeValue = Theme.components?.description?.value

const Wrapper = styled.div`
  color: ${ThemeValue?.color};
  font-size: ${ThemeValue?.fontSize};
  text-transform: ${ThemeValue?.textTransform};
  font-weight: ${ThemeValue?.fontWeight};
  text-overflow: ellipsis;
  padding-top: 4px;
`

/**
 * @component MrbDescription.Value
 * @description Wraps the value content of the item
 * @prop {ReactNode} children - The value of the item
 */

interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

interface Props extends PropsHTML {
  children: ReactNode
}

const Styled = { Wrapper }

export const MrbDescriptionValue: MrbComponent<Props, typeof Styled> = ({
  children,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

MrbDescriptionValue.Styled = Styled
