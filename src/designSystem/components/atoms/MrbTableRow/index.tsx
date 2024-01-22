import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { Utility } from '../../../helpers/utility'
import { PropsHTML, Styled, Wrapper } from './styled'

/**
 * @component MrbTable.Row
 * @description A table row component
 * @prop {ReactNode} children - The content of the table row
 */

interface Props extends PropsHTML {
  children: ReactNode
}

export const MrbTableRow: MrbComponent<Props, typeof Styled> = ({
  children,
  onClick,
  ...props
}) => {
  const isClickable = Utility.isDefined(onClick)

  return (
    <Wrapper {...props} $isClickable={isClickable} onClick={onClick}>
      {children}
    </Wrapper>
  )
}

MrbTableRow.Styled = Styled
