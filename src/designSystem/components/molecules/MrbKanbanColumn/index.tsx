'use client'

import { ReactNode } from 'react'
import { MrbDropzone } from '../..'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbKanbanColumn
 * @description A column for the kanban
 * @prop {ReactNode} children - Put the different MrbKanban.Item in this lane @required
 * @prop {string} title - The title of the column @required
 * @prop {string} id - The id of the column @required
 */

interface Props extends PropsHTML {
  children: ReactNode
  title: string
  id: string
}

const { Wrapper, Title, Content } = Styled

export const MrbKanbanColumn: MrbComponent<Props, typeof Styled> = ({
  children,
  title,
  id,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Title>{title}</Title>
      <MrbDropzone id={id}>
        <Content>{children}</Content>
      </MrbDropzone>
    </Wrapper>
  )
}

MrbKanbanColumn.Styled = Styled
