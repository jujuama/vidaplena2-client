import { HTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'
import { MrbComponent } from '../../../helpers/common'

const Wrapper = styled.tbody``

const Styled = { Wrapper }

/**
 * @component MrbTable.Body
 * @description A table body component
 * @prop {ReactNode} children - The content of the table body
 */

interface PropsHTML extends HTMLAttributes<HTMLTableSectionElement> {}

interface Props extends PropsHTML {
  children: ReactNode
}

export const MrbTableBody: MrbComponent<Props, typeof Styled> = ({
  children,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

MrbTableBody.Styled = Styled
