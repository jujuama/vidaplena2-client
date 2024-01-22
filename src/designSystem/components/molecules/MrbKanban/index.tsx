'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { MrbDragAndDrop, MrbDroppedEvent } from '../../atoms'
import { MrbKanbanColumn } from '../MrbKanbanColumn'
import { MrbKanbanItem } from '../MrbKanbanItem'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbKanban
 * @description A Kanban board
 * @prop {ReactNode} children - Put the different MrbKanban.Column lanes inside the MrbKanban component @required
 * @prop {({droppedZone: {id: string, data: any },  draggedItem: { id: string, data: any }}) => void} onChange - The function is execute every time the user moves a MrbKanban.Item component.
 * @subcomponent MrbKanban.Column
 * @subcomponent MrbKanban.Item
 */

export type MrbKanbanChangeEvent = MrbDroppedEvent

interface Props extends PropsHTML {
  children: ReactNode
  onChange?: (props: MrbKanbanChangeEvent) => void
}

const { Wrapper, Board } = Styled

export const MrbKanban: MrbComponent<Props, typeof Styled> & {
  Column: typeof MrbKanbanColumn
  Item: typeof MrbKanbanItem
} = ({ children, title, onChange, ...props }) => {
  return (
    <>
      <Wrapper {...props}>
        <MrbDragAndDrop onDropped={onChange}>
          <Board>{children}</Board>
        </MrbDragAndDrop>
      </Wrapper>
    </>
  )
}

MrbKanban.Styled = Styled
MrbKanban.Column = MrbKanbanColumn
MrbKanban.Item = MrbKanbanItem
