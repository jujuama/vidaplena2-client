import { HTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'
import { MrbComponent } from '../../../helpers/common'
import { Theme } from '../../../theme'

const ThemeTable = Theme.components?.table

const Wrapper = styled.td`
  padding: ${Theme.space_1};
  border: ${ThemeTable?.body?.border};
  color: ${ThemeTable?.body?.color};
  height: 40px;
`

const Styled = { Wrapper }

/**
 * @component MrbTable.Column
 * @description A table data cell component
 * @prop {ReactNode} children - The content of the table data cell
 */

interface PropsHTML extends HTMLAttributes<HTMLTableCellElement> {}

interface Props extends PropsHTML {
  children: ReactNode
}

export const MrbTableColumn: MrbComponent<Props, typeof Styled> = ({
  ...props
}) => {
  const { children } = props

  return <Wrapper {...props}>{children}</Wrapper>
}

MrbTableColumn.Styled = Styled
