'use client'

import { HTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'
import { MrbComponent } from '../../../helpers/common'
import { MrbDescriptionLabel } from '../MrbDescriptionLabel'
import { MrbDescriptionValue } from '../MrbDescriptionValue'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

/**
 * @component MrbDescription
 * @example example.txt
 * @description A description component for displaying a label and a value. This is a great component to use for displaying data.
 * @prop {ReactNode} children - Wrap the all the describe label/value pairs subcomponents
 * @subcomponent MrbDescription.Label
 * @subcomponent MrbDescription.Value
 */

interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

interface Props extends PropsHTML {
  children: ReactNode
}

const Styled = { Wrapper }

export const MrbDescription: MrbComponent<Props, typeof Styled> & {
  Label: typeof MrbDescriptionLabel
  Value: typeof MrbDescriptionValue
} = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

MrbDescription.Value = MrbDescriptionValue
MrbDescription.Label = MrbDescriptionLabel
MrbDescription.Styled = Styled
