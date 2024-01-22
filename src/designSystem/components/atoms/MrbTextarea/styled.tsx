import { TextareaHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

export interface PropsHTML
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'onChange' | 'onBlur'
  > {}

const ThemeInput = Theme.components?.input

const Wrapper = styled.div`
  & textarea {
    padding: ${Theme.space_1} ${Theme.space_2} ${Theme.space_1} ${Theme.space_2};
    line-height: ${Theme.textSize_md};
    font-size: ${Theme.textSize_md};
    min-width: 14rem;
    border-radius: ${Theme.borderRadius};
    width: 100%;

    color: ${ThemeInput?.variantDefault?.color};
    background: ${ThemeInput?.variantDefault?.background};
    border: ${ThemeInput?.variantDefault?.border};

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
  }
`

export const Styled = { Wrapper }
