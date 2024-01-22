'use client'

import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import { MrbComponent } from '../../../helpers/common'

interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div`
  cursor: pointer;
`

const Styled = {
  Wrapper,
}

/**
 * @component MrbDraggable
 * @description Make an element draggable
 * @prop {ReactNode} children - The content of the draggable component @required
 * @prop {string} id - the id of the element draggable @required
 * @prop {any} data - additional data
 */

interface Props extends PropsHTML {
  id: string
  children: ReactNode
  data?: any
}

export const MrbDraggable: MrbComponent<Props, typeof Styled> = ({
  children,
  id,
  data,
  ...props
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data,
  })

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <Wrapper
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      {...props}
    >
      {children}
    </Wrapper>
  )
}

MrbDraggable.Styled = Styled
