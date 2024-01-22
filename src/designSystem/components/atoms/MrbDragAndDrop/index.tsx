'use client'

import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'

/**
 * @component MrbDragAndDrop
 * @description The context for the drag and drop
 * @prop {ReactNode} children - The content of the DragAndDrop
 */

export type MrbDroppedEvent = {
  droppedZone: {
    id: string | number
    data: any
  }
  draggedItem: {
    id: string | number
    data: any
  }
}

interface Props {
  children: ReactNode
  onDropped?: (event: MrbDroppedEvent) => void
}

export const MrbDragAndDrop: MrbComponent<Props> = ({
  children,
  onDropped: onDragEnd,
}) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const draggedItem = event.active
    const droppedZone = event.over

    onDragEnd({ draggedItem, droppedZone })
  }

  return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>
}

MrbDragAndDrop.Styled = {}
