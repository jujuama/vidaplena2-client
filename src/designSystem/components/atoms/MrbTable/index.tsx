'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { MrbTableBody } from '../MrbTableBody'
import { MrbTableColumn } from '../MrbTableColumn'
import { MrbTableHead } from '../MrbTableHead'
import { MrbTableHeadColumn } from '../MrbTableHeadColumn'
import { MrbTableHeadRow } from '../MrbTableHeadRow'
import { MrbTableRow } from '../MrbTableRow'
import { PropsHTML, Styled, Variant } from './styled'

/**
 * @component MrbTable
 * @example example.txt
 * @description A table component
 * @prop {ReactNode} children - The content of the table
 * @subcomponent MrbTable.Head
 * @subcomponent MrbTable.HeadRow
 * @subcomponent MrbTable.HeadColumn
 * @subcomponent MrbTable.Body
 * @subcomponent MrbTable.Column
 * @subcomponent MrbTable.Row
 */

interface Props extends PropsHTML {
  children: ReactNode
  variant?: Variant
  isHover?: boolean
}

type Components = {
  Head: typeof MrbTableHead
  HeadRow: typeof MrbTableHeadRow
  HeadColumn: typeof MrbTableHeadColumn
  Body: typeof MrbTableBody
  Row: typeof MrbTableRow
  Column: typeof MrbTableColumn
}

const { Wrapper } = Styled

export const MrbTable: MrbComponent<Props, typeof Styled> & Components = ({
  children,
  variant = 'shadow',
  isHover = false,
  ...props
}) => {
  return (
    <Wrapper {...props} $variant={variant} $isHover={isHover}>
      {children}
    </Wrapper>
  )
}

MrbTable.Head = MrbTableHead
MrbTable.HeadRow = MrbTableHeadRow
MrbTable.HeadColumn = MrbTableHeadColumn
MrbTable.Body = MrbTableBody
MrbTable.Row = MrbTableRow
MrbTable.Column = MrbTableColumn
MrbTable.Styled = Styled
