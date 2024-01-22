import { HTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'
import { MrbComponent } from '../../../helpers/common'

const Wrapper = styled.tr``

const Styled = { Wrapper }

/**
 * @component MrbTable.HeadRow
 * @description A table head row component
 * @prop {ReactNode} children - The content of the table head row
 */

interface PropsHTML extends HTMLAttributes<HTMLTableRowElement> {}

interface Props extends PropsHTML {
  children: ReactNode
}

export const MrbTableHeadRow: MrbComponent<Props, typeof Styled> = ({
  children,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

MrbTableHeadRow.Styled = Styled
