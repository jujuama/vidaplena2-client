import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeFormLabel = Theme.components.formLabel

type PropsStyle = {
  $hasError: boolean
}

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const getLabelError = ({ $hasError }: PropsStyle): string => {
  if ($hasError) {
    return `
      color: ${ThemeFormLabel?.variantDanger.color};
    `
  }

  return ``
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Theme.space_1};
`

const Content = styled.div``

const LabelContent = styled.span<PropsStyle>`
  font-size: ${ThemeFormLabel?.textSize};
  color: ${ThemeFormLabel?.color};
  font-weight: 500;

  ${getLabelError}
`

const LabelOptional = styled.span`
  font-size: ${ThemeFormLabel?.optional?.textSize};
  color: ${ThemeFormLabel?.optional.color};
  padding-left: ${Theme.space_1};
`

const LabelIndication = styled.span`
  font-size: ${ThemeFormLabel?.indication?.textSize};
  color: ${ThemeFormLabel?.indication?.color};
  width: 100%;
  display: block;
`

const Label = styled.p`
  margin-top: ${Theme.space_0};
  margin-bottom: ${Theme.space_0};
`

export const Styled = {
  Wrapper,
  Content,
  LabelContent,
  Label,
  LabelOptional,
  LabelIndication,
}
