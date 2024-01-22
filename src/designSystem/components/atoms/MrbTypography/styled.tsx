import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Utility } from '../../../helpers/utility'
import { Theme } from '../../../theme'

const ThemeTypography = Theme.components.typography

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'primary'
  | 'secondary'
  | 'caption'
  | 'danger'

export type Horizontal = 'left' | 'center' | 'right'

interface PropsStyle {
  $horizontal: Horizontal
  $lines?: number
}

const getLines = ({ $lines }: PropsStyle) => {
  if (Utility.isDefined($lines)) {
    return `
      display: -webkit-box;
      -webkit-line-clamp: ${$lines};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `
  }
}

const getCommonStyle = ({ $horizontal }: PropsStyle) => {
  let horizontal: string = ''

  switch ($horizontal) {
    case 'center':
      horizontal = `text-align: center;`
      break
    case 'right':
      horizontal = `text-align: end;`
      break
    default:
      horizontal = `text-align: start;`
  }

  return `
    ${horizontal}
  `
}

const WrapperH1 = styled.h1<PropsStyle>`
  ${getCommonStyle}
  ${props => getLines(props)}
  font-weight: 400;
  margin-top: ${Theme.space_1};
  margin-bottom: ${Theme.space_1};
  font-size: ${Theme.textSize_xxl};
  color: ${ThemeTypography?.h1?.color || Theme.textPrimary};
`

const WrapperH2 = styled.h2<PropsStyle>`
  ${getCommonStyle}
  ${props => getLines(props)}
  font-weight: 400;
  margin-top: ${Theme.space_1};
  margin-bottom: ${Theme.space_1};
  font-size: ${Theme.textSize_xl};
  color: ${ThemeTypography?.h2?.color || Theme.textPrimary};
`

const WrapperH3 = styled.h3<PropsStyle>`
  ${getCommonStyle}
  ${props => getLines(props)}
  font-weight: 400;
  margin-top: ${Theme.space_1};
  margin-bottom: ${Theme.space_1};
  font-size: ${Theme.textSize_lg};
  color: ${ThemeTypography?.h3?.color || Theme.textPrimary};
`

const WrapperPrimary = styled.div<PropsStyle>`
  ${getCommonStyle}
  ${props => getLines(props)}
  font-size: ${Theme.textSize_md};
  color: ${ThemeTypography?.primary?.color || Theme.textPrimary};
`

const WrapperSecondary = styled.div<PropsStyle>`
  ${getCommonStyle}
  ${props => getLines(props)}
  font-size: ${Theme.textSize_sm};
  color: ${ThemeTypography?.secondary?.color || Theme.textSecondary};
`

const WrapperCaption = styled.div<PropsStyle>`
  ${getCommonStyle}
  ${props => getLines(props)}
  font-size: ${Theme.textSize_xs};
  color: ${ThemeTypography?.caption?.color || Theme.textSecondary};
`

const WrapperDanger = styled.div<PropsStyle>`
  ${getCommonStyle}
  ${props => getLines(props)}
  font-size: ${Theme.textSize_md};
  color: ${Theme.colorDanger};
`

export const Styled = {
  WrapperH1,
  WrapperH2,
  WrapperH3,
  WrapperPrimary,
  WrapperSecondary,
  WrapperCaption,
  WrapperDanger,
}
