import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeCheckbox = Theme.components?.checkbox

export interface PropsHTML
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {}

const Input = styled.input<{ checked: boolean }>`
  appearance: none;
  margin: 0;
  margin-right: ${Theme.space_1};
  width: ${ThemeCheckbox.width};
  height: ${ThemeCheckbox.width};
  background: ${ThemeCheckbox.background};
  border: ${ThemeCheckbox.border};
  box-shadow: ${Theme.boxShadow};

  &:hover {
    border: ${ThemeCheckbox.hover.border};
  }

  &:checked {
    border: ${ThemeCheckbox.checked.border};
    background: ${ThemeCheckbox.checked.background};

    &:hover {
      border: ${ThemeCheckbox.checked.border};
    }
  }

  &:disabled {
    cursor: not-allowed;
    border: ${ThemeCheckbox.border};
  }

  border-radius: 4px;
  transform: translateY(-0.075em);
  cursor: pointer;

  display: grid;
  place-content: center;
  overflow: hidden;

  &::before {
    content: '\\2713'; /* Unicode character for checkmark */
    transform: scale(0);
    display: inline-block;
    font-size: ${ThemeCheckbox.width};
    padding: ${Theme.space_1};
  }

  &:checked::before {
    transform: scale(1);
    color: ${ThemeCheckbox.checked.color};
  }
`

const Label = styled.label<{ $disabled: boolean }>`
  font-size: ${Theme.textSize_md};
  line-height: ${Theme.textSize_md};
  cursor: pointer;
  user-select: none;

  ${({ $disabled }) => $disabled && `cursor: not-allowed;`}
`

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`

export const Styled = {
  Wrapper,
  Input,
  Label,
}
