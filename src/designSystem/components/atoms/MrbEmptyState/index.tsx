'use client'

import { ReactNode } from 'react'
import { HelperCommon, MrbComponent } from '../../../helpers/common'
import { Styled } from './styled'

/**
 * @component MrbEmptyState
 * @example example.txt
 * @description An empty state components to be displayed if there is 0 items found
 * @prop {React.ReactNode} children - The content of the empty state
 */

interface Props extends HelperCommon.BaseProps {
  children: ReactNode
}

const { Wrapper } = Styled

export const MrbEmptyState: MrbComponent<Props, typeof Styled> = ({
  children,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

MrbEmptyState.Styled = Styled
