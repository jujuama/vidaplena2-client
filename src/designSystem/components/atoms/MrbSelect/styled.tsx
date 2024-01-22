import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeInput = Theme.components?.input

export interface PropsHTML
  extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'> {}

type PropsStyle = {
  $isEmpty: boolean
}
const getStyleEmpty = ({ $isEmpty }: PropsStyle): string => {
  if ($isEmpty) {
    return `
      color: ${
        ThemeInput.variantDefault.placeholder?.color ?? Theme.textSecondary
      };
    `
  }

  return ``
}

const Option = styled.option``

const Select = styled.select``

const Wrapper = styled.div<PropsStyle>`
  cursor: pointer;

  & select {
    padding: ${Theme.space_1} ${Theme.space_2} ${Theme.space_1} ${Theme.space_2};
    min-width: 14rem;
    width: 100%;
    border-radius: ${Theme.borderRadius};

    cursor: pointer;

    color: ${ThemeInput?.variantDefault?.color};
    background: ${ThemeInput?.variantDefault?.background};
    border: ${ThemeInput?.variantDefault?.border};

    &:hover {
      color: ${ThemeInput?.variantDefault?.hover?.color};
      background: ${ThemeInput?.variantDefault?.hover?.background};
      border: ${ThemeInput?.variantDefault?.hover?.border};
    }

    &:focus-visible {
      outline: ${ThemeInput?.variantDefault?.focus?.outline};
      border: ${ThemeInput?.variantDefault?.focus?.border};
    }

    ${getStyleEmpty}
  }
`

export const Styled = {
  Wrapper,
  Option,
  Select,
}
