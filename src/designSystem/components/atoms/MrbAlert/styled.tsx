import styled from 'styled-components'
import { Theme } from '../../../theme'
import { MrbTypography } from '../MrbTypography'

export type Variant = 'default' | 'primary' | 'danger' | 'warning' | 'success'

const ThemeAlert = Theme.components.alert

type WrapperProps = {
  $variant: Variant
}

const getVariant = ({ $variant }: WrapperProps) => {
  const values = ThemeAlert[$variant] ?? ThemeAlert.default

  return `
    color: ${values?.color};
    background: ${values?.background};
    border: ${values?.border};
  `
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  border-radius: ${Theme.borderRadius};
  padding: ${Theme.space_2};
  gap: ${Theme.space_2};
  ${getVariant}

  & ${MrbTypography.Styled.WrapperPrimary} {
    color: inherit;
  }

  & ${MrbTypography.Styled.WrapperSecondary} {
    color: inherit;
  }

  & ${MrbTypography.Styled.WrapperCaption} {
    color: inherit;
  }

  & ${MrbTypography.Styled.WrapperH1} {
    color: inherit;
  }

  & ${MrbTypography.Styled.WrapperH2} {
    color: inherit;
  }

  & ${MrbTypography.Styled.WrapperH3} {
    color: inherit;
  }
`

export const Styled = {
  Wrapper,
}
