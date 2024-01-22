import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'
import { MrbImage } from '../MrbImage'

const ThemeNavbar = Theme.components?.navbar
const ThemeLeftbar = Theme.components?.leftNavbar

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

export type Direction = 'horizontal' | 'vertical'

interface PropsStyle {
  $direction: Direction
}

const Content = styled.div`
  display: flex;

  & ${MrbImage.Styled.Wrapper} {
    height: 50px;
    width: auto;
  }
`

const Wrapper = styled.nav<PropsStyle>`
  ${({ $direction }) => {
    if ($direction === 'horizontal')
      return ` 
        padding: ${Theme.space_1} ${Theme.space_1} ${Theme.space_1} ${Theme.space_1};
        background: ${ThemeNavbar?.background};
        border-bottom: ${ThemeNavbar?.borderBottom};

        & ${Content} {
          flex-direction: row;
          gap: ${Theme.space_1};
          align-items: center;
        }
      `
    else
      return ` 
        background: ${ThemeLeftbar?.background};
        padding-right: ${Theme.space_1};
        padding-left: ${Theme.space_1};
        border-right: ${ThemeLeftbar?.borderRight};
        width: ${ThemeLeftbar?.width};
        height: 100%;
        overflow-y: auto;

        & ${Content} {        
          gap: ${Theme.space_1};
          width: 100%;
          flex-direction: column;
          overflow-y: auto;
        }
      `
  }}
`

export const Styled = {
  Wrapper,
  Content,
}
