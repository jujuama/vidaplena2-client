import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeKanban = Theme.components?.kanban

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

interface PropsStyle {}

const Wrapper = styled.div`
  height: 100%;
  width: 275px;
`

const Title = styled.div`
  font-weight: 500;
  padding-bottom: ${Theme.space_1};
`

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${Theme.space_1};
  background: ${ThemeKanban.column?.background ?? 'transparent'};
  border: ${ThemeKanban.column?.border ?? 'none'};
  border-radius: ${Theme.borderRadius};
  gap: ${Theme.space_1};
`

export const Styled = {
  Wrapper,
  Title,
  Content,
}
