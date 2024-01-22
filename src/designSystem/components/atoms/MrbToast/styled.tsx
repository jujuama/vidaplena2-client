import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeToast = Theme.components.toast

export type Type = 'success' | 'error' | 'warning' | 'info' | 'plain'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const BaseCSS = `
  bowShadow: ${Theme.components?.toast?.boxShadow};
  border-radius: ${Theme.borderRadius};
  padding: 16px;
`

const WrapperSuccess = styled.div`
  ${BaseCSS}
  color: ${ThemeToast.variantSuccess?.color};
  background: ${ThemeToast.variantSuccess?.background};
  border: ${ThemeToast.variantSuccess?.border};
`

const WrapperWarning = styled.div`
  ${BaseCSS}
  color: ${ThemeToast.variantWarning?.color};
  background: ${ThemeToast.variantWarning?.background};
  border: ${ThemeToast.variantWarning?.border};
`

const WrapperInfo = styled.div`
  ${BaseCSS}
  color: ${ThemeToast.variantInfo?.color};
  background: ${ThemeToast.variantInfo?.background};
  border: ${ThemeToast.variantInfo?.border};
`

const WrapperError = styled.div`
  ${BaseCSS}
  color: ${ThemeToast.variantDanger?.color};
  background: ${ThemeToast.variantDanger?.background};
  border: ${ThemeToast.variantDanger?.border};
`

export const Styled = {
  WrapperSuccess,
  WrapperInfo,
  WrapperError,
  WrapperWarning,
}
