import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'
import { MrbListItem } from '../MrbListItem'

const ThemeList = Theme.components?.list

export type Size = 'small' | 'medium' | 'large'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

type PropsStyle = {
  $size: Size
  $divider: boolean
  $noPadding: boolean
}

const getSize = ({ $size }: PropsStyle): string => {
  switch ($size) {
    case 'large':
      return `
        & > ${MrbListItem.Styled.Wrapper} {
          padding: ${Theme.space_3};
        }
      `
    case 'small':
      return `
        & > ${MrbListItem.Styled.Wrapper} {
          padding: ${Theme.space_1};
        }
      `
    default:
      return `
        & > ${MrbListItem.Styled.Wrapper} {
          padding: ${Theme.space_2};
        }
      `
  }
}

const getDivider = ({ $divider }: PropsStyle): string => {
  if ($divider) {
    return `
    & > ${MrbListItem.Styled.Wrapper} {
      &:not(:nth-last-child(1)) {
        border-bottom: ${ThemeList?.divider?.border};
      }
    }
    `
  } else {
    return ``
  }
}

const getPadding = ({ $noPadding }: PropsStyle): string => {
  if ($noPadding) {
    return `
      & > ${MrbListItem.Styled.Wrapper} {
        padding: 0;
      }
    `
  }

  return ``
}

const Wrapper = styled.div<PropsStyle>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${getDivider}
  ${getSize}
  ${getPadding}
`

export const Styled = { Wrapper }
