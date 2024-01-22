import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeStepper = Theme.components.stepper

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

export type Status = 'done' | 'pending' | 'active'

export type StatusDivider = 'hidden' | 'pending' | 'active'

type PropsStyle = {
  $status: Status
  $isClickable: boolean
}

type PropsStyleDivider = {
  $status: StatusDivider
}

/* ------------------------------ STYLE HELPERS ----------------------------- */

const getLabelTheme = ({ $status }: PropsStyle) => {
  switch ($status) {
    case 'done':
      return `
        color: ${ThemeStepper?.active?.color};
      `
    case 'active':
      return `
        color: ${ThemeStepper?.active?.color};
      `
    default:
      return `
        color: ${ThemeStepper?.disabled?.color};
      `
  }
}

const getCircleTheme = ({ $status }: PropsStyle) => {
  switch ($status) {
    case 'done':
      return `
        background: ${ThemeStepper?.active?.color};
        border: 2px solid ${ThemeStepper?.active?.borderColor};
      `
    case 'active':
      return `
        background: ${Theme.ui_3};
        border: 2px solid ${ThemeStepper?.active?.borderColor};
      `
    default:
      return `
        background: ${Theme.ui_3};
        border: 2px solid ${ThemeStepper?.disabled?.borderColor};
      `
  }
}

const getDividerTheme = ({ $status }: PropsStyleDivider) => {
  switch ($status) {
    case 'hidden':
      return `
        opacity: 0;
      `
    case 'active':
      return `
        background: ${ThemeStepper?.active?.borderColor};
      `
    default:
      return `
        background: ${ThemeStepper?.disabled?.borderColor};
      `
  }
}

const getClickable = ({ $isClickable }: PropsStyle) => {
  if ($isClickable) {
    return `
      cursor: pointer;
    `
  }

  return ``
}

/* ------------------------------- COMPONENTS ------------------------------- */

const Circle = styled.div`
  border-radius: 50%;
  width: ${Theme.space_2};
  height: ${Theme.space_2};
`

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Divider = styled.div<PropsStyleDivider>`
  height: 2px;
  flex: 1;
  ${getDividerTheme}
`

const Label = styled.div``

const Step = styled.div<PropsStyle>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${Theme.space_2};

  ${getClickable}

  & ${Label} {
    ${getLabelTheme}
  }

  & ${Circle} {
    ${getCircleTheme}
  }
`

const Wrapper = styled.div<{}>`
  width: 100%;
  display: flex;
`

export const Styled = {
  Wrapper,
  Step,
  Divider,
  Label,
  Circle,
  CircleContainer,
}
