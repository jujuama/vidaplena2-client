import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

export interface PropsHTML
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {}

const ThemeRadio = Theme.components?.radio

const Wrapper = styled.div`
  display: flex;
`

const Label = styled.label<{ $disabled: boolean }>`
  font-size: ${Theme.textSize_md};
  line-height: ${Theme.textSize_md};
  cursor: pointer;
  user-select: none;

  ${({ $disabled }) => $disabled && `cursor: not-allowed;`}
`

const Input = styled.input<{ checked: boolean }>`
  appearance: none;
  margin: 0;
  margin-right: ${Theme.space_1};
  width: ${ThemeRadio.width};
  height: ${ThemeRadio.width};
  background: ${ThemeRadio.background};
  border: ${ThemeRadio.border};

  &:hover {
    border: ${ThemeRadio.hover.border};
  }

  &:checked {
    border: ${ThemeRadio.checked.border};
    background: ${ThemeRadio.checked.background};

    &:hover {
      border: ${ThemeRadio.checked.border};
    }
  }

  &:disabled {
    cursor: not-allowed;
    border: ${ThemeRadio.border};
  }

  border-radius: 50%;
  transform: translateY(-0.075em);
  cursor: pointer;

  display: grid;
  place-content: center;
  overflow: hidden;

  &::before {
    content: '\\2713'; /* Unicode character for checkmark */
    transform: scale(0);
    display: inline-block;
    font-size: ${ThemeRadio.width};
    padding: ${Theme.space_1};
  }

  &:checked::before {
    transform: scale(1);
    color: ${ThemeRadio.checked.color};
  }
`

export const Styled = {
  Wrapper,
  Label,
  Input,
}
