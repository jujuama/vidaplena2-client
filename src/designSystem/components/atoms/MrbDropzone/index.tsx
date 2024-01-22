'use client'

import { MrbComponent } from '@/designSystem/helpers/common'
import { useDroppable } from '@dnd-kit/core'
import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Styled = { Wrapper }

/**
 * @component MrbDropzone
 * @description A dropzone component
 * @prop {ReactNode} children - The content of the dropzone @required
 * @prop {string} id - The id of the dropzone @required
 */

interface Props extends PropsHTML {
  id: string
  children: ReactNode
}

export const MrbDropzone: MrbComponent<Props, typeof Styled> = ({
  children,
  id,
}) => {
  const { setNodeRef } = useDroppable({
    id: id,
  })

  return <Wrapper ref={setNodeRef}>{children}</Wrapper>
}

MrbDropzone.Styled = Styled
