'use client'

import { HTMLAttributes } from 'react'
import { styled } from 'styled-components'
import { MrbComponent } from '../../../helpers/common'
import { Theme } from '../../../theme'

type Direction = 'horizontal' | 'vertical'

const ThemeDivider = Theme.components.divider

const Wrapper = styled.span<{
  $direction: Direction
}>`
  border-top: 1px solid ${ThemeDivider?.color};
  height: 1px;
  display: block;
  ${({ $direction }) =>
    $direction === 'vertical' && `transform: rotate(90deg);`}
  ${({ $direction }) => $direction === 'horizontal' && `  width: 100%;`}
`
/**
 * @component MrbDivider
 * @example example.txt
 * @description A component to separate content vertically or horizontally.
 * @prop {'vertical' | 'horizontal'} direction - The direction of the divider.
 */

interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

interface Props extends PropsHTML {
  direction?: Direction
}

const Styled = { Wrapper }

export const MrbDivider: MrbComponent<Props, typeof Styled> = ({
  direction = 'horizontal',
  ...props
}) => {
  return <Wrapper {...props} $direction={direction} />
}

MrbDivider.Styled = Styled
