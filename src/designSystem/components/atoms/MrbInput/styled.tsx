import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeInput = Theme.components.input

export interface PropsHTML
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur'> {}

const Wrapper = styled.input`
  padding: ${ThemeInput.padding};
  line-height: ${ThemeInput.lineHeight};
  font-size: ${ThemeInput.fontSize};
  margin: 0;
  min-width: 14rem;
  width: 100%;
  border-radius: ${Theme.borderRadius};

  color: ${ThemeInput?.variantDefault?.color};
  background: ${ThemeInput?.variantDefault?.background};
  border: ${ThemeInput?.variantDefault?.border};

  &[type='date']::-webkit-datetime-edit-text,
  &[type='date']::-webkit-datetime-edit-month-field,
  &[type='date']::-webkit-datetime-edit-day-field,
  &[type='date']::-webkit-datetime-edit-year-field,
  &[type='date'].date-input--has-value::-webkit-datetime-edit-text,
  &[type='date'].date-input--has-value::-webkit-datetime-edit-month-field,
  &[type='date'].date-input--has-value::-webkit-datetime-edit-day-field,
  &[type='date'].date-input--has-value::-webkit-datetime-edit-year-field,
  &::placeholder {
    color: ${ThemeInput?.variantDefault?.placeholder?.color};
  }

  &:hover {
    color: ${ThemeInput?.variantDefault?.hover?.color};
    background: ${ThemeInput?.variantDefault?.hover?.background};
    border: ${ThemeInput?.variantDefault?.hover?.border};
  }

  &:focus-visible {
    outline: ${ThemeInput?.variantDefault?.focus?.outline};
    border: ${ThemeInput?.variantDefault?.focus?.border};
  }
`

export const Styled = {
  Wrapper,
}
