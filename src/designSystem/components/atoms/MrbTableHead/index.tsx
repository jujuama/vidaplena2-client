import { HTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'
import { MrbComponent } from '../../../helpers/common'
import { Theme } from '../../../theme'

const ThemeTable = Theme.components?.table

const Wrapper = styled.thead`
  background: ${Theme.components?.table?.head?.background};
`

const Styled = { Wrapper }

/**
 * @component MrbTable.Head
 * @description A table head component
 * @prop {ReactNode} children - The content of the table head
 */

interface PropsHTML extends HTMLAttributes<HTMLTableSectionElement> {}

interface Props extends PropsHTML {
  children: ReactNode
}

export const MrbTableHead: MrbComponent<Props, typeof Styled> = ({
  children,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

MrbTableHead.Styled = Styled
