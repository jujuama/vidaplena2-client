import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

export type Placement = 'top' | 'bottom' | 'left' | 'right'

const ThemeTooltip = Theme.components.tooltip

interface PropsStyle {
  $placement: Placement
}

/* --------------------------------- WRAPPER -------------------------------- */

const getPositionStyles = ({ $placement }: PropsStyle) => {
  switch ($placement) {
    case 'bottom':
      return `
        top: 100%;
        margin-top: ${Theme.space_1};
      `
    case 'left':
      return `
        right: 100%;
        margin-right: ${Theme.space_1};
      `
    case 'right':
      return `
        left: 100%;
        margin-left: ${Theme.space_1};
      `
    default:
      return `
        bottom: 100%;
        margin-bottom: ${Theme.space_1};
      `
  }
}

const Content = styled.div<PropsStyle>`
  position: absolute;
  display: none;

  padding: ${Theme.space_1};
  border-radius: ${ThemeTooltip?.borderRadius};
  font-size: ${ThemeTooltip?.textSize};
  color: ${ThemeTooltip?.color};
  background: ${ThemeTooltip?.background};
  box-shadow: ${ThemeTooltip?.boxShadow};
  border: ${ThemeTooltip?.border};
  z-index: 100;

  ${getPositionStyles}
`

const Target = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${Content} {
    display: block;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`

export const Styled = {
  Wrapper,
  Target,
  Content,
}
