import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeDropdown = Theme.components.dropdown

export interface PropsHTML
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {}

const Content = styled.div`
  position: absolute;
  display: flex;
  padding: ${Theme.space_1};
  gap: 0.5rem;
  min-width: 150px;
  flex-direction: column;
  z-index: 1001;
  align-items: start;
  top: 100%;
  margin-top: ${Theme.space_1};
  background: ${ThemeDropdown?.background};
  border-radius: ${Theme.borderRadius};
  border: ${ThemeDropdown?.border};
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Styled = { Wrapper, Content }
