'use client'

import { ReactNode } from 'react'
import { MrbDraggable } from '../..'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbKanbanItem
 * @description The item element for a draggable kanban's item
 * @prop {any} data - Any additional free form data you want to get on the function onItemMoved is called
 * @prop {string} id - The id of the item @required
 */

interface Props extends PropsHTML {
  children: ReactNode
  id: string
  data?: any
}

const { Wrapper } = Styled

export const MrbKanbanItem: MrbComponent<Props, typeof Styled> = ({
  children,
  id,
  data,
  ...props
}) => {
  return (
    <MrbDraggable id={id} data={data}>
      <Wrapper {...props}>{children}</Wrapper>
    </MrbDraggable>
  )
}

MrbKanbanItem.Styled = Styled
