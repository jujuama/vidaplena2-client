import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeKanban = Theme.components.kanban

export interface PropsHTML
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {}

interface PropsStyle {}

const Wrapper = styled.div`
  height: 100%;
`

const Board = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: ${Theme.space_1};
  border-radius: ${Theme.borderRadius};
  background: ${ThemeKanban.background ?? 'transparent'};
`

export const Styled = {
  Wrapper,
  Board,
}
