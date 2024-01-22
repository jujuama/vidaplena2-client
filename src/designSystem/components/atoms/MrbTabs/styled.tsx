import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'
import { MrbTabsItem } from '../MrbTabsItem'

const ThemeTabs = Theme.components?.tabs

export type Size = 'small' | 'medium' | 'large'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

type PropsStyle = {
  $orientation: 'horizontal' | 'vertical'
}

const getOrientation = ({ $orientation }: PropsStyle): string => {
  if ($orientation === 'horizontal') {
    return `
    flex-direction: row;
    
    & > ${MrbTabsItem.Styled.Wrapper}, & > ${MrbTabsItem.Styled.WrapperLink} {
      border-bottom: ${ThemeTabs?.item?.border ?? 'none'};
    }
    & > ${MrbTabsItem.Styled.Wrapper}:hover, & > ${
      MrbTabsItem.Styled.WrapperLink
    }:hover {
      border-bottom: ${ThemeTabs?.item?.hover?.border ?? 'none'};
    }
    & > .tab-active {
      border-bottom: ${ThemeTabs?.item?.active?.border ?? 'none'};
    }
    `
  } else {
    return `
    flex-direction: column;
    & > ${MrbTabsItem.Styled.Wrapper}, & > ${MrbTabsItem.Styled.WrapperLink} {
      border-right: ${ThemeTabs?.item?.border ?? 'none'};
    }
    & > ${MrbTabsItem.Styled.Wrapper}:hover, & > ${
      MrbTabsItem.Styled.WrapperLink
    }:hover {
      border-right: ${ThemeTabs?.item?.hover?.border ?? 'none'};
    }
    & > .tab-active {
      border-right: ${ThemeTabs?.item?.active?.border ?? 'none'};
    }
    `
  }
}

const Wrapper = styled.div<PropsStyle>`
  display: flex;
  gap: ${Theme.space_1};
  ${getOrientation}
`

export const Styled = { Wrapper }
