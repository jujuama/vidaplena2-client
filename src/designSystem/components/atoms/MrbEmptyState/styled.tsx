import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeEmptyState = Theme.components.emptyState

type WrapperProps = {}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100%;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: ${Theme.borderRadius};
  padding: ${Theme.space_2};
  gap: ${Theme.space_1};
  color: ${ThemeEmptyState?.color};
  background: ${ThemeEmptyState?.background};
  box-shadow: ${ThemeEmptyState?.boxShadow ?? 'none'};
  border: ${ThemeEmptyState?.border};
  margin: ${Theme.space_1};
`

export const Styled = {
  Wrapper,
}
