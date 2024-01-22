import { HTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'
import { MrbComponent } from '../../../helpers/common'
import { Theme } from '../../../theme'

const ThemeTable = Theme.components?.table

const Wrapper = styled.th`
  text-align: left;
  padding: ${Theme.space_1};
  font-size: ${ThemeTable?.head?.fontSize};
  font-weight: ${ThemeTable?.head?.fontWeight};
  text-transform: ${ThemeTable?.head?.textTransform};
  color: ${ThemeTable?.head?.color};
  border: 0px;
  height: 40px;
  border-bottom: ${ThemeTable?.head?.borderBottom};
  font-weight: ${ThemeTable?.head?.fontWeight};
`

const Styled = { Wrapper }

/**
 * @component MrbTable.HeadColumn
 * @description A table header cell component
 * @prop {ReactNode} children - The content of the table header cell
 */

interface PropsHTML extends HTMLAttributes<HTMLTableCellElement> {}

interface Props extends PropsHTML {
  children: ReactNode
}

export const MrbTableHeadColumn: MrbComponent<Props, typeof Styled> = ({
  children,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

MrbTableHeadColumn.Styled = Styled
