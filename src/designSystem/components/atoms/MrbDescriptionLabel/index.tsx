'use client'

import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import { MrbComponent } from '../../../helpers/common'
import { Theme } from '../../../theme'

const ThemeLabel = Theme.components?.description?.label

const Wrapper = styled.div`
  color: ${ThemeLabel?.color};
  font-size: ${ThemeLabel?.fontSize};
  text-transform: ${ThemeLabel?.textTransform};
  font-weight: ${ThemeLabel?.fontWeight};
  text-overflow: ellipsis;
`

/**
 * @component MrbDescription.Label
 * @description Wraps the label defining the item
 * @prop {ReactNode} children - The label
 */

interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

interface Props extends PropsHTML {
  children: ReactNode
}

const Styled = { Wrapper }

export const MrbDescriptionLabel: MrbComponent<Props, typeof Styled> = ({
  children,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

MrbDescriptionLabel.Styled = Styled
